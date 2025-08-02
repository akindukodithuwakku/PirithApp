import React from "react";
import { SafeAreaView } from "react-native";
import PDFViewer from "../components/PDFViewer";
import { RouteProp, useRoute } from "@react-navigation/native";
import { JatakaData } from "../constants/jatakaData";

interface JatakaDetailRouteParams {
  jataka: JatakaData;
}

type JatakaDetailRouteProp = RouteProp<
  { params: JatakaDetailRouteParams },
  "params"
>;

const JatakaDetailScreen: React.FC = () => {
  const route = useRoute<JatakaDetailRouteProp>();
  const { jataka } = route.params;

  if (!jataka) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <PDFViewer
          pdfUrl=""
          title="Jataka content not found"
          onError={(error) => console.log("Error:", error)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PDFViewer
        pdfUrl={jataka.pdfUrl}
        title={jataka.title}
        onError={(error) => console.log("PDF Error:", error)}
      />
    </SafeAreaView>
  );
};

export default JatakaDetailScreen;
