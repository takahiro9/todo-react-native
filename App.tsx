import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TodoListNavigator from './src/navigation/TodoListNavigator';
import {TodoRealmContext} from './src/infrastructure/realm/models';

function App(): JSX.Element {
  const {RealmProvider} = TodoRealmContext;
  return (
    <NavigationContainer>
      <RealmProvider>
        <TodoListNavigator />
      </RealmProvider>
    </NavigationContainer>
  );
}

export default App;
