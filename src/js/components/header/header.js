
let React = require('react');
let Basket = require('../basket/basket.js');
let Login = require('./login.js');
let LoginResponsive = require('./loginResponsive.js');
let Nav = require('./nav.js');
let NavResponsive = require('./navResponsive.js');
let MediaQuery = require('react-responsive');

var Header =
	React.createClass({
		render:function(){
			return (
				<div>
					

		<MediaQuery minDeviceWidth={800}>
			<div className='container'>
				<div className="pure-g">
					<header className="appHeader pure-u-1">
						<h1>Super fantastic shop</h1>
						<p>A demo shop making use of the incredible powers provided by <a href="http://facebook.github.io/react/" target="_new">react</a>, <a href="https://github.com/rackt/react-router" target="_new">react-router</a> and <a href="https://www.npmjs.com/package/reflux" target="_new">reflux</a>. <a href="https://github.com/stylecoder/react-reflux-super-fantastic-shop-demo" target="_new">View source code here.</a>
						</p>

							{ this.props.children }
					</header>

					<div className="fixed-container">
						<div className="container">
							<Basket className="pure-g" />
						</div>
					</div>
				</div>
			</div>

			<div className="container pure-g">
				<div className="pure-u-1-2">
					<Nav />
				</div>

				<div className="float-right pure-u-1-3">
					<p >Login or Register with: </p>
					<Login/>
				</div>
			</div>

		</MediaQuery>


		<MediaQuery maxDeviceWidth={800}>

					<div className="container bloque-top"></div>
					<div className="appBasket fixed-container pure-menu pure-menu-horizontal">
						<ul className="pure-menu-list">
							<li className="pure-menu-item pure-menu-selected"><NavResponsive /></li>
							<li className="pure-menu-item pure-menu-selected">
								<div className="container">
									<p className="logintext" >Login </p>
									<LoginResponsive className=" inline pure-u-1-2"/>
								</div>
							</li>
							<li className="pure-menu-item"><Basket/></li>
						</ul>
					</div>

			 

					<div className="appHeader">
							<h1>Super fantastic shop</h1>
							<p>A demo shop making use of the incredible powers provided by <a href="http://facebook.github.io/react/" target="_new">react</a>, <a href="https://github.com/rackt/react-router" target="_new">react-router</a> and <a href="https://www.npmjs.com/package/reflux" target="_new">reflux</a>. <a href="https://github.com/stylecoder/react-reflux-super-fantastic-shop-demo" target="_new">View source code here.</a></p>
					</div>


	</MediaQuery>

</div>
			);
		}
	});
module.exports = Header;
