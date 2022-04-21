import { Button, List, Skeleton } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { ITodo } from '../../models/ITodo';
import TodoItem from '../TodoItem';
import classes from './index.module.css';

type TodoListProps = {
    todos: ITodo[];
    onTodoDone: (id: number) => void;
    onDelete: (id: number) => void;
    classNames?: string[];
    isTodosLoading?: boolean;
};

const styles = {
    todoItem: classes['todo-item'],
    todoItemBtn: classes['todo-item-btn'],
    todoItemBtnDone: classes['todo-item-btn-done'],
    todoItemText: classes['todo-item-text'],
};

const TodoList: FC<TodoListProps> = ({
    todos,
    classNames,
    isTodosLoading,
    onTodoDone,
    onDelete,
}) => {
    const header = (
        <>
            <Title>Your todos</Title>
            <Button type="primary">Create</Button>
        </>
    );

    const footer = (
        <Text>
            <b>Don't forget</b> to do 'em!
        </Text>
    );

    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={todos}
            header={header}
            footer={footer}
            renderItem={(item: ITodo) => (
                <TodoItem
                    todo={item}
                    styles={styles}
                    onDelete={onDelete}
                    onTodoDone={onTodoDone}
                    isTodosLoading={isTodosLoading}
                    key={item.id}
                />
            )}
            className={classNames?.join(' ')}
        />
    );
};

export default TodoList;
