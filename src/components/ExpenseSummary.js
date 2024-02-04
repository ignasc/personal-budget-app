import {expenseSummary} from './temp/DataForTest';

function ExpenseSummary(){
  var listItems = expenseSummary.map( (item, index) =>{
    return (
      <li key={index}>{item.name}: {item.sum} {item.currency}</li>
    )
  } );

  return(
    <ul className="flex-container flex-gap">
      {listItems}
    </ul>
  );
}

export default ExpenseSummary;
