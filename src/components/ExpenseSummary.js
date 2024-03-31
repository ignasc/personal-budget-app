function ExpenseSummary(props){
  let listOfCategories = Object.keys(props.expenseSummary)
  var listItems = listOfCategories.map( (item, index) =>{
    return (
      <li key={index} className="col-sm border border-secondary-subtle text-center">{props.expenseSummary[item].name}: {props.expenseSummary[item].currency}{props.expenseSummary[item].sum}</li>
    )
  } );

  return(
    <ul className="row p-3">
      {listItems}
    </ul>
  );
}

export default ExpenseSummary;
