import React from 'react';
import { View, Text, Button } from 'react-native';
import Styles from '../../common/styles';
import { NavigationComponent } from 'react-navigation'

interface props {
    navigation: NavigationComponent
}

export default ({ navigation }:props) => 
    <View style={Styles.container}>
        <Text>Welcome to the App Boilerplate</Text>
        <Button onPress={()=> navigation.navigate('LogIn')} title="Login"/>
    </View>
