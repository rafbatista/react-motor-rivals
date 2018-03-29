import React from 'react'
import { render } from 'react-dom'

const cars = [
  {
    id: 1,
    year: 2018,
    make: 'Audi',
    model: 'A5',
    imgSrc: 'images/audi-a5-2018.jpg',
    specs: {
      vehicleType: 'Front-engine, All-wheel-drive',
      msrp: '$43,775',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 252 hp @ 6000 rpm, Torque: 273 lb-ft @ 1600 rpm',
      transmission:
        '7-speed dual-clutch automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.0 secs',
      dimensions: '184.7″ L x 72.6″ W x 54.6″ H',
      curbWeight: '3704 lbs',
      fuelEconomy: '24 city / 34 highway'
    }
  },
  {
    id: 2,
    year: 2018,
    make: 'BMW',
    model: '430i',
    imgSrc: 'images/bmw-430i-2018.jpg',
    specs: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$43,300',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 248 hp @ 5200 rpm, Torque: 258 lb-ft @ 1450 rpm',
      transmission:
        ' 8-speed automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.5 secs',
      dimensions: '183″ L x 72″ W x 54.2″ H',
      curbWeight: '3574 lbs',
      fuelEconomy: '23 city / 34 highway'
    }
  },
  {
    id: 3,
    year: 2018,
    make: 'Cadillac',
    model: 'ATS Coupe',
    imgSrc: 'images/cadillac-ats-coupe-2018.png',
    specs: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$37,895',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 272 hp @ 5500 rpm, Torque: 295 lb-ft @ 3000 rpm',
      transmission:
        ' 8-speed automatic with manual shifting mode (6-speed manual optional)',
      zeroToSixty: '5.6 secs',
      dimensions: '184″ L x 73″ W x 55″ H',
      curbWeight: '3418 lbs',
      fuelEconomy: '22 city / 31 highway'
    }
  },
  {
    id: 4,
    year: 2017,
    make: 'Infiniti',
    model: 'Q60',
    imgSrc: 'images/infiniti-q60-2017.jpg',
    specs: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$39,855',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 208 hp @ 5500 rpm, Torque: 258 lb-ft @ 1500 rpm',
      transmission: ' 7-speed automatic with manual shifting mode',
      zeroToSixty: '7.0 secs',
      dimensions: '184.4″ L x 72.8″ W x 54.9″ H',
      curbWeight: '3727 lbs',
      fuelEconomy: '22 city / 30 highway'
    }
  },
  {
    id: 5,
    year: 2017,
    make: 'Lexus',
    model: 'RC 200t',
    imgSrc: 'images/lexus-rc200t-2017.jpg',
    specs: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$40,155',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 241 hp @ 5500 rpm, Torque: 258 lb-ft @ 3000 rpm',
      transmission: ' 7-speed automatic with manual shifting mode',
      zeroToSixty: '7.3 secs',
      dimensions: '184.8″ L x 72.8″ W x 54.9″ H',
      curbWeight: '3737 lbs',
      fuelEconomy: '22 city / 32 highway'
    }
  },
  {
    id: 6,
    year: 2018,
    make: 'Mercedez-Benz',
    model: 'C300 Coupe',
    imgSrc: 'images/mercedez-benz-c300-coupe-2018.jpg',
    specs: {
      vehicleType: 'Front-engine, Rear-wheel-drive',
      msrp: '$43,200',
      engineType: 'Turbocharged 2.0L inline-4-cylinder',
      displacement: 'Power: 241 hp @ 5500 rpm, Torque: 273 lb-ft @ 3000 rpm',
      transmission: ' 9-speed automatic with manual shifting mode',
      zeroToSixty: '5.9 secs',
      dimensions: '184.4″ L x 72.8″ W x 55.3″ H',
      curbWeight: '3616 lbs',
      fuelEconomy: '22 city / 30 highway'
    }
  }
]

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Motor Rivals</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h2>Where luxury sport meets its match.</h2>
          </div>
        </div>
        <div className="row" />
        <div className="col s12 h3">
          <h3>All Cars</h3>
        </div>
        <CarList cars={this.props.cars} />
        <div className="row car-specs-list hidden" />
        <div className="row car-compare-list hidden" />
      </div>
    )
  }
}

class CarList extends React.Component {
  render() {
    const cars = this.props.cars
    const carItems = cars.map(car => (
      <CarItem
        key={car.id}
        id={car.id}
        year={car.make}
        make={car.make}
        model={car.model}
        imgSrc={car.imgSrc}
        specs={car.specs}
      />
    ))
    const carSpecs = cars.map(car => (
      <CarSpecs
        key={car.id}
        id={car.id}
        year={car.make}
        make={car.make}
        model={car.model}
        imgSrc={car.imgSrc}
        specs={car.specs}
      />
    ))
    return (
      <div className="row car-list">
        {carItems}
        {carSpecs}
      </div>
    )
  }
}

class CarItem extends React.Component {
  render() {
    return (
      <div className="col s3">
        <div className="car-container" id={this.props.id}>
          <span className="icon-title">
            {this.props.year + ' ' + this.props.make + ' ' + this.props.model}
          </span>
          <img
            className="car-icon"
            src={this.props.imgSrc}
            alt={
              this.props.year + ' ' + this.props.make + ' ' + this.props.model
            }
          />
        </div>
      </div>
    )
  }
}

class CarSpecs extends React.Component {
  render() {
    return (
      <div className="row car-specs-list">
        <div data-number={this.props.id}>
          <div className="col s12">
            <h3 className="specs-header">{this.props.name}</h3>
          </div>
          <img
            className="col s5 specs-img"
            src={this.props.imgSrc}
            alt={this.props.name}
          />
          <div className="col s6 push-s2 car-specs">
            <span>
              <strong>Vehicle Type: </strong>
              {this.props.specs.vehicleType}
            </span>
            <br />
            <span>
              <strong>MSRP: </strong>
              {this.props.specs.msrp}
            </span>
            <br />
            <span>
              <strong>Engine Type: </strong>
              {this.props.specs.engineType}
            </span>
            <br />
            <span>
              <strong>Engine Displacement: </strong>
              {this.props.specs.displacement}
            </span>
            <br />
            <span>
              <strong>Transmission Type: </strong>
              {this.props.specs.transmission}
            </span>
            <br />
            <span>
              <strong>0 to 60mph: </strong>
              {this.props.specs.zeroToSixty}
            </span>
            <br />
            <span>
              <strong>Dimensions: </strong>
              {this.props.dimensions}
            </span>
            <br />
            <span>
              <strong>Curb Weight: </strong>
              {this.props.specs.curbWeight}
            </span>
            <br />
            <span>
              <strong>Fuel Economy: </strong>
              {this.props.specs.fuelEconomy}
            </span>
            <br />
          </div>
          <div className="col s12 button-container">
            <button
              className="col s4 push-s7 spec-button"
              id="compare-button"
              type="button"
            >
              Add Car for Comparison
            </button>
            <button
              className="col s4 pull-s4 spec-button"
              id="return-button"
              type="button"
            >
              Return to All Cars
            </button>
          </div>
        </div>
      </div>
    )
  }
}

render(<MainPage cars={cars} />, document.querySelector('body'))
