import { StyleSheet, Image, View } from 'react-native';
import React, {useEffect} from 'react';

const NEXT_SCREEN_NAME = "Match"

export default function Loading({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NEXT_SCREEN_NAME)
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Calculating.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F2F2F2"
  }
});
