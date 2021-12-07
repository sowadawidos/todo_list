import React from 'react'
import { View, Modal } from 'react-native'
import { styles } from 'src/styles'

export const ModalBox = ({ isLoading, modalOutput }) => {
    return (
        <>
            <Modal animationType="slide" transparent={true} visible={isLoading}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>{modalOutput()}</View>
                </View>
            </Modal>
        </>
    )
}
