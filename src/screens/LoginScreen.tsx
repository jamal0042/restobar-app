import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../components/ui/button';

interface LoginScreenProps {
onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
const { control, handleSubmit, formState: { errors } } = useForm({
defaultValues: { email: '', password: '' }
});

const onSubmit = (data: any) => {
// Simulation de connexion pour votre RestoBar
console.log("Tentative de connexion :", data);
onLoginSuccess();
};

return (
<KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    style={styles.container}
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
        
        <View style={styles.header}>
        <Text style={styles.title}>RestoBar Connect 🍹</Text>
        <Text style={styles.subtitle}>Entrez vos identifiants pour accéder à la caisse</Text>
        </View>

        <View style={styles.form}>
        {/* Champ Email */}
        <Text style={[styles.label, errors.email && styles.labelError]}>Identifiant ou Email</Text>
        <Controller
            control={control}
            rules={{ required: "L'identifiant est obligatoire" }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="nom@restobar.com"
                placeholderTextColor="#a1a1aa"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
            />
            )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        {/* Champ Mot de passe */}
        <Text style={[styles.label, errors.password && styles.labelError, { marginTop: 16 }]}>Mot de passe</Text>
        <Controller
            control={control}
            rules={{ required: "Le mot de passe est obligatoire" }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="••••••••"
                placeholderTextColor="#a1a1aa"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
            />
            )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        {/* Bouton de soumission qui utilise votre composant UI personnalisé */}
        <Button 
            label="Se connecter" 
            onPress={handleSubmit(onSubmit)} 
            variant="default"
            style={{ marginTop: 24 }}
        />
        </View>

    </View>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#ffffff' },
inner: { flex: 1, justifyContent: 'center', padding: 24 },
header: { marginBottom: 32, alignItems: 'center' },
title: { fontSize: 26, fontWeight: '700', color: '#09090b', letterSpacing: -0.5 },
subtitle: { fontSize: 14, color: '#71717a', textAlign: 'center', marginTop: 8 },
form: { width: '100%' },
label: { fontSize: 14, fontWeight: '500', color: '#09090b', marginBottom: 6 },
labelError: { color: '#ef4444' },
input: { height: 44, borderWidth: 1, borderColor: '#e4e4e7', borderRadius: 8, paddingHorizontal: 12, fontSize: 14, color: '#09090b', backgroundColor: '#fafafa' },
inputError: { borderColor: '#ef4444', backgroundColor: '#fef2f2' },
errorText: { fontSize: 12, color: '#ef4444', marginTop: 4, fontWeight: '500' }
});