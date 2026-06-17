import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

// Configuration CVA abstraite pour conserver le contrat d'interface Shadcn
const badgeVariants = cva("", {
variants: {
variant: {
    default: "default",
    secondary: "secondary",
    destructive: "destructive",
    outline: "outline",
},
},
defaultVariants: {
variant: "default",
},
});

// Typage strict pour Expo / React Native
export interface BadgeProps {
children: React.ReactNode;
variant?: VariantProps<typeof badgeVariants>["variant"];
style?: ViewStyle;      // Pour surcharger le style du conteneur depuis l'extérieur
textStyle?: TextStyle;  // Pour surcharger le style du texte depuis l'extérieur
}

function Badge({ variant = "default", children, style, textStyle }: BadgeProps) {
// On s'assure d'avoir une chaîne de caractères valide pour l'indexation des styles
const activeVariant = variant || "default";

return (
<View style={[styles.baseBadge, styles[activeVariant as keyof typeof styles] as ViewStyle, style]}>
    <Text style={[styles.baseText, styles[`${activeVariant}Text` as keyof typeof styles] as TextStyle, textStyle]}>
    {children}
    </Text>
</View>
);
}

// Les styles natifs calqués sur la palette Shadcn UI
const styles = StyleSheet.create({
baseBadge: {
flexDirection: "row",
alignItems: "center",
borderRadius: 9999, // rounded-full
borderWidth: 1,
borderColor: "transparent",
paddingHorizontal: 10,
paddingVertical: 2,
alignSelf: "flex-start", // Évite que le badge s'étire sur toute la largeur
},
baseText: {
fontSize: 12,
fontWeight: "600",
},
// Variante Default (Sombre)
default: {
backgroundColor: "#18181b",
},
defaultText: {
color: "#ffffff",
},
// Variante Secondary (Gris clair)
secondary: {
backgroundColor: "#f4f4f5",
},
secondaryText: {
color: "#18181b",
},
// Variante Destructive (Rouge - Utile pour les ruptures de stock ou tables occupées)
destructive: {
backgroundColor: "#ef4444",
},
destructiveText: {
color: "#ffffff",
},
// Variante Outline (Bordure seule)
outline: {
borderColor: "#e4e4e7",
backgroundColor: "transparent",
},
outlineText: {
color: "#18181b",
},
});

export { Badge, badgeVariants };