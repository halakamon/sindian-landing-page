import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function GewEvent() {
  return (
    <View style={styles.section}>
     <AppText weight="bold" style={styles.eyebrow}>
  GLOBAL ENTREPRENEURSHIP WEEK
</AppText>

      <AppText weight="bold" style={styles.title}>
  أفكار اليوم.. شركات المستقبل!
</AppText>

    <AppText weight="regular" style={styles.description}>
  ضمن أسبوع ريادة الأعمال العالمي (GEW)، نفتح المجال
  أمام أصحاب الأفكار والمشاريع الواعدة لعرض أفكارهم
  والمشاركة في رحلة تحويلها إلى فرص حقيقية.
</AppText>

      <View style={styles.button}>
       <AppText weight="bold" style={styles.buttonText}>
  اكتشف التفاصيل وسجّل
</AppText>
    <AppText weight="medium" style={styles.arrow}>
  ←
</AppText>
      </View>

      <View style={styles.note}>
     <AppText weight="bold" style={styles.noteText}>
 ثلاث أفكار ريادية، وفرص جديدة للبناء:.
</AppText>
        <View style={styles.bullet} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingTop: 38,
    paddingBottom: 15,
    alignItems: "flex-end",
  },

  eyebrow: {
    color: "#B68E4F",
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 9,
    textAlign: "right",
  },

  title: {
    color: "#193A2A",
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 9,
  },

  description: {
    color: "#697168",
    fontSize: 10,
    lineHeight: 18,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 14,
  },

  button: {
    width: 138,
    height: 34,
    backgroundColor: "#193A2A",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },

  noteText: {
    color: "#756D5E",
    fontSize: 10,
    textAlign: "right",
  },

  bullet: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#C9A66B",
  },
});
