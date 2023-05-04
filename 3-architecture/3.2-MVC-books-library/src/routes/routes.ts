import express, {Router} from "express"
import BooksController from "../controllers/BooksController.js";

import AdminController from "../controllers/AdminController";
import mwAuthRequired from "../middlewares/basicAuth";
import {upload} from "../models/utils/multer";

const routes: Router = express.Router()


routes.get("/", BooksController.getAllBooks)
routes.get("/book/:id", BooksController.getBook)
routes.post("/increase-wanted-book", BooksController.increaseWantedBook)
routes.get("/search", BooksController.getSearchingBook)

//admin-panel
routes.get("/admin-panel", mwAuthRequired, AdminController.homePage)
routes.get("/admin-panel/products", mwAuthRequired, AdminController.productsPage)
routes.get("/admin-panel/add-product", mwAuthRequired, AdminController.addBookPage)
routes.post("/admin-panel/add-product", mwAuthRequired,upload.single('image'),  AdminController.addBook)
routes.get("/admin-panel/search", mwAuthRequired, AdminController.getSearchingBook)
routes.get("/admin-panel/soft_deletion", mwAuthRequired, AdminController.softDeletionTrigger)
routes.get("/admin-panel/logout", AdminController.logout)

export default routes
