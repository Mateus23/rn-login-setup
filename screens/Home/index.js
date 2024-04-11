import { Button, View, Text } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();

  return (
    <View>
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

export default HomeScreen;