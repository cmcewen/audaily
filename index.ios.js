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
    ScrollView,
    Dimensions,
    View
} from 'react-native';

const card_margin = 40;
const card_width = Dimensions.get('window').width - (card_margin) * 2

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
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={card_width + card_margin*2}
            decelerationRate={0.2}
            snapToAlignment= 'start'
            >
                <View style={styles.card}>
                </View>
                <View style={styles.card}>
                </View>
                <View style={styles.card}>
                </View>
            </ScrollView>
            <View style={styles.scrollViewIndicators}>
                <View style={styles.scrollViewIndicatorDots}></View>
                <View style={[styles.scrollViewIndicatorDots, styles.opacity]}></View>
                <View style={[styles.scrollViewIndicatorDots, styles.opacity]}></View>
            </View>
        </View>
        );
    }
}

// Styles
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2092',
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 40,
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
        marginLeft: 40,
        marginRight: 40,
        width: card_width,
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
    scrollViewIndicators: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: 38
    },
    scrollViewIndicatorDots: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 3,
        backgroundColor: '#ffffff',
        opacity: 1
    },
    opacity: {
        opacity: 0.4
    },
});

AppRegistry.registerComponent('audaily', () => audaily);
