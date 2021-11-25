import React from 'react';
import PropTypes from 'prop-types';
import stylesSubmit from './MyButtonSubmit.module.css'
import stylesRedirect from './MyButtonRedirect.module.css'
import stylesCommon from './MyButton.module.css'

const MyButtonSubmit = ({children,...props}) => {
    let styles;
    switch(props.type){
        case 'redirect':
            styles=stylesRedirect;
            break;
        case 'submit':
            styles=stylesSubmit;

    }
    return (
        <button className={`${stylesCommon.MyButton} ${styles.MyButton}`} {...props}>
            <span className={`${stylesCommon.MyButtonText} ${styles.MyButtonText}`}>{children}</span>
        </button>
    );
};

MyButtonSubmit.propTypes = {};

export default MyButtonSubmit;