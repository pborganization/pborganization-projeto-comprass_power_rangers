import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/mainScreen";
import { ProfileScreen } from "./src/screens/profileScreen";
import { NotLogged } from "./src/components/profileComponents/NotLogged";

export default function App() {
  return (
    <View style={styles.container}>
      <NotLogged />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
