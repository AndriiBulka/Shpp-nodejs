import {pool} from "./MySqlConnection.js";


export interface Book {
    id: number
    name: string,
    authors: string,
    release_year: string,
    pages: string,
    description: string,
    image: string,
    visits: number,
    wanted: number,
    deletion: number
}

type BookID = Pick<Book, 'id'>


export default class BookModel {

    static async getAllBooks(): Promise<Book[]> {
        try {
            const books = await (await pool.query(`
                SELECT books.*,
                       GROUP_CONCAT(authors.name SEPARATOR ', ') as author
                FROM books
                         JOIN books_authors ON books.id = books_authors.book_ID
                         JOIN authors ON authors.id = books_authors.author_ID
                GROUP BY book_id;`))[0];

            return books as Book[]
        } catch (err) {
            console.error('Error while getting books from database', err);
            throw new Error('Failed to get books from database');
        }

    }

    static async getBook(id: string): Promise<Book | undefined> {
        try {
            const book: Book = await (await pool.query(`SELECT books.*, GROUP_CONCAT(authors.name SEPARATOR ', ') as author
                                                        FROM books
                                                                 JOIN books_authors ON books.id = books_authors.book_ID
                                                                 JOIN authors ON authors.id = books_authors.author_ID
                                                        WHERE books.id = ?;`, [id]))[0][0]
            if (!book) return
            await pool.query("UPDATE books_library.books SET visits = visits+1 WHERE id=?", [id])
            return book as Book
        } catch (err) {
            console.error('Error while getting book from database', err);
        }
    }

    static async searchBookByQuery(query: string): Promise<Book[]> {
        try {
            // const books = await pool.query("SELECT * FROM books_library.books WHERE name LIKE CONCAT('%', ?, '%') OR description LIKE CONCAT('%', ?, '%')", [query, query]);
            const books = await (await pool.query(`
                SELECT books.*,
                       GROUP_CONCAT(authors.name
                                    SEPARATOR ', ') as author
                FROM books
                         JOIN
                     books_authors
                     ON
                         books.id = books_authors.book_ID
                         JOIN
                     authors
                     ON
                         authors.id = books_authors.author_ID

                WHERE authors.name
                    LIKE
                      CONCAT('%', ?, '%')
                   OR books.description
                    LIKE
                      CONCAT('%', ?, '%')
                GROUP BY book_id`, [query, query]))[0];
            return books as Book[]

        } catch (err) {
            console.error('Error while searching book in database', err);
            throw new Error('Failed to get books from database');
        }
    }

    static async increaseWanted(id: string): Promise<void> {
        try {
            await pool.query("UPDATE books_library.books SET wanted = books.wanted+1 WHERE id=?", [id])
        } catch (err) {
            console.error('Error while increasing wanted count of book in database', err);

        }
    }


    static async addBook(book: Book, filename: string | undefined): Promise<void> {
        try {
            const {name, authors, description, release_year, pages} = book;

            const bookId = (await pool.query(`INSERT INTO books_library.books(name, description, release_year, pages, image)
                                              VALUES (?, ?, ?, ?,
                                                      ?)`, [name, description, release_year, pages, filename]))[0].insertId


            authors
                .split(',')
                .map((author: string) => author.trim())
                .map(async (author: string): Promise<void> => {

                    let authorId = (await pool.query("SELECT id FROM authors where authors.name = ?", [author]))[0][0]
                    if (!authorId) {
                        authorId = (await pool.query(`INSERT INTO books_library.authors(name)
                                                      VALUES (?)`, [author]))[0].insertId
                    } else {
                        authorId = authorId.id
                    }
                    await pool.query(`INSERT INTO books_library.books_authors(book_id, author_id)
                                      VALUES (?, ?)`, [bookId, authorId])
                })

        } catch (err) {
            console.error('Error while adding book into database', err);

        }
    }

    static async softDeletionTrigger(id: string): Promise<void> {
        try {
            await pool.query("UPDATE books_library.books SET deletion = !deletion WHERE id=?", [id])
            //when use on delete event
            // await pool.query("DELETE FROM books_library.books WHERE id = ?;", [id]).then(()=> console.log("done"))
        } catch (err) {
            console.error('Error while mark to delete book', err);

        }
    }

    static async cronBookRemoving(): Promise<void> {
        try {

            const booksToDelete: BookID[] = (await pool.query("SELECT id FROM books WHERE  deletion = true"))[0]
            if (!booksToDelete[0]) return
            booksToDelete.map(async (book: BookID) => {
                await pool.query("DELETE FROM books_library.books_authors WHERE book_id = ?;", [book.id])
            })
            await pool.query("DELETE  FROM books_library.books WHERE deletion = true; ")

        } catch (err) {
            console.error('Error while mark to delete book', err);

        }
    }
}




