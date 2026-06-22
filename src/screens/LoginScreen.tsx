import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native';
import { theme } from '../theme/colors';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    setError('');
    setLoading(true);

    // Simulation d'authentification rapide
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 800);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200' }} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Overlay sombre de fond corrigé */}
      <View style={styles.darkOverlay} />

      <View style={styles.cardContainer}>
        {/* Titre et Logo de l'application */}
        <View style={styles.logoRow}>
          <View style={[styles.logoIcon, { backgroundColor: theme.primary }]}>
            <Text style={{ fontSize: 20, color: '#ffffff' }}>👑</Text>
          </View>
          <Text style={styles.appName}>Royal POS</Text>
        </View>

        <Text style={styles.welcomeText}>Connexion au système</Text>
        <Text style={styles.subtitleText}>Entrez vos accès pour gérer votre restaurant.</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Formulaire */}
        <View style={styles.form}>
          <Text style={styles.fieldLabel}>Identifiant</Text>
          <Input 
            placeholder="Ex: admin" 
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Text style={[styles.fieldLabel, { marginTop: 12 }]}>Mot de passe</Text>
          <Input 
            placeholder="••••••••" 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />

          {/* Bouton de soumission */}
          <TouchableOpacity 
            style={[styles.submitButton, { backgroundColor: theme.primary }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#ffffff" size="small" />
            ) : (
              <Text style={styles.submitButtonText}>Se connecter</Text>
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Royal POS v1.0.0 • Sécurisé</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
 darkOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
},
  cardContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    ...Platform.select({
      web: { backdropFilter: 'blur(16px)', boxSizing: 'border-box' } as any
    })
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  logoIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitleText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 4,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
    marginLeft: 2,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
  submitButton: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    width: '100%',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: 24,
  },
});