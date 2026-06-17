import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Defs, LinearGradient as SvgGradient, Stop, Path, Rect } from 'react-native-svg';
import { CheckCircle2, BarChart3, Banknote, Users, CreditCard, ShoppingCart, Box, Calendar, FileText, Settings, Moon, LogOut } from 'lucide-react-native';

interface DashboardScreenProps {
  onLogout: () => void;
}

const { width: screenWidth } = Dimensions.get('window');

export function DashboardScreen({ onLogout }: DashboardScreenProps) {
  const isWeb = Platform.OS === 'web';

  // Données simulées pour l'histogramme des produits les plus vendus
  const produitsPlusVendus = [
    { name: 'Coca-Cola', value: 2, color: '#b91c1c' },
    { name: 'Pizza royale', value: 1, color: '#a21caf' },
    { name: 'Poulet braisé', value: 1, color: '#b91c1c' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. EN-TÊTE (HEADER) */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatarFake}>
            <Text style={{ fontSize: 16 }}>🍳</Text>
          </View>
          <View>
            <View style={styles.titleRow}>
              <Text style={styles.userName}>Royal POS</Text>
            </View>
            <Text style={styles.userRole}>Administrateur • Administrateur</Text>
          </View>
        </View>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Moon size={16} color="#09090b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
            <LogOut size={14} color="#09090b" style={{ marginRight: 6 }} />
            <Text style={styles.logoutBtnText}>Sortir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* 2. BANNIÈRE PRINCIPALE AVEC DÉGRADÉ ROYAL */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Tableau de bord</Text>
          <Text style={styles.bannerSubtitle}>Vue instantanée des ventes, revenus et performances.</Text>
        </View>

        {/* 3. CARTES DE STATISTIQUES (GRID RESPONSIVE) */}
        <View style={styles.statsGrid}>
          {/* Ventes du jour */}
          <View style={styles.statCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fef2f2' }]}>
              <CheckCircle2 size={20} color="#b91c1c" />
            </View>
            <Text style={styles.statValue}>$13.92</Text>
            <Text style={styles.statLabel}>Ventes du jour</Text>
          </View>

          {/* Ventes du mois */}
          <View style={styles.statCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fef2f2' }]}>
              <BarChart3 size={20} color="#b91c1c" />
            </View>
            <Text style={styles.statValue}>$31.32</Text>
            <Text style={styles.statLabel}>Ventes du mois</Text>
          </View>

          {/* Factures */}
          <View style={styles.statCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fef2f2' }]}>
              <Banknote size={20} color="#b91c1c" />
            </View>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Factures</Text>
          </View>

          {/* Utilisateurs */}
          <View style={styles.statCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fef2f2' }]}>
              <Users size={20} color="#b91c1c" />
            </View>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Utilisateurs</Text>
          </View>

          {/* Revenus */}
          <View style={styles.statCard}>
            <View style={[styles.iconWrapper, { backgroundColor: '#fef2f2' }]}>
              <CreditCard size={20} color="#b91c1c" />
            </View>
            <Text style={styles.statValue}>$31.32</Text>
            <Text style={styles.statLabel}>Revenus</Text>
          </View>
        </View>

        {/* 4. ZONE DES GRAPHES REPRÉSENTATIFS */}
        <View style={styles.chartsRow}>
          
          {/* GRAPHIQUE 1 : ÉVOLUTION DES VENTES */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Évolution des ventes</Text>
            <View style={styles.chartWrapper}>
              {/* Tracé de la courbe SVG fluide identique à la maquette */}
              <Svg height="160" width="100%">
                <Defs>
                  <SvgGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#b91c1c" stopOpacity="0.25" />
                    <Stop offset="100%" stopColor="#b91c1c" stopOpacity="0.0" />
                  </SvgGradient>
                </Defs>
                {/* Lignes de grille en arrière-plan */}
                <Path d="M 0 40 L 500 40M 0 80 L 500 80M 0 120 L 500 120" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="4" />
                {/* Remplissage sous la courbe */}
                <Path d="M 0 150 L 150 150 L 220 150 Q 250 140 270 90 T 320 30 Q 360 40 400 60 L 400 150 Z" fill="url(#grad)" />
                {/* Ligne de la courbe principale */}
                <Path d="M 0 150 L 150 150 L 220 150 Q 250 140 270 90 T 320 30 Q 360 40 400 60" fill="none" stroke="#b91c1c" strokeWidth="2" />
              </Svg>
              {/* Indicateur de Tooltip flottant (ven. ventes : 0) */}
              <View style={styles.tooltipBox}>
                <Text style={styles.tooltipDay}>ven.</Text>
                <Text style={styles.tooltipValue}>ventes : 0</Text>
              </View>
              {/* Axe X des jours */}
              <View style={styles.axisX}>
                {['jeu.', 'ven.', 'sam.', 'dim.', 'lun.', 'mar.', 'mer.'].map((day, idx) => (
                  <Text key={idx} style={styles.axisLabel}>{day}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* GRAPHIQUE 2 : PRODUITS LES PLUS VENDUS */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Produits les plus vendus</Text>
            <View style={styles.barChartContainer}>
              {produitsPlusVendus.map((prod, index) => (
                <View key={index} style={styles.barColumn}>
                  {/* Conteneur de la barre pour aligner en bas */}
                  <View style={styles.barTrack}>
                    <View 
                      style={[
                        styles.actualBar, 
                        { 
                          height: prod.value === 2 ? 110 : 55, 
                          backgroundColor: prod.color 
                        }
                      ]} 
                    />
                  </View>
                  <Text style={styles.barItemName} numberOfLines={1}>{prod.name}</Text>
                </View>
              ))}
            </View>
          </View>

        </View>

        {/* Espacement de sécurité pour le scroll au dessus de la TabBar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* 5. BARRE DE NAVIGATION INFÉRIEURE OFFICIEUZE (TAB BAR) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <ShoppingCart size={18} color="#71717a" />
          <Text style={styles.tabLabel}>POS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <BarChart3 size={18} color="#ffffff" />
          <Text style={[styles.tabLabel, { color: '#ffffff' }]}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Box size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Produits</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <CreditCard size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Ventes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Calendar size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Jour</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <FileText size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Mois</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Users size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Utilisateurs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Settings size={18} color="#71717a" />
          <Text style={styles.tabLabel}>Paramètres</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f6f0' },
  header: { 
    height: 65, 
    backgroundColor: '#ffffff', 
    borderBottomWidth: 1, 
    borderColor: '#e4e4e7', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 24,
    ...Platform.select({ ios: { paddingTop: 12 } })
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarFake: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#b91c1c', justifyContent: 'center', alignItems: 'center' },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 15, fontWeight: '700', color: '#09090b' },
  userRole: { fontSize: 12, color: '#71717a', marginTop: 1 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 8, borderWidth: 1, borderColor: '#e4e4e7', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logoutBtn: { flexDirection: 'row', paddingHorizontal: 14, height: 36, borderRadius: 8, borderWidth: 1, borderColor: '#e4e4e7', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logoutBtnText: { fontSize: 13, fontWeight: '600', color: '#09090b' },
  
  scrollContainer: { flex: 1, padding: 24 },
  
  banner: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#b91c1c',
    marginBottom: 24,
    ...Platform.select({
      web: { backgroundImage: 'linear-gradient(90deg, #b91c1c 0%, #a21caf 100%)' } as any,
    }),
  },
  bannerTitle: { fontSize: 28, fontWeight: '800', color: '#ffffff', letterSpacing: -0.5 },
  bannerSubtitle: { fontSize: 14, color: 'rgba(255, 255, 255, 0.85)', marginTop: 4 },
  
  statsGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 16, 
    marginBottom: 24 
  },
  statCard: { 
    flex: 1, 
    minWidth: Platform.OS === 'web' ? 200 : '45%', 
    padding: 20, 
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f4f4f5',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  statValue: { fontSize: 24, fontWeight: '800', color: '#09090b', letterSpacing: -0.5 },
  statLabel: { fontSize: 13, color: '#71717a', marginTop: 2, fontWeight: '500' },
  
  chartsRow: { 
    flexDirection: Platform.OS === 'web' ? 'row' : 'column', 
    gap: 20,
  },
  chartCard: { flex: 1, padding: 24, borderRadius: 16, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#f4f4f5' },
  chartTitle: { fontSize: 18, fontWeight: '700', color: '#09090b', marginBottom: 20 },
  chartWrapper: { position: 'relative', height: 180, justifyContent: 'flex-end' },
  
  tooltipBox: {
    position: 'absolute',
    top: 35,
    left: '20%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e4e4e7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tooltipDay: { fontSize: 11, color: '#71717a', textAlign: 'center' },
  tooltipValue: { fontSize: 12, fontWeight: '600', color: '#b91c1c', marginTop: 1 },
  
  axisX: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, paddingHorizontal: 4 },
  axisLabel: { fontSize: 12, color: '#71717a' },
  
  barChartContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', height: 160, paddingTop: 10 },
  barColumn: { alignItems: 'center', flex: 1 },
  barTrack: { height: 120, justifyContent: 'flex-end', width: '100%', alignItems: 'center' },
  actualBar: { width: 55, borderRadius: 4 },
  barItemName: { fontSize: 12, color: '#09090b', marginTop: 10, fontWeight: '500', textAlign: 'center' },

  tabBar: { 
    height: 65, 
    backgroundColor: '#ffffff', 
    borderTopWidth: 1, 
    borderColor: '#e4e4e7', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10
  },
  tabItem: { alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%' },
  tabItemActive: { backgroundColor: '#b91c1c', borderRadius: 12, height: 48, maxWidth: 110, paddingHorizontal: 4 },
  tabLabel: { fontSize: 11, color: '#71717a', fontWeight: '600', marginTop: 4 }
});