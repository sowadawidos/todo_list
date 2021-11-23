import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

export const MainButtons = ({navigation}) => {
    return (
        <>
            <StyledButton onPress={() => navigation.navigate('MainPage')}>
                <StyledTextButton>Today</StyledTextButton>
            </StyledButton>
        </>
    )
}

const StyledButton = styled.TouchableOpacity`
  width: 250px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 45px;
`;

const StyledTextButton = styled.Text`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;