"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _styles = require("@material-ui/core/styles");

var _moment = _interopRequireDefault(require("moment"));
var _react = _interopRequireDefault(require("react"));
var _reactBigCalendar = _interopRequireDefault(require("react-big-calendar"));
var _reactRelay = require("react-relay");

var _ResponsiveContentArea = _interopRequireDefault(require("../../urb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_reactBigCalendar.default.momentLocalizer(_moment.default);

const styles = {
  card: {
    minWidth: 275 }



  // truncate "Translaticiarum";
  // insert into "Translaticiarum"(id, "Translaticiarum_User_id", "Translaticiarum_Description","Translaticiarum_Start", "Translaticiarum_Stop") values(0dba9aae-e84f-484a-9dc8-1a2be761c0ea, 00000000-0000-0000-0000-000000000000, 'item', '2017-09-09 10:00-0700', '2017-09-09 11:30-0700');
  // select * from "Translaticiarum";
};
class TranslaticiarumScreen extends _react.default.Component




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
        start: (0, _moment.default)(translaticiarum.Translaticiarum_Start).toDate(),
        end: (0, _moment.default)(translaticiarum.Translaticiarum_Stop).toDate() };

    });

    console.log(this.state.calendarView);
    console.log(calendarEvents);

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Translaticiarum" }),

      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_reactBigCalendar.default, {
        events: calendarEvents,
        view: this.state.calendarView,
        onView: this._handle_onView,
        selectable: true,
        onSelectSlot: this._handle_onSelectSlot })))));





  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(TranslaticiarumScreen), { Viewer: function () {return require("./__generated__/TranslaticiarumScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=TranslaticiarumScreen.js.map