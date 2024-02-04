import AppTitle from './AppTitle';
import { budgetTypes } from './temp/DataForTest';

function AddNewExpense() {

    var listItems = budgetTypes.map( (item, index) =>{
        return (
        <option key={index} value={item.name}>{item.name}</option>
        )
    } );

    return (
      <form action="/not_implemented.html" method="get" id="islaidos-naujas-irasas" className="flex-container flex-gap">
      <AppTitle title={'Prideti naujas islaidas'}/>
      <div className="form-element">
        <label htmlFor="operacija-prideti">Islaidu tipas:</label>
        <select form="islaidos-naujas-irasas" name="islaidu-tipas" id="islaidu-tipai" required>
          {listItems}
        </select>
      </div>
      
      <div className="form-element">
        <label htmlFor="islaidos-aprasymas">Islaidu aprasymas:</label>
        <input type="text" form="islaidos-naujas-irasas" id="islaidos-aprasymas" name="islaidu-aprasymas" required></input>
      </div>
      
      <div className="form-element">
        <label htmlFor="islaidos-aprasymas">Islaidu suma:</label>
        <input type="number" form="islaidos-naujas-irasas" id="islaidos-suma" name="islaidu-suma" min="0" required></input>
      </div>
      
      <button type="submit" form="islaidos-naujas-irasas" className="form-element" disabled="disabled">Prideti</button>
    </form>
      
    );
  }
  
  export default AddNewExpense;
