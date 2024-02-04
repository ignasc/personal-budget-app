function BudgetSumField(props) {
    return (
      <div id={props.id} className={props.class}>{props.fieldName}: {props.fieldValue} {props.fieldCurrency}</div>
    );
  }
  
  export default BudgetSumField;
