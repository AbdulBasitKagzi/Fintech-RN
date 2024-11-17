import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";

interface SocialButtonProps {
  title: string;
  iconName: string;
  onPress: () => void;
}

const SocialButton = ({ title, iconName, onPress }: SocialButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        defaultStyles.pillButton,
        {
          flexDirection: "row",
          gap: 16,
          marginTop: 20,
          backgroundColor: "#fff",
        },
      ]}
    >
      <Ionicons name={iconName} size={24} color={"#000"} />
      <Text style={[defaultStyles.buttonText, { color: "#000" }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
