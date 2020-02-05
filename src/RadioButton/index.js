import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  handleClick = item => {
    if (this.props.isContainerClickable) {
      this.radioClick(item);
    }
  };

  radioClick = item => {
    this.setState({value: item.id});
    this.props.onValueChange(item);
  };

  render() {
    let {
      formStyle,
      containerStyle,
      circleContainerStyle,
      innerCircleStyle,
      labelStyle,
    } = this.props;

    containerStyle = {
      ...styles.buttonContainer,
      ...containerStyle,
    };

    circleContainerStyle = {
      ...styles.circle,
      ...circleContainerStyle,
    };

    innerCircleStyle = {
      ...styles.checkedCircle,
      ...innerCircleStyle,
    };

    labelStyle = {
      ...labelStyle,
    };

    return (
      <View style={formStyle}>
        {this.props.data.map(item => {
          <TouchableOpacity
            activeOpacity={this.props.isContainerClickable ? 0.6 : 1.0}
            onPress={() => this.handleClick(item)}
            key={item.id}
            style={containerStyle}>
            <TouchableOpacity
              style={circleContainerStyle}
              onPress={() => this.radioClick(item)} // we set our value state to id
            >
              {this.state.value === item.id && (
                <View style={innerCircleStyle} />
              )}
            </TouchableOpacity>
            <Text style={labelStyle}>{item.text}</Text>
          </TouchableOpacity>;
        })}
      </View>
    );
  }
}
