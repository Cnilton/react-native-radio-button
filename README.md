![npm](https://img.shields.io/npm/v/react-native?color=%232fa90f&label=react-native&style=plastic)
![npm](https://img.shields.io/npm/dm/react-native-customizable-radio-button?style=plastic)

# About

This is a React-Native RadioButton component that you can freely modify its styles.

## Instalation

To install just input the following command:

```bash
npm i react-native-customizable-radio-button
```

or

```bash
yarn add react-native-customizable-radio-button
```

## Basic Usage

```javascript
//...
import RadioButton from 'react-native-customizable-radio-button';

const options = [
  {
    id: 1, // required
    text: 'Most High Pay', //required
  },
  {
    id: 2,
    text: 'Most Perfomance',
  },
];

export default class reactNativeRadioButtonForm extends Component {

  onValueChange = item => {
    console.log(item);
  };

  render() {
    return (
      <RadioButton
        data={options} //required
        onValueChange={this.onValueChange.bind(this)} //required
      />
    );
  }
}
```

## Advanced Usage

```javascript
//...
import RadioButton from 'react-native-customizable-radio-button';

const options = [
  {
    id: 1, // required
    text: 'Most High Pay', //required
  },
  {
    id: 2,
    text: 'Most Perfomance',
  },
];

export default class reactNativeRadioButtonForm extends Component {

  onValueChange = item => {
    console.log(item);
  };

  render() {
    return (
      <RadioButton
        // formStyle = {{}} // add your styles to whole form container
        // containerStyle={{}} // add your styles to each item container
        // circleContainerStyle={{}} // add your styles to each outer circle
        // innerCircleStyle={{}} // add your styles to each inner circle
        // labelStyle={{}} // add your styles to each label
        // isContainerClickable={false} // default false, when true whole item container changes value
        data={options} //required
        onValueChange={this.onValueChange.bind(this)} //required
      />
    );
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.