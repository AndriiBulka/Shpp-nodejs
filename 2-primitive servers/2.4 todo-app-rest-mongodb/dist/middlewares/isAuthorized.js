"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthorized = void 0;
const isAuthorized = (req, res, next) => {
    if (!req.session.user) {
        return res.status(403).json({ error: "forbidden" });
    }
    if (req.query.action) {
        next(req, res);
    }
    else {
        next();
    }
};
exports.isAuthorized = isAuthorized;
