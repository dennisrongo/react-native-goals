import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";

const GoalInput = ({ onAddGoal, onCloseAddGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const onAddGoalHandler = () => {
    if (!enteredGoal || enteredGoal.length === 0) {
      return;
    }

    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCloseAddGoal} />
          </View>
          <View styles={styles.button}>
            <Button title="ADD" onPress={onAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "50%",
  },
});

export default GoalInput;
