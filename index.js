// 1. Import JSON Server
const jsonServer = require('json-server');

// 2. Create the server
const server = jsonServer.create();

// 3. Load the db.json file
const router = jsonServer.router('db.json');

// 4. Create default middlewares (logger, static, CORS, etc.)
const middlewares = jsonServer.defaults();
server.use(middlewares);

// 5. Use the router
server.use(router);

// 6. Start the server on port 3000 (you can change this)
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
