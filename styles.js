'use-strict';

const React = require('react-native')
const Dimensions = require('Dimensions')
const {StyleSheet} = React


// Calculate width for cards
const card_margin = 40;
const card_width = Dimensions.get('window').width - (card_margin) * 2

// Classes
const constants = {
    colorPurple: '#2e2092',
    colorPurpleDark: '#262533',
    colorPurpleLight: '#7060E6',
    colorRed: '#EB0D28',
    colorGrayLight: '#A6A4B3',
    colorGrayLightest: '#C8C7CC'
};

// IDs
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.colorPurple,
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 55,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: constants.colorPurpleLight,
    },
    settingsIcon: {
        top: -12,
        left: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        padding: 40,
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
    cardListView: {
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
    },
    newEntryDate: {
        alignSelf: 'flex-start',
        fontSize: 30,
        lineHeight: 33,
        color: constants.colorPurpleDark
    },
    recordEntryButton: {
        top: 83
    },
    descriptiveText: {
        fontSize: 13,
        color: constants.colorGrayLight,
        top: 170
    },
    listViewRow: {
        borderBottomWidth: 0.5,
        borderColor: constants.colorGrayLightest,
        height: 44,
        width: card_width,
        paddingVertical: 12
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
    bold: {
        fontWeight: 'bold'
    }
});

module.exports = styles
module.exports.constants = constants;
