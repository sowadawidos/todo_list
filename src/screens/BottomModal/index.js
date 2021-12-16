import React from 'react'
import { Text, View } from 'react-native'
import {
    DeleteButton,
    DoneButtonText,
    ModalInput,
    ModalInputContainer,
    ModalInputCounter,
    SaveButton,
    BottomModalView,
} from './styled'

import { colors } from 'src/theme'
import { styles } from 'src/styles'
import { EvilIcons } from '@expo/vector-icons'

export default function BottomModal({
    inputText,
    setInputText,
    setIsFocused,
    handleEditTask,
    handleDeleteTask,
    getInputStyle,
}) {
    return (
        <>
            <BottomModalView>
                <View>
                    <ModalInputContainer>
                        <ModalInputCounter>
                            {inputText.length}/30
                        </ModalInputCounter>
                    </ModalInputContainer>

                    <ModalInput
                        placeholder="Index name"
                        placeholderTextColor={colors.PLACEHOLDER_COLOR}
                        onChangeText={(text) => setInputText(text)}
                        defaultValue={inputText}
                        maxLength={30}
                        style={getInputStyle}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <SaveButton onPress={handleEditTask}>
                            <Text>Save</Text>
                        </SaveButton>
                    </View>
                </View>

                <View style={styles.bottomSheetButtonsView}>
                    <DeleteButton onPress={handleDeleteTask}>
                        <DoneButtonText>
                            <EvilIcons name="trash" size={25} color="black" />
                        </DoneButtonText>
                    </DeleteButton>
                </View>
            </BottomModalView>
        </>
    )
}
