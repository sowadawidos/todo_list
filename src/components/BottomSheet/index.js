// @flow
import * as React from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import { styles } from 'src/styles'
import { BottomSheet } from 'react-native-btr'
// cannot resolve module 'react-native-btr'
import { BottomSheetHeaderBox, BottomSheetHeaderClose } from './styled'
import { AntDesign } from '@expo/vector-icons'

type Props = {
    isShowingBottomSheets: boolean,
    toggleBottomNavigationView: () => void,
    text: string,
    children: React.Node,
}

export default function BottomSheetModal({
    isShowingBottomSheets,
    toggleBottomNavigationView,
    text,
    children,
}: Props): React$MixedElement {
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
