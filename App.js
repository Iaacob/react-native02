import React from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from "react-native";

const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const App = () => {

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
  ];

  const PATTERN_DESC =
    Platform.OS === "android"
      ? "esperar 1s, vibrar 1s, esperar 1s"
      : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>TERREMOTO TERREMOTO</Text>
      <View>
        <Button title="Vibrar una vez" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      {Platform.OS == "android"
        ? [
            <View>
              <Button
                title="Vibrar 3 segundos"
                onPress={() => Vibration.vibrate(3 * ONE_SECOND_IN_MS)}
              />
            </View>,
            
            <Separator />
          ]
        : null}
      <Text style={styles.paragraph}>Patron: {PATTERN_DESC}</Text>
      <Button
        title="Vibrar intercalado"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Frenar la vibracion intercalada"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 44,
    padding: 8
  },
  button: {
    color: "#f194ff"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    textAlign: "center"
  },
});

export default App;
