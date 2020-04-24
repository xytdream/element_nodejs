const express = require('express')
const app = express()
var cors = require('cors')


//设置跨域访问  
app.use(cors());
//识别客户端提交的json数据
app.use(express.json())

//数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog_element',{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
})

const Article = mongoose.model('Article',new mongoose.Schema({
    title: {type: String},
    body: {type: String},
}))

app.get('/', async(req,res)=>{
    res.send("index")
})

//新增文章
app.post('/api/articles', async(req,res)=>{
    const article = await Article.create(req.body)
    res.send(article)
})

//获取文章数据
app.get('/api/articles',async(req,res) =>{
    const articles = await Article.find()
    res.send(articles)
})

//删除文章
app.delete('/api/articles/:id',async(req,res) =>{
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

//文章详情
app.get('/api/articles/:id', async(req , res ) =>{
    const article = await Article.findById(req.params.id)
    res.send(article)
})

//修改文章
app.put('/api/articles/:id', async(req , res) =>{
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})

app.listen(3001,()=>{
    console.log('启动成功，访问：localhost:3001')
})