import React, { useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation

const { width } = Dimensions.get("window");
const itemWidth = width / 6;
const gap = (width - itemWidth * 5) / 6;

export default function Territorio() {
  const navigation = useNavigation(); // Use o hook useNavigation para obter a instância de navegação

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalVisible(false);
  };

  const data = [
    {
      key: "1",
      profileImage: require("../../assets/user2.png"),
      username: "Pteranodon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis.",
      postImage: require("../../assets/post/Post1.png"),
    },
    {
      key: "2",
      profileImage: require("../../assets/user3.png"),
      username: "Tiranossauro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis.",
      postImage: require("../../assets/post/Post2.png"),
    },
    {
      key: "3",
      profileImage: require("../../assets/user4.png"),
      username: "Stegosaurus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis.",
      postImage: require("../../assets/post/Post3.png"),
    },
    {
      key: "4",
      profileImage: require("../../assets/user5.png"),
      username: "Triceratops",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis.",
      postImage: require("../../assets/post/Post4.png"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/Territorio/BiomaAquatico.png")}
      style={styles.backgroundImage}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={34} color="white" />
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            profileImage={item.profileImage}
            username={item.username}
            description={item.description}
            postImage={item.postImage}
            onPress={() => openModal(item)}
          />
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollView} // Estilo de conteúdo
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedPost && (
              <View>
                <Text style={styles.modalUsername}>
                  {selectedPost.username}
                </Text>
                <Text style={styles.modalDescription}>
                  {selectedPost.description}
                </Text>
                <Image
                  source={selectedPost.postImage}
                  style={styles.modalPostImage}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={closeModal}
              style={styles.openModalButton}
            >
              <Text style={styles.openModalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const Post = ({ profileImage, username, description, postImage, onPress }) => (
  <TouchableOpacity style={styles.postContainer} onPress={onPress}>
    <View style={styles.cardContainer}>
      <View style={styles.profile}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Image source={postImage} style={styles.postImage} />
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 10,
  },
  postContainer: {
    padding: 10,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    elevation: 5,
  },
  modalUsername: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  modalDescription: {
    marginBottom: 10,
  },
  modalPostImage: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#ff6347",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: "60%",
    width: "100%",
  },
  openModalButton: {
    backgroundColor: "#01b185",
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    alignSelf: "center",
    width: "50%",
    height:'auto'
  },
  openModalButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end", // Use space-between to push elements to the sides
    width: "45%",
    marginBottom: 16, // Add margin to separate from the title
    position: "absolute",
  },
 
});
