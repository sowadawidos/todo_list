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
import { LoadingIndicator } from 'src/components/LoadingIndicator/LoadingIndicator'
import { ErrorFetchModal } from 'src/components/ErrorFetchModal/ErrorFetchModal'

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTask, setFilteredTask] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFetchError, setIsFetchError] = useState(false)

    const [intervalId, setIntervalId] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState('')

    const [isFilteringTask, setIsFilteringTask] = useState(false)

    const taskInputData =
        isFilteringTask > 0 ? filteredTask.reverse() : tasks.reverse()
    const flatListData = isFilteringTask ? filteredTask.reverse() : tasks.reverse()
    const textMessage = isFilteringTask ? 'Show all tasks' : 'Show done tasks'

    const toggleSwitch = () => {
        const filteredTask = tasks.filter((task) => task.done === 'TRUE')
        setIsFilteringTask((prev) => !prev)
        setFilteredTask(filteredTask)
    }

    const text = ['Loading data', 'Wait a moment', 'Give us a moment']

    const setLoadingMessage = (loadingTxt = text) => {
        const intervalValue = 500

        const intervalIdVal = setInterval(() => {
            const randomTextValue =
                loadingTxt[Math.floor(Math.random() * loadingTxt.length)]
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
            setIsFetchError={setIsFetchError}
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
        setLoadingMessage(loadingMessage)
        setIsLoading(true)
        try {
            const response = await fetchData('get')

            if (!response.data || response.isFetchError) throw Error

            setTimeout(() => {
                setTasks(response.data)
                setIsLoading(false)
            }, 3000)
        } catch {
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

    if (isLoading) return loadingModal()

    return (
        <>
            <View style={styles.mainPageBox}>
                {isFetchError && (
                    <ErrorFetchModal pressAction={fetchTodoList} />
                )}
                <View style={styles.taskBox}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View style={styles.inputBox}>
                            <TaskInput
                                data={taskInputData}
                                fetchTodoList={fetchTodoList}
                                setIsLoading={setIsLoading}
                            />
                            <View style={styles.switchBox}>
                                <Text style={{ marginRight: 15 }}>
                                    {textMessage}
                                </Text>
                                <Switch
                                    trackColor={{
                                        false: colors.SWITCH_FALSE_COLOR,
                                        true: colors.SWITCH_TRUE_COLOR,
                                    }}
                                    thumbColor={
                                        isFilteringTask
                                            ? colors.IS_ENABLED_TRUE_COLOR
                                            : colors.IS_ENABLED_FALSE_COLOR
                                    }
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isFilteringTask}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    {tasks.length === 0 && !isLoading && (
                        <Text>
                            {isFilteringTask ? 'No task completed' : 'No task today'}
                        </Text>
                    )}

                    <FlatList
                        data={flatListData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}
