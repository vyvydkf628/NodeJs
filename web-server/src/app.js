
const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

// Define paths for Express config
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)


//setup static directory to serve
app.use(express.static(path.join(__dirname,'../public')))


//
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'DongCheol'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About   ',
        name: 'DongCheol'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'this is some helpful text',
        title: 'Help',
        name: 'DongCheol'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Jeju'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404page',{
        title: 404,
        errorType: 'Help article',
        name : 'DongCheol'
    })
})

app.get('*',(req,res)=>{
    res.render('404page',{
        title: 404,
        errorType: 'Page',
        name :'DongCheol'
    })
})


 app.listen(3000, ()=>{
     console.log('Server is up on port 3000.')
 })