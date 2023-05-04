import {Request, Response} from "express"
import BookModel, {Book} from "../models/BookModel"

const defaultOffset = 10
const limit = 20


export default class BooksController {

    static async getAllBooks(req: Request, res: Response) {
        try {
            const allBooks: Book[] =  await BookModel.getAllBooks()
            if (!allBooks) {
                return res.status(404).json({error: `No books in database`});
            }
            const offset: number = +(req.query.offset || defaultOffset)

            res.render("books", paginationResult(allBooks, offset))
        } catch (err) {
            console.log(err)
            res.status(500).json({error: `Server Error `})
        }
    }


    static async getBook(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const book: Book | undefined = await BookModel.getBook(id)

            if (!book) {
                return res.status(404).json({error: `Can't find book id=${id}`});
            }

            res.render("book", {book})
        } catch (err) {
            res.status(500).json({error: "Server Error"})
        }
    }

    static async increaseWantedBook(req: Request, res: Response) {
        try {
            await BookModel.increaseWanted(req.body.bookID)
        } catch (err) {
            res.status(500).json({error: "Server Error"})
        }
    }

    static async getSearchingBook(req: Request, res: Response) {
        try {
            const searchingQuery = req.query.search as string
            const allBooks: Book[] = await BookModel.searchBookByQuery(searchingQuery)
            const offset: number = +(req.query.offset || defaultOffset)

            res.render("books", paginationResult(allBooks, offset))

        } catch (err) {
            res.status(500).json({error: "Server Error"})
        }
    }

}

function paginationResult<T>(allBooks: T[], offset: number) {

    const books: T[] = allBooks.slice(offset - limit, offset)
    const canBack = limit - offset < 0
    const canForward = allBooks.length > offset
    return {canBack, canForward, books, offset}
}

