import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const GoalItem = ({ courseGoals, onDelete }) => {
  const renderGoal = ({ item }) => (
    <TouchableOpacity onPress={onDelete.bind(this, item.id)}>
      <View style={styles.listItems}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={(item, key) => item.id}
      data={courseGoals}
      renderItem={renderGoal}
    />
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default GoalItem;
