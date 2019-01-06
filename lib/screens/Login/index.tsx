import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { logIn } from '../../redux/actions/auth';
import styles from '../../common/styles';

interface props {
    logIn: Function
}

const login = (props:props) =>
    <View style={styles.container}>
        <Button title="Log in with Google" onPress={() => props.logIn()}/>
    </View>

const mapDispatchToProps = ({
    logIn
})

export default connect(undefined, mapDispatchToProps)(login)