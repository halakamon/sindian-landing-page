import CallToAction from "@/assets/components/Action";
import HowWeBuild from "@/assets/components/Build";
import FocusAreas from "@/assets/components/FocusAreas";
import Footer from "@/assets/components/ftr";
import GewEvent from "@/assets/components/gew";
import Hero from "@/assets/components/Hero";
import Ideas from "@/assets/components/Ideas";
import WhoWeAre from "@/assets/components/We";
import { ScrollView, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.page}>
        <Hero />
        <WhoWeAre />
        <FocusAreas />
        <HowWeBuild />
        <GewEvent />
        <Ideas />
        <CallToAction />
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9F5",
  },

  content: {
    flexGrow: 1,
  },

  page: {
    width: "100%",
    backgroundColor: "#FBF9F5",
  },
});
