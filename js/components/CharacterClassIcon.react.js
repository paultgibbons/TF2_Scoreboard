/** @jsx React.DOM */
var React = require('react');

var _DEFAULT_CLASS = "../../static/img/noclass.png";

var CharacterClassIcon = React.createClass({
  render: function() {
    if(!this.props.charClass) this.props.charClass = "Unknown";
    var charClass = this.props.charClass.toLowerCase();
    var iconPath = charClass === "unknown" ? _DEFAULT_CLASS : "../../static/img/" + charClass + ".png";

    return (
      <img src={iconPath} />
    );
  }
});

module.exports = CharacterClassIcon;
