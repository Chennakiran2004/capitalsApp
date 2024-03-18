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
  state = {selectedCountyCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({selectedCountyCapitalId: event.target.value})
  }

  getCountryCapital = () => {
    const {selectedCountyCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCountyCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCountyCapitalId} = this.state
    const country = this.getCountryCapital(selectedCountyCapitalId)
    console.log(country)
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="countries-capital-heading">Countries And Capitals</h1>
          <div className="questions-container">
            <select
              onChange={this.onChangeCapital}
              className="countries-list"
              value={selectedCountyCapitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
