import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();
  if (loadingr) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-centerr">
        <ActivityIndicator
          className="text-primary-300 "
          size={"large"}
        ></ActivityIndicator>
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
}
