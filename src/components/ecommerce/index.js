import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Catalog from './catalog';
import Cart from './cart';

class Ecommerce extends Component {

  getComponent(route) {
    switch(route){
      case 'catalog':
        return <Catalog/>;
      case 'cart':
        return <Cart/>;
      default:
        return 'catalog';
    }
  }

  render() {
    const {route} = this.props;
    return (
      <div className='shopping-cart'>
        { this.getComponent(route) }
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
