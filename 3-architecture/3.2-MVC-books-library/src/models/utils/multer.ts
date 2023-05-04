import multer from 'multer'
import path from "path";

const pathToImagesFolder = path.join(__dirname, `../../../views/books-page_files/`)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathToImagesFolder);
    },
    filename: function (req, file, cb) {

        const newFilename = file.originalname;
        cb(null, newFilename);
    },
});
export const upload = multer({storage})