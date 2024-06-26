const nerRouter = require('./news')
function route(app){
    app.use('/news', nerRouter)
    app.get('/',(req,res)=>{
        res.render('home')
    })
    
    app.get('/search',(req,res)=>{
        res.render('search')
    })
    
    app.post('/search',(req,res)=>{
        console.log(req.body.q)
        res.send('')
    })
}

module.exports=route;