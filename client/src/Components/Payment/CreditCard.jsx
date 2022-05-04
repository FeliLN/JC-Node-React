import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
         
            <div>
              <input
                name="name"
         
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
              />
            </div>
            <div>
              <input
                name="expiry"
     
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                name="cvc"
             
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
              />
            </div>
        </form>
      </div>
    );
  }
}