FORMAT: 1A
HOST: http://localhost:3000/

# Library API

A Node.js module using an Express router to support the routes for the library REST API.
Here i use mongodb schema and model ( use Mongoose Database ) to store data for books API and then extend the Express REST API server to support the `/books` REST API endpoints.

#### Base url:
```bash
http://localhost:3000/library
```

#### Endpoints:
```bash
/books
/books/:bookid
/books/:bookname
```

## Technology:
- Node.js
- Express.js
- MongoDB

### Installation guide:
```bash
git clone https://github.com/fahimahammed/library-rest-api.git
cd library-rest-api
npm install
```

