import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import SwiperComponent from "../components/Swiper";

export default function Detail() {
    return (
    <View style={styles.container}>
        <View style={styles.swiperContent}>
            <SwiperComponent/>
        </View>
            
    </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#FFF'

    },
    swiperContent:{
        flexDirection: 'row',
        height: 340,
        width: '100%',

    }

})