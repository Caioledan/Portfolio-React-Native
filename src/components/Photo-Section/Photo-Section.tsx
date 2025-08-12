import React from 'react';
import { Image, Text, View } from 'react-native';
import Caio from "../../assets/images/Caio.png"
import { styles } from './styles';

export function PhotoSection({title}:{title: string}) {
  return (
    <View style={styles.container}>
      <Image source={Caio} style={styles.image}/>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}