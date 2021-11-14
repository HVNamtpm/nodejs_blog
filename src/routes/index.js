const newsRoutes= require('./news')

function route(app){
 app.get('/', (req, res) => {
     res.render('home');
})

app.use('/news', newsRoutes)

app.get('/search', (req, res) => {
     res.render('search');
})

}
module.exports= route;