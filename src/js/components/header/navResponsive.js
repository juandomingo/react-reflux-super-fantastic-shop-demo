
'use strict';

let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute, RouteHandler, Link } = Router;

var NavResponsive = React.createClass({

  render: function() {

    return (
          <div className="pure-menu pure-menu-horizontal ">
          <ul className=' appNav-list pure-menu-list  '>
            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <div href="" id="shops" className="dropdownnav">
                <i className="fa fa-bars"></i>
              </div>
            <ul className="pure-menu-children">
                <li className='appNav-listItem pure-menu-item'> 
                   <div className="pure-menu pure-menu-scrollable custom-restricted">
                      <ul className="pure-menu-list">
                      <li className='appNav-listItem pure-menu-item'><Link className=' pure-menu-link' to='food' >Food</Link></li>
                      <li className='appNav-listItem pure-menu-item'><Link className='pure-menu-link' to='fashion' >Fashion</Link></li>
                    </ul>
                   </div>
                </li>

              </ul>
            </li>
          </ul>
          </div>



    );
  }

});

module.exports = NavResponsive;
