import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles'
import { BottomSheet } from 'react-native-btr'

import { BottomSheetHeaderBox, BottomSheetHeaderClose } from './styled'
import { AntDesign } from '@expo/vector-icons'

export const BottomSheets = ({
    isShowingBottomSheets,
    toggleBottomNavigationView,
    loadingModal,
    text,
}) => {
    return (
        <>
            <BottomSheet
                visible={isShowingBottomSheets}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >
                <View style={styles.bottomNavigationView}>
                    <BottomSheetHeaderBox>
                        <Text style={styles.bottomSheetHeaderText}>{text}</Text>
                        <BottomSheetHeaderClose
                            onPress={toggleBottomNavigationView}
                        >
                            <AntDesign name="close" size={24} color="black" />
                        </BottomSheetHeaderClose>
                    </BottomSheetHeaderBox>
                    {loadingModal()}
                </View>
            </BottomSheet>
        </>
    )
}
