import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components/native'
import {Task} from "./Task";
import {TaskInput} from "./TaskInput";

export const MainPage = () => {
    const [tasks, setTasks] = useState([])

    return (
        <>
            <View style={styles.mainPageBox}>
                <ScrollView style={styles.taskBox}>
                    {
                        tasks.length === 0 && <Text>No task today</Text>
                    }
                    {
                        tasks.map((task, index) => task.done ? null :
                            <Task key={index} index={index} task={task} tasks={tasks} setTasks={setTasks}/>)
                    }
                </ScrollView>
                <View style={styles.inputBox}>
                    <TaskInput setTasks={setTasks}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainPageBox: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    taskBox: {
        padding: 15,
        flex: 1
    },
    inputBox: {
        height: 100,
        padding: 15
    }
})


