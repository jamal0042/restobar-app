import * as React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

// 1. Composant Principal Card
interface CardProps extends React.ComponentPropsWithoutRef<typeof View> {
style?: ViewStyle;
}
const Card = React.forwardRef<any, CardProps>(({ style, ...props }, ref) => (
<View 
ref={ref} 
style={[styles.card, style]} 
{...props} 
/>
));
Card.displayName = "Card";

// 2. CardHeader
interface CardHeaderProps extends React.ComponentPropsWithoutRef<typeof View> {
style?: ViewStyle;
}
const CardHeader = React.forwardRef<any, CardHeaderProps>(({ style, ...props }, ref) => (
<View ref={ref} style={[styles.cardHeader, style]} {...props} />
));
CardHeader.displayName = "CardHeader";

// 3. CardTitle
interface CardTitleProps extends React.ComponentPropsWithoutRef<typeof Text> {
style?: TextStyle;
}
const CardTitle = React.forwardRef<any, CardTitleProps>(({ style, ...props }, ref) => (
<Text ref={ref} style={[styles.cardTitle, style]} {...props} />
));
CardTitle.displayName = "CardTitle";

// 4. CardDescription
interface CardDescriptionProps extends React.ComponentPropsWithoutRef<typeof Text> {
style?: TextStyle;
}
const CardDescription = React.forwardRef<any, CardDescriptionProps>(({ style, ...props }, ref) => (
<Text ref={ref} style={[styles.cardDescription, style]} {...props} />
));
CardDescription.displayName = "CardDescription";

// 5. CardContent
interface CardContentProps extends React.ComponentPropsWithoutRef<typeof View> {
style?: ViewStyle;
}
const CardContent = React.forwardRef<any, CardContentProps>(({ style, ...props }, ref) => (
<View ref={ref} style={[styles.cardContent, style]} {...props} />
));
CardContent.displayName = "CardContent";

// 6. CardFooter
interface CardFooterProps extends React.ComponentPropsWithoutRef<typeof View> {
style?: ViewStyle;
}
const CardFooter = React.forwardRef<any, CardFooterProps>(({ style, ...props }, ref) => (
<View ref={ref} style={[styles.cardFooter, style]} {...props} />
));
CardFooter.displayName = "CardFooter";

// --- STYLES SHADCN ADAPTÉS ---
const styles = StyleSheet.create({
card: {
borderRadius: 12,
borderWidth: 1,
borderColor: "#e4e4e7", // border
backgroundColor: "#ffffff", // bg-card
shadowColor: "#000", // shadow-sm
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.05,
shadowRadius: 2,
elevation: 2,
marginVertical: 6,
},
cardHeader: {
flexDirection: "column",
padding: 16,
gap: 4, // space-y-1.5
},
cardTitle: {
fontSize: 20, // text-2xl corrigé pour l'équilibre mobile
fontWeight: "600", // font-semibold
color: "#09090b", // text-card-foreground
letterSpacing: -0.5,
},
cardDescription: {
fontSize: 14, // text-sm
color: "#71717a", // text-muted-foreground
},
cardContent: {
padding: 16,
paddingTop: 0, // p-6 pt-0
},
cardFooter: {
flexDirection: "row",
alignItems: "center",
padding: 16,
paddingTop: 0, // flex items-center p-6 pt-0
},
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };