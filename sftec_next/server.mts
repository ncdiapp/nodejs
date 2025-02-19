// // server.ts
// import express from 'express';
// import next from 'next';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Setup reverse proxy
//   server.use('/api', createProxyMiddleware({
//     target: 'http://localhost:5000/api', // The API server port
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '', // Remove /api from the request path
//     },
//   }));

//   // Handle Next.js pages
//   server.all('*', (req, res) => {
//     console.log(req);
//     return handle(req, res);
//   });

//   server.listen(3000, (err?: Error) => {
//     if (err) {
//       console.error('Error starting server:', err);
//       throw err;
//     }
//     console.log('> Ready on http://localhost:3000');
//   });
// });
