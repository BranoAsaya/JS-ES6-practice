



// if(num==2){
//     console.log(num*num);
// }
// else if(num==5){
//     console.log(num*num);
// }
// else if(num==7){
//     console.log(num*num);
// }
// else if(num==10){
//     console.log(num*num);
    
// }
// else{console.log(num);}

// let num = 2;

// switch (num) {
//     case 2: console.log(num*num);
//         break;
//         case 5: console.log(num*num);
//         break;
//         case 7: console.log(num*num);
//         break;
//         case 10: console.log(num*num);
//         break;
//     default:
//         console.log(num);
//         break;
// }

// let day = 1;

// switch (day) {
//    case 1 : console.log("Sunday");
//    break;
//    case 2 : console.log("Monday");
//    break;
//    case 3 : console.log("Tuesday");
//    break;
//    case 4 : console.log("Wednesday");
//    break;
//    case 5 : console.log("Thursday");
//    break;
//    case 6 : console.log("Friday");
//    break;
//    case 7 : console.log("Saturday");
//    break;
//    default  : console.log("not 1-7");
//    break;


// }
// admin, super admin, client

// const user={name:"ted",email:"ted@mail.com",type:"client"}

// switch (user.type) {
//     case "super admin" : console.log("you are an super admin");
//     break;
//     case "super admin" : console.log("you are an admin");
//     break;
//     default : console.log("you are our loyal client");
//     break;
// }
let con = document.getElementById("con-car")

const arrCar=[
    {model:"chevrolet",year:2010,price:10000,discount:10,img:"https://www.carlogos.org/car-logos/chevrolet-logo.png"},
    {model:"aston-martin",year:2018,price:20000,discount:10,img:"https://www.carlogos.org/car-logos/aston-martin-logo.png"},
    {model:"rolls-royce",year:2002,price:5000,discount:10,img:"https://www.carlogos.org/car-logos/rolls-royce-logo.png"},
    {model:"volkswagen",year:2020,price:350000,discount:10,img:"https://www.carlogos.org/car-logos/volkswagen-logo.png"},
    {model:"kia",year:2011,price:7000,discount:10,img:"https://www.carlogos.org/car-logos/kia-logo.png"}
]
let sale=0;
let dis=0;
for (let i = 0; i < arrCar.length; i++) {
    sale=arrCar[i].price;
    dis=arrCar[i].discount;
    con.innerHTML+=(`${arrCar[i].model}${arrCar[i].price}${arrCar[i].discount}<img src="${arrCar[i].img}" alt=""> ${sale-=sale/(dis/100)}`)
    
}
switch(dis){
  case 25:alert( "crazy sell");
  break;
  case 10:alert( " good deal for you");
  break;
  case 7:alert( "not bad");
  break;
  case 3:alert( "this is joke");
  break;
  default: console.log("na");


}

