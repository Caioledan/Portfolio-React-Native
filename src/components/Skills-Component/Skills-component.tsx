import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function SkillsComponent() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Web Tecnologies:</Text>
        <Text style={styles.text}>HTML, CSS, JS, Angular, React.js, Node.js, Express.js, React Native</Text>
        <Text style={styles.title}>Programming Languages:</Text>
        <Text style={styles.text}>Python, C, C++, C#, TypeScript, Java</Text>
        <Text style={styles.title}>Databases:</Text>
        <Text style={styles.text}>SQL, NoSQL, PostgresSQL, MongoDB, Data Structures</Text>
    </View>
  );
}