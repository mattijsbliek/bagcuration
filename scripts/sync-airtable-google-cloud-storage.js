const got = require('got');
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

const delay = duration =>
  new Promise(resolve => {
    setTimeout(() => resolve(), duration);
  });

const resizeImages = async images => {
  for (let image of images) {
    await fs.ensureDir(`${TEMP_DIR}/${image.slug}`);

    const filename = `${image.slug}/${image.filename}`;

    const fileExists = await fs.exists(
      `${TEMP_DIR}/${image.slug}/${image.filename}`
    );

    if (fileExists) {
      console.log(`✅ ${image.filename} already exists, skipping.`);
    }

    const file = `${TEMP_DIR}/${filename}`;

    try {
      const response = await got(image.url, {
        encoding: null,
      });

      await fs.outputFile(file, Buffer.from(response.body, 'utf8'));
    } catch (err) {
      console.error('❌ Something went wrong: ', err);
    }

    console.log(`✅ Resized ${filename}`);
  }
};

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

  const images = await airtable.getImages({ limit: 100 });

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
