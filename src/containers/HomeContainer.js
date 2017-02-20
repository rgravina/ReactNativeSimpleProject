import { connect } from 'react-redux';
import Home from '../components/Home';
import { UPDATE_TEMPERATURE_UNIT } from '../redux/settings';

const mapStateToProps = (state) => {
  return {fahrenheit: state.settings.fahrenheit}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectUnit: (unit) => {dispatch({
      type: UPDATE_TEMPERATURE_UNIT,
      data: {fahrenheit: unit == 'f'}
    })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
