import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from "react-native-webview";

export default function Detail({navigation}) {

  navigation.setOptions ({
    headerTitle: 'Detalhes '
  })
 return (
   <WebView
   source={{
     uri:
       'https://www.elo7.com.br/kiy-chocolate-baby-com-moldura/dp/7B8591'
   }}
/>
  );
}