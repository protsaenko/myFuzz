import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from "antd";
import Sider from "antd/lib/layout/Sider";
import {Content, Header} from "antd/lib/layout/layout";



const Main = props => {
    return (
        <div>
            <Layout>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}> left sidebar</Sider>
                <Layout>
                    <Header> This is header</Header>
                    <Content>MAIN content CHANGED again to test if docker will autorenew </Content>
                </Layout>
            </Layout>
        </div>
    );
};

Main.propTypes = {

};

export default Main;