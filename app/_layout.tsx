import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const routes = useRouter();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerBackTitle: "",
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={routes.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          // headerShown: false,
          headerBackTitle: "",
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={routes.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={"/help"} asChild>
              <Ionicons
                name="help-circle-outline"
                size={34}
                color={Colors.dark}
              />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

export function RootLayoutNav() {
  return <RootLayout />;
}
