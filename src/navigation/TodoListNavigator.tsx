import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from '../screens/TodoListScreen';

const Stack = createNativeStackNavigator();
const TodoListNavigator = () => (
  <Stack.Navigator initialRouteName="TodoList">
    <Stack.Screen
      name="TodoList"
      component={TodoListScreen}
      options={{title: 'My home'}}
    />
  </Stack.Navigator>
);

export default TodoListNavigator;
