import {Request, Response, NextFunction} from "express";
import auth from "basic-auth";

export default function mwAuthRequired(req: Request, res: Response, next: NextFunction) {

    const user = auth(req)
    if (!user || user.name !== process.env.ADMIN_LOGIN || user.pass !== process.env.ADMIN_PASSWORD) {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.sendStatus(401)
    } else {
        next()
    }
}