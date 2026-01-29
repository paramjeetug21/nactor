import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { Color } from '../../utils/Color';
import { OnBoarding } from '../OnBoarding';
import { ROUTES } from '../Navigation/routes';

export const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1.09, // little zoom
      duration: 2500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate(ROUTES.ONBOARDING);
    }, 2500);
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconUp}>
        <Text style={styles.nactor}>nectar</Text>
        <Text style={styles.nactorDown}>online grocery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nactor: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'medium',
  },
  nactorDown: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: '100',
    marginTop: -15,
  },
  iconUp: {
    marginTop: 100,
  },
});
