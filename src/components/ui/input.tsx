import * as React from "react";
import { TextInput, StyleSheet, View, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {}

const Input = React.forwardRef<any, InputProps>(({ style, ...props }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
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
  },
  input: {
    height: 46,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#ffffff",
  },
});

export { Input };