function ExpenseSummary(props){
  let listOfCategories = Object.keys(props.expenseSummary)
  var listItems = listOfCategories.map( (item, index) =>{
    return (
      <li key={index} className="col">{props.expenseSummary[item].name}: {props.expenseSummary[item].sum} {props.expenseSummary[item].currency}</li>
    )
  } );

  return(
    <ul className="row">
      {listItems}
    </ul>
  );
}

export default ExpenseSummary;
