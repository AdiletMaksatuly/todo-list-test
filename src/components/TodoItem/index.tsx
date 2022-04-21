import { Badge, Button, List, Result, Skeleton, Space, Tag } from 'antd';
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
    const Extra = (
        <Button type="primary" danger onClick={() => onDelete(todo.id)}>
            Delete
        </Button>
    );

    const TodoContent = (
        <Badge.Ribbon text="Done">
            <button
                onClick={() => onTodoDone(todo.id)}
                className={[styles.todoItemBtn, todo.done ? styles.todoItemBtnDone : ''].join(' ')}
            >
                <Text>{todo.text}</Text>
            </button>
        </Badge.Ribbon>
    );

    return (
        <List.Item
            extra={Extra}
            className={[styles.todoItem, todo.done ? styles.todoItemDone : ''].join(' ')}
        >
            <Skeleton active loading={isTodosLoading}>
                <button onClick={() => onTodoDone(todo.id)} className={styles.todoItemBtn}>
                    <Space>
                        <Text className={styles.todoItemText}>{todo.text}</Text>
                        {todo.done && <Tag color="#68a64d">Done</Tag>}
                    </Space>
                </button>
            </Skeleton>
        </List.Item>
    );
};

export default TodoItem;
