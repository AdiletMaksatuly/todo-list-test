import { Button, Form, FormInstance, Input, Space } from 'antd';
import React, { FC, useRef, useState } from 'react';
import { ITodo } from '../../models/ITodo';

interface CreateTodoFormProps {
    onCreate: (todo: ITodo) => void;
    onCancel: () => void;
}

interface FormFieldsValues {
    todoText: string;
}

const CreateTodoForm: FC<CreateTodoFormProps> = ({ onCreate, onCancel }) => {
    const [todoText, setTodoText] = useState('');
    const formRef = useRef<FormInstance>(null);

    const onTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTodoText(e.target.value);

    const onFinish = (values: FormFieldsValues) => {
        onCreate({
            text: values.todoText,
            done: false,
            id: Math.random() * Date.now(),
        });
        formRef.current?.resetFields();
    };

    return (
        <Form
            name="create-todo-form"
            ref={formRef}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
        >
            <Form.Item
                label="Enter todo text (at least 7 characters)"
                name="todoText"
                rules={[
                    {
                        required: true,
                        min: 7,
                        message: 'Please enter todo text! (at least 7 characters)',
                    },
                ]}
            >
                <Input value={todoText} onChange={onTodoTextChange} />
            </Form.Item>

            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Confirm
                    </Button>
                    <Button type="ghost" onClick={onCancel}>
                        Cancel
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default CreateTodoForm;
