const Blog = require('../model/blogModel'); 
const { ObjectId } = require('mongodb'); 

const blogPage = (req, res) => {
    Blog.find()
        .then(result => {
            res.render('blog', { title: "Blog", blogs: result });
        })
        .catch(err => console.log(err))
}

const blogArticle = (req, res) => {
    const id = ObjectId(req.params.id.trim());
    Blog.findById(id)
        .then(result => {
            res.render('displayBlog', {title: "Blog", blog: result})
        }).catch(err => console.log(err))
}


const postBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.redirect('/blog'))
        .catch(err => console.log(err))
}


module.exports = {
    blogPage, 
    blogArticle, 
    postBlog
}