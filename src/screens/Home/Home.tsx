import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { PhotoSection } from '../../components/Photo-Section/Photo-Section';
import { Links } from '../../components/Links/Links';

export function Home() {
  return (
    <View style={styles.container}>
        <PhotoSection title='Caio Lemos'/>
        <Links/>
    </View>
  );
}