import React, {Component} from 'react';

import {View, Text, TouchableOpacity, FlatList} from 'react-native';

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

  renderItem = item => {
    let {
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
      <TouchableOpacity
        activeOpacity={this.props.isContainerClickable ? 0.6 : 1.0}
        onPress={() => this.handleClick(item.item)}
        key={item.item.id}
        style={containerStyle}>
        <TouchableOpacity
          style={circleContainerStyle}
          onPress={() => this.radioClick(item.item)} // we set our value state to id
        >
          {this.state.value === item.item.id && (
            <View style={innerCircleStyle} />
          )}
        </TouchableOpacity>
        <Text style={labelStyle}>{item.item.text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    let {formStyle} = this.props;

    formStyle = {
      ...styles.formContainer,
      ...formStyle,
    };
    return (
      <FlatList
        contentContainerStyle={formStyle}
        keyExtractor={(item, index) => String(index)}
        data={this.props.data}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}
