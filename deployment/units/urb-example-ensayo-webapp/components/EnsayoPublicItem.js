'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _reactHelmet = require('react-helmet');var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
var _htmlToReact = require('html-to-react');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-appbase-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class EnsayoPublicItem extends _react2.default.Component {
  render() {
    const { Viewer } = this.props;
    // In a fairly barbaric way, limit the length of headings so that they are not considered spam
    let contentH1 = Viewer.Ensayo.Ensayo_Title.substring(0, 100);
    let contentH2 = Viewer.Ensayo.Ensayo_Description.substring(0, 100);

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: Viewer.Ensayo.Ensayo_Title,
          meta: [{ name: 'description', content: Viewer.Ensayo.Ensayo_Description }] }),

        _react2.default.createElement(_Card2.default, null,
          _react2.default.createElement(_CardHeader2.default, { title: _react2.default.createElement('h1', null, contentH1), subheader: _react2.default.createElement('h2', null, contentH2) }),
          _react2.default.createElement(_CardContent2.default, null, new _htmlToReact.Parser().parse(Viewer.Ensayo.Ensayo_Content)))));



  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
EnsayoPublicItem, { Viewer: function () {return require('./__generated__/EnsayoPublicItem_Viewer.graphql');} });
//# sourceMappingURL=EnsayoPublicItem.js.map