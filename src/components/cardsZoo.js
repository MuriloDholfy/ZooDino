// CardZoo.js
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

const CardsZoo = () => {
  const navigation = useNavigation(); // Inicializa o hook de navegação

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo/Fundo.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaAquatico.png")}
                style={styles.cardImage}
                
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaDeserto.png")}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaFloresta.png")}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaPantano.png")}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaPradaria.png")}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Territorio')}>
            <View style={styles.card}>
              <Image
                source={require("../../assets/biomas/BiomaTundra.png")}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(243, 244, 246, 1)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  backgroundImage: {
    resizeMode: "cover",
    height: "100%",
    width: "103%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    boxSizing: "border-box",
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "black",
    shadowOffset: { width: 6, height: 8 },
    shadowRadius: 10,
    shadowOpacity: 0.22,
    borderRadius: 17,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.5s",
    display: "flex",
    userSelect: "none",
    fontWeight: "bold",
    color: "black",
    margin: 20,
  },
  cardHover: {
    borderColor: "#01b185",
    transform: [{ scale: 1.05 }],
  },
  cardActive: {
    transform: [{ scale: 0.95, rotateZ: "1.7deg" }],
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 17,
  },
});

export default CardsZoo;
