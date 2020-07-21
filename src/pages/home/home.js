import { Text, View, Button } from 'react-native';
import React from 'react';
export default class Home extends React.Component {
    render() {
        return (
            <>
                <View>
                    <Text>home</Text>
                    <Button title="aaa" onPress={() => this.props.navigation.navigate('Detail')}></Button>
                </View>
            </>
        );
    }
}
