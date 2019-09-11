import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';
import { matchRoutes } from "react-router-config";
import { getStore } from "../store";
import routes from "../Routes";



const app = express();
app.use(express.static('public'))

app.use('/topstories', proxy('https://api.nytimes.com', {
  proxyReqPathResolver: function (req) {
    console.log(req.url)
    return '/svc/topstories' + req.url
  }
}));

app.get('*', function (req, res) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
});

var server = app.listen(3000);