import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace with the actual icon library of your choice
import CardsZoo from "../components/cardsZoo.js"; // Certifique-se de fornecer o caminho correto para o arquivo
import CardsPerfil from "../components/cardsPerfil"; // Certifique-se de fornecer o caminho correto para o arquivo
import CardsHome from "../components/cardsHome"; // Certifique-se de fornecer o caminho correto para o arquivo

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="Zoo"
        component={ZooScreen}
        options={{ title: "ZooDino", headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <CardsHome/>
  );
}

function ProfileScreen() {
  return (
    
    <CardsPerfil/>
  );
}

function ZooScreen() {
  return (
    <CardsZoo/>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const icons = {
    Home: "home",
    Zoo: "paw",
    Profile: "user",
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tab, isFocused ? styles.tabActive : null]}
          >
            <Icon
              name={icons[route.name]}
              size={20}
              color={isFocused ? "#01b185" : "gray"}
            />
          </TouchableOpacity>
        );
      })}
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
  cabecalho: {
    justifyContent: "center",
    alignItems: "center",
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
  tabBar: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
    borderTopColor: "rgba(17, 24, 39, 1)",
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 6, height: 8 },
    shadowRadius: 51,
    shadowOpacity: 0.22,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "rgb(255 255 255 / 26%);",
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#01b185",
  },
 
});
