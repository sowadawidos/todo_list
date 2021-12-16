import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Switch,
} from 'react-native'

import Task from 'src/screens/Task'
import TaskInput from 'src/components/TaskInput'

import { styles } from 'src/styles'
import { colors } from 'src/theme'
import { fetchData } from 'src/api'
import LoadingIndicator from 'src/components/LoadingIndicator'
import ErrorFetchModal from 'src/components/ErrorFetchModal'

export default function MainPage() {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFetchError, setIsFetchError] = useState(false)
    const [intervalId, setIntervalId] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState('')
    const [isFilteringTasks, setIsFilteringTasks] = useState(false)

    const [filteredTasks, setFilteredTasks] = useState([])

    const flatListData = isFilteringTasks
        ? filteredTasks.sort((a, b) => Number(-a.id) + Number(b.id))
        : tasks.sort((a, b) => Number(-a.id) + Number(b.id))

    const switchButtonText = isFilteringTasks
        ? 'Show all tasks'
        : 'Show done tasks'

    const areTasksEmpty = tasks.length === 0 && !isLoading
    const emptyTasksText = isFilteringTasks
        ? 'No task completed'
        : 'No task today'

    const toggleSwitch = () => {
        const filteredTasks = tasks.filter((task) => task.done === 'TRUE')

        setIsFilteringTasks((prev) => !prev)
        setFilteredTasks(filteredTasks)
    }

    const setLoadingMessage = (customText = '') => {
        const textLoadingMessage = [
            'Loading data',
            'Wait a moment',
            'Give us a moment',
        ]

        const textForLoading = !customText ? textLoadingMessage : [customText]

        const intervalValue = 500

        const intervalIdVal = setInterval(() => {
            const randomTextValue =
                textForLoading[
                    Math.floor(Math.random() * textForLoading.length)
                ]

            setLoadingMsg(randomTextValue)
        }, intervalValue)

        setIntervalId(intervalIdVal)
    }

    const renderItem = ({ item }) => {
        return (
            <Task
                task={item}
                fetchTodoList={fetchTodoList}
                setIsLoading={setIsLoading}
                setIsFetchError={setIsFetchError}
            />
        )
    }

    const fetchTodoList = async (loadingMessage = '') => {
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
        if (intervalId && isLoading) return

        clearInterval(intervalId)
    }, [isLoading])

    useEffect(() => {
        fetchTodoList()
    }, [])

    if (isLoading)
        return (
            <LoadingIndicator
                message={loadingMsg}
                style={styles.loader}
                color={colors.PLACEHOLDER_COLOR}
                size={'large'}
            />
        )

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
                            {/* TaskInput should not be a screen */}
                            <TaskInput
                                taskCount={tasks.length}
                                fetchTodoList={fetchTodoList}
                                setIsLoading={setIsLoading}
                                setIsFetchError={setIsFetchError}
                            />

                            <View style={styles.switchBox}>
                                <Text style={{ marginRight: 15 }}>
                                    {switchButtonText}
                                </Text>

                                <Switch
                                    trackColor={{
                                        false: colors.SWITCH_FALSE_COLOR,
                                        true: colors.SWITCH_TRUE_COLOR,
                                    }}
                                    thumbColor={
                                        isFilteringTasks
                                            ? colors.IS_ENABLED_TRUE_COLOR
                                            : colors.IS_ENABLED_FALSE_COLOR
                                    }
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isFilteringTasks}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    {areTasksEmpty && <Text>{emptyTasksText}</Text>}

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
