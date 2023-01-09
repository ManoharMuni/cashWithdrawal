// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="name-container">
            <div className="icon">
              <p className="S">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="bal-container">
            <p className="bal-heading">Your Balance</p>
            <div className="amount-container">
              <p className="bal">{balance}</p>
              <p className="rup">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
