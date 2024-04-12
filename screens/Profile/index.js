import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';

const ProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');

  const auth = getAuth();
  const user = auth.currentUser;

  const updateName = () => {
    updateProfile(user, {
      displayName: newName,
    })
      .then(() => {
        console.log('SUCESSO')
        setNewName('')
      })
      .catch((error) => {
        console.log('ERRO', error)
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {`Seu nome é: ${user.displayName}, gostaria de trocar?`}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewName}
          value={newName}
          placeholder="Novo Nome"
        />
        <Button
          title="Change Name"
          onPress={updateName}
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
      fontSize: 23,
      fontWeight: 'bold'
    }
  });

export default ProfileScreen;