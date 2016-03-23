'use strict';

let React = require('react');
let Reflux = require('reflux');

let basketStore = require('../../stores/basket-store');
let actions = require('../../actions/app-actions');

let BasketCheckOut = React.createClass({

  mixins: [Reflux.connect(basketStore), Reflux.ListenerMixin],

  render: function() {
    let clickHandler = () => {
      actions.checkout();
    };

    return (
      <a onClick={clickHandler} className="addBasket pure-button">
         <i className="fa fa-shopping-cart"></i>Checkout
      </a>
    );
  }
});

module.exports = BasketCheckOut;
