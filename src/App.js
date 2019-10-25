import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeatures, removeFeatures } from "./actions/vehicleAction";

const App = ({car, additionalFeatures, additionalPrice, AddedFeatures}) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeatures={removeFeatures} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={additionalFeatures}
          addFeatures={addFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeatures, removeFeatures
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
