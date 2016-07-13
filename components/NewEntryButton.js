import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import {AudioRecorder, AudioUtils} from 'react-native-audio';

const styles = require('../styles.js')

const on = require('../images/recordEntryButton@2x.png')
const off = require('../images/recordingButton@2x.png')

class NewEntryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      isFinished: false
    }

    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac"
    });

    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      console.log(`Finished recording: ${data}`);
    };
  }

  buttonClick() {
    if (!this.state.isRecording && !this.state.isFinished) {
      this.setState({ isRecording: true });
      AudioRecorder.startRecording();
    } else if (this.state.isRecording) {
      this.setState({ isRecording: false, isFinished: true });
      AudioRecorder.stopRecording();
    } else if (this.state.isPlaying) {
      this.setState({isPlaying: false})
      AudioRecorder.stopPlaying();
    } else {
      this.setState({isPlaying: true})
      AudioRecorder.playRecording();
    }
  }

  displayRecording() {
    let button;
    if (!this.state.isRecording && !this.state.isFinished) {
      button = <Image source={on} />
    } else if (this.state.isRecording || this.state.isPlaying) {
      button = <View style={buttonStyles.record}>
        <View style={buttonStyles.stop} />
      </View>
    } else if (this.state.isFinished) {
      button = <View style={buttonStyles.record}>
        <View style={buttonStyles.triangle} />
      </View>
    }

    return (
      <TouchableHighlight
        style={{marginTop:60}}
        underlayColor={'#fff'}
        activeOpacity={0.9}
        onPress={this.buttonClick}
      >
        <View>
          {button}
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

let buttonStyles = StyleSheet.create({
  record: {
    borderRadius: 70,
    height: 140,
    width: 140,
    borderColor: styles.constants.colorRed,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordCenter: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: styles.constants.colorRed,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: styles.constants.colorRed,
    transform: [
      {rotate: '90deg'}
    ]
  },
  stop: {
    height: 50,
    width: 50,
    backgroundColor: styles.constants.colorRed,
  },
})

module.exports = NewEntryButton;
