import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {fahrenheit: false}
}

export default connect(mapStateToProps)(Home);
