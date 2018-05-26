import React from 'react';
import styles from './Form.module.scss'
import { Col, Input, Row } from 'antd';

const form = (props) => {
    let firstPlaceholderText = ""
    let secondPlaceholderText = ""

    if (props.type === 'signIn') {
        firstPlaceholderText = 'Name'
        secondPlaceholderText = 'E-mail'
    }

    if (props.type === 'login') {
        firstPlaceholderText = 'E-mail'
        secondPlaceholderText = 'Password'
    }

    return(
        <div className={styles.Div}>
            <Row>
                <Col span={24} >
                    <Input placeholder={firstPlaceholderText}/>
                </Col>
                <Col span={24} >
                    <Input placeholder={secondPlaceholderText}/>
                </Col>
            </Row>
        </div>
    )
}

export default form