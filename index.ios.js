/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { AppRegistry, StatusBar, Text, Image, ScrollView, Dimensions, View, TouchableHighlight } from 'react-native';

import NewEntryCard from './components/NewEntryCard.js';
import OldEntriesCard from './components/OldEntriesCard.js';
import SettingsCard from './components/SettingsCard.js';
import ScrollViewDots from './components/ScrollViewDots.js';
import SettingsButton from './components/SettingsButton.js';

const styles = require('./styles.js')

// Calculate width for cards
const card_margin = 40;
const card_width = Dimensions.get('window').width - (card_margin) * 2

class audaily extends Component {
    render() {
        return (
        <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            />

            <View style={styles.header}>
                <Text style={styles.title}>Audaily</Text>
                <SettingsButton></SettingsButton>
            </View>

            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={card_width + card_margin*2}
            decelerationRate={0.2}
            snapToAlignment='start'
            >
                <NewEntryCard></NewEntryCard>
                <OldEntriesCard></OldEntriesCard>
            </ScrollView>

            <ScrollViewDots></ScrollViewDots>
        </View>
        );
    }
}

AppRegistry.registerComponent('audaily', () => audaily);
