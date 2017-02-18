import { connect } from 'react-redux';
import Home from '../components/Home';
import { UPDATE_TEMPERATURE_UNIT } from '../redux/settings';

const mapStateToProps = (state) => {
  return {fahrenheit: false}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectUnit: () => {dispatch({type: UPDATE_TEMPERATURE_UNIT})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
