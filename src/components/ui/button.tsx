import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

// 1. Définition des variantes avec CVA (Safe pour le Web et le Mobile)
const buttonVariants = cva("", {
variants: {
variant: {
    default: "default",         // Fond blanc, texte bordeaux (Style Royal POS)
    dark: "dark",               // Fond sombre standard Shadcn
    destructive: "destructive", // Fond rouge
    outline: "outline",         // Bordure grise, fond transparent
    secondary: "secondary",     // Fond gris clair
    ghost: "ghost",             // Fond transparent complet
    link: "link",               // Style lien hypertexte
},
size: {
    default: "sizeDefault",     // Taille normale (h-10)
    sm: "sizeSm",               // Petite taille
    lg: "sizeLg",               // Grande taille
    icon: "sizeIcon",           // Bouton carré pour icône
},
},
defaultVariants: {
variant: "default",
size: "default",
},
});

// 2. Typage strict du composant Button
export interface ButtonProps extends VariantProps<typeof buttonVariants> {
label?: string;
onPress?: () => void;
children?: React.ReactNode;
disabled?: boolean;
style?: ViewStyle;
}

// 3. Le composant Button principal
const Button = React.forwardRef<any, ButtonProps>(
({ variant = "default", size = "default", label, onPress, children, disabled = false, style, ...props }, ref) => {

const activeVariant = variant || "default";
const activeSize = size || "default";

// Liaison dynamique sécurisée avec le StyleSheet
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
        pressed && { opacity: 0.8 } // Effet d'opacité au clic (Simule le hover Web)
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

// 4. Styles officiels de la palette Shadcn UI
const styles = StyleSheet.create({
baseButton: {
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
borderRadius: 24, // Coins arrondis fluides pour le style moderne de la maquette
gap: 8,
},
baseText: {
fontSize: 14,
fontWeight: "600",
},

// --- VARIANTES DE COULEURS ---
default: {
backgroundColor: "#ffffff", // Fond blanc éclatant de la maquette
},
defaultText: {
color: "#991b1b", // Texte bordeaux foncé (Fidèle à "Connexion sécurisée")
},
dark: {
backgroundColor: "#18181b", // Style sombre Shadcn classique
},
darkText: {
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
borderColor: "rgba(255, 255, 255, 0.3)",
backgroundColor: "transparent",
},
outlineText: {
color: "#ffffff",
},
secondary: {
backgroundColor: "rgba(255, 255, 255, 0.1)",
},
secondaryText: {
color: "#ffffff",
},
ghost: {
backgroundColor: "transparent",
},
ghostText: {
color: "#ffffff",
},
link: {
backgroundColor: "transparent",
},
linkText: {
color: "#ffffff",
textDecorationLine: "underline",
},

// --- VARIANTES DE TAILLES ---
sizeDefault: {
height: 46, // Équilibré pour la saisie mobile et tactile
paddingHorizontal: 24,
},
sizeSm: {
height: 36,
paddingHorizontal: 16,
borderRadius: 18,
},
sizeLg: {
height: 54,
paddingHorizontal: 36,
borderRadius: 27,
},
sizeIcon: {
height: 46,
width: 46,
paddingHorizontal: 0,
borderRadius: 23,
},
});

export { Button, buttonVariants };