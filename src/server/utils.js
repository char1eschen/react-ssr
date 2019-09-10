import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

export const render = req => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    item.route.loadData(store);
  });
  console.log(store.getState());

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
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
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
