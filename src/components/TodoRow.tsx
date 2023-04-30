import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TodoProps {
  text: string;
}

const TodoRow: React.FC<TodoProps> = ({text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.delete}>削除</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  delete: {
    fontSize: 16,
    color: 'red',
  },
});

export default TodoRow;
