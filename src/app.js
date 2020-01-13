var path= require('path')
var express= require('express')
var hbs=require('hbs')

var app= express()
var port= process.env.PORT || 3000;




var PublicDirectoryPath= path.join(__dirname,'../public')
var viewsPath= path.join(__dirname,'../public/templetes/views')
var partialsPath=path.join(__dirname,'../public/templetes/partials')

app.use(express.static(PublicDirectoryPath))


app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send('Provide a search for weather')
    }

    res.send({
        forecast: 'it is snowing',
        location: 'New-york',
        address:'Newyork'
    })
})
app.get('',(req,res)=>{
    res.render('index',{
        title:"WEATHER APP",
        name: 'Rajeev'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"This is about me",
        name: 'Rajeev'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'We are here to help you out',
        email:'rajeevranjan2k11@gmail.com',
        name:'Rajeev'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errormsg:'Help article not found'
    })
})

app.get('/*',(req,res)=>{
    res.render('404',{
        errormsg:'Page Not Found'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send('please provide a search')
    }
    console.log(req.query.search)
    res.send({
        products :[]
    })
})


app.listen(port,()=>{
    console.log('the server is active on port'+ port)
})