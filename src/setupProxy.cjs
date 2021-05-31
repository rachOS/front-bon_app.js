/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api/**',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_TARGET}`,
      changeOrigin: true,
    })
  );
  app.use(
    '/ortherApi',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_TARGET}`,
      changeOrigin: true,
    })
  );
};
