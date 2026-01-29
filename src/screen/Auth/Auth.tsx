import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonGreen } from '../components/Button';
import { Color } from '../../utils/Color';

export const Auth = () => {
  const [login, setLogin] = useState(true);
  const [doc, setDoc] = useState({
    name: '',
    password: '',
    email: '',
  });

  const press = () => {
    setLogin(!login);
  };

  // Function to handle input changes
  const handleChange = (field, value) => {
    setDoc({ ...doc, [field]: value });
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topEmpty} />
      <View style={styles.container2}>
        {login ? (
          <Login
            email={doc.email}
            password={doc.password}
            onChange={handleChange}
            submit={handleSubmit}
          />
        ) : (
          <Signup
            name={doc.name}
            email={doc.email}
            password={doc.password}
            onChange={handleChange}
            submit={handleSubmit}
          />
        )}
        <TouchableOpacity onPress={press} activeOpacity={0.7}>
          <Text style={styles.textButton}>
            {login ? 'Create Account...' : 'Already Have Account...'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Signup = ({ name, email, password, submit, onChange }) => {
  return (
    <View style={singupStyles.container}>
      <Text style={singupStyles.title}>Signup</Text>
      <Text style={singupStyles.heading}>Name</Text>
      <TextInput
        style={singupStyles.inputs}
        value={name}
        onChangeText={val => onChange('name', val)}
      />
      <Text style={singupStyles.heading}>Email</Text>
      <TextInput
        style={singupStyles.inputs}
        value={email}
        keyboardType="email-address"
        onChangeText={val => onChange('email', val)}
      />
      <Text style={singupStyles.heading}>Password</Text>
      <TextInput
        style={singupStyles.inputs}
        value={password}
        secureTextEntry
        onChangeText={val => onChange('password', val)}
      />
      <ButtonGreen buttonTitle={'Submit'} onPress={submit} />
    </View>
  );
};

const Login = ({ email, password, submit, onChange }) => {
  return (
    <View style={singupStyles.container}>
      <Text style={singupStyles.title}>Login</Text>
      <Text style={singupStyles.heading}>Email</Text>
      <TextInput
        style={singupStyles.inputs}
        value={email}
        onChangeText={val => onChange('email', val)}
      />
      <Text style={singupStyles.heading}>Password</Text>
      <TextInput
        style={singupStyles.inputs}
        value={password}
        secureTextEntry
        onChangeText={val => onChange('password', val)}
      />
      <ButtonGreen buttonTitle={'Submit'} onPress={submit} />
    </View>
  );
};

// ... keep your existing styles here
const styles = StyleSheet.create({
  textButton: {
    color: Color.primary, // A nice green color
    fontSize: 14,
    fontWeight: '400',
    padding: 10, // Increases the touchable area (better UX)
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f6f6ca',
  },
  container2: {
    flex: 3,
  },
  topEmpty: {
    flex: 1,
  },
});

const singupStyles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: '700',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  heading: {
    color: '#7a7a7a',
    fontsize: 15,
    fontWeight: 'small',
  },
  inputs: {
    color: '#111',
    borderBottomColor: '#838181',
    borderBottomWidth: 2, // Add this line (or 2 for a thicker line)
    fontSize: 14,
    marginBottom: 10,
  },
});
