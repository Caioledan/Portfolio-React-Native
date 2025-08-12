import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { PhotoSection } from '../../components/Photo-Section/Photo-Section';
import { SkillsComponent } from '../../components/Skills-Component/Skills-component';
import { ButtonCTA } from '../../components/ButtonCTA/CTA';

export function Skills() {
  return (
    <View style={styles.container}>
        <PhotoSection title='My skills'/>
        <SkillsComponent/>
        <ButtonCTA/>
    </View>
  );
}