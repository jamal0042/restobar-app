import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './src/components/ui/card';
import { Button } from './src/components/ui/button';
import { Badge } from './src/components/ui/badge';

export default function App() {
  const [estConnecte, setEstConnecte] = useState(false);
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  // Écran de Login au démarrage
  if (!estConnecte) {
    return <LoginScreen onLoginSuccess={() => setEstConnecte(true)} />;
  }

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
      {/* En-tête de la caisse */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>RestoBar Caisse 🍹</Text>
          <Badge variant={itemsCount > 0 ? "destructive" : "secondary"}>
            {itemsCount > 0 ? "Commande en cours" : "Prêt"}
          </Badge>
        </View>
        <Button label="Quitter" onPress={deconnexion} variant="outline" size="sm" />
      </View>

      {/* Liste des Menus / Articles */}
      <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Menu / Articles</Text>
        
        {/* Article 1 : Brochette de Chèvre */}
        <Card>
          <CardHeader>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardTitle>Brochette de Chèvre</CardTitle>
              <Badge variant="secondary">Plats</Badge>
            </View>
            <CardDescription>Cuisson au choix, pimentée ou non</CardDescription>
          </CardHeader>
          <CardContent>
            <Text style={styles.itemPrice}>12 $</Text>
          </CardContent>
          <CardFooter>
            <Button 
              label="Ajouter à la commande" 
              variant="default" 
              style={{ flex: 1 }} 
              onPress={() => ajouterAuPanier(12)} 
            />
          </CardFooter>
        </Card>

        {/* Article 2 : Simba Grande */}
        <Card>
          <CardHeader>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardTitle>Simba Grande (Bière)</CardTitle>
              <Badge variant="outline">Boissons</Badge>
            </View>
            <CardDescription>Servie très fraîche</CardDescription>
          </CardHeader>
          <CardContent>
            <Text style={styles.itemPrice}>4 $</Text>
          </CardContent>
          <CardFooter>
            <Button 
              label="Ajouter à la commande" 
              variant="default" 
              style={{ flex: 1 }} 
              onPress={() => ajouterAuPanier(4)} 
            />
          </CardFooter>
        </Card>
      </ScrollView>

      {/* Barre de résumé fixe en bas */}
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
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#71717a', marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' },
  itemPrice: { fontSize: 18, fontWeight: '700', color: '#16a34a' },
  footer: { backgroundColor: '#fff', padding: 20, borderTopWidth: 1, borderTopColor: '#e4e4e7' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  totalLabel: { fontSize: 16, color: '#71717a', fontWeight: '500' },
  totalAmount: { fontSize: 22, fontWeight: 'bold', color: '#09090b' }
});