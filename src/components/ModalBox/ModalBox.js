import React from 'react'
import { View, Modal } from 'react-native'
import { styles } from 'src/styles'

export const ModalBox = ({ isLoading, modalOutput }) => {
    return (
        <>
            <Modal animationType="slide" transparent visible={isLoading}>
                <View style={styles.centeredView}>
                    {/* //I see this component is not used anymore, either delete it or improve it */}
                    {/* Consider to use React.children instead of passing modalOutput */}
                    <View style={styles.modalView}>{modalOutput()}</View>
                </View>
            </Modal>
        </>
    )
}
