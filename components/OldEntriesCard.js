import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

const styles = require('../styles.js')

class OldEntriesCard extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'June 31', 'June 30', 'June 29', 'June 28', 'June 27', 'June 26', 'June 25', 'June 24', 'June 23', 'June 22', 'June 21', 'June 20', 'June 19', 'June 18', 'June 17', 'June 16', 'June 15', 'June 14', 'June 13', 'June 12', 'June 11', 'June 10', 'June 9', 'June 8', 'June 7', 'June 6', 'June 5', 'June 4', 'June 3', 'June 2', 'June1'
            ])
        };
    }
    render() {
        return (
            <View style={[styles.card, styles.cardListView]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={styles.listViewRow}><Text>{rowData}</Text></View>}
                    />
            </View>
        );
    }
}

module.exports = OldEntriesCard;
