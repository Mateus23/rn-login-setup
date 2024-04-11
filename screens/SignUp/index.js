import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singUp = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastrar
      </Text>
      <View style={{ width: '70%'}}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
        />
      </View>
      <Button
        title="Sign Up"
        onPress={singUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    backgroundColor: '#fdb',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#eee'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default SignUpScreen;