import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const setIsAddModeHandler = (isTrue) => {
    setIsAddMode(isTrue);
  };

  const closeAddGoalHandler = () => {
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => {
        return goal.id !== goalId;
      });
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddModeHandler(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCloseAddGoal={closeAddGoalHandler}
      />
      <GoalItem courseGoals={courseGoals} onDelete={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
