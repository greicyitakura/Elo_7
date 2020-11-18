import React from 'react';

import { View,
     Text, 
     StyleSheet, 
     TouchableOpacity,
     TextInput,
     ScrollView,
     Linking
    
     } from 'react-native';
     import {  MaterialIcons } from '@expo/vector-icons';
     import { useNavigation } from '@react-navigation/native'
     import Pictures from '../../component/Pictures';
     import Icon from 'react-native-vector-icons/MaterialIcons';       
import { render } from 'react-dom';

export default function Home() {
const navigation = useNavigation();

 return (

     <View style={styles.container}>

         <View style={styles.search}> 
         <TouchableOpacity style={styles.back}>
              <MaterialIcons name="chevron-left" color="#a6a6a6" size={50}
              />
              </TouchableOpacity>
                     
              <TextInput 
              style={styles.input}
              placeholder="quadros decorativos"
              >             
              </TextInput>

              <TouchableOpacity style={styles.icon}>
              <MaterialIcons name="search" color="#a6a6a6" size={40}
              />
              </TouchableOpacity>
         </View>
         <View style={styles.textButtons}>
            <Text style={styles.button}>kit</Text>
            <Text style={styles.button}> placa decorativa</Text>
            <Text style={styles.button}>moldura</Text>
         </View>

         <View style={styles.textContainer}>
            <Text style={styles.text}>290748</Text>
            <Text style={styles.text}>Produtos encontrados</Text>
            <Text style={styles.text1}></Text>

            <TouchableOpacity style={{position:'absolute', right: 0,
          alignSelf:'center'}}>
              <MaterialIcons
              name="tune"
              size={24}
              color={'#a6a6a6'}
              />
            </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pictures img={require('../../assets/1.jpg')}
           cost="R$ 206,60" onClick={()=> navigation.navigate('Detail')}> Kit Chocolate Baby (com moldura) </Pictures>
        
           <Pictures img={require('../../assets/2.jpg')}
           cost="R$ 331,70" onClick={()=> navigation.navigate()}> Girafa Amigurumi </Pictures>
         </View>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pictures img={require('../../assets/3.jpg')}
           cost="R$ 30,99" onClick={()=> navigation.navigate('Detail')} >Caixinha de madeira com sabonetes artesanais </Pictures>

          <Pictures img={require('../../assets/4.jpg')}
           cost="R$ 21,60" onClick={()=> navigation.navigate('Detail')}>passarinho de tecido</Pictures>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pictures img={require('../../assets/5.jpg')}
           cost="R$ 72,00" onClick={()=> navigation.navigate('Detail')} >Bastidor mapa</Pictures>

           <Pictures img={require('../../assets/6.jpg')}
           cost="R$ 32,30" onClick={()=> navigation.navigate('Detail')}>Robe Roupão Hobby Hobbie De Cetim Noiva Manga 3/4 Azul Royal</Pictures>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pictures img={require('../../assets/7.jpg')}
           cost="R$ 350,00" onClick={()=> navigation.navigate('Detail')} >Móbile Musical Fadas</Pictures>

           <Pictures img={require('../../assets/8.jpg')}
           cost="R$ 3,99" onClick={()=> navigation.navigate('Detail')}>Convite Circo</Pictures>
          </View>
        </ScrollView>
        
   </View>
        
  );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor: '#fff'
    },
    search: {
        marginTop: 40,
        backgroundColor:'#b03260',
        elevation: 10,
        borderRadius:5,
        marginVertical: 20,
        width:"98%",
        flexDirection:'row',
        alignSelf:'center',
      },
      back: {
        marginTop: 0.5,
        position: "relative",
        left: 0.5,
        top: 10,
      },
      input: {
        backgroundColor:"#fff",
        color:"#a6a6a6",
        marginTop: 5,
        marginRight: 15,
        marginBottom:15,
        marginLeft: 2,
        width: '85%',
        padding: 10,
        paddingLeft:15,
        fontSize:18,
        alignSelf:'center',
        borderRadius:8

      },
      icon: {
        marginTop: 0.5,
        position: 'relative',
        right:55,
        top: 5,
      },
      textContainer:{
        flexDirection: 'row',
        marginVertical: '0.3%',
        marginHorizontal:'5%',
      },
      text: {      
        color:'#a6a6a6',
        fontSize:16,
        marginHorizontal:'1%',
     },
     textButtons: {       
      flexDirection: 'row',
     },
     button:{
      marginTop:0,
      marginBottom: 2,
      marginLeft:20,
      backgroundColor:'#f8e6ad',
      color:'#a6a6a6',
      padding:10,      
      paddingLeft:15,
      paddingRight:15,
      borderRadius:20,
      fontSize:16,
      marginHorizontal:'1%',

     }
})