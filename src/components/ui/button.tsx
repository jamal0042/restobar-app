import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

// Configuration des variantes avec CVA (adaptée pour les styles d'objets React Native)
const buttonVariants = cva(
{
// Styles de base partagés par tous les boutons
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
borderRadius: 8, // rounded-md
gap: 8,
},
{
variants: {
variant: {
default: { backgroundColor: "#18181b" }, // bg-primary (sombre Shadcn)
destructive: { backgroundColor: "#ef4444" }, // bg-destructive
outline: { borderWidth: 1, borderColor: "#e4e4e7", backgroundColor: "transparent" },
secondary: { backgroundColor: "#f4f4f5" }, // bg-secondary
ghost: { backgroundColor: "transparent" },
link: { backgroundColor: "transparent" },
},
size: {
default: { height: 40, paddingHorizontal: 16 }, // h-10 px-4
sm: { height: 36, paddingHorizontal: 12, borderRadius: 6 }, // h-9 px-3
lg: { height: 44, paddingHorizontal: 32, borderRadius: 6 }, // h-11 px-8
icon: { height: 40, width: 40, paddingHorizontal: 0 }, // h-10 w-10
},
},
defaultVariants: {
variant: "default",
size: "default",
},
}
);

// Styles pour les textes à l'intérieur du bouton selon la variante sélectionnée
const textVariants = (variant: string = "default") => {
const baseText: TextStyle = { fontSize: 14, fontWeight: "500" };

switch (variant) {
case "default":
case "destructive":
return { ...baseText, color: "#ffffff" };
case "secondary":
return { ...baseText, color: "#18181b" };
case "outline":
case "ghost":
return { ...baseText, color: "#09090b" };
case "link":
return { ...baseText, color: "#18181b", textDecorationLine: "underline" };
default:
return { ...baseText, color: "#ffffff" };
}
};

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
label?: string;
onPress?: () => void;
children?: React.ReactNode;
disabled?: boolean;
style?: ViewStyle;
}

const Button = React.forwardRef<any, ButtonProps>(
({ variant, size, label, onPress, children, disabled = false, style, ...props }, ref) => {

// On force TypeScript à comprendre que ce sont des styles React Native valides
const containerStyle = buttonVariants({ variant, size }) as ViewStyle;
const textStyle = textVariants(variant ?? "default") as TextStyle;

return (
    <Pressable
    ref={ref}
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
        containerStyle,
        style as ViewStyle, // Évite le soulignement sur la prop style du bouton
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.8 }
    ]}
    {...props}
    >
    {children ? (
        children
    ) : (
        <Text style={textStyle}>{label}</Text>
    )}
    </Pressable>
);
}
);

Button.displayName = "Button";

export { Button, buttonVariants };