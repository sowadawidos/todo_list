import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const HeaderText = () => {
    return (
        <>
            <HeaderText1>Todo</HeaderText1>
            <HeaderText2>List</HeaderText2>
        </>
    )
}

const HeaderText1 = styled.Text`
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 7px;
`;

const HeaderText2 = styled.Text`
  font-size: 25px;
  font-weight: 500;
  padding-left: 50px;
`;