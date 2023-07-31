let pet=
{
    type:"cat",
    name:"bellatrix",
    legs:4,
    color:"black",
    food:{
        food1:"chicken",
        food2:"mutton",
        food3:"milk",
        food4:"curd",
    }
}
console.log(pet.name);
for (i in pet)
{
console.log(pet[i]);
}
for (i in pet.food){
    console.log(pet.food[i]);
}