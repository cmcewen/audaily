import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

const styles = require('../styles.js')

class NewEntryButton extends Component {
    _onPressButton() {
        console.log("You tapped record yo");
    }

    render() {
        return (
            <TouchableHighlight
                style={{marginTop:83}}
                underlayColor={'#ffffff'}
                activeOpacity={0.6}
                onPress={this._onPressButton}>
                <Image
                source={require('../images/recordEntryButton@2x.png')}
                />
            </TouchableHighlight>
        );
    }
}

module.exports = NewEntryButton;
