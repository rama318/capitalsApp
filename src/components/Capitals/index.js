import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeTabId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeTabId: event.target.value})
  }

  getCountry = () => {
    const {activeTabId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeTabId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeTabId} = this.state
    const country = this.getCountry(activeTabId)

    return (
      <div className="capital-container">
        <div className="sub-capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="questions-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeTabId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  value={eachCapital.id}
                  key={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
