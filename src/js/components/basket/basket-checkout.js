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
      <button onClick={clickHandler} className="addBasket appBasket-nrItems pure-button">
        {this.props.text}
      </button>
    );
  }
});

module.exports = BasketCheckOut;
