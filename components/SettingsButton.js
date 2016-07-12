import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';

const styles = require('../styles.js')
const constants = styles.constants;

class SettingsButton extends Component {
    _onPressButton() {
        console.log("You tapped settings yo");
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor={constants.colorPurple}
                activeOpacity={0.4}
                onPress={this._onPressButton}
                >
                <Image
                source={require('../images/settingsIcon@2x.png')}
                style={styles.settingsIcon}
                />
            </TouchableHighlight>
        );
    }
}

module.exports = SettingsButton;
