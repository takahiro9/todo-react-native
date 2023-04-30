import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import useTodo from '../hooks/useTodo';
import TodoContentInput from '../components/TodoContentInput';
import TodoRow from '../components/TodoRow';

const TodoListScreen = () => {
  const {todoList} = useTodo();
  return (
    <SafeAreaView>
      <TodoContentInput />
      <View style={{borderWidth: 1, borderColor: '#ccc', margin: 5}} />
      <FlatList
        data={todoList}
        renderItem={({item}) => <TodoRow text={item.content} />}
        keyExtractor={(_, index) => String(index)}
      />
    </SafeAreaView>
  );
};

export default TodoListScreen;
