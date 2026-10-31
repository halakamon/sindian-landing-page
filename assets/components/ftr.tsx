
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function Footer() {
  return (
    <View style={styles.footer}>

      {/* Decorative Background */}
      <AppText weight="bold" style={styles.watermark}>
        ♧
      </AppText>

      {/* Logo */}
      <View style={styles.logoRow}>
        <AppText weight="bold" style={styles.logoText}>
          SINDIAN
        </AppText>
        <AppText weight="medium" style={styles.logoIcon}>
          ♧
        </AppText>
      </View>

      {/* Tagline */}
      <AppText weight="regular" style={styles.description}>
        من جذور قوية، تنمو أعمال المستقبل.
      </AppText>

      {/* Navigation Links */}
      <View style={styles.links}>
        <AppText weight="regular" style={styles.link}>
          من نحن
        </AppText>

        <View style={styles.dot} />

        <AppText weight="regular" style={styles.link}>
          القطاعات
        </AppText>

        <View style={styles.dot} />

        <AppText weight="regular" style={styles.link}>
          منهجيتنا
        </AppText>

        <View style={styles.dot} />

        <AppText weight="regular" style={styles.link}>
          فعالية GEW
        </AppText>
      </View>

      {/* Email */}
      <View style={styles.emailRow}>
        <AppText weight="regular" style={styles.email}>
          info@sindianvs.com
        </AppText>

        <AppText weight="medium" style={styles.emailIcon}>
          ✉
        </AppText>
      </View>

      {/* Copyright */}
      <AppText weight="regular" style={styles.copyright}>
        © 2026 SINDIAN. All rights reserved.
      </AppText>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#102419",
    paddingHorizontal: 20,
    paddingTop: 31,
    paddingBottom: 26,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },

  watermark: {
    position: "absolute",
    right: -15,
    bottom: -65,
    fontSize: 220,
    color: "#26382A",
    opacity: 0.65,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  logoIcon: {
    color: "#C9A66B",
    fontSize: 20,
  },

  description: {
    color: "#B6A783",
    fontSize: 10,
    marginTop: 15,
    marginBottom: 17,
    textAlign: "center",
  },

  links: {
    width: "78%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  link: {
    color: "#D0D7D1",
    fontSize: 10,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#C9A66B",
  },

  emailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginBottom: 24,
  },

  email: {
    color: "#B6C2B8",
    fontSize: 10,
  },

  emailIcon: {
    color: "#C9A66B",
    fontSize: 15,
  },

  copyright: {
    color: "#78877D",
    fontSize: 9,
    textAlign: "center",
  },
});
