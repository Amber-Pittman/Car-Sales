import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AdditionalFeatures from './components/AdditionalFeatures';
import AddedFeatures from "./components/AddedFeatures";
import Total from './components/Total';

import { addFeature, removeFeature } from "./actions/vehicleAction";

const App = ({additionalFeatures, car, additionalPrice, addFeature, removeFeature}) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} 
                       removeFeatures={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={additionalFeatures}
          addFeatures={addFeature} />
        <Total car={car} 
               additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};



const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
}

// when key:value are the same, can just call the key
const mapDispatchToProps = {
  addFeature,
  removeFeature
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
