import { Request, Response } from "express"
export const isAuthorized = (req: Request, res: Response, next: Function) => {
  if (!req.session.user) {
    return res.status(403).json({ error: "forbidden" })
  }
  if (req.query.action) {
    next(req, res)
  } else {
    next()
  }
}
