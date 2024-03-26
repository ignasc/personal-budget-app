function BudgetSummary(props){
    let totalBudget = 2000;
    let usedBudget = 0;
    let remainingBudget = 0;
    let currency = "Lt";

    for (let index = 0; index < props.expenses.length; index++) {
        const element = props.expenses[index];
        usedBudget += element["sum"];
    }

    remainingBudget = totalBudget - usedBudget;

  return(
    <div className="row">
        <div className="biudzeto-irasas col-4">Budget: {totalBudget} {currency}</div>

        <div className="biudzeto-irasas col-4">Used budget: {usedBudget} {currency}</div>

        <div className="biudzeto-irasas col-4">Remaining budget: {remainingBudget} {currency}</div>
    </div>
  );
}

export default BudgetSummary;
