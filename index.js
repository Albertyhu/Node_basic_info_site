const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')
const Blog = require('./model/blogModel'); 
const blogRoutes = require('./routes/blogRoutes'); 
const dbURL = "mongodb+srv://NodeUser:test1234@cluster0.fkmxzzp.mongodb.net/?retryWrites=true&w=majority"

app.set('view engine', 'ejs');
app.set('views', 'view'); 

mongoose.connect(dbURL); 

app.listen(3000)

app.use(express.static('EJSpublic')); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.render('index', {title: "Home"}); 
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About Us" });
})

app.get('/contact', (req, res) => {
    res.render('contact-me', { title: "Contact Us" });
})

app.get('/create_blog', (req, res) => {
    res.render('createBlog', {title: "Submit a new blog"})
})

app.use('/blog', blogRoutes)


app.use((req, res) => {
    res.render('404', { title: "404 Error" }); 
})
