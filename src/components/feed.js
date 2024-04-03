import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Image, Text } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 6;
const gap = (width - itemWidth * 5) / 6;
export default function Feed() {
    return (
        <View style={styles.container}>
            
            
            <View style={styles.content}>
                <ScrollView>
                    <Post 
                        profileImage={require('../../assets/user2.png')}
                        username="Pteranodon"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis."
                        postImage={require('../../assets/post/Post1.png')}
                    />
                    <Post 
                        profileImage={require('../../assets/user3.png')}
                        username="Tiranossauro"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis."
                        postImage={require('../../assets/post/Post2.png')}
                    />
                    <Post 
                        profileImage={require('../../assets/user4.png')}
                        username="Stegosaurus"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis."
                        postImage={require('../../assets/post/Post3.png')}
                    />
                    <Post 
                        profileImage={require('../../assets/user5.png')}
                        username="Triceratops"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque velit vel fermentum sagittis."
                        postImage={require('../../assets/post/Post4.png')}
                    />

                </ScrollView>
            </View>
          
        </View>
    );
}

const Post = ({ profileImage, username, description, postImage }) => (
    <View style={styles.postContainer}>
        <View style={styles.cardContainer}>
            <View style={styles.profile}>
                <Image source={profileImage} style={styles.profileImage} />
                <Text style={styles.username}>{username}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={postImage} style={styles.postImage} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100, // Altura do cabeçalho
    },
    title: {
        fontSize: 26,
        paddingLeft: gap,
        paddingRight: gap,
        alignItems: 'center',
        top:15,

      },
    content: {
        flex: 1,
        paddingVertical: 10,
        margin: 10,

    },
    footer: {
        height: 50, // Altura do rodapé
    },
    scrollView: {
        paddingLeft: gap,
        paddingRight: gap,
        alignItems: 'center',
    },
    item: {
        height: itemWidth,
        width: itemWidth,
        backgroundColor: 'black',
        marginRight: gap,
        borderRadius: itemWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    postContainer: {
        padding: 10,
        marginBottom: 10, // Adicionando margem inferior entre os posts
    },
    cardContainer: {
        backgroundColor: 'white', // Cor de fundo do card
        borderRadius: 10, // Borda arredondada do card
        padding: 15, // Espaçamento interno do card
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Offset da sombra
        shadowOpacity: 0.2, // Opacidade da sombra
        shadowRadius: 3, // Raio da sombra
        elevation: 5, // Elevação da sombra (para dispositivos Android)
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});
