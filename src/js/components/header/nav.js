
'use strict';

let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute, RouteHandler, Link } = Router;

var Nav = React.createClass({

  render: function() {



    return (


    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><Link className='appBtn' to='food' >Food</Link></li>
        <li className="pure-menu-item"><Link className='appBtn' to='fashion' >Fashion</Link></li>
    </ul>
  </div>

    );
  }

});

module.exports = Nav;
