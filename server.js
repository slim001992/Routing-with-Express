var express = require('express');
var path = require('path');
var app= express();
var date = new Date();
var current_hour = date.getHours();

app.use(express.static(path.join(__dirname, '/public/')));

if ( (current_hour>8)&&(current_hour<17) ) {
  app.get('/', (req,res)=>{
     res.sendFile(path.join(__dirname, 'public/home.html'));
   })
   app.get('/ourservices', (req,res)=>{
     res.sendFile(path.join(__dirname, 'public/ourservices.html'));
   })
   app.get('/contact', (req,res)=>{
     res.sendFile(path.join(__dirname, 'public/contact.html'));
   })
  }
  else
    app.get(['/','/ourservices','/contact'], ( req, res ) => {
    res.send('Our office is not open now');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
