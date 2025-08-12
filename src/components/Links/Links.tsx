import React from 'react';
import { Button, View, Linking, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export function Links() {
    const linkedin = 'https://www.linkedin.com/in/caioledan'
    const github = 'https://github.com/Caioledan'
    const instagram = 'https://www.instagram.com/caio._.kyo/'

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {Linking.openURL(linkedin)}} style={styles.button}>
            <Text style={styles.text}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Linking.openURL(github)}} style={styles.button}>
            <Text style={styles.text}>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Linking.openURL(instagram)}} style={styles.button}>
            <Text style={styles.text}>Instagram</Text>
        </TouchableOpacity>
    </View>
  );
}