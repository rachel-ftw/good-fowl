import React from 'react';
import Checkbox from './Checkbox';

let BeverageRow = React.createClass({
  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    for (let checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  },

  toggleCheckbox: function (drink) {
      let drinkID = drink.id
      if (this.selectedCheckboxes.has(drinkID)) {
        this.selectedCheckboxes.delete(drinkID);
      } else {
        this.selectedCheckboxes.add(drinkID);
      }
    },

  componentWillMount: function () {
    this.selectedCheckboxes = new Set();
  },

  createCheckbox: function ( drink ) {
    //what props are we handing down from above
    //what info needs to be handed around
    console.log( "oh hia",drink )
    return <Checkbox 
      label={drink.name} 
      handleCheckboxChange={this.toggleCheckbox}
      key={drink.id} />;
  },

  createCheckboxes: function () {
    console.log("this.props", this.props)

    let beverages = this.props.beverages

    console.log("beverages in create checkboxes", beverages)
    return beverages.map( this.createCheckbox );
  },

  render() {
    return <div> {this.createCheckboxes()} </div>
  }
})

export default BeverageRow;