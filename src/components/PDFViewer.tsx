import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions,
  Linking,
} from "react-native";
import { Colors } from "../constants/Colors";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onError?: (error: string) => void;
}

const { width, height } = Dimensions.get("window");

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, onError }) => {
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleOpenInBrowser = async () => {
    try {
      setLoading(true);
      const supported = await Linking.canOpenURL(pdfUrl);
      if (supported) {
        await Linking.openURL(pdfUrl);
      } else {
        Alert.alert(
          "Cannot Open Link",
          "Unable to open the PDF link in your browser."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open the PDF link.");
      onError?.("Failed to open PDF link");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      // Create a temporary file path
      const fileName = `${title.replace(/\s+/g, "_")}.pdf`;
      const fileUri = `${FileSystem.documentDirectory}${fileName}`;

      // Download the PDF
      const downloadResult = await FileSystem.downloadAsync(pdfUrl, fileUri);

      if (downloadResult.status === 200) {
        // Check if sharing is available
        const isAvailable = await Sharing.isAvailableAsync();
        if (isAvailable) {
          await Sharing.shareAsync(fileUri, {
            mimeType: "application/pdf",
            dialogTitle: `Download ${title}`,
          });
        } else {
          Alert.alert("Download Complete", `PDF saved to: ${fileUri}`, [
            { text: "OK" },
          ]);
        }
      } else {
        Alert.alert("Download Failed", "Unable to download the PDF file.");
        onError?.("Download failed");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to download the PDF file.");
      onError?.("Download error");
    } finally {
      setDownloading(false);
    }
  };

  const handleViewOnline = () => {
    Alert.alert(
      "View PDF",
      "This will open the PDF in your browser for viewing.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Browser", onPress: handleOpenInBrowser },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>PDF Document Viewer</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.pdfPreview}>
          <View style={styles.pdfIcon}>
            <Text style={styles.pdfIconText}>📄</Text>
          </View>
          <Text style={styles.pdfTitle}>PDF Document</Text>
          <Text style={styles.pdfDescription}>
            Click below to view or download the PDF file
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleViewOnline}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={Colors.background} size="small" />
            ) : (
              <>
                <Text style={styles.actionButtonIcon}>🌐</Text>
                <Text style={styles.primaryButtonText}>View Online</Text>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={handleDownloadPDF}
            disabled={downloading}
          >
            {downloading ? (
              <ActivityIndicator color={Colors.secondary} size="small" />
            ) : (
              <>
                <Text style={styles.actionButtonIcon}>📥</Text>
                <Text style={styles.secondaryButtonText}>Download PDF</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📋 Instructions</Text>
          <Text style={styles.infoText}>
            • <Text style={styles.boldText}>View Online:</Text> Opens the PDF in
            your browser
          </Text>
          <Text style={styles.infoText}>
            • <Text style={styles.boldText}>Download PDF:</Text> Saves the file
            to your device
          </Text>
          <Text style={styles.infoText}>
            • The PDF will open in your default browser or PDF viewer
          </Text>
        </View>

        <View style={styles.sourceCard}>
          <Text style={styles.sourceTitle}>Source</Text>
          <Text style={styles.sourceText}>
            Content provided by{" "}
            <Text style={styles.linkText}>Dahamyathra.info</Text>
          </Text>
          <Text style={styles.sourceText}>
            Original Pansiya Panas Jathakaya collection
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.semiTransparent,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  pdfPreview: {
    alignItems: "center",
    paddingVertical: 40,
    marginBottom: 20,
  },
  pdfIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Colors.semiTransparent,
  },
  pdfIconText: {
    fontSize: 40,
  },
  pdfTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  pdfDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  primaryButton: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  secondaryButton: {
    backgroundColor: Colors.background,
    borderColor: Colors.secondary,
  },
  actionButtonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.background,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  infoCard: {
    backgroundColor: Colors.overlay,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 6,
  },
  boldText: {
    fontWeight: "bold",
    color: Colors.text,
  },
  sourceCard: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
  },
  sourceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  sourceText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  linkText: {
    color: Colors.secondary,
    fontWeight: "600",
  },
});

export default PDFViewer;
