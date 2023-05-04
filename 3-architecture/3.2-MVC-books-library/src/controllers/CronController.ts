import cron, {schedule} from 'node-cron'
import {createBackup} from "../models/utils/database";
import BookModel from "../models/BookModel";


export default function runCron() {

    cron.schedule(' 30 * * * * * ', BookModel.cronBookRemoving)
    cron.schedule('  0 0 * * * ', createBackup)

}
