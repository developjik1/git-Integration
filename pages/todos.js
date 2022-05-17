import { `useMutation`, `useQuery`, `useQuery`Client } from 'react-query';
import axios from 'axios';
import { ChangeEvent, FormEvent, Fragment, useCallback, useState } from 'react';

const getTodos = async () => {
  const { data } = await axios.get('http://localhost:3001/todos');
  return data;
};

const addTodo = async todo => {
  const { data } = await axios.post('http://localhost:3001/todos/123', {
    todo,
    done: false,
  });

  return data;
};

const TodosPage = () => {
  const [todo, setTodo] = useState('');

  const queryClient = `useQuery`Client();

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = `useQuery`('todos', getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = `useMutation`(addTodo, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries('todos');
    // },
    // onSuccess: data => {
    //   queryClient.setQueryData('todos', oldData => {
    //     if (!oldData) {
    //       return [];
    //     }
    //
    //     return [...oldData, { id: data.id, todo: data.todo, done: false }];
    //   });
    // },
    onMutate: async newTodo => {
      await queryClient.cancelQueries('todos');

      const previousTodos = queryClient.getQueryData('todos');

      queryClient.setQueryData('todos', oldData => {
        if (!oldData) {
          return [];
        }

        return [
          ...oldData,
          { id: oldData.length + 1, todo: newTodo, done: false },
        ];
      });

      return { previousTodos };
    },

    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData('todos', context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      mutate(todo);
      setTodo('');
    },
    [mutate, todo],
  );

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>할 일: </label>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">작성</button>
      </form>

      <br />

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          todos?.map(todo => (
            <Fragment key={todo.id}>
              <div>ID: {todo.id}</div>
              <div>할 일: {todo.todo}</div>

              <br />
              <hr />
            </Fragment>
          ))
        )}
      </div>
    </>
  );
};

export default TodosPage;
