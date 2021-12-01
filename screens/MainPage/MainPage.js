import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    FlatList,
} from 'react-native'

import { Task } from 'screens/Task/Task'
import { TaskInput } from 'screens/TaskInput/TaskInput'

import { styles } from 'styles'
import { colors } from 'theme'
import { fetchData } from 'api'

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const renderItem = ({ item }) => (
        <Task
            index={item.id}
            task={item}
            fetchTodoList={fetchTodoList}
            setIsLoading={setIsLoading}
        />
    )

    const fetchTodoList = async () => {
        try {
            const response = await fetchData('get')

            if (!response.data) throw Error

            setTasks(response.data)
            setIsLoading(false)
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel' },
            ])
        }
    }

    useEffect(() => {
        fetchTodoList()
    }, [])

    return (
        <>
            <View style={styles.mainPageBox}>
                <View style={styles.taskBox}>
                    <ActivityIndicator
                        style={styles.loader}
                        size="large"
                        animating={isLoading}
                        color={colors.PLACEHOLDER_COLOR}
                    />

                    {tasks.length === 0 && !isLoading && (
                        <Text>No task today</Text>
                    )}

                    {/* TODO: The use of FlatList component from React Native is missing */}
                    <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.inputBox}>
                        <TaskInput
                            data={tasks}
                            fetchTodoList={fetchTodoList}
                            setIsLoading={setIsLoading}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}
