import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { StoryBox } from "../../components/common/StoryBox";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebaseApp } from "../../services/firebase";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/common/Header";
import { ScreenBackground } from "../../components/common/ScreenBackground";

interface StoryMeta {
  id: string;
  title: string;
}

interface Story extends StoryMeta {
  content: string;
}

export function JathakaKathaScreen() {
  const [stories, setStories] = useState<StoryMeta[]>([]);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStories() {
      setLoading(true);
      const db = getFirestore(firebaseApp);
      const snap = await getDocs(collection(db, "jathakaKatha"));
      setStories(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as StoryMeta))
      );
      setLoading(false);
    }
    fetchStories();
  }, []);

  async function handleStoryPress(storyId: string) {
    setLoading(true);
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "jathakaKatha", storyId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSelectedStory({ id: docSnap.id, ...docSnap.data() } as Story);
      setModalVisible(true);
    }
    setLoading(false);
  }

  function handleCloseModal() {
    setModalVisible(false);
    setSelectedStory(null);
  }

  return (
    <ScreenBackground>
      <Header title="Jathaka Katha" />
      <View style={styles.content}>
        {loading && (
          <ActivityIndicator color="#800000" style={{ marginVertical: 20 }} />
        )}
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StoryBox
              title={item.title}
              onPress={() => handleStoryPress(item.id)}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Pressable
                style={styles.backButton}
                onPress={handleCloseModal}
                accessibilityRole="button"
                accessibilityLabel="Back to stories"
              >
                <Ionicons name="arrow-back" size={28} color="#800000" />
              </Pressable>
              <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Text style={styles.modalTitle}>{selectedStory?.title}</Text>
                <Text style={styles.modalText}>{selectedStory?.content}</Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  header: {
    fontSize: 22,
    color: "#800000",
    fontWeight: "bold",
    marginBottom: 18,
    alignSelf: "center",
  },
  list: {
    paddingBottom: 32,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    width: "90%",
    maxHeight: "80%",
    shadowColor: "#800000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
    overflow: "hidden",
  },
  backButton: {
    padding: 12,
    alignSelf: "flex-start",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800000",
    marginBottom: 12,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 16,
  },
});
