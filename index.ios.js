/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    StatusBar,
    Text,
    Image,
    View
} from 'react-native';

// Status Bar
class audaily extends Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            />
            <View style={styles.header}>
                <Text style={styles.title}>Audaily</Text>
                <Image
                source={require('./images/settingsIcon@2x.png')}
                style={styles.settingsIcon}
                />
            </View>
            <View style={styles.card}>
            </View>
            </View>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2092',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 60,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7060E6',
    },
    settingsIcon: {
        top: -12,
        left: 8
    },
    card: {
        marginTop: 16,
        width: 295,
        height: 465,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowRadius: 6,
    },
});

AppRegistry.registerComponent('audaily', () => audaily);
