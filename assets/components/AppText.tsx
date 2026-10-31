import { Text, TextProps, StyleSheet } from "react-native";

type AppTextProps = TextProps & {
  weight?: "regular" | "medium" | "semibold" | "bold";
};

export default function AppText({
  weight = "regular",
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[
        styles.base,
        styles[weight],
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "CairoRegular",
  },
  regular: {
    fontFamily: "CairoRegular",
  },
  medium: {
    fontFamily: "CairoMedium",
  },
  semibold: {
    fontFamily: "CairoSemiBold",
  },
  bold: {
    fontFamily: "CairoBold",
  },
});