const multer = require('multer');

// Set up the storage options for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Set the upload destination
  },
  filename: (req, file, cb) => {
    const fileExtension = file.mimetype.split('/')[1];
    cb(null, Date.now() + '.' + fileExtension);  // Set the filename as the current timestamp with extension
  }
});

// File filter to accept only image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only images are allowed'), false);
  }
  cb(null, true);
};

// Set up multer upload middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
