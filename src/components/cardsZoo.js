// CardZoo.js
import React from "react";
import { View, Image, StyleSheet ,ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const  CardsZoo = () =>   {
const renderCard = (index) => (
    <TouchableOpacity>
        <View key={index} style={styles.card}>
        <Image
            source={require("../../assets/icon2.png")}
            style={styles.cardImage}
        />
        </View>
    </TouchableOpacity>
  );

  const renderRow = (rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {Array.from({ length: 2 }, (_, index) =>
        renderCard(rowIndex * 3 + index)
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo/fundo2.png")}
        style={styles.backgroundImage}
      >
        {Array.from({ length: 3 }, (_, index) => renderRow(index))}
      </ImageBackground>
    </View>
  );

  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(243, 244, 246, 1)",
      },
      content: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      backgroundImage: {
        flex: 1,
        resizeMode: "cover", // or "stretch" or "contain"
        height: "100%",
        width: "100%",
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
      }, 
    card: {
        boxSizing: "border-box",
        width: 150,
        height: 200,
        backgroundColor: '#fff',
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
        width: 200, // ajuste conforme necessário
        height: 200, // ajuste conforme necessário
      },
});

export default CardsZoo;