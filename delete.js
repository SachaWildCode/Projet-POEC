const fs = require('fs');
const path = require('path');

function deleteSpecFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      handleFile(filePath, file);
    });
  });
}

function handleFile(filePath, file) {
  fs.stat(filePath, (err, stat) => {
    if (err) {
      console.error(`Error stating file ${filePath}:`, err);
      return;
    }

    if (stat.isDirectory()) {
      deleteSpecFiles(filePath);
    } else if (file.endsWith('.spec.ts')) {
      deleteFile(filePath);
    }
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, err => {
    if (err) {
      console.error(`Error deleting file ${filePath}:`, err);
    } else {
      console.log(`Deleted file: ${filePath}`);
    }
  });
}

// Start deleting from the current directory
deleteSpecFiles(__dirname);
