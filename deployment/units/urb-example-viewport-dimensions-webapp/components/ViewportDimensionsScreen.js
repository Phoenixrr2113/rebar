'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _styles = require('@material-ui/core/styles');

var _Table = require('@material-ui/core/Table');var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('@material-ui/core/TableBody');var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('@material-ui/core/TableCell');var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = require('@material-ui/core/TableHead');var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require('@material-ui/core/TableRow');var _TableRow2 = _interopRequireDefault(_TableRow);

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-appbase-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);
var _ViewportContext = require('../../urb-appbase-webapp/components/ViewportContext');var _ViewportContext2 = _interopRequireDefault(_ViewportContext);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  card: {
    minWidth: 275 } };



class ViewportDimensionsScreen extends _react2.default.Component


{
  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_ViewportContext2.default.Consumer, null,
          ({ totalWidth, totalHeight }) => {
            const data = [
            { name: 'totalWidth', value: totalWidth },
            { name: 'totalHeight', value: totalHeight }];


            return (
              _react2.default.createElement(_Card2.default, { className: classes.card },
                _react2.default.createElement(_CardHeader2.default, { title: 'Viewport Dimensions' }),
                _react2.default.createElement(_Table2.default, null,
                  _react2.default.createElement(_TableHead2.default, null,
                    _react2.default.createElement(_TableRow2.default, null,
                      _react2.default.createElement(_TableCell2.default, null, 'Property'),
                      _react2.default.createElement(_TableCell2.default, { numeric: true }, 'Value'))),


                  _react2.default.createElement(_TableBody2.default, null,
                    data.map(n => {
                      return (
                        _react2.default.createElement(_TableRow2.default, { key: n.name },
                          _react2.default.createElement(_TableCell2.default, null, n.name),
                          _react2.default.createElement(_TableCell2.default, { numeric: true }, n.value)));


                    }))),


                _react2.default.createElement(_CardContent2.default, null)));


          })));



  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ViewportDimensionsScreen), { Viewer: function () {return require('./__generated__/ViewportDimensionsScreen_Viewer.graphql');} });
//# sourceMappingURL=ViewportDimensionsScreen.js.map