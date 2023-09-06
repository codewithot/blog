const Blog = require('../models/blog.js');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', {
                title: 'All Blogs',
                blogs: result
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new Blog' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' })

        })
        .catch((err) => {
            res.status().render('404', { title: 'blog not found' });
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id; //access route parameter
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    blog_index, blog_create_get, blog_create_post, blog_details, blog_delete
}