
let React = require('react');
let MediaQuery = require('react-responsive');

var Footer =
  React.createClass({
    render:function(){
      return (
        
        <div className="container">
        <MediaQuery minDeviceWidth={800}>
            <div className="bloque-bottom"></div>
            <div className="fixed-bottom">
              <h1>FOOTER </h1>
            </div>
        </MediaQuery>
        </div>
        

      );
    }
  });

module.exports = Footer;
