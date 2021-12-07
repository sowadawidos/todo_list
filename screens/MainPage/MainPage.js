import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
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
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [intervalId, setIntervalId] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState('')

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

    const setLoadingMessage = () => {
        const text = [
            'Loading data',
            'Its taking too long',
            'Check your internet connection',
        ]
        const intervalValue = 3000

        const intervalIdVal = setInterval(() => {
            setLoadingMsg(text[Math.floor(Math.random() * text.length)])
        }, intervalValue)

        setIntervalId(intervalIdVal)
    }

    const renderItem = ({ item }) => (
        <Task
            index={item.id}
            task={item}
            fetchTodoList={fetchTodoList}
            setIsLoading={setIsLoading}
        />
    )

    const _loadingModal = () => (
        <LoadingIndicator
            message={loadingMsg}
            loading={isLoading}
            style={styles.loader}
            color={colors.PLACEHOLDER_COLOR}
            size={'large'}
        />
    )

    const fetchTodoList = async () => {
        setLoadingMessage()
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

    useEffect(() => {
        clearInterval(intervalId)
    }, [isLoading])

    return (
        <>
            <View style={styles.mainPageBox}>
                <ModalBox modalOutput={_loadingModal} isLoading={isLoading} />
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
