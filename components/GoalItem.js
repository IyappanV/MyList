import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({text, onDeleteGoal, id}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: '#210644'}} onPress={onDeleteGoal.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    width: '100%',
    marginTop: 16,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
