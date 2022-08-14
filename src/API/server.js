const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());

app.post('/login', (req, res) => {
    console.log(req.body.password)
    res.send({
      token: 'test123'
    });
  });

// app.use('/add').post(function(req,res){
//     let detail = req.body;
//     console.log(req.body);
    // .then(student => {
    //     res.status(200).json({'student':'student is added'}); 
    // })
    // .catch(err =>{
    //     res.status(400).send("unable to save to DB");
    // });

// })
  app.listen(8080, () => console.log('API is running on http://localhost:8080'));
  