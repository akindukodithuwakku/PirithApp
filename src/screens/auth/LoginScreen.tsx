import React, { useReducer, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import * as SecureStore from "expo-secure-store";

interface State {
  email: string;
  password: string;
  rememberMe: boolean;
  isLoading: boolean;
  error: string | null;
}

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_REMEMBER_ME"; payload: boolean }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

const initialState: State = {
  email: "",
  password: "",
  rememberMe: false,
  isLoading: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_REMEMBER_ME":
      return { ...state, rememberMe: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const remembered = await SecureStore.getItemAsync("pirith_user");
      if (remembered) {
        // @ts-ignore
        navigation.reset({ index: 0, routes: [{ name: "Dashboard" }] });
      }
    })();
  }, [navigation]);

  const handleEmailChange = useCallback((text: string) => {
    dispatch({ type: "SET_EMAIL", payload: text });
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    dispatch({ type: "SET_PASSWORD", payload: text });
  }, []);

  const handleRememberMeChange = useCallback((value: boolean) => {
    dispatch({ type: "SET_REMEMBER_ME", payload: value });
  }, []);

  const handleLogin = useCallback(async () => {
    dispatch({ type: "SET_ERROR", payload: null });
    const result = loginSchema.safeParse({
      email: state.email,
      password: state.password,
    });
    if (!result.success) {
      // @ts-ignore
      dispatch({ type: "SET_ERROR", payload: result.error.errors[0].message });
      return;
    }
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      await signInWithEmailAndPassword(auth, state.email, state.password);
      if (state.rememberMe) {
        await SecureStore.setItemAsync(
          "pirith_user",
          JSON.stringify({ email: state.email })
        );
      } else {
        await SecureStore.deleteItemAsync("pirith_user");
      }
      dispatch({ type: "SET_LOADING", payload: false });
      // @ts-ignore
      navigation.reset({ index: 0, routes: [{ name: "Dashboard" }] });
    } catch (error: any) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR", payload: error.message || "Login failed" });
    }
  }, [state.email, state.password, state.rememberMe, navigation]);

  return (
    <View style={styles.container} accessible accessibilityRole="none">
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Login to Pirith App"
      >
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={state.email}
        onChangeText={handleEmailChange}
        accessible
        accessibilityLabel="Email input"
        accessibilityHint="Enter your email address"
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={state.password}
        onChangeText={handlePasswordChange}
        accessible
        accessibilityLabel="Password input"
        accessibilityHint="Enter your password"
        returnKeyType="done"
      />
      <View style={styles.rememberMeRow}>
        <Switch
          value={state.rememberMe}
          onValueChange={handleRememberMeChange}
          accessibilityLabel="Remember me switch"
        />
        <Text style={styles.rememberMeText}>Remember Me</Text>
      </View>
      {state.error && (
        <Text style={styles.error} accessibilityRole="alert">
          {state.error}
        </Text>
      )}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleLogin}
        accessibilityRole="button"
        accessibilityLabel="Login button"
        disabled={state.isLoading}
      >
        {state.isLoading ? (
          <ActivityIndicator color="#800000" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </Pressable>
      <Pressable
        style={styles.link}
        // @ts-ignore
        onPress={() => navigation.navigate("Register")}
        accessibilityRole="button"
        accessibilityLabel="Go to register"
      >
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#800000",
  },
  input: {
    width: "100%",
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  rememberMeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  rememberMeText: {
    marginLeft: 8,
    color: "#800000",
    fontWeight: "500",
  },
  error: {
    color: "#DC2626",
    marginBottom: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#800000",
    fontWeight: "600",
    fontSize: 16,
  },
  link: {
    marginTop: 8,
  },
  linkText: {
    color: "#800000",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
