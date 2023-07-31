//let us create nested object
let person = 
{
    name:"Karthik",
    age:47,
    gender:"Male",
    cars:{
        car1:"Honda",
        car2:"BMW"
    }
}
for(i in person.cars)
{
    console.log(person.cars[i]);
}