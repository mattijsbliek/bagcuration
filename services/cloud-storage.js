require('dotenv').config();

const { Storage } = require('@google-cloud/storage');

const {
  GOOGLE_CLOUD_PROJECT_ID,
  GOOGLE_CLOUD_KEYFILE,
  GOOGLE_CLOUD_BUCKET_NAME,
} = process.env;

class CloudStorage {
  constructor() {
    this.storage = new Storage({
      projectId: GOOGLE_CLOUD_PROJECT_ID,
      keyFilename: GOOGLE_CLOUD_KEYFILE,
    }).bucket(GOOGLE_CLOUD_BUCKET_NAME);
  }

  exists(path) {
    return this.storage
      .file(path)
      .exists()
      .then(data => data[0]);
  }

  upload(file, options = {}) {
    return this.storage.upload(file, {
      gzip: true,
      ...options,
    });
  }
}

module.exports = new CloudStorage();
