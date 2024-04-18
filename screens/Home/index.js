import { Button, View, Text, StyleSheet } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <Button
        title="Change Name"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Logout"
        onPress={() => signOut(auth)}
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
})

export default HomeScreen;