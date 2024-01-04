import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 8,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '48%',
    marginHorizontal: 8,
  },
});

export default GoalInput;
