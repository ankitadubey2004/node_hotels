const express = require('express');
const app = express();
const db =  require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body (ye saare data ko store kahan ker lega req.body mein)

const Person  = require('./models/Person');  //ab yahan hume Person model ko export ker liya, Ab isi person naam ke model se hu sara connectivity , saare database ke operation isi model ke through karege

// Root route
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel.... How can I help you?');
});

//POST route to add a person  [THIS IS A COMPLETE POST METHOD TO SAVE A PERSON DATA]
app.post('/person', (req,res) => {
    const data = req.body; //Assuming that a request body contains persons data 
    
    //create a  new person document using the mongoose model
     const newPerson = new Person(data);  //Person hi hamra newPerson hai
    //  newPerson.name = data.name;
    //  newPerson.age = data.age;
    //  newPerson.mobile = data.mobile;
    //  newPerson.email = data.email;
    //  newPerson.address = data.address;(AISHE EK EK DATA KO likhenge to bohot time lagega to hum kya karenge )
    //ITNA KUCH HUME LIKHNA NA PADE TO HUM UPER newPerson mein "data" pass ker dege [TO NEWpERSON MEIN SARA data AUTOMATICALLY FILLED HO JAYEGA]

    //Save the newPerson to the database
    newPerson.save((error, savedPerson )=> { //save function callback return kerta hai (error aur person ka data vo return karega)
      if(error) {
        console.log('Error saving person: ', error);
        res.status(500).json({error: 'Internal server error'})
      }else{
        console.log('data saved successfully')
        res.status(200).json(savedPerson);
      }

    })
})

// Start the server on port 3000
app.listen(4000, () => {
    console.log('listening on port 4000');
});

//THIS CODE IS GIVING ERROR BEACUSE OF [newPerson.save((error, savedPerson )=>] this METHOD SO WE NOW SEE ANOTHER CODE IN server3.js