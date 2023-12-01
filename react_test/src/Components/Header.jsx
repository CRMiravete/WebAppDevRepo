import React from "react";

function Header(){
    const customStyle={
        color:"blue",
        fontSize:"20px",
        border: "1px solid black"
      };
    
      const num= Math.floor(Math.random()*10);
      const name= "Cristian";
      const name1= "Miravete";
    
      if (num % 2 === 0){
        customStyle.background = "navy";
      }else{
        customStyle.background = "yellow";
      }
    
    const img = "http://picsum.photos/200";

    return(
    <div>
      <h1>Hello World, my name is {name + " " + name1}</h1>
      <img alt = 'random' 
        src={img} 
        />
        </div>
    );
}

export default Header;