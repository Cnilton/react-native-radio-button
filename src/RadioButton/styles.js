import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#2f3259',
  },
});

export default styles;
