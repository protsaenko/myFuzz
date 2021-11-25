import React from 'react';
import PropTypes from 'prop-types';
import {Divider, PageHeader} from "antd";

const Header = (props) => {
    return (
        <>
            <PageHeader title={props.title}/>
            <Divider/>
        </>
    );
};

Header.propTypes = {};

export default Header;