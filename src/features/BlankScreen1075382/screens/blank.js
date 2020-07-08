import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { withStyles, Text, Button, CheckBox, Radio, Toggle, Icon, Input, Datepicker } from 'react-native-ui-kitten';
import Slider from '@react-native-community/slider';

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  };

  state = { }

  render = () => <View style={this.props.themedStyle.container}></View>;
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}));
