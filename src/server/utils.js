import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import { Provider } from "react-redux";

export const render = (store, routes, req) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  );

  return `
      <html>
        <header>
          <title>ssr</title>
        </header>
        <body>
          <div id="root">${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
};
