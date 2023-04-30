import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import useTodo from '../hooks/useTodo';

const TodoContentInput: React.FC = () => {
  const [text, setText] = useState('');
  const {registTodo} = useTodo();

  const handleRegistTodo = () => {
    if (text) {
      registTodo(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} placeholder="Todo..." />
      <TouchableOpacity style={styles.button} onPress={handleRegistTodo}>
        <Text style={{color: 'white'}}>追加する</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default TodoContentInput;
