import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import NewEntryButton from './NewEntryButton.js';

const styles = require('../styles.js')

class NewEntryCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text style={[styles.newEntryDate, styles.bold]}>Tuesday</Text>
                <Text style={[styles.newEntryDate, styles.bold]}>June 26</Text>
                <Text style={styles.newEntryDate}>2016</Text>
                <NewEntryButton></NewEntryButton>
                <Text style={styles.descriptiveText}>Tap to record an entry</Text>
            </View>
        );
    }
}

module.exports = NewEntryCard;
