import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Background } from '../../utils/Background';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../Navigation/routes';

export const Login = () => {
  const [doc, setDoc] = useState({
    name: '',
    password: '',
  });
  const navigation = useNavigation();
  const OnSubmit = () => {
    console.log('on submit call !');
    console.log(
      `${doc.name} is user name and ${
        doc.password
      } is password ${typeof doc.name}`,
    );

    if (doc.name === 'paramjeet' && doc.password === 'paramjeet') {
      navigation.navigate(ROUTES.HOME);
    }
    return;
    // const response = fatch('url',{
    //     method :"GET",
    //     headers: {

    //     },
    //     body :JSON.stringify(doc)
    // })
    // if(!response.ok){
    //     console.log("error");
    //     return ;
    // }
  };

  return (
    <Background>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor="#ddd"
            value={doc.name}
            onChangeText={text => setDoc({ ...doc, name: text })}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={doc.password}
            onChangeText={text => setDoc({ ...doc, password: text })}
          />

          <TouchableOpacity style={styles.button} onPress={OnSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>

          <Text
            style={styles.link}
            onPress={() => navigation.replace(ROUTES.SINGUP)}
          >
            create a account...
          </Text>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.2)', // improves readability
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginBottom: 18,
  },
  button: {
    height: 52,
    backgroundColor: '#8c8c8c',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  link: {
    marginTop: 14,
    color: '#2f55ff',
    fontSize: 16,
  },
});
