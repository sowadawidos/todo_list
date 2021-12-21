import React from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import { styles } from 'src/styles'
import { BottomSheet } from 'react-native-btr'

import { BottomSheetHeaderBox, BottomSheetHeaderClose } from './styled'
import { AntDesign } from '@expo/vector-icons'

export default function BottomSheetModal({
    isShowingBottomSheets,
    toggleBottomNavigationView,
    text,
    children,
}) {
    return (
        <>
            <BottomSheet
                visible={isShowingBottomSheets}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.bottomNavigationView}>
                        <BottomSheetHeaderBox>
                            <Text style={styles.bottomSheetHeaderText}>
                                {text}
                            </Text>

                            <BottomSheetHeaderClose
                                onPress={toggleBottomNavigationView}
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="black"
                                />
                            </BottomSheetHeaderClose>
                        </BottomSheetHeaderBox>
                        {children}
                    </View>
                </KeyboardAvoidingView>
            </BottomSheet>
        </>
    )
}
