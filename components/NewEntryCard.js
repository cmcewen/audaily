import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

const styles = require('../styles.js')

class NewEntryCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text style={[styles.newEntryDate, styles.bold]}>Tuesday</Text>
                <Text style={[styles.newEntryDate, styles.bold]}>June 26</Text>
                <Text style={styles.newEntryDate}>2016</Text>
                <TouchableHighlight>
                        <Image
                        source={require('../images/recordEntryButton@2x.png')}
                        style={styles.recordEntryButton}
                        />
                </TouchableHighlight>
                <Text style={styles.descriptiveText}>Tap to record an entry</Text>
            </View>
        );
    }
}

module.exports = NewEntryCard;
