const images=["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"];
const rest_name=["Haveli",
  "Rangla Punjab By Haveli",
  "The Orchid - All Day Dining Restaurant",
  "Food Bazar",
  "Vimpis Bar and Restaurant",
  "Lucky Dhaba",
  "Pirates Of Grill",
  "Love Italy - Lounge & Restaurant",
  "Barbeque Nation",
  "Sagar Ratna",
  "Sandoz Restaurant",
  "Aar Kay Vaishno Dhaba",
  "The Great Kabab Factory",
  "The Garden Restaurant",
  "AMPM - Khao Piyo Jiyo",
  "Flavours All Day Dining",
  "Coya By Hotel President",
  "The Reefer Café & Eatery",
  "Greko Espresso Bar",
  "Aangan Cafe & Bar"];
const foodTypes = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Continental",
  "Japanese",
  "Mediterranean",
  "American",
  "Mughlai"
];

const location = [
  "Devi Talab Mandir",
  "Geeta Mandir, Model Town",
  "Guru Gobind Singh Stadium",
  "St. Mary's Cathedral",
  "Surjit Hockey Stadium",
  "Jang-e-Azadi Memorial, Kartarpur",
  "Wonderland Theme Park",
  "Rangla Punjab Haveli",
  "Nikku Park",
  "Sadar Bazar"
];






// Create 100 object
const restaurant=[];

for(let i=0;i<100;i++)
{
  const obj={};
  obj["image"]=images[Math.floor(Math.random()*10)];
  obj["name"]=rest_name[Math.floor(Math.random()*20)];
  obj["rating"]=(Math.random()*5+1).toFixed(1);
  obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
  obj["Price_for_two"]=Math.floor(Math.floor(Math.random()*2301+200)/50)*50;
  obj["location"]=location[Math.floor(Math.random()*10)];
  obj["distance"]=(Math.random()*10+1).toFixed(1);
  obj["offers"]=Math.floor(Math.random()*30);
  obj["alcohal"]=Math.random()>0.7;
  obj["Restaurant_oppening_time"]=Math.floor(Math.random()*24);
  obj["Restaurant_closing_time"]= (obj["Restaurant_oppening_time"]+12)%24;

  restaurant.push(obj);
}

// console.log(restaurant);



// How to create the Array into JSON formate 

// 1:Method
const jsonData = JSON.stringify(restaurant, null, 2);
console.log(jsonData);

// 2:Method
const fs = require('fs');
const jsonData1 = JSON.stringify(restaurant, null, 4);  
fs.writeFileSync('arrayData.json', jsonData1, 'utf8');

