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

const CardsPerfil = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo/Fundo.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.card}>
          <View style={styles.cardBorderTop}></View>
     
          <Animatable.Image animation={"flipInY"} source={require("../../assets/user.png")} style={styles.img}></Animatable.Image>
          <Text style={styles.person}>DinoTroxa</Text>
          <Text style={styles.job}>T-Rex</Text>
          <Text style={styles.descricao}> Title asdasidgad aigusd agda sdga ksjga sdg aksdgasdkasdjg  gga sjdakgjd askjdg asdgasdjasgjkdagsd g gg asjdajsd gagd kgagjsdgjakda~sda ld kal ~skdakshd al~ksda~sk hasd has~dlkahsdkajhs ~dlahs dlakshd ~lakshd ãklhsd ãlkjshdãlks hdãlksdh çajsdh asdj hasldk ha</Text>
        </View>
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
    flex: 1,
    resizeMode: "cover", // or "stretch" or "contain"
    height: "100%",
    width: "100%",
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
    width: 150,
    height: 150,
    backgroundColor: "#001B36",
    borderRadius: 100,
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

export default CardsPerfil;
