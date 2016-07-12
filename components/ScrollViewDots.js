import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = require('../styles.js')

class ScrollViewDots extends Component {

    constructor(props) {
        super(props);
        this.state = { scrollViewIndicatorOpacity: 0.4 };
    }

    render() {
        return (
            <View style={styles.scrollViewIndicators}>
            <View style={styles.scrollViewIndicatorDots}></View>
            <View style={[styles.scrollViewIndicatorDots, {opacity: this.state.scrollViewIndicatorOpacity}]}></View>
            </View>

        )
    }
}

module.exports = ScrollViewDots;
