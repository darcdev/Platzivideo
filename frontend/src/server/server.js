/* eslint-disable indent */
/* eslint-disable global-require */
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import webpack from 'webpack';
import helmet from 'helmet';

import config from './config';
import routes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';
import Layout from '../frontend/components/Layout';
import getManifest from './getManifest';

const { env, port } = config;
const app = express();

if (env === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public/`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="${mainStyles}" type="text/css" /> 
        <title>PlatziVideo</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
        </script>
        <script src="${vendorBuild}"></script>
        <script src="${mainBuild}"></script>
      </body>
    </html>`;
};
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(routes)}</Layout>
      </StaticRouter>
    </Provider>
  );
  res.send(setResponse(html, initialState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Escuchando en el puerto ${port}`);
});
