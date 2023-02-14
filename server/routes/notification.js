import express from 'express'; //DKC
import { handleError, sanitize } from '../helpers/routing.js';
import { contextHeader, getAppContext } from '../helpers/cipher.js';
import session from '../session.js';

const router = express.Router();

/*
 * Home Page - Zoom App Launch handler
 * this route is used when a user navigates to the deep link
 */
router.post('/', async (req, res, next) => {
    try {
        sanitize(req);

        const header = req.header(contextHeader);

        const isZoom = header && getAppContext(header);
        const name = isZoom ? 'Zoom' : 'Browser';

        console.log(req.body.payload.object.email + ' is ' + req.body.payload.object.presence_status)
    } catch (e) {
        next(handleError(e));
    }
});

export default router;