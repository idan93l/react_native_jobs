import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>

      </View>
    </View>
  );
};

export default Welcome;
