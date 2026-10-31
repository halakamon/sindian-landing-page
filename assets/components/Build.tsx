import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

const steps = [
  {
    number: "01",
    icon: "♧",
    title: "اكتشاف الفرص",
    description:
      "فهم التحديات والاحتياجات الحقيقية التي تستحق أن تتحول إلى فرص واعدة.",
  },
  {
    number: "02",
    icon: "⚙",
    title: "تطوير الحلول",
    description:
      "تصميم الحلول واختبارها وتطوير نماذج أولية قابلة للتطبيق والتحسين المستمر.",
  },
  {
    number: "03",
    icon: "♧",
    title: "بناء الشركات",
    description:
      "العمل على تحويل الحلول إلى مشاريع وشركات تجارية وبناء نماذج أعمال مستدامة.",
  },
  {
    number: "04",
    icon: "↗",
    title: "النمو والتوسع المستدام",
    description:
      "مساندة الشركات في رحلتها نحو النمو والتوسع وتحقيق أثر اقتصادي واجتماعي.",
  },
];

export default function HowWeBuild() {
  return (
    <View style={styles.section}>
      {/* Heading */}
      <View style={styles.heading}>
        <AppText weight="bold" style={styles.eyebrow}>
          HOW WE BUILD
        </AppText>

        <AppText weight="bold" style={styles.title}>
          من فرصة واعدة إلى شركة تصنع{"\n"}الفرق.
        </AppText>

        <AppText weight="medium" style={styles.subtitle}>
          نرافق الشركات الناشئة خلال جميع مراحل التأسيس، من تطوير الحلول والعمل
          على تحويلها إلى مشاريع قابلة للنمو والتوسع.
        </AppText>
      </View>

      {/* Steps */}
      <View style={styles.steps}>
        {steps.map((step) => (
          <View key={step.number} style={styles.stepCard}>
            {/* Number */}
            <View style={styles.numberBox}>
              <AppText weight="bold" style={styles.number}>
                {step.number}
              </AppText>
            </View>

            {/* Content */}
            <View style={styles.stepContent}>
              <View style={styles.stepTitleRow}>
                <AppText weight="bold" style={styles.stepTitle}>
                  {step.title}
                </AppText>
                <AppText weight="bold" style={styles.stepIcon}>
                  {step.icon}
                </AppText>
              </View>

              <AppText weight="regular" style={styles.stepDescription}>
                {step.description}
              </AppText>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#FBF9F5",
    paddingHorizontal: 18,
    paddingTop: 35,
    paddingBottom: 36,
  },

  heading: {
    alignItems: "flex-end",
    marginBottom: 20,
  },

  eyebrow: {
    color: "#B68E4F",
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 9,
  },

  title: {
    color: "#193A2A",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 29,
    textAlign: "right",
    writingDirection: "rtl",
  },

  subtitle: {
    color: "#697168",
    fontSize: 10,
    lineHeight: 18,
    textAlign: "right",
    writingDirection: "rtl",
    marginTop: 9,
  },

  steps: {
    gap: 9,
  },

  stepCard: {
    minHeight: 78,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8DFD0",
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  numberBox: {
    width: 29,
    height: 29,
    borderRadius: 50,
    backgroundColor: "#F3EBDD",
    borderWidth: 1,
    borderColor: "#E8DCC5",
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    color: "#193A2A",
    fontSize: 9,
    fontWeight: "700",
  },

  stepContent: {
    flex: 1,
    alignItems: "flex-end",
  },

  stepTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 5,
  },

  stepTitle: {
    color: "#193A2A",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "right",
  },

  stepIcon: {
    color: "#B68E4F",
    fontSize: 13,
  },

  stepDescription: {
    color: "#777B73",
    fontSize: 9,
    lineHeight: 15,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
