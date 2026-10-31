
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
export default function Header() {
  return (
    <View style={styles.header}>
      {/* Logo */}
     {/* Logo */}
<View style={styles.logoContainer}>
  <Image
    source={{
      uri: "https://sindianvs.com/newsite/wp-content/uploads/2025/11/Asset-1.png",
    }}
    style={styles.logo}
    resizeMode="contain"
  />
</View>
      {/* Actions */}
      <View style={styles.actions}>
        <View style={styles.loginButton}>
     <AppText weight="bold" style={styles.loginText}>
  سجل الآن
</AppText>
        </View>

        <View style={styles.languageSwitch}>
    <AppText weight="bold" style={styles.activeLanguage}>
  EN
</AppText>
        <AppText weight="medium" style={styles.language}>
  AR
</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    logoContainer: {
  width: 120,
  height: 44,
  backgroundColor: "#FBF9F5",
  borderRadius: 6,
  alignItems: "center",
  justifyContent: "center",
},

  header: {
    height: 48,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 85,
    height: 30,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  loginButton: {
    backgroundColor: "#C9A66B",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 6,
  },

  loginText: {
    color: "#193A2A",
    fontSize: 10,
    // fontWeight: "700",
  },

  languageSwitch: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 5,
    padding: 3,
    gap: 5,
  },

  activeLanguage: {
    color: "#FFFFFF",
    fontSize: 8,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 3,
  },

  language: {
    color: "#A9B9AC",
    fontSize: 8,
    paddingHorizontal: 3,
  },
});
