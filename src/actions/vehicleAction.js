// we use constant variables instead of strings,
// which prevents hidden errors resulting from typos
export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

// these are just pure functions that return predefined actions
export function addFeatures(features) {
    return {
      type: ADD_FEATURES,
      payload: features
    };
  }

// our action creators ore more flexible than hard-coded actions,
// because we can pass parameters to tweak things when called
export function removeFeatures(features) {
  return {
    type: REMOVE_FEATURES,
    payload: features
  };
}
