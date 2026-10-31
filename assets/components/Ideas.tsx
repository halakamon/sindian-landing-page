import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

const ideas = [
  {
    id: "01",
    title: "اسم الفكرة الأولى",
    description: "وصف مختصر للفكرة الأولى وأهم ما تقدمه من حلول.",
    icon: "♧",
  },
  {
    id: "02",
    title: "اسم الفكرة الثانية",
    description: "وصف مختصر للفكرة الثانية وأهم ما تقدمه من حلول.",
    icon: "♧",
  },
  {
    id: "03",
    title: "اسم الفكرة الثالثة",
    description: "وصف مختصر للفكرة الثالثة وأهم ما تقدمه من حلول.",
    icon: "☆",
  },
];

export default function Ideas() {
  return (
    <View style={styles.section}>
      {ideas.map((idea) => (
        <View key={idea.id} style={styles.card}>

          {/* Idea Icon */}
          <View style={styles.iconCircle}>
         <AppText weight="regular" style={styles.icon}>
  {idea.icon}
</AppText>
          </View>

          {/* Idea Information */}
          <View style={styles.content}>
          <AppText weight="medium" style={styles.number}>
  فكرة {idea.id}
</AppText>

           <AppText weight="bold" style={styles.title}>
  {idea.title}
</AppText>

<AppText weight="regular" style={styles.description}>
  {idea.description}
</AppText>
          </View>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#FFF",
    paddingHorizontal: 11,
    paddingTop: 5,
    paddingBottom: 34,
    gap: 10,
  },

  card: {
    minHeight: 77,
    backgroundColor: "#FBF9F5",
    borderWidth: 1,
    borderColor: "#EAE2D6",
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 9,
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: "#F6F1E8",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    color: "#C9A66B",
    fontSize: 17,
  },

  content: {
    flex: 1,
    alignItems: "flex-end",
  },

  number: {
    color: "#B68E4F",
    fontSize: 8,
    marginBottom: 4,
    textAlign: "right",
  },

  title: {
    color: "#193A2A",
    fontSize: 11,
    // fontWeight: "800",
    marginBottom: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  description: {
    color: "#777B73",
    fontSize: 9,
    lineHeight: 14,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
