import {TodoRealmContext} from '../infrastructure/realm/models';
import {Todo} from '../infrastructure/realm/models/Todo';
const {useRealm, useQuery} = TodoRealmContext;

type TodoType = {
  content: string;
  status: '完了' | '未完了';
};

type HookType = {
  todoList: TodoType[];
  registTodo: (content: string) => void;
};

const STATUS_MAP = {
  0: '未完了',
  1: '完了',
} as const;

const useTodo = (): HookType => {
  const realm = useRealm();
  const todoResult = useQuery(Todo);
  const registTodo = (content: string) => {
    realm.write(() => new Todo(realm, content, 0));
  };

  return {
    registTodo,
    todoList: todoResult.map(todo => {
      return {content: todo.content, status: STATUS_MAP[todo.status]};
    }),
  };
};

export default useTodo;
