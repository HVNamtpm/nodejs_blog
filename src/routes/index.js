const newsRoutes = require('./news');
const siteRoutes = require('./site');

app.use('/news', newsRoutes);
app.use('/', siteRoutes);

module.exports = route;
