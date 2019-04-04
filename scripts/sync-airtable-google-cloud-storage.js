const https = require('https');
const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const airtable = require('../services/airtable');
const storage = require('../services/cloud-storage');

/*
 * 1. Grab image URLs from Airtable
 * 2. Resize images
 * 3. Upload to Google Cloud Storage
 */
const TEMP_DIR = `${__dirname}/../.tmp`;

const resizeImages = images =>
  Promise.all(
    images.flatMap((image, index) => {
      fs.ensureDirSync(`${TEMP_DIR}/${image.slug}`);

      const filename = `${image.slug}/0${index + 1}`;

      return new Promise((resolve, reject) => {
        const file = `${TEMP_DIR}/${filename}.jpg`;
        const writeableStream = fs.createWriteStream(file);

        // Fetch image from Airtable
        const response = https.get(image.url, res => {
          const transformer = sharp()
            .resize(100, 100)
            .jpeg();

          // Apply image transforms and write to file system
          const stream = res.pipe(transformer).pipe(writeableStream);

          stream.on('finish', () => {
            console.log(`✅ Resized ${filename}.jpg`);

            // Return file path
            resolve(file);
          });
        });
      });
    })
  );

const uploadToCloud = files => {
  return Promise.all(
    files.map(async file => {
      const filePath = `images/${path.relative(TEMP_DIR, file)}`;
      const exists = await storage.exists(filePath);

      if (exists) {
        console.log(
          `✅ Skipped uploading of ${path.basename(file)}, already exists`
        );
        return;
      }

      return storage
        .upload(file, {
          destination: filePath,
        })
        .then(() =>
          console.log(
            `✅ Uploaded ${path.basename(file)} to Google Cloud Storage`
          )
        );
    })
  );
};

const run = async () => {
  console.log('Starting script...');

  const images = await airtable.getImages({ limit: 1 });

  console.log(`✅ Fetched ${images.length} images`);

  // Create temporary directory if needed
  fs.ensureDirSync(TEMP_DIR);

  // Resize images and write them to disk
  const files = await resizeImages(images);

  // Upload images to Google Cloud Storage
  await uploadToCloud(files);

  // Remove temporary directory
  fs.removeSync(TEMP_DIR);

  console.log('All done!');
};

run();
