import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/mainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
