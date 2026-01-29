import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ButtonGreen } from './components/Button';
import { CicleButton } from './components/CicleButton';

export const OnBoarding = () => {
  return (
    <ImageBackground
      source={require('../assets/8140 1.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.iconUp}>
        <Text style={styles.nactor}>Welcome</Text>
        <Text style={styles.nactor}>to our store</Text>
        <Text style={styles.nactorDown}>
          Ger your groceries in as fast as one hour
        </Text>
        <ButtonGreen buttonTitle={'Get Started'} />
        <CicleButton />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nactor: {
    color: 'white',
    fontSize: 60,
    fontWeight: '500',
    marginTop: -25,
  },
  nactorDown: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '100',
    marginTop: -5,
    marginBottom: 30,
  },
  iconUp: {
    marginTop: 400,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
