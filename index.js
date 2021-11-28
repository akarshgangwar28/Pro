const express = require('express')
const format = require('date-format');

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>')
})

app.get('/api/v1/instagram',(req,res)=>{
const instaSocial={
  username:"brute_3",
  follower :147,
  following:57,
  date: format.asString("dd-MM-yy - hh:mm:ss",new Date())
};
res.status(200).json(instaSocial);
})

app.get('/api/v1/facebook',(req,res)=>{
  
  const facebookSocial={
    username:"brute_3",
    follower :147,
    following:57,
    date:format.asString("dd-MM-yyyy ",new Date())
  };
  res.status(200).json(facebookSocial);

})



app.get('/api/v1/Linkedin',(req,res)=>{
  //  var datetime = new Date();
  //   console.log(datetime.toISOString().slice(0,10));

  const LinkedSocial={
    username:"akarshgangwar28",
    follower :147,
    following:57,
    date:format.asString("dd-MM-yyyy ",new Date())
  };
  res.status(200).json(LinkedSocial);

})

app.get("/api/v1/:token",(req,res)=>{
  console.log(req.params.token);
  res.status(200).json({
    param:req.params.token  
  })
} )

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})