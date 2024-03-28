import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"; // Replace with the actual icon library of your choice

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Image
                source={require('../../assets/icon.png')}
                style={styles.logo}
            />
        <Icon name="user" size={30} color="#333" style={styles.profileIcon} /> 
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribui os elementos no espaço disponível
        paddingHorizontal: 10, // Adiciona um espaçamento horizontal
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    logo: {
        width: 50,
        height: 30,
    },
});

export default Navbar;
