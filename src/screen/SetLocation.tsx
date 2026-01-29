import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonGreen } from './components/Button';
import { useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

export const SetLocation = () => {
  const [locationUrl, setLocationUrl] = useState('');

  const getLocationLink = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        // Fixed the typo here ($ instead of 0)
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocationUrl(url);
      },
      err => {
        console.log('Location Error: ', err.message);
        setLocationUrl('Error: ' + err.message); // Show the error on screen
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topHalf}>
        <Image
          source={require('./../assets/image.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Select Your Location</Text>

        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what’s happening in your
          area
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomHalf}>
        {/* If locationUrl is empty, show a placeholder so you know the space is there */}
        <Text style={{ color: 'blue', marginBottom: 10 }}>
          {locationUrl || 'Location not fetched yet'}
        </Text>

        <ButtonGreen
          buttonTitle={'Choose live location'}
          onPress={getLocationLink}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },

  topHalf: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  bottomHalf: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    transform: [{ scale: 1.1 }],
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginTop: 8,
    textAlign: 'center',
    color: '#555',
  },
});
