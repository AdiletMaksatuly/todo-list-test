import { Button, Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([
        { text: 'asdasd', id: 1, done: false },
        { text: 'asdasd', id: 2, done: false },
        { text: 'asdasd', id: 3, done: false },
    ]);

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

    return (
        <Layout className="app">
            <Navbar />
            <Content className="app-content">
                <Row style={{ flexGrow: 1 }}>
                    <Col span={20} offset={2} style={{ display: 'flex', flexDirection: 'column' }}>
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
