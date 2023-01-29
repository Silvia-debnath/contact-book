//telephone book
const prompt=require("prompt-sync")();

const telebook = [ 
{  
   Name: "Anangsha",
   Number: "987654321",
   Email: "anangsha.r2003@gmail.com",
},
{
    Name: "Rohan",
    Number: "985236417",
    Email: "rohan1999@gmail.com" ,
},
{
    
    Name: "Katherine",
    Number: "987321654",
    Email: "katrozario@gmail.com" ,
},

];

const main= () => {
  console.log ("MY CONTACTS:");
  console.log ("1.VIEW CONTACTS");
  console.log ("2.ADD NEW CONTACT");
  console.log ("3.SEARCH A CONTACT");
  console.log ("4.DELETE A CONTACT");
  console.log ("5.UPDATE CONTACT");
  const ch = prompt ("Enter your choice: ");
  switch (ch)
  {
    case "1":
        display();
        break;
    case "2":
        addnew();
        break;
    case "3":
        SearchCon();
        break;
    case "4":
        deleteCon();
        break;
    case "5":
            updateCon();
            break;
        
    default:
        console.log ("E R R O R");

  }
}
console.log (telebook);

const display=()=>
{   
    const Name = telebook.map((x) => x.Name);
    console.log(Name);
    const Number = telebook.map((x) => x.Number);
    console.log(Number);
    const Email = telebook.map((x) => x.Email);
    console.log(Email);
}

const addnew=()=>{
const Name = prompt ("Enter Name for contact: ");
const Number = prompt ("Enter Phone Number: ");
const Email = prompt ("Enter Email Number: ");
const id = telebook.length+1;
telebook.push({id,Name,Number,Email});

console.log (telebook);
}
const SearchCon=()=>
{
    const N = prompt ("Enter Name to be searched: ");  
    const found = telebook.findIndex ((ele) => ele.Name == N);
    console.log(telebook[found]);
}

const updateCon=()=>
{
console.log ("Do want to update\n a.Name\n b.Number\n c.Email");
const cho = prompt ("Enter your choice: ");
switch (cho)
{
    case "a": 
    const P = prompt ("Enter Name you want to update: ");
    const found1 = telebook.findIndex ((ele) => ele.Name == P);    
    const N3 = prompt ("Enter Name you want to update to: ");
    telebook[found1].Name =  N3;
    console.log(telebook);
    break; 

    case "b":
    const Q = prompt ("Enter Name you want to update Number for: ");
    const found2 = telebook.findIndex ((ele) => ele.Name == Q); 
    const N2 = prompt ("Enter Number you want to update to: ");
    telebook[found2].Number = N2;
    console.log(telebook);
    break;

    case "c":
        const R = prompt ("Enter Name you want to update Number for: ");
        const found3 = telebook.findIndex ((ele) => ele.Name == R); 
    const N4 = prompt ("Enter Email you want to update to: ");
 telebook[found3].Email = N4;
 console.log(telebook);
}
}
const deleteCon=()=>
{
 const N= prompt ("Enter Name you want to delete: ");
 const found4 = telebook.findIndex ((ele) => ele.Name == N);
 telebook.splice(found4,1);
 console.log(telebook);
}

main();