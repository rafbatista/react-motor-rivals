import React from 'react'
import { render } from 'react-dom'

const mainPage = (
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
    <div className="row car-list" />
    <div className="row car-specs-list hidden" />
    <div className="row car-compare-list hidden" />
  </div>
)

render(mainPage, document.querySelector('body'))
