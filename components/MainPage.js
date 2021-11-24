import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components/native'
import {Task} from "./Task";
import {TaskInput} from "./TaskInput";
import axios from "axios";

export const MainPage = () => {
    const [tasks, setTasks] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/a7a820d7-7507-445e-af71-b820116fcd38')
            .then(({data}) => setData(data))
    }, [tasks])

    return (
        <>
            <View style={styles.mainPageBox}>
                <ScrollView style={styles.taskBox}>
                    {
                        data.length === 0 && <Text>No task today</Text>
                    }
                    {
                        data.map((task, key) => <Task key={key} index={key} task={task} tasks={data} setTasks={setTasks}/>)
                    }
                </ScrollView>
                <View style={styles.inputBox}>
                    <TaskInput setTasks={setTasks} data={data}/>
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
        height: 150,
        padding: 15
    }
})


