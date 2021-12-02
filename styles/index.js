import { Platform, StyleSheet } from 'react-native'
import { colors } from '../theme'

export const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    headerBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainButtonsBox: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskTextBox: {
        width: 230,
    },
    taskText: {
        fontWeight: Platform.OS === 'android' ? '700' : '600',
    },
    mainPageBox: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    taskBox: {
        padding: 15,
        flex: 1,
        marginBottom: 15,
    },
    inputBox: {
        height: 140,
        padding: 5,
    },
    loader: {
        textAlign: 'center',
        marginBottom: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 55,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    switchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 5,
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetHeaderText: {
        fontSize: 18,
        fontWeight: '600',
    },
    bottomSheetButtonsView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        paddingTop: 30,
    },
})
