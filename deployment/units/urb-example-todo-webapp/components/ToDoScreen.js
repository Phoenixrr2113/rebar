"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireWildcard(require("@material-ui/core/Card"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _ResponsiveContentArea = _interopRequireDefault(require("../../urb-appbase-webapp/components/ResponsiveContentArea"));
var _ToDoAddMutation = _interopRequireDefault(require("../../urb-example-todo-client/relay/ToDoAddMutation"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class ToDoScreen extends _react.default.Component









{
  constructor(props, context) {
    super(props, context);this.






    _handle_onKeyDown_AddToDo = e => {
      if (e.keyCode === 13) {
        const { relay, Viewer } = this.props;

        _ToDoAddMutation.default.commit(relay.environment, Viewer, this.state.ToDo_Text_New);

        this.setState({
          ToDo_Text_New: '' });

      }
    };this.

    _handle_OnChange = event => {
      this.setState({
        ToDo_Text_New: event.target.value });

    };this.state = { ToDo_Text_New: '' };}

  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_Card.CardHeader, { title: "TO DOs", subheader: "List of TO DOs for user" }),
      this.props.children,
      _react.default.createElement("div", { style: { marginLeft: 4, marginRight: 4 } }),
      _react.default.createElement(_TextField.default, {
        label: "What needs to be done?",
        value: this.state.ToDo_Text_New,
        fullWidth: true,
        onKeyDown: this._handle_onKeyDown_AddToDo,
        onChange: this._handle_OnChange }))));




  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ToDoScreen), { Viewer: function () {return require("./__generated__/ToDoScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=ToDoScreen.js.map