import React, { Component, PropTypes } from 'react';
import Header from './header';
import CatalogItem from './catalog_item';
import { connect } from 'react-redux';
import { products } from '../../data/shopping_cart';
import { saveProducts } from '../../modules/catalog';
import { addToCart } from '../../modules/cart';
import { goToCart } from '../../modules/route';

class Catalog extends Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(saveProducts(products));
    }, 400);
  }

  addToCart(product) {
    this.props.dispatch(addToCart(product.id));
    this.props.dispatch(goToCart());
  }

  removeFromCart() {

  }

  changeQuantity() {

  }

  renderProducts() {
    const items = this.props.products.map((product, i) => {
      return <CatalogItem
        onAddToCart = { this.addToCart }
        key={ product.id }
        product={ product }/>;
    });
    return items.length ? items : <p>Cargando ...</p>;
  }

  render() {
    return (
      <div className="catalog">
        <Header text='Productos'/>
        <div className="catalog-list">
          { this.renderProducts() }
        </div>
        <div className="footer"></div>
    </div>
  );
  }
}

Catalog.propTypes = {
  products: PropTypes.array,
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
  return {
    products: state.catalog
  }
}

export default connect(mapStateToProps)(Catalog);
