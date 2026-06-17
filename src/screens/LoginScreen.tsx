import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = (data: any) => {
    console.log("Connexion réussie :", data);
    onLoginSuccess();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      {/* Arrière-plan dégradé adaptatif (Mobile & Web) */}
      <View style={styles.gradientBg}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            {/* Boîtier central avec effet de transparence (Glassmorphism) */}
            <View style={styles.glassCard}>
              
              {/* Icône du bâtiment de l'hôtel/restaurant */}
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>🏢</Text>
              </View>

              {/* Titre & Description du Terminal de Caisse */}
              <Text style={styles.title}>Royal POS</Text>
              <Text style={styles.subtitle}>Restaurant • Bar • Hôtel — terminal PWA installable</Text>

              {/* Formulaire d'authentification */}
              <View style={styles.form}>
                
                {/* Champ Email / Identifiant */}
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="admin@hotel.local"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCapitalize="none"
                      style={errors.email ? styles.inputError : undefined}
                    />
                  )}
                />

                {/* Champ Mot de passe */}
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="••••••••"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCapitalize="none"
                      style={errors.password ? styles.inputError : undefined}
                    />
                  )}
                />

                {/* Sélecteur de Rôle (Fidèle à la maquette originale) */}
                <View style={styles.selectFake}>
                  <Text style={styles.selectFakeText}>Administrateur</Text>
                  <Text style={styles.selectArrow}>⌃</Text>
                </View>

                {/* Bouton Blanc avec texte bordeaux */}
                <Button 
                  label="Connexion sécurisée" 
                  onPress={handleSubmit(onSubmit)} 
                  variant="default"
                  style={styles.submitBtn}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  gradientBg: {
    flex: 1,
    backgroundColor: '#800040', // Couleur unie bordeaux de secours pour l'application mobile Android/iOS
    justifyContent: 'center',
    alignItems: 'center',
    // Injection sécurisée du dégradé linéaire CSS pour le navigateur Web sans fâcher TypeScript
    ...Platform.select({
      web: {
        backgroundImage: 'linear-gradient(135deg, #a21caf 0%, #b91c1c 50%, #1e1b4b 100%)',
      } as any,
    }),
  },
  inner: { 
    width: '100%', 
    maxWidth: 420, 
    padding: 20 
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    // Effet de flou d'arrière-plan (uniquement supporté nativement sur le Web par les navigateurs)
    ...Platform.select({
      web: {
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      } as any,
    }),
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: { 
    fontSize: 24 
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 28,
  },
  form: { 
    width: '100%' 
  },
  inputError: {
    borderColor: 'rgba(239, 68, 68, 0.5)',
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  selectFake: {
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  selectFakeText: { 
    color: '#ffffff', 
    fontSize: 14 
  },
  selectArrow: { 
    color: 'rgba(255, 255, 255, 0.4)', 
    transform: [{ rotate: '180deg' }], 
    fontSize: 12 
  },
  submitBtn: {
    backgroundColor: '#ffffff',
    height: 46,
    borderRadius: 24,
    marginTop: 20,
  },
});