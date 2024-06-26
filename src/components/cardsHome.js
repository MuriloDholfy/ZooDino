import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feed from "./feed";
const CardsHome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo/Fundo.jpg")}
        style={styles.backgroundImage}
      > 
      <Feed/>
        {/* <Animatable.Image animation={"flipInY"} source={require("../../assets/dinozoo.png")} style={styles.img}></Animatable.Image> */}
      </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(243, 244, 246, 1)",
  },
  backgroundImage: {
    resizeMode: "cover", // or "stretch" or "contain"
    height: "100%",
    width: "103%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    boxSizing: "border-box",
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "white",
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
  img: {
    width: 300,
    height: 300,    
    bottom: 100,

  },
  person: {
    bottom:100,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    display: "block",
    paddingTop: 10,
    fontSize: 30,
  },
  job: {
    bottom:100,
    fontWeight: "400",
    color: "black",
    display: "block",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 20,
  },
  descricao: {
    bottom:100,
    fontWeight: "400",
    color: "black",
    textAlign: 'center',
    paddingTop: 100,
    fontSize: 14,
  },
  button: {
    padding: 8,
    width: 150,
    borderRadius: 8,
    margin: "auto",
    marginTop: 30,
    backgroundColor: "rgb(1, 177, 133)",
  },
  buttonText: {
    color: "#111111",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CardsHome;
