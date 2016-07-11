'use-strict';

const React = require('react-native')
const Dimensions = require('Dimensions')
const {StyleSheet} = React


// Calculate width for cards
const card_margin = 40;
const card_width = Dimensions.get('window').width - (card_margin) * 2

// Classes
const constants = {
    purpleColor: '#2e2092'
};

// IDs
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.purpleColor,
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 60,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7060E6',
    },
    settingsIcon: {
        top: -12,
        left: 8
    },
    card: {
        marginTop: 16,
        marginLeft: 40,
        marginRight: 40,
        width: card_width,
        height: 465,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowRadius: 6,
    },
    scrollViewIndicators: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: 38
    },
    scrollViewIndicatorDots: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 3,
        backgroundColor: '#ffffff',
        opacity: 1
    },
    opacity: {
        opacity: 0.4
    },
});

module.exports = styles
module.exports.constants = constants;
