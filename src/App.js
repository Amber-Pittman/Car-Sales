import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AdditionalFeatures from './components/AdditionalFeatures';
import AddedFeatures from "./components/AddedFeatures";
import Total from './components/Total';

import { addFeatures, removeFeatures } from "./actions/vehicleAction";

const App = (props) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeatures={props.removeFeatures} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures}
          addItem={props.addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};



function mapStateToProps(state) {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  };
}

// when key:value are the same, can just call the key
const mapDispatchToProps = {
  addFeatures, removeFeatures
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
