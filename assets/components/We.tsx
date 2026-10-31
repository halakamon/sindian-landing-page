import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function WhoWeAre() {
  return (
    <View style={styles.section}>
      <View style={styles.illustration}>
        <Image
          source={require("../../assets/images/البيوت الدمشقية.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.imageCaption}>
          <AppText weight="bold" style={styles.captionText}>
            دمشق القديمة، مهد الابتكار والأصالة
          </AppText>
        </View>
      </View>

      {/* Section heading */}
      <View style={styles.headingContainer}>
        <AppText weight="bold" style={styles.eyebrow}>
          WHO WE ARE
        </AppText>

        <AppText weight="bold" style={styles.title}>
          سوريا أرض البدايات،{"\n"}
          وسنديان بداية جديدة.
        </AppText>
      </View>

      {/* Description */}
      <AppText weight="regular" style={styles.description}>
        سنديان استوديو لبناء الشركات، نؤمن أن الأفكار العظيمة تبدأ من جذور قوية.
        نعمل على تحويل التحديات المحلية إلى فرص استثمارية واعدة، ونساهم في بناء
        مستقبل اقتصادي مستدام.
      </AppText>

      <AppText weight="regular" style={styles.description}>
        نؤمن أن الابتكار السوري قادر على ترك أثر في المنطقة والعالم، وأن التغيير
        الحقيقي يبدأ من الداخل.
      </AppText>

      {/* Quote */}
      <View style={styles.quoteBox}>
        <AppText weight="medium" style={styles.quoteText}>
          "نحن لا نبني شركات فحسب، بل نعمل على تحويل الفرص والأفكار إلى تجارب
          قادرة على صنع التغيير."
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#FBF9F5",
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  illustration: {
    width: "88%",
    maxWidth: 380,
    height: 240,
    // backgroundColor: "#FFFFFF",
    padding: 3,
    borderRadius: 6,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 30,
  },

  arch: {
    flex: 1,
    backgroundColor: "#EAE4CC",
    borderRadius: 75,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  tree: {
    position: "absolute",
    top: 55,
    left: 60,
    alignItems: "center",
  },

  treeTop: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 17,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#435D4B",
  },

  treeBottom: {
    width: 14,
    height: 25,
    backgroundColor: "#435D4B",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  treeTrunk: {
    width: 5,
    height: 22,
    backgroundColor: "#435D4B",
  },

  landscape: {
    width: "100%",
    height: 55,
    backgroundColor: "#D8D4BE",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },

  buildingSmall: {
    width: 13,
    height: 17,
    backgroundColor: "#435D4B",
  },

  buildingTall: {
    width: 12,
    height: 29,
    backgroundColor: "#435D4B",
  },

  buildingRound: {
    width: 38,
    height: 38,
    backgroundColor: "#435D4B",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  imageCaption: {
    position: "absolute",
    bottom: 8,
    left: 12,
    right: 12,
    height: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  captionText: {
    fontSize: 7,
    color: "#304535",
    // fontWeight: "700",
  },

  headingContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 14,
  },

  eyebrow: {
    color: "#B68E4F",
    fontSize:10,
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    color: "#193A2A",
    fontSize: 23,
    // fontWeight: "800",
    lineHeight: 29,
    textAlign: "right",
    writingDirection: "rtl",
  },

  description: {
    width: "100%",
    color: "#555C55",
    fontSize: 11,
    lineHeight: 21,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 12,
  },

  quoteBox: {
    width: "100%",
    backgroundColor: "#F5F0E6",
    borderLeftWidth: 3,
    borderLeftColor: "#C9A66B",
    borderRadius: 8,
    padding: 13,
    marginTop: 3,
  },

  quoteText: {
    color: "#435247",
    fontSize: 10,
    lineHeight: 19,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
