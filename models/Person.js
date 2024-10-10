const mongoose = require('mongoose');

//Define a person schema  => iska matlab hai ki hamara person aakhir dikhega kaise
const personSchema = new mongoose.Schema({ //Ye hum personSchema bana rahe ab hum iske ander parameters pass karenge
    name: {
        type: String ,
        required: true  //ISKA MATLAB NAME HUME CHAHIYE HI CHAHIYE
    },
    work:{
        type: String,
        enum : ['chef','waitor','manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        reuired: true,
        unique: true //Jaise ek record hai aur hume use save kerna hai to hum kya karenge ek email id use karenge but agr 
        //email id pehle se register hai to ye ab error show karega
    },
    address: {
        type: String,
    },
    salary: {
        type: String,
        required: true
    }
});
//Isi Schema ki help se hum model banate Aur isi database ko use karke hum operations perform kerte hein(Create, read, update delete these are the databse operations)
//Create person model

const Person = mongoose.model('Person',personSchema)
module.exports = Person;  //Ab hum is Person ko kahan export karenge server pe