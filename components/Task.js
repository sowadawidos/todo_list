import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import axios from "axios";

export const Task = ({task, tasks, index, setTasks}) => {

    const handleTaskChange = () => {
        const clonedTasks = [...tasks]
        clonedTasks[index].done = "true"
        axios.put(`https://sheet.best/api/sheets/a7a820d7-7507-445e-af71-b820116fcd38/${index}`, {
            Id: index + 1,
            task: task.task,
            done: "true"
        })
        // console.log(clonedTasks)
        setTasks(clonedTasks)
    }

    return (
        <>
            {
                task.done ?
                    <TaskBoxDone>
                        <View style={styles.taskTextBox}>
                            <Text>{task.task}</Text>
                        </View>
                        {
                            task.done === "true" ?
                                <DoneButtonTrue disabled>
                                    <DoneButtonText>✓</DoneButtonText>
                                </DoneButtonTrue>
                                :
                                <DoneButton onPress={handleTaskChange}/>
                        }
                    </TaskBoxDone>
                    :
                    <TaskBox>
                        <View style={styles.taskTextBox}>
                            <Text>{task.task}</Text>
                        </View>
                        {
                            task.done ?
                                <DoneButton>
                                    <DoneButtonText>✓</DoneButtonText>
                                </DoneButton>
                                :
                                <DoneButton onPress={handleTaskChange}/>
                        }
                    </TaskBox>
            }
        </>
    )
}

const styles = StyleSheet.create({
    taskTextBox: {
        width: 300
    }
})

const DoneButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoneButtonTrue = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 1px solid limegreen;
  background-color: lightgreen;
  text-align: center;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoneButtonText = styled.Text`
  font-size: 15px;
`;

const TaskBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7c7c7c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const TaskBoxDone = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;