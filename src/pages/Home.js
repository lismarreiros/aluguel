import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


import News from "../components/News";
import House from "../components/House";
import Recommended from "../components/Recommended";



export default function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView 
        showsVerticalScrollIndicator ={false}
        style={{backgroundColor:'#FFF',}}
        >

        <View
        style={styles.header}>
            <View style={styles.inputArea}>
            <Feather name="search" size={24} color="black"/>
            <TextInput
            placeholder="O que esta procurando?"
            style={styles.input}/>
            </View>
        
        </View>

        <View style={styles.contentNew}>
            <Text style={styles.title}>Novidades</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15,}}>
        <News
        cover={require('../assets/house1.jpg')}
        name="Casa de Praia"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> navigation.navigate('detail')}

        />

        <News
        cover={require('../assets/house2.jpg')}
        name="Casa Floripa"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> {}}

        />
        <News
        cover={require('../assets/house3.jpg')}
        name="Rancho Sp"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> {}}

        />
        <News
        cover={require('../assets/house4.jpg')}
        name="Mansão"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> {}}

        />
        <News
        cover={require('../assets/house5.jpg')}
        name="Casa"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> {}}

        />
        <News
        cover={require('../assets/house6.jpg')}
        name="Apartamento"
        description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        onPress={()=> {}}

        />

        </ScrollView>

        <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
            <Text style={[styles.title, {marginTop: 20}]}>Próximo de Você</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
        <House
        cover={require('../assets/house4.jpg')}
        /> <House
        cover={require('../assets/house5.jpg')}
        /> <House
        cover={require('../assets/house6.jpg')}
        />

        </ScrollView>

        <Text style={[styles.title, {marginTop: 20} ]}>Dica do Dia</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
            <Recommended
            cover={require('../assets/house1.jpg')}
            house= "Casa de Floripa"
            offer="25%"
            />  
            
            <Recommended
            cover={require('../assets/house4.jpg')}
            house="Casa Rio de Janeiro"
            offer="15%"
            />
            
            <Recommended
            cover={require('../assets/house5.jpg')}
            house= "Rancho"
            offer="10%"
            />
            
            
            
        </ScrollView>




        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal:15, 
        flexDirection:'row',
        alignItems:'center',
        width:'98%',
        backgroundColor:'#FFF',
        elevation: 2,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily:'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'

    },
    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    title:{
        paddingHorizontal: 15,
        fontFamily:'Montserrat_700Bold',
        color:'#4f4a4a'
    }
    });