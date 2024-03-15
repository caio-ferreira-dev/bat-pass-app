import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>Bat Pass Generator</Text>
        <Image source={batLogo} style={{ resizeMode: 'contain', height: 180}} />
    </>
  );
}