export const UPDATE_TEMPERATURE_UNIT = 'weather/update-temperature-unit';

const initialState = {fahrenheit: false};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_TEMPERATURE_UNIT:
      return {
        ...state,
        fahrenheit: action.data.fahrenheit,
      };
    default:
      return state;
  }
}
