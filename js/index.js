var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Headline = function (_React$Component) {
	_inherits(Headline, _React$Component);

	function Headline() {
		_classCallCheck(this, Headline);

		return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
	}

	_createClass(Headline, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "text-center" },
				React.createElement(
					"h1",
					{ className: "display-1" },
					"Bill Evans"
				),
				React.createElement(
					"h2",
					{ className: "" },
					"One of the greatest jazz pianists"
				)
			);
		}
	}]);

	return Headline;
}(React.Component);

var Picture = function (_React$Component2) {
	_inherits(Picture, _React$Component2);

	function Picture() {
		_classCallCheck(this, Picture);

		return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
	}

	_createClass(Picture, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "text-center" },
				React.createElement("img", { className: "img-thumbnail", src: "http://bit.ly/2DcvCiv", alt: "Bills Evans playing piano, smoking a cigarette" }),
				React.createElement(
					"p",
					{ className: "" },
					"Bill Evans playing his beautiful piano"
				)
			);
		}
	}]);

	return Picture;
}(React.Component);

var Timeline = function (_React$Component3) {
	_inherits(Timeline, _React$Component3);

	function Timeline() {
		_classCallCheck(this, Timeline);

		return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
	}

	_createClass(Timeline, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row" },
				React.createElement("div", { className: "col-md-2" }),
				React.createElement(
					"div",
					{ className: "col-md-8" },
					React.createElement(
						"h3",
						{ className: "text-center" },
						"Here's a timeline of Bill Evans' life:"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1929"
							),
							" - Born in Plainfield, New Jersey"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1946"
							),
							" - Attends Southeastern Louisiana University on a flute scholarship"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1950"
							),
							" - Performs Beethoven's Piano Concerto No.3 for his senior recital, graduating with a Bachelor of Music degree, majoring in piano, and Bachelor's in Music Education"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1951-1954"
							),
							" - Plays flute, piccolo, and piano in the Fifth U.S. Army Band at Fort Sheridan"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1953"
							),
							" - Composes his most well known tune, \"Waltz for Debby,\" for his young niece"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1955"
							),
							" - Returned to New York City and enrolled in the Mannes College of Music for a three-semester postgraduate course in musical composition"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1956"
							),
							" - Works with George Russel"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1958"
							),
							" - Auditions for Miles Davis' band and joins"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1959"
							),
							" - Records ",
							React.createElement(
								"em",
								null,
								"Kind of Blue"
							),
							" with Miles Davis and ",
							React.createElement(
								"em",
								null,
								"Portrait in Jazz"
							),
							" with Scott LaFaro and Paul Motian"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1961"
							),
							" - Records ",
							React.createElement(
								"em",
								null,
								"Explorations"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								null,
								"1980"
							),
							" - Dies"
						)
					)
				),
				React.createElement("div", { className: "col-md-2" })
			);
		}
	}]);

	return Timeline;
}(React.Component);

var Quote = function (_React$Component4) {
	_inherits(Quote, _React$Component4);

	function Quote() {
		_classCallCheck(this, Quote);

		return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
	}

	_createClass(Quote, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row" },
				React.createElement("div", { className: "col-md-2" }),
				React.createElement(
					"div",
					{ className: "col-md-8" },
					React.createElement(
						"blockquote",
						null,
						React.createElement(
							"p",
							{ className: "lead" },
							"\"How do you think your playing has changed since you first started? Is it deliberate or is it just happening to change?\""
						),
						React.createElement(
							"p",
							{ className: "lead" },
							"\"Bill Evans: \"Well it's deliberate, ahh but I stay along the same lines...I try to get a little deeper into what I'm doing. As far as that kind of playing goes, [jazz playing rather than an earlier example where he played Waltz for Debbie without any improvisation or sense of swing], I think my left hand is a little more competent and uhh...of course I worked a lot on inner things happening like inner voices I've worked on.\""
						),
						React.createElement(
							"footer",
							null,
							React.createElement(
								"cite",
								null,
								"- Marian McPartland"
							)
						)
					),
					React.createElement(
						"h3",
						null,
						"To read more about Bill Evans, head to ",
						React.createElement(
							"a",
							{ href: "https://en.wikipedia.org/wiki/Bill_Evans", target: "_blank" },
							"Wikipedia"
						)
					)
				),
				React.createElement("div", { className: "col-md-2" })
			);
		}
	}]);

	return Quote;
}(React.Component);

var Footer = function (_React$Component5) {
	_inherits(Footer, _React$Component5);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"footer",
				{ "class": "" },
				React.createElement("hr", null),
				React.createElement(
					"p",
					{ className: "text-center" },
					"By David Narintarangkool"
				)
			);
		}
	}]);

	return Footer;
}(React.Component);

var Profile = function (_React$Component6) {
	_inherits(Profile, _React$Component6);

	function Profile() {
		_classCallCheck(this, Profile);

		return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	}

	_createClass(Profile, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "jumbotron" },
					React.createElement(Headline, null),
					React.createElement(Picture, null),
					React.createElement(Timeline, null),
					React.createElement(Quote, null)
				),
				React.createElement(Footer, null)
			);
		}
	}]);

	return Profile;
}(React.Component);

var App = function (_React$Component7) {
	_inherits(App, _React$Component7);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(Profile, null);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));