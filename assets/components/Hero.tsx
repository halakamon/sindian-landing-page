import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Header from "./Header";

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Header />

      {/* Decorative lines */}
      <View style={styles.topLine} />
      <View style={styles.bottomLine} />

      {/* Hero content */}
      <View style={styles.content}>
        <AppText weight="medium" style={styles.eyebrow}>
          VENTURE STUDIO SYRIA
        </AppText>

        <AppText weight="bold" style={styles.title}>
          من جذور قوية،{"\n"}
          تنمو أعمال المستقبل.
        </AppText>

        <AppText weight="regular" style={styles.description}>
          نبني الشركات الناشئة من الفكرة إلى النمو، ونحوّل
          {"\n"}التحديات المحلية إلى فرص استثمارية واعدة.
        </AppText>

        <View style={styles.buttons}>
          <View style={styles.primaryButton}>
            <AppText weight="bold" style={styles.primaryText}>
              اكتشف فعالية GEW
            </AppText>
          </View>

          <View style={styles.secondaryButton}>
            <AppText weight="medium" style={styles.secondaryText}>
              تعرّف على سنديان
            </AppText>
          </View>
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <AppText weight="medium" style={styles.footerText}>
            ROOTING FUTURE VENTURES
          </AppText>
          <View style={styles.dividerLine} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 420,
    backgroundColor: "#193A2A",
    overflow: "hidden",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 25,
  },

  eyebrow: {
    color: "#C9A66B",
    fontSize: 9,
    letterSpacing: 2.5,
    marginBottom: 16,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 25,
    // fontWeight: "800",
    lineHeight: 36,
    textAlign: "center",
    writingDirection: "rtl",
  },

  description: {
    color: "#B8C4BB",
    fontSize: 11,
    lineHeight: 19,
    textAlign: "center",
    writingDirection: "rtl",
    marginTop: 12,
    marginBottom: 20,
  },

  buttons: {
    width: "100%",
    alignItems: "center",
    gap: 8,
  },

  primaryButton: {
    width: "78%",
    maxWidth: 280,
    height: 48,
    backgroundColor: "#C9A66B",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryText: {
    color: "#193A2A",
    fontSize: 12,
    // fontWeight: "700",
  },

  secondaryButton: {
    width: "78%",
    maxWidth: 280,
    height: 48,
    borderWidth: 1,
    borderColor: "#526D5B",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    color: "#FFFFFF",
    fontSize: 11,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    gap: 10,
    marginTop: 25,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(201,166,107,0.3)",
  },

  footerText: {
    color: "#C9A66B",
    fontSize: 8,
    letterSpacing: 1.5,
  },

  topLine: {
    position: "absolute",
    width: 350,
    height: 180,
    borderWidth: 1,
    borderColor: "rgba(201,166,107,0.12)",
    borderRadius: 180,
    top: 35,
    left: -180,
    transform: [{ rotate: "-25deg" }],
  },

  bottomLine: {
    position: "absolute",
    width: 350,
    height: 180,
    borderWidth: 1,
    borderColor: "rgba(201,166,107,0.15)",
    borderRadius: 180,
    bottom: -100,
    right: -180,
    transform: [{ rotate: "-25deg" }],
  },
});
