import React from 'react';
import { Text, TouchableOpacity, View, Linking } from 'react-native';

import { styles } from './styles';

export function ButtonCTA() {
    const email = 'mailto:caioledan@gmail.com'

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {Linking.openURL(email)}}>
            <Text style={styles.text}>Send a message</Text>
        </TouchableOpacity>
    </View>
  );
}