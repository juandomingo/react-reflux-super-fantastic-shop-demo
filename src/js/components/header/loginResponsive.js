
'use strict';

let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute, RouteHandler, Link } = Router;

var LoginResponsive = React.createClass({

  render: function() {

    return (

      <div className="">

            <a className="pure-u-1-2 btn btn-social-icon btn-facebook" href="/auth/facebook"><span className="fa fa-facebook"></span></a>
            <a className="pure-u-1-2 btn btn-social-icon btn-google" href="/auth/google"><span className="fa fa-google-plus"></span></a>

      </div>

    );
  }

});

module.exports = LoginResponsive;
