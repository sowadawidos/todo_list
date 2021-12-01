import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Switch,
} from 'react-native'

import { Task } from 'screens/Task/Task'
import { TaskInput } from 'screens/TaskInput/TaskInput'

import { styles } from 'styles'
import { colors } from 'theme'
import { fetchData } from 'api'
import { ModalBox } from 'components/ModalBox/ModalBox'

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    //state for text when fetching time is too long
    const [text, setText] = useState('Loading data')
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => {
        if (isEnabled) {
            setIsLoading(true)
            setIsEnabled((previousState) => !previousState)
            return fetchTodoList()
        }
        const filteredTask = tasks.filter((task) => task.done === 'TRUE')
        setIsEnabled((previousState) => !previousState)
        setTasks(filteredTask)
    }

    const renderItem = ({ item }) => (
        <Task
            index={item.id}
            task={item}
            fetchTodoList={fetchTodoList}
            setIsLoading={setIsLoading}
        />
    )

    const loadingModal = () => (
        <>
            <ActivityIndicator
                style={styles.loader}
                size="large"
                animating={isLoading}
                color={colors.PLACEHOLDER_COLOR}
            />
            <Text>{text}</Text>
        </>
    )

    const fetchTodoList = async () => {
        try {
            const response = await fetchData('get')

            if (!response.data) throw Error

            setTasks(response.data.reverse())
            setIsLoading(false)
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel', onPress: () => setIsLoading(false) },
            ])
        }
    }

    useEffect(() => {
        fetchTodoList()
    }, [])

    return (
        <>
            <View style={styles.mainPageBox}>
                <ModalBox modalOutput={loadingModal} isLoading={isLoading} />
                <View style={styles.taskBox}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View style={styles.inputBox}>
                            <TaskInput
                                data={tasks}
                                fetchTodoList={fetchTodoList}
                                setIsLoading={setIsLoading}
                            />
                            <View style={styles.switchBox}>
                                <Text style={{ marginRight: 15 }}>
                                    {isEnabled
                                        ? 'Show all tasks'
                                        : 'Show done tasks'}
                                </Text>
                                <Switch
                                    trackColor={{
                                        false: colors.SWITCH_FALSE_COLOR,
                                        true: colors.SWITCH_TRUE_COLOR,
                                    }}
                                    thumbColor={
                                        isEnabled
                                            ? colors.IS_ENABLED_TRUE_COLOR
                                            : colors.IS_ENABLED_FALSE_COLOR
                                    }
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    {tasks.length === 0 && !isLoading && (
                        <Text>
                            {isEnabled ? 'No task completed' : 'No task today'}
                        </Text>
                    )}

                    <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}
