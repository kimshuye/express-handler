const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')

const cloudinary = require('cloudinary')

require('dotenv').config()

require('./handlers/cloudinary')

const upload = require('./handlers/multer')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.post('/create_blog', upload.array('image'), async (req, res) => {
// app.post('/create_blog', (req, res) => {
  res.send(req.files)

  // const result = await cloudinary.v2.uploader.upload(req.file.path)
  // res.send(result)


  // const blog = new Blog()
  // blog.title = req.body.title
  // blog.imageUrl = result.secure_url
  // await blog.save()
  // res.send({
  //   message: 'Blog is Created'
  // })
})

const PORT = 7777
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
