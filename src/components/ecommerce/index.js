import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Catalog from './catalog';

class Ecommerce extends Component {

  getComponent(route) {
    switch(route){
      case 'catalog':
        return 'catalog';
      default:
        return 'catalog';
    }
  }

  render() {
    const {route} = this.props;
    return (
      <div className='shopping-cart'>
        <Catalog/>
      </div>
    );
  }
}

Ecommerce.propTypes = {
  route: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    route: state.route
  }
}


export default connect(mapStateToProps)(Ecommerce);
