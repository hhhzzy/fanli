import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
export default class Home extends React.Component {
    render() {
        return (
            <>
                <View>
                    <Text>222222222222</Text>
                    <Text><Icon name="add-circle" size={20} color="red" /></Text>

                    <Button
                        title="gotodetail"
                        onPress={() => this.props.navigation.navigate('Detail')}
                    />
                    <Button
                        title="gotologin"
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
            </>
        );
    }
}
