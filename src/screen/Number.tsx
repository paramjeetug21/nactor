import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from './Navigation/routes';

export const NumberInput = () => {
  const [value, setValue] = useState('');

  const navigation = useNavigation();
  const onPressKey = key => {
    if (key === 'X') {
      setValue(prev => prev.slice(0, -1));
    } else if (key === 'OK') {
      navigation.navigate(ROUTES.OTPINPUT);
      console.log('Final number:', value);
    } else {
      if (value.length < 10) {
        setValue(prev => prev + key);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Top 2 rows */}
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require('./../assets/Mask Group.png')}
          resizeMode="cover"
        />
      </View>

      {/* Middle 1 row */}
      <View style={styles.middle}>
        <Text style={styles.text}>Get your Groceries</Text>
        <Text style={styles.text}>With Nector</Text>

        <TextInput
          value={value}
          editable={false}
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#777"
        />
      </View>

      {/* Bottom 2 rows */}
      <View style={styles.bottom}>
        <NumberKeyboard onPress={onPressKey} />
      </View>
    </View>
  );
};
const keys = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['X', '0', 'OK'],
];

const NumberKeyboard = ({ onPress }) => {
  return (
    <View style={styles.keyboard}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.keyRow}>
          {row.map(key => (
            <TouchableOpacity
              key={key}
              style={styles.key}
              onPress={() => onPress(key)}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 2,
  },

  middle: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  bottom: {
    flex: 2,
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: 26,
    fontWeight: '600',
  },

  input: {
    marginTop: 20,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },

  keyboard: {
    paddingHorizontal: 20,
  },

  keyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderColor: 'white',
  },

  key: {
    flex: 1,
    marginHorizontal: 6,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#dcd9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
