import React, {useState} from 'react';
import Card from './Card';
import contacts from "../Data/data";

function AdminConsole(){
    let allContacts;
    //let filter="";
    // Filter WITH the hook
    //   variable, method to access according to what was written in filter, which depends on useState
    const [filter,setFilter] = useState("");
    var findElement = contacts.filter((contact)=>{
        return contact.name.toLowerCase().includes(filter.toLowerCase()); //It'll look for all contacts that have the letters typed
    });

    /* 
if (findElement.length > 0){
  allContacts = mapElements(findElement);
}else{
  allContacts = mapElements(contacts);
}
*/


/* 
let allContacts = contacts.map((contact)=>(
  <Card
    name={contact.name}
    img={contact.picture}
    phone={contact.phone}
    />
));
*/

    function mapElements(elements){
        //Conditional Rendering. In the return() section, you'll have to update the filter section to an if(?) else(:) tag
        if(elements){
          return elements.map((contact)=>(
            <Card
              name={contact.name}
              img={contact.picture}
              phone={contact.phone}
            />
          ));
        }
        return undefined;
    
    }

    allContacts = mapElements(findElement);

    function filterListener(event){
        //console.log("I am listening to to changes in the field : " + event.target.value);
        setFilter(event.target.value);
        //console.log("the filter is : " + filter);
    }

    return (
        <div>
            <div>
              <input type="text" placeholder="Filter" name="filterTxt" onChange={filterListener} value={filter}></input>
            </div>
          {allContacts && allContacts.length > 0? (allContacts) : (<h2>No results found</h2>)}
        </div>
    );
}

export default AdminConsole;