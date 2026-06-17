import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { Card } from './src/components/ui/card';
import { Button } from './src/components/ui/button';
import { Badge } from './src/components/ui/badge';

export default function App() {
  const [estConnecte, setEstConnecte] = useState(false);
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  // Si l'utilisateur n'est pas connecté, l'application démarre ICI
  if (!estConnecte) {
    return <LoginScreen onLoginSuccess={() => setEstConnecte(true)} />;
  }

  // Une fois connecté, l'interface de caisse s'affiche
  const ajouterAuPanier = (prix: number) => {
    setTotal(prev => prev + prix);
    setItemsCount(prev => prev + 1);
  };

  const deconnexion = () => {
    setTotal(0);
    setItemsCount(0);
    setEstConnecte(false);
  };

  const encaisser = () => {
    Alert.alert("Encaissé !", `Montant total perçu : ${total} $`, [
      { text: "OK", onPress: () => { setTotal(0); setItemsCount(0); } }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>RestoBar Caisse 🍹</Text>
          <Badge text={itemsCount > 0 ? "Commande en cours" : "Prêt"} status={itemsCount > 0 ? "warning" : "success"} />
        </View>
        <Button label="Quitter" onPress={deconnexion} variant="outline" size="sm" />
      </View>

      <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Menu / Articles</Text>
        
        <Card title="Brochette de Chèvre" price="12 $" category="Plats">
          <Button label="Ajouter" onPress={() => ajouterAuPanier(12)} variant="secondary" size="sm" />
        </Card>

        <Card title="Simba Grande (Bière)" price="4 $" category="Boissons">
          <Button label="Ajouter" onPress={() => ajouterAuPanier(4)} variant="secondary" size="sm" />
        </Card>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Articles: {itemsCount}</Text>
          <Text style={styles.totalAmount}>Total: {total} $</Text>
        </View>
        <Button label="Valider & Encaisser" onPress={encaisser} variant="default" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#e4e4e7', backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#09090b' },
  menuList: { flex: 1, padding: 20 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#71717a', marginBottom: 10, letterSpacing: 0.5 },
  footer: { backgroundColor: '#fff', padding: 20, borderTopWidth: 1, borderTopColor: '#e4e4e7' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  totalLabel: { fontSize: 16, color: '#71717a', fontWeight: '500' },
  totalAmount: { fontSize: 22, fontWeight: 'bold', color: '#09090b' }
});