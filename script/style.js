import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    content: {
        flex:1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },

    wrapper: {
        backgroundColor: 'rgba(175,83,246,.2)',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'rgba(175,83,246,.23)',
        flex: 1,
        padding: 10
    },

    header: {
        flex: 0.5
    },
    main: {
        flex: 4,
        padding: 20
    },
    footer: {
        flex: 0.5
    },
    text: {
        fontSize: 16
    },

    textOutput: {
        marginTop: 10,
        fontSize: 12
    },
    input: {
        marginTop: 20,
        height: 50,
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 10,
        fontSize: 16,
        borderColor: 'rgba(255,255,255,.8)',
        backgroundColor: 'rgba(255,255,255,.6)'
    }
});
