import { Button, List, Skeleton } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { FC } from 'react';
import { ITodo } from '../../models/ITodo';

interface TodoItemProps {
    todo: ITodo;
    styles: {
        [key: string]: string;
    };
    onTodoDone: (id: number) => void;
    onDelete: (id: number) => void;

    isTodosLoading?: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ todo, isTodosLoading, styles, onTodoDone, onDelete }) => {
    const extra = (
        <Button type="primary" danger onClick={() => onDelete(todo.id)}>
            Delete
        </Button>
    );

    return (
        <List.Item extra={extra} className={styles.todoItem}>
            <Skeleton active loading={isTodosLoading}>
                <button
                    onClick={() => onTodoDone(todo.id)}
                    className={[styles.todoItemBtn, todo.done ? styles.todoItemBtnDone : ''].join(
                        ' '
                    )}
                >
                    <Text>{todo.text}</Text>
                </button>
            </Skeleton>
        </List.Item>
    );
};

export default TodoItem;
