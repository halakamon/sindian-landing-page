import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

import {
  Cairo_400Regular,
  Cairo_500Medium,
  Cairo_600SemiBold,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    CairoRegular: Cairo_400Regular,
    CairoMedium: Cairo_500Medium,
    CairoSemiBold: Cairo_600SemiBold,
    CairoBold: Cairo_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}