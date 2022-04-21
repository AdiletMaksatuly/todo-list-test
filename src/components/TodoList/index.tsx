import { List } from 'antd';
import Text from 'antd/lib/typography/Text';
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
    todoItemDone: classes['todo-item-done'],
    todoItemBtn: classes['todo-item-btn'],
    todoItemText: classes['todo-item-text'],
};

const TodoList: FC<TodoListProps> = ({
    todos,
    classNames,
    isTodosLoading,
    onTodoDone,
    onDelete,
}) => {
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
