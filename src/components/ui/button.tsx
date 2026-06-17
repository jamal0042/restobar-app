import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

// CVA gère uniquement les clés de variantes sous forme de chaînes de caractères (Safe pour le Web)
const buttonVariants = cva("", {
variants: {
variant: {
    default: "default",
    destructive: "destructive",
    outline: "outline",
    secondary: "secondary",
    ghost: "ghost",
    link: "link",
},
size: {
    default: "sizeDefault",
    sm: "sizeSm",
    lg: "sizeLg",
    icon: "sizeIcon",
},
},
defaultVariants: {
variant: "default",
size: "default",
},
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
label?: string;
onPress?: () => void;
children?: React.ReactNode;
disabled?: boolean;
style?: ViewStyle;
}

const Button = React.forwardRef<any, ButtonProps>(
({ variant = "default", size = "default", label, onPress, children, disabled = false, style, ...props }, ref) => {

// Récupération des clés de variantes nettoyées
const activeVariant = variant || "default";
const activeSize = size || "default";

// Combinaison sécurisée des styles natifs
const containerStyle = [
    styles.baseButton,
    styles[activeVariant as keyof typeof styles] as ViewStyle,
    styles[activeSize as keyof typeof styles] as ViewStyle,
];

const textStyle = styles[`${activeVariant}Text` as keyof typeof styles] as TextStyle;

return (
    <Pressable
    ref={ref}
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
        containerStyle as any,
        style,
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.8 }
    ]}
    {...props}
    >
    {children ? (
        children
    ) : (
        <Text style={[styles.baseText, textStyle]}>{label}</Text>
    )}
    </Pressable>
);
}
);

Button.displayName = "Button";

// Styles officiels Shadcn UI adaptés pour React Native (Mobile & Web-safe)
const styles = StyleSheet.create({
baseButton: {
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
borderRadius: 6, // rounded-md
gap: 8,
},
baseText: {
fontSize: 14,
fontWeight: "500",
},
// --- VARIANTES DE COULEURS ---
default: {
backgroundColor: "#18181b",
},
defaultText: {
color: "#ffffff",
},
destructive: {
backgroundColor: "#ef4444",
},
destructiveText: {
color: "#ffffff",
},
outline: {
borderWidth: 1,
borderColor: "#e4e4e7",
backgroundColor: "transparent",
},
outlineText: {
color: "#09090b",
},
secondary: {
backgroundColor: "#f4f4f5",
},
secondaryText: {
color: "#18181b",
},
ghost: {
backgroundColor: "transparent",
},
ghostText: {
color: "#09090b",
},
link: {
backgroundColor: "transparent",
},
linkText: {
color: "#18181b",
textDecorationLine: "underline",
},
// --- VARIANTES DE TAILLES ---
sizeDefault: {
height: 40,
paddingHorizontal: 16,
},
sizeSm: {
height: 36,
paddingHorizontal: 12,
borderRadius: 6,
},
sizeLg: {
height: 44,
paddingHorizontal: 32,
borderRadius: 6,
},
sizeIcon: {
height: 40,
width: 40,
},
});

export { Button, buttonVariants };