const got = require('got');
const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const airtable = require('../services/airtable');

/*
 * 1. Grab image URLs from Airtable
 * 2. Resize images
 * 3. Upload to Google Cloud Storage
 */
const DIR = `${__dirname}/../static/images/bags`;

const downloadToDisk = async images => {
  // Create temporary directory if needed
  fs.ensureDirSync(DIR);

  for (let image of images) {
    await fs.ensureDir(`${DIR}/${image.slug}`);

    const filename = `${image.slug}/${image.filename}`;

    const fileExists = await fs.exists(
      `${DIR}/${image.slug}/${image.filename}`
    );

    if (fileExists) {
      console.log(`✅ ${image.filename} already exists, skipping.`);
    }

    const file = `${DIR}/${filename}`;

    try {
      const response = await got(image.url, {
        encoding: null,
      });

      await fs.outputFile(file, Buffer.from(response.body, 'utf8'));
    } catch (err) {
      console.error('❌ Something went wrong: ', err);
    }

    console.log(`✅ Downloaded ${filename}`);
  }
};

const run = async () => {
  console.log('Starting script...');

  const images = await airtable.getImages({ limit: 100 });

  console.log(`✅ Fetched ${images.length} images`);

  // Resize images and write them to disk
  const files = await downloadToDisk(images);

  console.log('All done!');
};

run();
