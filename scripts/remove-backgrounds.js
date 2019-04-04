require('dotenv').config();

const fs = require('fs-extra');
const {
  RemoveBgResult,
  RemoveBgError,
  removeBackgroundFromImageUrl,
} = require('remove.bg');
const airtable = require('../services/airtable');
const storage = require('../services/storage');

const TEMP_DIR = `${__dirname}/../.tmp`;

/*
 * 1. Get all records that don’t have cleaned image from Airtable
 * 2. Send images that start with 01 and 02 to remove.bg
 * 3. Upload retrieved images to Airtable
 */
const removeBackgrounds = images => {
  return Promise.all(
    images.map(async image => {
      const outputFile = `${TEMP_DIR}/${image.slug}/cover.png`;
      const exists = await storage.exists(`images/${image.slug}/cover.png`)

      if (exists) {
        console.log(`✅ Skipped ${image.slug}, already exists`);
        return;
      }

      console.log(`✅ Removing background from image url '${image.url}'.`);

      return removeBackgroundFromImageUrl({
        url: image.url,
        apiKey: process.env.REMOVE_BG_API_KEY,
        size: 'regular',
        type: 'product',
      })
        .then(result => {
          fs.ensureDirSync(TEMP_DIR):

          console.log(`✅ Writing ${image.slug} to disk`);

          fs.writeFileSync(outputFile, result.base64img, 'base64');

          return outputFile;

          console.log(`✅ File saved to ${outputFile}`);
        })
        .catch(errors => {
          console.error(
            `❌ Could not remove background for ${image.slug}, errors:`
          );
          console.error(JSON.stringify(errors));
        });
    })
  );
};

const run = async () => {
  console.log('✅ Start processing images...');

  const images = await airtable.getImages({
    // Only select records without cleaned images
    filterByFormula: '{cleanImages} = ""',
    // Only get the main image of each record
    mainImageOnly: true,
  });

  console.log(`✅ Fetched ${images.length} records`);

  await removeBackgrounds(images);

  console.log('✅ All done');
};

run();
