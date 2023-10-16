import React, { useState } from "react";
import { TextInput, StyleSheet, View } from 'react-native';

export const EditInfos = () =>{
    const [name, setName] = useState('Juliane Gonçalves Freitas');
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Edit your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
    },
    textInput: {
        width: 300,
        height: 40,
        borderTopColor: '#FFF',
        borderRightColor: '#FFF',
        borderLeftColor: '#FFF',
        borderWidth: 1,
        marginTop: 20,
        fontSize: 24,
        fontWeight: '600',
    }
})