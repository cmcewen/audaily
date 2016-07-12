import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text } from 'react-native';

const styles = require('../styles.js')

const on = require('../images/recordEntryButton@2x.png')
const off = require('../images/recordingButton@2x.png')

class NewEntryButton extends Component {

        constructor(props) {
            super(props);
            this.state = {
                startRecording: false
            }
        }

        displayRecording() {
            const buttonStyle = this.state.startRecording ? off : on

            return (
                    <TouchableHighlight
                        style={{marginTop:60}}
                        underlayColor={'#fff'}
                        activeOpacity={0.9}
                        onPress={(value) => this.setState({ startRecording: value })}
                        >
                        <View>
                            <Image
                                source={buttonStyle}
                                />
                        </View>
                    </TouchableHighlight>
            )
        }

        render() {
            return (
                <View>
                    { this.displayRecording() }
                </View>
            );
        }
    }

module.exports = NewEntryButton;
