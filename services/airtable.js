require('dotenv').config();

const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE);

exports.getImages = (options = {}) => {
  return new Promise((resolve, reject) => {
    const images = [];

    const selectOptions = {
      maxRecords: options.limit || 100,
      view: 'Grid view',
    };

    if (options.filterByFormula) {
      selectOptions.filterByFormula = options.filterByFormula;
    }

    base('Backpacks')
      .select(selectOptions)
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function(record) {
            const recordImages = record.get('images');

            if (options.mainImageOnly) {
              const mainImage = recordImages.find(x =>
                x.filename.startsWith('01')
              );

              if (!mainImage) {
                return;
              }

              images.push({
                slug: record.get('slug'),
                ...mainImage,
              });
            }

            recordImages.forEach(image => {
              images.push({
                slug: record.get('slug'),
                ...image,
              });
            });
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          }

          resolve(images);
        }
      );
  });
};
