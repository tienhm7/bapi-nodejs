import { Router } from 'express';
import { resolverBook } from 'nodejs-book-modules';

const router = Router();

router.post('/', resolverBook.books);
router.post('/show', resolverBook.book);
router.post('/add', resolverBook.createBook);
router.post('/update/:id', resolverBook.updateBook);
router.post('/delete/:id', resolverBook.deleteBook);

export default router;
