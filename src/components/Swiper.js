import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';


const styles = StyleSheet.create({
    wrapper:{},
    slide:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }
}) 
export default SwiperComponent(); {
    return (

   <Swiper

   spaceBetwenn={100}
   slidesPerView={1}
   onSlideChange={() => console.log('slide.change')}
   onSwiper={(swiper) => console.log(swiper)}
   >
    <SwiperSlide >
    slide um filha da puta como coloca imagem@@@@2
    </SwiperSlide>
    
    <SwiperSlide>
    slide 2  
    </SwiperSlide>

    <SwiperSlide>
     slide 3
    </SwiperSlide>

   </Swiper>
 )}


