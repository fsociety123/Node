

const axios = require('axios');

async function interestingFacts(){

    //Calling the api using axios
    const result = await axios('https://cat-fact.herokuapp.com/facts');
    let facts = [];
    //console.log(typeof result.data.all);
    for (object of result.data.all){
        if (object.user){
            object.user.fullname =  `${object.user.name.first} ${object.user.name.last}`;
            if(object.upvotes >= 2){
                facts.push(object.text);
            }
        }

    }
    console.log(facts);
    
}

interestingFacts();