import { expenses } from './temp/DataForTest'
import { useState } from 'react';



function ExpenseTable(){
  const [islaidos, setIslaidos] = useState(expenses)

  function handleEvent(keyId){
    // Remove selected entry
    setIslaidos(()=>{
      let updatedList = [];
      for (let index = 0; index < islaidos.length; index++) {
        const element = islaidos[index];
        if (keyId != element.key) {
          updatedList.push(element);
        };
      };

    return updatedList;
    })
  };

  var listItems = islaidos.map( (item) =>{
    return (
      <li key={item.key} className="flex-container flex-gap">
        <p>{item.name}:</p>
        <div>{item.sum} {item.currency}</div>
        
        <button onClick={()=>handleEvent(item.key)}>Remove</button>
      </li>
    )
  } );

  return(
    <ul>
      {listItems}
    </ul>
  );
}

export default ExpenseTable;
