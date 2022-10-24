# Awesome Project Build with Express, TypeScript, GraphQL and MongoDB

Steps to run this project:

1. Run `yarn` command
2. Run dev `yarn dev` command
3. Run production `yarn prod` command

### 2. Rule commit

## Rule Commit Message

Based on the Angular convention:

```
type(scope?): subject
```

-   build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
-   chore: add something without touching production code (Eg: update npm dependencies)
-   docs: Documentation only changes
-   feat: A new feature
-   fix: A bug fix
-   perf: A code change that improves performance
-   refactor: A code change that neither fixes a bug nor adds a feature
-   revert: Reverts a previous commit
-   style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons,
    etc)
-   test: Adding missing tests or correcting existing tests

## Integrate Beetsoft Module

Example: Import book module

-   Step 1: In src/resolver/index.ts, add ...resolverBook to resolver
-   Step 2: Add queryBook, mutationBook, typeBook to src/schema/schema.ts
-   Step 3: If you use RESTFul API, create book.ts in src/routes

```
import { Router } from 'express';
import { resolverBook } from 'nodejs-book-modules';

const router = Router();

router.post('/', resolverBook.books);
router.post('/show', resolverBook.book);
router.post('/add', resolverBook.createBook);
router.post('/update/:id', resolverBook.updateBook);
router.post('/delete/:id', resolverBook.deleteBook);

export default router;
```

After add routes.use('/book', book) to src/routes/index.ts
