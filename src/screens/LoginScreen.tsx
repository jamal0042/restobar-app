import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';

interface LoginScreenProps {
  onLoginSuccess: (role: string) => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', password: '', role: 'admin' } // Rôle admin par défaut
  });

  const onSubmit = (data: any) => {
    // On passe le rôle sélectionné à la fonction de succès
    onLoginSuccess(data.role);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.gradientBg}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            <View style={styles.glassCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>🏢</Text>
              </View>

              <Text style={styles.title}>Royal POS</Text>
              <Text style={styles.subtitle}>Restaurant • Bar • Hôtel — terminal PWA installable</Text>

              <View style={[styles.form, { zIndex: 100 }]}>
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

                {/* Sélecteur de Rôle Dynamique (Fidèle à image_979025.png) */}
                <Controller
                  control={control}
                  name="role"
                  render={({ field: { onChange, value } }) => (
                    <Select
                      value={value}
                      onValueChange={onChange}
                      options={[
                        { label: "Administrateur", value: "admin" },
                        { label: "Caissier", value: "caissier" },
                      ]}
                    />
                  )}
                />

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
  container: { flex: 1 },
  gradientBg: {
    flex: 1,
    backgroundColor: '#800040',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      web: { backgroundImage: 'linear-gradient(135deg, #a21caf 0%, #b91c1c 50%, #1e1b4b 100%)' } as any,
    }),
  },
  inner: { width: '100%', maxWidth: 420, padding: 20 },
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
    ...Platform.select({
      web: { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any,
    }),
  },
  iconContainer: { width: 48, height: 48, backgroundColor: '#ffffff', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  iconText: { fontSize: 24 },
  title: { fontSize: 32, fontWeight: '800', color: '#ffffff', textAlign: 'center', letterSpacing: -0.5 },
  subtitle: { fontSize: 12, color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', marginTop: 6, marginBottom: 28 },
  form: { width: '100%' },
  inputError: { borderColor: 'rgba(239, 68, 68, 0.5)', backgroundColor: 'rgba(239, 68, 68, 0.05)' },
  submitBtn: { backgroundColor: '#ffffff', height: 46, borderRadius: 24, marginTop: 20 },
});