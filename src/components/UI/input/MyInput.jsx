import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyInput.module.css';


const MyInput = (props) => {
    return (
        <label className={styles.MyLabel} >
            <span className={styles.MyLabelText}>{props.label}</span>
            <input className={styles.MyPlaceholderText} type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
            />
            <span className={styles.MyNote}>{props.children}</span>
            </label>
            );
        };

            MyInput.propTypes = {};
            MyInput.defaultProps = {
                name: 'Mary'
            };

            export default MyInput;