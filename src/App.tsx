import { Button, Col, Divider, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React, { useEffect, useState } from 'react';
import './App.css';
import CreateTodoForm from './components/CreateTodoForm';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { ITodo } from './models/ITodo';

function App() {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const [todos, setTodos] = useState<ITodo[]>(savedTodos);
    const [isTodoCreating, setIsTodoCreating] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onTodoDone = (id: number) => {
        const newTodos = [...todos];
        const doneTodo = newTodos.find((todo) => todo.id === id);

        if (!doneTodo) return;

        doneTodo.done = !doneTodo.done;
        setTodos(newTodos);
    };

    const onTodoDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onTodoCreate = (todo: ITodo) => {
        setTodos([...todos, todo]);
        setIsTodoCreating(false);
    };

    const onTodoCreateCancel = () => {
        setIsTodoCreating(false);
    };

    return (
        <Layout className="app">
            <Navbar />
            <Content className="app-content">
                <Row style={{ flexGrow: 1 }}>
                    <Col span={20} offset={2} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title>Your todos</Title>
                        <Button
                            type="primary"
                            onClick={() => setIsTodoCreating(true)}
                            className="create-todo-btn"
                        >
                            Create
                        </Button>
                        {isTodoCreating && (
                            <>
                                <Divider />
                                <CreateTodoForm
                                    onCreate={onTodoCreate}
                                    onCancel={onTodoCreateCancel}
                                />
                            </>
                        )}
                        <Divider />
                        <TodoList
                            todos={todos}
                            classNames={['todo-list']}
                            onTodoDone={onTodoDone}
                            onDelete={onTodoDelete}
                        />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default App;
