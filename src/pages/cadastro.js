import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal,} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [erro, setErro] = useState(false);
  const [formPosition, setFormPosition] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCadastro = () => {
    if (email == "Dino" && senha == "1234") {
      var erro = false;
    }
  };

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
        <View style={[styles.cabecalho, { marginTop: formPosition }]}></View>

        {erro && (
          <View>
            <Text style={styles.txtInput}>Usuário ou senha inválido(s)</Text>
          </View>
        )}
        <View style={styles.modalContainer}>
          <View style={styles.Cadastro}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Cadastro</Text>
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin:5
                    }}
                  >
                    <View style={{ flex: 1, marginRight: 8 }}>
                      <Text style={styles.label}>Nome:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=""
                        value={nome}
                        onChangeText={(texto) => setNome(texto)}
                      />
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <Text style={styles.label}>Telefone:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=""
                        value={telefone}
                        onChangeText={(texto) => setTelefone(texto)}
                      />
                    </View>
                  </View>
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
                  <Text style={styles.label}>Confirmar Senha:</Text>
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
                          erro === false
                            ? navigation.navigate("recuperar")
                            : (erro = true);
                        }}
                      ></TouchableOpacity>
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.sign} onPress={() =>  navigation.navigate('Home')}>
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
                Já tem uma conta?{" "}
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={{ color: "#fff" }}>Entrar</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(17, 24, 39, 1)",
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
  Cadastro: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    height: 500,
    width: 370,
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
    width: 300, // Increase the width by 5%
  },
  label: {
    color: "rgba(156, 163, 175, 1)",
    marginBottom: 4,
  },
  input: {
    width: "100%", // Increase the width by 5%
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
    flex: 3,
    resizeMode: "cover", // or "stretch" or "contain"
    height: "100%",
    width: "100%",
  },
  slideButton: {
    backgroundColor: "#01b185",
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: "center",
  },
  slideButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827c2",
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(243, 244, 246, 1)",
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: "#ff5733",
    padding: 12,
    borderRadius: 6,
    marginTop: 16,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
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
  signText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
