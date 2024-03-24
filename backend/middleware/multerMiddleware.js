const multer = require("multer");
// The `path` module is no longer needed since we're not saving files to disk.

// Configure multer to use memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
