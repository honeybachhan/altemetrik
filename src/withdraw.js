import React, { Component } from 'react';
import './App.css';
import './login.css';
import { Redirect } from 'react-router-dom';

class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      amount: 15000,
      withdraw_amount: '',
    };
    this.amount_change = this.amount_change.bind(this);
    this.withdraw_amount = this.withdraw_amount.bind(this);
    this.cancel_button = this.cancel_button.bind(this);
  }
  amount_change(evt)
  {
    this.setState({
      withdraw_amount: evt.target.value,
    });
  }
  withdraw_amount()
  {
    var amount_value = this.state.withdraw_amount;
    var org_amount = this.state.amount;
    if(amount_value > org_amount)
    {
      alert("You donot have Sufficient Balance");
    }
    else
    {
      var amount_remain = org_amount - amount_value;
      this.setState({
        amount: amount_remain,
      });
      alert("Successful");
    }
  }
  cancel_button()
  {
    window.location.href = "/";
  }
  render() {
    
    return (
      <div className="login">
        <h3 className="withdraw_text">Hi User!! </h3> 
        <p className="withdraw_text">Balance Rs {this.state.amount}</p>
        <p className="login_input">Choose Bank Type: </p>
        <select className="account_type" name="account_type" id="account_type"  defaultValue={'0'}>
          <option value="0">Saving Account</option>
          <option value="1">Current Account</option>
        </select>
        <br/>
        <label className="login_input">Enter Amount to Withdraw</label>

        <input type="number" data-test="withdraw_amount" value={this.state.withdraw_amount} onChange={this.amount_change} />
        <input type="button" className="btn btn-primary btn-block btn-small" value="Withdraw" onClick={this.withdraw_amount}/>
        <input type="button" className="btn btn-primary btn-block btn-small" value="Cancel" onClick={this.cancel_button}/>
      </div>
      
    );
  }
}

export default Withdraw;