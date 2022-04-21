import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key={1} style={{ backgroundColor: 'transparent' }}>
                    <Text strong className="text-white">
                        {/* <ProfileOutlined style={{ marginRight: 10 }} /> */}
                        Todo List App
                    </Text>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;
