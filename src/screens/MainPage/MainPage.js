import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    Alert,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Switch,
    TouchableOpacity,
} from 'react-native'

import { Task } from 'src/screens/Task/Task'
import { TaskInput } from 'src/screens/TaskInput/TaskInput'

import { styles } from 'src/styles'
import { colors } from 'src/theme'
import { fetchData } from 'src/api'
import { ModalBox } from 'src/components/ModalBox/ModalBox'
import { LoadingIndicator } from 'src/components/LoadingIndicator/LoadingIndicator'

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFetchError, setIsFetchError] = useState(false)

    const [intervalId, setIntervalId] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState('')
    console.log('MainPage.js (28) - loadingMsg', loadingMsg)

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
        const text = ['Loading data', 'Wait a moment', 'Give us a moment']

        const intervalValue = 500

        const intervalIdVal = setInterval(() => {
            const randomTextValue =
                text[Math.floor(Math.random() * text.length)]

            setLoadingMsg(randomTextValue)
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

    const loadingModal = () => (
        <LoadingIndicator
            message={loadingMsg}
            style={styles.loader}
            color={colors.PLACEHOLDER_COLOR}
            size={'large'}
        />
    )

    const fetchTodoList = async () => {
        if (isFetchError) setIsFetchError(false)
        setLoadingMessage()
        setIsLoading(true)

        try {
            const response = await fetchData('get')

            if (!response.data) throw Error

            //This is to give more suspense to show the loading spinner a bit more
            setTimeout(() => {
                setTasks(response.data.reverse())
                setIsLoading(false)
            }, 3000)
        } catch (e) {
            setTimeout(() => {
                setIsFetchError(true)
                setIsLoading(false)
            }, 3000)
        }
    }

    useEffect(() => {
        fetchTodoList()

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (!isFetchError) return

        clearInterval(intervalId)
    }, [isFetchError])

    const ErrorFetchModal = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'red',
                    padding: 12,
                    zIndex: 2,
                    width: '100%',
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        paddingBottom: 6,
                    }}
                >
                    There was an error
                </Text>

                <TouchableOpacity onPress={fetchTodoList}>
                    <Text>Try Again</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (isLoading) return loadingModal()

    return (
        <>
            <View style={styles.mainPageBox}>
                {isFetchError && ErrorFetchModal()}

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
