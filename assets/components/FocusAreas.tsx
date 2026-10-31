import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

const areas = [
  {
    id: 1,
    title: "النقل واللوجستيات",
    description: "حلول ذكية لتطوير النقل والخدمات اللوجستية.",
    icon: "⇄",
  },
  {
    id: 2,
    title: "التجارة الإلكترونية",
    description: "تمكين نمو الأعمال وتطوير تجارب التسوق.",
    icon: "▣",
  },
  {
    id: 3,
    title: "الرعاية الصحية",
    description: "حلول مبتكرة لتحسين الوصول إلى الرعاية الصحية.",
    icon: "✚",
  },
  {
    id: 4,
    title: "التعليم والتدريب",
    description: "منصات وبرامج تعليمية تواكب احتياجات المستقبل.",
    icon: "◇",
  },
];

export default function FocusAreas() {
  return (
    <View style={styles.section}>
      {/* Heading */}
      <View style={styles.heading}>
       
        <AppText weight="bold" style={styles.title}>
          نبتكر حلولاً تبدأ من احتياجات{"\n"}حقيقية.
        </AppText>

        <AppText weight="medium" style={styles.subtitle}>
          نعمل على تطوير حلول مستدامة تستجيب للتحديات المهمة وتدعم بناء اقتصاد
          أكثر مرونة واستدامة.
        </AppText>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        {areas.map((area) => (
          <View key={area.id} style={styles.card}>
            <View style={styles.iconBox}>
              <AppText weight="bold" style={styles.icon}>
                {area.icon}
              </AppText>
            </View>

            <View style={styles.cardContent}>
              <AppText weight="bold" style={styles.cardTitle}>
                {area.title}
              </AppText>

              <AppText weight="regular" style={styles.cardDescription}>
                {area.description}
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
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEE8DE",
  },

  heading: {
    alignItems: "flex-end",
    marginBottom: 18,
  },

  eyebrow: {
    color: "#B68E4F",
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    color: "#193A2A",
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 29,
    textAlign: "right",
    writingDirection: "rtl",
  },

  subtitle: {
    color: "#697168",
    fontSize: 10,
    lineHeight: 17,
    textAlign: "right",
    writingDirection: "rtl",
    marginTop: 9,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },

  card: {
    width: "48.5%",
    minHeight:88,
    backgroundColor: "#FBF9F5",
    borderWidth: 1,
    borderColor: "#E8DFD0",
    borderRadius: 9,
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  iconBox: {
    width: 29,
    height: 29,
    borderRadius: 6,
    backgroundColor: "#F0E8D9",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 16,
    color: "#193A2A",
    fontWeight: "700",
  },

  cardContent: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
  },

  cardTitle: {
    color: "#193A2A",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 5,
  },

  cardDescription: {
    color: "#777B73",
    fontSize: 8,
    lineHeight: 13,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
