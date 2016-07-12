import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';

const styles = require('../styles.js')

class SettingsCard extends Component {
    constructor(props) {
      super(props);
      this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed")}}
                >
                <View style={styles.card}>
                    <Text>Settings Card</Text>
                </View>
            </Modal>
        );
    }
}

module.exports = SettingsCard;
