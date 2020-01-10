// we use constant variables instead of strings,
// which prevents hidden errors resulting from typos
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// these are just pure functions that return predefined actions
export const addFeature = (features) => {
    return {
      type: ADD_FEATURE,
      payload: features
    };
  }

// our action creators ore more flexible than hard-coded actions,
// because we can pass parameters to tweak things when called
export const removeFeature = (features) => {
  return {
    type: REMOVE_FEATURE,
    payload: features
  };
}
