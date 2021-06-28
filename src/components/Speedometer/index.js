// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="img-speed"
          className="img-s"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="acc-btn"
            onClick={this.onClickAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="app-btn" onClick={this.onClickBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
