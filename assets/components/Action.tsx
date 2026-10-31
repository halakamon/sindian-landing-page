
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function CallToAction() {
  return (
    <View style={styles.section}>
      <AppText weight="medium" style={styles.eyebrow}>
        YOUR NEXT STEP STARTS HERE
      </AppText>

      <AppText weight="bold" style={styles.title}>
        هل أنت مستعد لتكون جزءاً من{"\n"}البداية؟
      </AppText>

      <AppText weight="regular" style={styles.description}>
        اكتشف فعالية سنديان ضمن GEW، وتعرّف على الأفكار الريادية التي
        يمكن أن تفتح أبواب جديدة للابتكار وبناء المستقبل.
      </AppText>

      <View style={styles.button}>
        <AppText weight="bold" style={styles.buttonText}>
          سجل الآن
        </AppText>
      </View>

      <AppText weight="regular" style={styles.bottomText}>
        التسجيل عبر نموذج المشاركة الرسمي
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#102419",
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.10)",
  },

  eyebrow: {
    color: "#C9A66B",
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 13,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 31,
    writingDirection: "rtl",
    marginBottom: 13,
  },

  description: {
    color: "#C1CDC3",
    fontSize: 11,
    lineHeight: 19,
    textAlign: "center",
    writingDirection: "rtl",
    marginBottom: 21,
  },

  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#C9A66B",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#193A2A",
    fontSize: 12,
  },

  bottomText: {
    color: "#89978D",
    fontSize: 9,
    marginTop: 10,
  },
});
