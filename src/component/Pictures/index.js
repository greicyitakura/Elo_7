import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Pictures(props) {

function filterDesc(desc){
    if(desc.length <27){
        return desc;
    }
    return `${desc.substring(0,22)}...`;
}

 return (
     <TouchableOpacity style={styles.container} onPress={props.onClick}>
         <Image
         source={props.img}
         style={styles.picturesImg}
         
         />
          <View opacity={0.4}>              
         <Text style={styles.img1}>
             {filterDesc(props.children)}
         </Text>         
          </View>        
         <Text style={styles.img1}>{props.cost}
         </Text>

     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems:'center',
        justifyContent: 'center',
    },
    picturesImg: {
        width:180,
        height: 180,
    },
    img1:{
        fontSize:15
    }
})
