import fs from "fs"
import path from "path"
import {pool} from "../MySqlConnection";
import mysqldump from 'mysqldump';
import dotenv from "dotenv"
import moment from 'moment';

dotenv.config()

const filename: string = process.argv[2]

executeFile(filename)
    .then(()=> console.log(`Success run file ${filename}`))
    .catch( err => err.message )

 async function executeFile(filename: string | undefined): Promise<void> {
    let pathToSqlQueries = path.resolve(__dirname, `../../../src/models/sql_files/${filename}.sql`)
    if (!fs.existsSync(pathToSqlQueries)) {
                throw new Error(`${pathToSqlQueries}: There is no path }`)
    }
    try {
        const queries = fs.readFileSync(pathToSqlQueries, "utf8").split(';\\r\\n');
        queries.map(async (query) => {
            if (!query) return
            await pool.query(query)
        })

    } catch (e) {
        console.error(e)
    }
    return
}

export async function createBackup() {
    try {

        const backupPath = path.join(__dirname, '../../../backups'); // шлях для зберігання резервних копій
        console.log(backupPath)
        if (!fs.existsSync(backupPath)) { // перевірка наявності папки для зберігання резервних копій
            fs.mkdirSync(backupPath);
        }
        const now = moment().format('YYYY-MM-DD-HH-mm-ss'); // форматування дати та часу для назви файлу резервної копії
        const backupFile = path.join(backupPath, `backup-${now}.sql`); // шлях для збереження файлу резервної копії
        await mysqldump({
            connection: { // параметри підключення до бази даних
                host: process.env.DB_HOST!,
                user: process.env.DB_USER!,
                password: process.env.DB_PASSWORD!,
                database: process.env.DB_DATABASE!,
            },
            dumpToFile: backupFile, // збереження резервної копії у вказаний файл
        });
        console.log(`Backup created successfully at ${backupFile}`); // повідомлення про успішне створення резервної копії
    } catch (error) {
        console.error(`Error creating backup: ${error}`); // повідомлення про помилку створення резервної копії
    }
}


