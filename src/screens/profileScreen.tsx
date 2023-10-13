import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Switch
  } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LanguageOption } from "../components/profileComponents/LanguageOption";
import { EditInfos } from "../components/profileComponents/EditInfos";

export const ProfileScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [nameInput, setNameInput] = useState(null as React.ReactElement | null);

    useEffect(() => {
        setNameInput(isEnabled ? <EditInfos /> : null);
     }, [isEnabled]);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View style={styles.titleImageContainer}>
                <Text style={styles.textTitle}>My profile</Text>
                <Image source={require('../../assets/images/my-profile-image.png')}
                style={styles.image}/> 
            </View>     
                <View style={styles.textInfoContainer}>
                    {isEnabled ? (
                        <EditInfos />
                    ) : (
                    <Text style={styles.textName}>{nameInput || 'Juliane Gonçalves Freitas'}</Text>
                     )}
                    <Text style={styles.textEmail}>matildabrown@mail.com</Text>
                </View>
                <View style={styles.edits}>
                    <Text style={styles.text}>Edit Informations</Text>
                    <Switch
                        trackColor={{false:'#C0C0C0', true: '#FF0024'}}
                        thumbColor={isEnabled ? '#9B9B9B' :  '#9B9B9B'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.buttonSwitch}
                    />
                </View>
                    <LanguageOption />
                <View style={styles.edits}>
                    <Text style={styles.text}>Log out</Text>
                    <Entypo name='log-out' size={20} color='#9B9B9B' style={styles.iconLog} />
                </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleImageContainer: {
        marginTop: 107,
        marginLeft: 16,
        marginRight: 190,
        flexDirection: 'column',
    },
    textTitle:{
        color: '#000',
        fontSize: 32,
        fontWeight: '800',
    },
    image: {
        marginTop: 40.03,
        marginLeft: 109.34,
        marginRight: 112.56,
        borderRadius: 100,
    },
    textInfoContainer: {
        marginLeft: 16,
    },
    textName: {
        marginTop: 13.12,
        textAlign: 'center',
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
    },
    textEmail:{
        marginLeft: 48,
        fontSize: 14,
        color: '#9B9B9B'
    },
    edits: {
        paddingVertical: 23,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#B6B6B6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#000',
        fontWeight: '700',
    },
    buttonSwitch: {
        marginLeft: 154,
    },
    iconLog: {
        marginLeft: 265,
    }
  });