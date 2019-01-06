import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../common/styles';
import { withUser } from '../../util/util';
import { logOut } from '../../redux/actions/auth';
import { User } from '../../common/interface';

interface Props {
    user: User
    logOut: Function
}
const Home = (props: Props) =>
    <View style={styles.container}>
        <Image source={{ uri: props.user.photo }} style={{ width: 250, height: 250 }} />
        <Text>Name: {props.user.name}</Text>
        <Text>Email: {props.user.email}</Text>
        <Button title="Log Out" onPress={() => props.logOut()} />
    </View>

export default connect(undefined, ({ logOut }))(withUser(Home))