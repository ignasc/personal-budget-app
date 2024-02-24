import {expenseSummary} from './temp/DataForTest';
import { budgetTypes } from './temp/DataForTest';

function ExpenseSummary(props){
  //console.log("islaidu suvestine:")
  //console.log(props.expenseSummary)
  let listOfCategories = Object.keys(props.expenseSummary)
  var listItems = listOfCategories.map( (item, index) =>{
    return (
      <li key={index}>{props.expenseSummary[item].name}: {props.expenseSummary[item].sum} {props.expenseSummary[item].currency}</li>
    )
  } );

  return(
    <ul className="flex-container flex-gap">
      {listItems}
    </ul>
  );
}

export default ExpenseSummary;
