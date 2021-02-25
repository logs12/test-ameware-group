import { connect } from 'react-redux';
import { FETCH_DATA } from '@/constants/data';
import HomePage from './component';

const mapStateToProps = ({ data }) => ({
  data: data.data,
  isPending: data.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (terms) => dispatch({ type: FETCH_DATA, payload: { terms } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
