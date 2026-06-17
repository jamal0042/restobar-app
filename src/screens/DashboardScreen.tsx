import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface DashboardScreenProps {
  onLogout: () => void;
}

export function DashboardScreen({ onLogout }: DashboardScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. EN-TÊTE (HEADER) */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatarFake}>
            <Text style={{ fontSize: 18 }}>👨‍💼</Text>
          </View>
          <View>
            <Text style={styles.userName}>Royal POS</Text>
            <Text style={styles.userRole}>Administrateur • Administrateur</Text>
          </View>
        </View>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={{ fontSize: 16 }}>🌙</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
            <Text style={styles.logoutBtnText}>Sortir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* 2. BANNIÈRE PRINCIPALE */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Tableau de bord</Text>
          <Text style={styles.bannerSubtitle}>Vue instantanée des ventes, revenus et performances.</Text>
        </View>

        {/* 3. CARTES DE STATISTIQUES (GRID) */}
        <View style={styles.statsGrid}>
          {/* Ventes du jour */}
          <Card style={styles.statCard}>
            <CardHeader style={styles.statCardHeader}>
              <Text style={styles.statIcon}>✔️</Text>
            </CardHeader>
            <CardContent style={styles.statCardContent}>
              <Text style={styles.statValue}>$13.92</Text>
              <Text style={styles.statLabel}>Ventes du jour</Text>
            </CardContent>
          </Card>

          {/* Ventes du mois */}
          <Card style={styles.statCard}>
            <CardHeader style={styles.statCardHeader}>
              <Text style={styles.statIcon}>📊</Text>
            </CardHeader>
            <CardContent style={styles.statCardContent}>
              <Text style={styles.statValue}>$31.32</Text>
              <Text style={styles.statLabel}>Ventes du mois</Text>
            </CardContent>
          </Card>

          {/* Factures */}
          <Card style={styles.statCard}>
            <CardHeader style={styles.statCardHeader}>
              <Text style={styles.statIcon}>💵</Text>
            </CardHeader>
            <CardContent style={styles.statCardContent}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statLabel}>Factures</Text>
            </CardContent>
          </Card>

          {/* Utilisateurs */}
          <Card style={styles.statCard}>
            <CardHeader style={styles.statCardHeader}>
              <Text style={styles.statIcon}>👥</Text>
            </CardHeader>
            <CardContent style={styles.statCardContent}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statLabel}>Utilisateurs</Text>
            </CardContent>
          </Card>

          {/* Revenus */}
          <Card style={styles.statCard}>
            <CardHeader style={styles.statCardHeader}>
              <Text style={styles.statIcon}>💳</Text>
            </CardHeader>
            <CardContent style={styles.statCardContent}>
              <Text style={styles.statValue}>$31.32</Text>
              <Text style={styles.statLabel}>Revenus</Text>
            </CardContent>
          </Card>
        </View>

        {/* 4. BLOCS GRAPHIQUES (SIMULÉS) */}
        <View style={styles.chartsRow}>
          {/* Évolution des ventes */}
          <Card style={styles.chartCard}>
            <CardHeader>
              <CardTitle style={styles.chartTitle}>Évolution des ventes</CardTitle>
            </CardHeader>
            <CardContent style={styles.chartPlaceholder}>
              {/* Conteneur pour accueillir le futur composant graphique */}
              <View style={styles.fakeChartArea}>
                <Text style={{ color: '#a1a1aa', fontSize: 13 }}>[ Graphique Linéaire : Ven. ventes : 0 ]</Text>
              </View>
            </CardContent>
          </Card>

          {/* Produits les plus vendus */}
          <Card style={styles.chartCard}>
            <CardHeader>
              <CardTitle style={styles.chartTitle}>Produits les plus vendus</CardTitle>
            </CardHeader>
            <CardContent style={styles.chartPlaceholder}>
              {/* Simulation des barres d'histogramme */}
              <View style={styles.fakeBarChart}>
                <View style={[styles.fakeBar, { height: 80, backgroundColor: '#b91c1c' }]}><Text style={styles.barLabel}>Coca-Cola</Text></View>
                <View style={[styles.fakeBar, { height: 50, backgroundColor: '#a21caf' }]}><Text style={styles.barLabel}>Pizza royale</Text></View>
                <View style={[styles.fakeBar, { height: 50, backgroundColor: '#b91c1c' }]}><Text style={styles.barLabel}>Poulet braisé</Text></View>
              </View>
            </CardContent>
          </Card>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* 5. BARRE DE NAVIGATION INFÉRIEURE (TAB BAR FAKE) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={styles.tabLabel}>POS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <Text style={[styles.tabIcon, { color: '#fff' }]}>📊</Text>
          <Text style={[styles.tabLabel, { color: '#fff' }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>📦</Text>
          <Text style={styles.tabLabel}>Produits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>💰</Text>
          <Text style={styles.tabLabel}>Ventes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>📅</Text>
          <Text style={styles.tabLabel}>Jour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>📋</Text>
          <Text style={styles.tabLabel}>Mois</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Utilisateurs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>⚙️</Text>
          <Text style={styles.tabLabel}>Paramètres</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcfaf7' },
  header: { 
    height: 65, 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderColor: '#e4e4e7', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    ...Platform.select({ ios: { paddingTop: 10 } })
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatarFake: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#f4f4f5', justifyContent: 'center', alignItems: 'center' },
  userName: { fontSize: 14, fontWeight: '700', color: '#09090b' },
  userRole: { fontSize: 11, color: '#71717a' },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 8, borderWidth: 1, borderColor: '#e4e4e7', justifyContent: 'center', alignItems: 'center' },
  logoutBtn: { paddingHorizontal: 16, height: 36, borderRadius: 8, borderWidth: 1, borderColor: '#e4e4e7', justifyContent: 'center', alignItems: 'center' },
  logoutBtnText: { fontSize: 13, fontWeight: '600', color: '#09090b' },
  
  scrollContainer: { flex: 1, padding: 20 },
  
  banner: {
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#b91c1c',
    backgroundImage: Platform.OS === 'web' ? 'linear-gradient(135deg, #b91c1c 0%, #a21caf 100%)' : undefined,
    marginBottom: 20,
  },
  bannerTitle: { fontSize: 26, fontWeight: '800', color: '#ffffff' },
  bannerSubtitle: { fontSize: 13, color: 'rgba(255, 255, 255, 0.8)', marginTop: 4 },
  
  statsGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12, 
    marginBottom: 20 
  },
  statCard: { 
    flex: 1, 
    minWidth: Platform.OS === 'web' ? 180 : '45%', 
    padding: 16, 
    borderRadius: 16,
    backgroundColor: '#fff'
  },
  statCardHeader: { padding: 0, marginBottom: 8 },
  statIcon: { fontSize: 18, color: '#b91c1c' },
  statCardContent: { padding: 0 },
  statValue: { fontSize: 22, fontWeight: '700', color: '#09090b' },
  statLabel: { fontSize: 12, color: '#71717a', marginTop: 2 },
  
  chartsRow: { 
    flexDirection: Platform.OS === 'web' ? 'row' : 'column', 
    gap: 16, 
    marginBottom: 60 
  },
  chartCard: { flex: 1, padding: 16, borderRadius: 20, backgroundColor: '#fff' },
  chartTitle: { fontSize: 18, fontWeight: '700', color: '#09090b' },
  chartPlaceholder: { padding: 0, marginTop: 12, height: 180, justifyContent: 'center' },
  fakeChartArea: { flex: 1, borderWidth: 1, borderColor: '#f4f4f5', borderStyle: 'dashed', borderRadius: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' },
  
  fakeBarChart: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', flex: 1, paddingTop: 20 },
  fakeBar: { width: 50, borderRadius: 6, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 8 },
  barLabel: { fontSize: 9, color: '#fff', fontWeight: '700', textAlign: 'center' },

  tabBar: { 
    height: 60, 
    backgroundColor: '#fff', 
    borderTopWidth: 1, 
    borderColor: '#e4e4e7', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  tabItem: { alignItems: 'center', justifyContent: 'center', padding: 6, borderRadius: 10 },
  tabItemActive: { backgroundColor: '#b91c1c', paddingHorizontal: 12 },
  tabIcon: { fontSize: 16, color: '#71717a' },
  tabLabel: { fontSize: 10, color: '#71717a', fontWeight: '600', marginTop: 2 }
});