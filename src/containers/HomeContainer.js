import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {fahrenheit: false}
}

const mapDispatchToProps = (state) => {
  return {
    onSelectUnit: () => {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
