import {Request, Response} from "express"
import dotenv from "dotenv";
import BookModel, {Book} from "../models/BookModel";


const limit = 10
dotenv.config()
export default class AdminController {

    static async homePage(req: Request, res: Response): Promise<void> {
        res.render("admin-pages/home-page.ejs")
    }

    static async softDeletionTrigger(req: Request, res: Response) {
        try {
            const {bookId, page} = req.query

            if (bookId) {
                await BookModel.softDeletionTrigger(bookId as string)
                res.redirect(`/admin-panel/products?page=${page}`)
            }

        } catch (err) {
            return res.status(500).json({error: `Server Error`});
        }


    }

    static async productsPage(req: Request, res: Response) {
        try {
            const allBooks: Book[] | undefined = await BookModel.getAllBooks()

            if (!allBooks) {
                return res.status(500).json({error: `No books in database`});
            }

            const page = +(req.query.page as string)

            const startIndex = (page - 1) * limit
            const endIndex = page * limit
            const booksCount = Math.ceil(allBooks.length / limit)


            const books: Book[] = allBooks.slice(startIndex, endIndex)
            res.render("admin-pages/products.ejs", {books, page, booksCount})
        } catch (err) {
            return res.status(500).json({error: `Server Error`});
        }
    }

    static async addBookPage(req: Request, res: Response) {

        try {
            res.render("admin-pages/add-products.ejs")
        } catch (err) {
            res.status(500).json({error: `Can't find book`});
        }
    }

    static async addBook(req: Request, res: Response) {

        try {
            await BookModel.addBook(req.body, req.file?.filename)
            res.render("admin-pages/add-products.ejs")
        } catch (err) {
            res.status(500).json({error: `Can't find book`});
        }
    }

    static async getSearchingBook(req: Request, res: Response) {
        try {
            const searchingQuery: string = req.query.search as string
            const books: Book[] = await BookModel.searchBookByQuery(searchingQuery)
            res.render("admin-pages/products.ejs", {books, page: 1, booksCount: books.length})
        } catch (err) {
            return res.status(500).json({error: `Can't find book`});
        }
    }

    static logout(req: Request, res: Response) {
        res.sendStatus(401)
    }
}

