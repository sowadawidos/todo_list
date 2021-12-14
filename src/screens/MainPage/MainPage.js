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
    const [filteredTask, setFilteredTask] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFetchError, setIsFetchError] = useState(false)

    const [intervalId, setIntervalId] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState('')

    const [isEnabled, setIsEnabled] = useState(false)
    const [isFetchError, setIsFetchError] = useState(false)

    const toggleSwitch = () => {
        const filteredTask = tasks.filter(task => task.done === "TRUE")
        setIsEnabled(prev => !prev)
        setFilteredTask(filteredTask)
    }


    const text = ['Loading data', 'Wait a moment', 'Give us a moment']

    const setLoadingMessage = (loadingTxt = text) => {
        const intervalValue = 1500

        const intervalIdVal = setInterval(() => {
            setLoadingMsg(loadingTxt[0])

            const randomTextValue = loadingTxt[Math.floor(Math.random() * loadingTxt.length)]
            setLoadingMsg(randomTextValue)
        }, intervalValue)

        setIntervalId(intervalIdVal)
    }

    const renderItem = ({ item }) => (
        <Task
            index={tasks.indexOf(item)}
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

    const fetchTodoList = async (loadingMessage) => {
        if (isFetchError) setIsFetchError(false)
        await setLoadingMessage(loadingMessage)
        setIsLoading(true)
        try {
            const response = await fetchData('get')

            if (!response.data) throw Error

            setTimeout(() => {
                setTasks(response.data)
                setIsLoading(false)
            }, 3000)
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel', onPress: () => setIsLoading(false) },
            ])
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


    return (
        <>
            <View style={styles.mainPageBox}>
                <ModalBox modalOutput={loadingModal} isLoading={isLoading} />
                {isFetchError && ErrorFetchModal()}
                <View style={styles.taskBox}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View style={styles.inputBox}>
                            <TaskInput
                                data={isEnabled > 0 ? filteredTask.reverse() : tasks.reverse()}
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
                        data={isEnabled ? filteredTask.reverse() : tasks.reverse()}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}
