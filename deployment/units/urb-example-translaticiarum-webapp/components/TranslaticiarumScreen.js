'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _styles = require('@material-ui/core/styles');

var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactBigCalendar = require('react-big-calendar');var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_reactBigCalendar2.default.momentLocalizer(_moment2.default);

const styles = {
  card: {
    minWidth: 275 }



  // truncate "Translaticiarum";
  // insert into "Translaticiarum"(id, "Translaticiarum_User_id", "Translaticiarum_Description","Translaticiarum_Start", "Translaticiarum_Stop") values(0dba9aae-e84f-484a-9dc8-1a2be761c0ea, 00000000-0000-0000-0000-000000000000, 'item', '2017-09-09 10:00-0700', '2017-09-09 11:30-0700');
  // select * from "Translaticiarum";
};
class TranslaticiarumScreen extends _react2.default.Component




{




  constructor(props, context) {
    super(props, context);this.






    _handle_onView = view => {
      this.setState({ calendarView: view });
    };this.

    _handle_onSelectSlot = slotInfo => {
      console.log(slotInfo);
    };this.state = { calendarView: 'week' };}

  render() {
    const { classes, Viewer } = this.props;

    const translaticiarumEdges = Viewer.Translaticiarums.edges;

    const calendarEvents = translaticiarumEdges.map(translaticiarumEdge => {
      const translaticiarum = translaticiarumEdge.node;

      return {
        title: translaticiarum.Translaticiarum_Description,
        start: (0, _moment2.default)(translaticiarum.Translaticiarum_Start).toDate(),
        end: (0, _moment2.default)(translaticiarum.Translaticiarum_Stop).toDate() };

    });

    console.log(this.state.calendarView);
    console.log(calendarEvents);

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_CardHeader2.default, { title: 'Translaticiarum' }),

          _react2.default.createElement(_CardContent2.default, null,
            _react2.default.createElement(_reactBigCalendar2.default, {
              events: calendarEvents,
              view: this.state.calendarView,
              onView: this._handle_onView,
              selectable: true,
              onSelectSlot: this._handle_onSelectSlot })))));





  }}TranslaticiarumScreen.contextTypes = { router: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(TranslaticiarumScreen), { Viewer: function () {return require('./__generated__/TranslaticiarumScreen_Viewer.graphql');} });
//# sourceMappingURL=TranslaticiarumScreen.js.map