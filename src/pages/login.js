import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(AppNavigator) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [erro, setErro] = useState(false);
  const [formPosition, setFormPosition] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
        setErro('Por favor, preencha todos os campos');
        return;
    }

    try {
        const response = await axios.post('http://localhost/apiZooDino/userCheck', { email, senha });
        if (response.status === 200 && response.data) {
            console.log('Login bem sucedido');
            await AsyncStorage.setItem('userCheck', JSON.stringify(response.data));
            setIsModalVisible(!isModalVisible);
            navigation.navigate('Home');
        } else {
            setErro('Usuário ou senha inválidos. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        setErro('Erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
};

const cadastro = () => {
  navigation.navigate("Cadastro")
  setIsModalVisible(!isModalVisible);
}


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo/fundo.png")}
        style={styles.backgroundImage}
      >
        <View style={[styles.cabecalho, { marginTop: formPosition }]}>
          <Animatable.Image
            animation={"flipInY"}
            source={require("../../assets/dinozoo.png")}
            style={styles.imgHeader}
          />
          <Text style={styles.textHeader}>Bem vindo(a)</Text>
        </View>

        {erro && (
          <View>
            <Text style={styles.txtError}>Usuário ou senha inválido(s), tente novamente!</Text>
          </View>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.login}>
              <View style={styles.formContainer}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.closeIcon}>X</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      keyboardType="email-address"
                      autoComplete="email"
                      autoCapitalize="none"
                      value={email}
                      onChangeText={(texto) => setEmail(texto)}
                    />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      value={senha}
                      onChangeText={(texto) => setSenha(texto)}
                      secureTextEntry={esconderSenha}
                    />
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() => setEsconderSenha(!esconderSenha)}
                    ></TouchableOpacity>
                    <View style={styles.forgot}>
                      <Text>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("recuperar");
                          }}
                        >
                          <Text style={{ color: "#fff" }}>
                            Esqueceu a senha?
                          </Text>
                        </TouchableOpacity>
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.sign} onPress={handleLogin}>
                    <Text
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Confirmar
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.signup}>
                  Não tem uma conta?{" "}
                  <TouchableOpacity
                    onPress={() => cadastro()}
                  >
                    <Text style={{ color: "#fff" }}>cadastro</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.openModalButton}
          >
            <Text style={styles.openModalButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  cabecalho: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgHeader: {
    width: 250,
    height: 250,
  },
  textHeader: {
    color: "#882727",
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "Arial",
    height: 50,
  },
  login: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    height: 500,
    width: 390,
    borderRadius: 20,
    backgroundColor: "rgba(17, 24, 39, 1)",
    padding: 16,
    color: "rgba(243, 244, 246, 1)",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  title: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 32,
    fontWeight: "700",
    color: "rgba(243, 244, 246, 1)",
  },
  form: {
    marginTop: 24,
  },
  inputGroup: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    width: 300,
  },
  label: {
    color: "rgba(156, 163, 175, 1)",
    marginBottom: 4,
  },
  input: {
    width: "100%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(55, 65, 81, 1)",
    backgroundColor: "rgba(17, 24, 39, 1)",
    padding: 12,
    color: "rgba(243, 244, 246, 1)",
  },
  forgot: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: 12,
    lineHeight: 16,
    color: "#ffe23c",
    margin: 8,
  },
  sign: {
    display: "flex",
    backgroundColor: "#01b185",
    padding: 12,
    textAlign: "center",
    color: "rgba(17, 24, 39, 1)",
    borderRadius: 6,
    fontWeight: "600",
  },
  signup: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(156, 163, 175, 1)",
    margin: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 200,
    backgroundColor: "transparent",
    padding: 16,
    width: "100%",
  },
  openModalButton: {
    backgroundColor: "#01b185",
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    alignSelf: "center",
    width: "50%",
  },
  openModalButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent:'flex-end', // Use space-between to push elements to the sides
    width: "45%", 
    marginBottom: 16, // Add margin to separate from the title
    position:'absolute'
  },
  openModalButton: {
    backgroundColor: "#01b185",
    padding: 12,
    borderRadius: 16,
    alignSelf: "center",
    width: "50%",
  },
  closeIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    left: 95,
    bottom:220,

  },
  txtError: {
    color:"#FF0000",
    fontSize:25
  }
});
