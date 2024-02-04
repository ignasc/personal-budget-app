import { expenses } from './temp/DataForTest'

function ExpenseTable(){
  var listItems = expenses.map( (item, index) =>{
    return (
      <li key={index} className="flex-container flex-gap">
        <p>{item.name}:</p>
        <div>{item.sum} {item.currency}</div>
        
        <button>Remove</button>
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
