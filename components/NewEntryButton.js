import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

const styles = require('../styles.js')

class NewEntryButton extends Component {
    _onPressButton() {
        console.log("You tapped yo");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <Image
                source={require('../images/recordEntryButton@2x.png')}
                style={styles.recordEntryButton}
                />
            </TouchableHighlight>
        );
    }
}

module.exports = NewEntryButton;
