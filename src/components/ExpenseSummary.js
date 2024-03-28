function ExpenseSummary(props){
  let listOfCategories = Object.keys(props.expenseSummary)
  var listItems = listOfCategories.map( (item, index) =>{
    return (
      <li key={index} className="col-sm border border-secondary-subtle text-center">{props.expenseSummary[item].name}: {props.expenseSummary[item].sum} {props.expenseSummary[item].currency}</li>
    )
  } );

  return(
    <ul className="row p-3">
      {listItems}
    </ul>
  );
}

export default ExpenseSummary;
