
'use strict';

let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute, RouteHandler, Link } = Router;

var Login = React.createClass({

  render: function() {

    return (
      <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a className="pure-u-1-3 btn btn-block btn-social btn-facebook" href="/auth/facebook"><span className="fa fa-facebook"></span><span className="toDisappear"> Facebook</span></a></li>
        <li className="pure-menu-item"><a className="pure-u-1-3 btn btn-block btn-social btn-google" href="/auth/google"><span className="fa fa-google-plus"></span><span className="toDisappear"> Google</span></a></li>
    </ul>
  </div>
    );
  }

});

module.exports = Login;
