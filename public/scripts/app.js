'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Main Component',
        React.createElement(Header, null),
        React.createElement(Table, null),
        React.createElement(Games, null),
        React.createElement(TopScorer, null)
      );
    }
  }]);

  return Main;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Header Component'
      );
    }
  }]);

  return Header;
}(React.Component);

var Table = function (_React$Component3) {
  _inherits(Table, _React$Component3);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Table Component'
      );
    }
  }]);

  return Table;
}(React.Component);

var Games = function (_React$Component4) {
  _inherits(Games, _React$Component4);

  function Games() {
    _classCallCheck(this, Games);

    return _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).apply(this, arguments));
  }

  _createClass(Games, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Games Component'
      );
    }
  }]);

  return Games;
}(React.Component);

var TopScorer = function (_React$Component5) {
  _inherits(TopScorer, _React$Component5);

  function TopScorer() {
    _classCallCheck(this, TopScorer);

    return _possibleConstructorReturn(this, (TopScorer.__proto__ || Object.getPrototypeOf(TopScorer)).apply(this, arguments));
  }

  _createClass(TopScorer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Top Scorer'
      );
    }
  }]);

  return TopScorer;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));
