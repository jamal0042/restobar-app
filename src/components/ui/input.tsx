import * as React from "react";
import { TextInput, StyleSheet, View, TextInputProps, Platform } from "react-native";
import { theme } from "../../theme/colors";

export interface InputProps extends TextInputProps {}

const Input = React.forwardRef<TextInput, InputProps>(({ style, value, onChangeText, ...props }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        placeholderTextColor="rgba(255, 255, 255, 0.45)"
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
});

Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
    ...Platform.select({ web: { cursor: "text" } }) as any,
  },
  input: {
    height: 48,
    backgroundColor: theme.input, // Utilise l'effet translucide configuré dans vos variables
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#ffffff",
    ...Platform.select({
      web: { outlineStyle: "none", pointerEvents: "auto", userSelect: "text" },
    }) as any,
  },
});

export { Input };