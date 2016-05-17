import React, { Component, PropTypes } from 'react';

class CatalogItem extends Component {

  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e) {
    this.props.onAddToCart(this.props.product);
  }

  render() {
    const { product } = this.props;
    return (
        <div className="product row">
          <div className="product-summary col three-fourths">
            <h2 className="product-title">{ product.name }</h2>
            <div className="product-details">
              <div className="product-image col one-fourth">
                <img src="http://placehold.it/64x64" height="64" width="64" />
              </div>
              <div className="product-summary col three-fourths">
                <p>{ product.description }</p>
              </div>
            </div>
          </div>
          <div className="product-add-to-cart col one-fourth">
            <div className="product-price">{ product.price }</div>
            <div className="add-to-cart">
              <a className="button" onClick={ this.handleAddToCart }>Comprar</a>
            </div>
          </div>
        </div>
    )
  }
}

CatalogItem.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
}

export default CatalogItem;
