import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient as SvgGradient, Stop, Path } from 'react-native-svg';
import { 
  CheckCircle2, 
  BarChart3, 
  Banknote, 
  Users, 
  CreditCard, 
  ShoppingCart, 
  Box, 
  Calendar, 
  FileText, 
  Settings, 
  Moon, 
  LogOut 
} from 'lucide-react-native';
import { theme } from '../theme/colors';

interface DashboardScreenProps {
  onLogout: () => void;
}

export function DashboardScreen({ onLogout }: DashboardScreenProps) {
  // Données pour l'histogramme des produits les plus vendus (image_97eb14.png)
  const produitsPlusVendus = [
    { name: 'Coca-Cola', value: 2, color: '#dc2626' },
    { name: 'Pizza royale', value: 1, color: '#a21caf' },
    { name: 'Poulet braisé', value: 1, color: '#dc2626' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      
      {/* 1. EN-TÊTE DE PAGE (HEADER) */}
      <View style={[styles.header, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.userInfo}>
          <View style={[styles.avatarFake, { backgroundColor: theme.primary }]}>
            <Text style={{ fontSize: 16 }}>🍳</Text>
          </View>
          <View>
            <Text style={[styles.userName, { color: theme.foreground }]}>Royal POS</Text>
            <Text style={[styles.userRole, { color: theme.muted }]}>Administrateur • Administrateur</Text>
          </View>
        </View>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={[styles.iconBtn, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Moon size={16} color={theme.foreground} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.logoutBtn, { backgroundColor: theme.card, borderColor: theme.border }]} onPress={onLogout}>
            <LogOut size={14} color={theme.foreground} style={{ marginRight: 6 }} />
            <Text style={[styles.logoutBtnText, { color: theme.foreground }]}>Sortir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* 2. BANNIÈRE PRINCIPALE AVEC DÉGRADÉ SHADCN ROYAL */}
        <View style={[styles.banner, { backgroundColor: theme.primary }]}>
          <Text style={styles.bannerTitle}>Tableau de bord</Text>
          <Text style={styles.bannerSubtitle}>Vue instantanée des ventes, revenus et performances.</Text>
        </View>

        {/* 3. CARTES DE STATISTIQUES EN GRILLE */}
        <View style={styles.statsGrid}>
          {/* Ventes du jour */}
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}>
              <CheckCircle2 size={20} color={theme.primary} />
            </View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$13.92</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Ventes du jour</Text>
          </View>

          {/* Ventes du mois */}
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}>
              <BarChart3 size={20} color={theme.primary} />
            </View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$31.32</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Ventes du mois</Text>
          </View>

          {/* Factures */}
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}>
              <Banknote size={20} color={theme.primary} />
            </View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>2</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Factures</Text>
          </View>

          {/* Utilisateurs */}
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}>
              <Users size={20} color={theme.primary} />
            </View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>2</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Utilisateurs</Text>
          </View>

          {/* Revenus */}
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}>
              <CreditCard size={20} color={theme.primary} />
            </View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$31.32</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Revenus</Text>
          </View>
        </View>

        {/* 4. BLOCS DES DEUX GRAPHIQUES */}
        <View style={styles.chartsRow}>
          
          {/* GRAPHIQUE 1 : ÉVOLUTION DES VENTES (COURBE FLUIDE SVG) */}
          <View style={[styles.chartCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.chartTitle, { color: theme.foreground }]}>Évolution des ventes</Text>
            <View style={styles.chartWrapper}>
              <Svg height="160" width="100%">
                <Defs>
                  <SvgGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor={theme.primary} stopOpacity="0.25" />
                    <Stop offset="100%" stopColor={theme.primary} stopOpacity="0.0" />
                  </SvgGradient>
                </Defs>
                {/* Lignes horizontales de grille */}
                <Path d="M 0 40 L 500 40M 0 80 L 500 80M 0 120 L 500 120" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="4" />
                {/* Dégradé sous la courbe fluide */}
                <Path d="M 0 150 L 150 150 L 220 150 Q 250 140 270 90 T 320 30 Q 360 40 400 60 L 400 150 Z" fill="url(#grad)" />
                {/* Ligne principale rouge de l'évolution */}
                <Path d="M 0 150 L 150 150 L 220 150 Q 250 140 270 90 T 320 30 Q 360 40 400 60" fill="none" stroke={theme.primary} strokeWidth={2} />
              </Svg>

              {/* Tooltip flottant calqué sur l'image_97eb14.png */}
              <View style={[styles.tooltipBox, { borderColor: theme.border }]}>
                <Text style={{ fontSize: 11, color: theme.mutedForeground, textAlign: 'center' }}>ven.</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', color: theme.primary, marginTop: 1 }}>ventes : 0</Text>
              </View>

              {/* Axe X */}
              <View style={styles.axisX}>
                {['jeu.', 'ven.', 'sam.', 'dim.', 'lun.', 'mar.', 'mer.'].map((day, idx) => (
                  <Text key={idx} style={[styles.axisLabel, { color: theme.mutedForeground }]}>{day}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* GRAPHIQUE 2 : PRODUITS LES PLUS VENDUS (HISTOGRAMME) */}
          <View style={[styles.chartCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.chartTitle, { color: theme.foreground }]}>Produits les plus vendus</Text>
            <View style={styles.barChartContainer}>
              {produitsPlusVendus.map((prod, index) => (
                <View key={index} style={styles.barColumn}>
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
                  <Text style={[styles.barItemName, { color: theme.foreground }]} numberOfLines={1}>{prod.name}</Text>
                </View>
              ))}
            </View>
          </View>

        </View>

        {/* Marge basse de sécurité pour ne pas chevaucher la TabBar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* 5. BARRE DE NAVIGATION INFÉRIEURE (TAB BAR TYPE GÉLULE DE LA MAQUETTE) */}
      <View style={[styles.tabBar, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <TouchableOpacity style={styles.tabItem}>
          <ShoppingCart size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>POS</Text>
        </TouchableOpacity>
        
        {/* Onglet Actif en forme de gélule rouge de image_46bd4c.png */}
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive, { backgroundColor: theme.primary }]}>
          <BarChart3 size={20} color={theme.primaryForeground} strokeWidth={2} />
          <Text style={[styles.tabLabel, { color: theme.primaryForeground, fontWeight: '700' }]}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Box size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Produits</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <CreditCard size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Ventes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Calendar size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Jour</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <FileText size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Mois</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Users size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Utilisateurs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Settings size={20} color={theme.muted} strokeWidth={1.8} />
          <Text style={[styles.tabLabel, { color: theme.muted }]}>Paramètres</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { 
    height: 65, 
    borderBottomWidth: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 24,
    ...Platform.select({ ios: { paddingTop: 12 } })
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarFake: { width: 38, height: 38, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  userName: { fontSize: 15, fontWeight: '700' },
  userRole: { fontSize: 12, marginTop: 1 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  logoutBtn: { flexDirection: 'row', paddingHorizontal: 14, height: 36, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  logoutBtnText: { fontSize: 13, fontWeight: '600' },
  
  scrollContainer: { flex: 1, padding: 24 },
  banner: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    ...Platform.select({
      web: { backgroundImage: 'linear-gradient(90deg, #b91c1c 0%, #a21caf 100%)' } as any,
    }),
  },
  bannerTitle: { fontSize: 28, fontWeight: '800', color: '#ffffff', letterSpacing: -0.5 },
  bannerSubtitle: { fontSize: 14, color: 'rgba(255, 255, 255, 0.85)', marginTop: 4 },
  
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 24 },
  statCard: { 
    flex: 1, 
    minWidth: Platform.OS === 'web' ? 200 : '45%', 
    padding: 20, 
    borderRadius: 16,
    borderWidth: 1,
  },
  iconWrapper: { width: 40, height: 40, borderRadius: 10, backgroundColor: 'rgba(220, 38, 38, 0.05)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  statValue: { fontSize: 24, fontWeight: '800', letterSpacing: -0.5 },
  statLabel: { fontSize: 13, marginTop: 2, fontWeight: '500' },
  
  chartsRow: { flexDirection: Platform.OS === 'web' ? 'row' : 'column', gap: 20 },
  chartCard: { flex: 1, padding: 24, borderRadius: 16, borderWidth: 1 },
  chartTitle: { fontSize: 18, fontWeight: '700', marginBottom: 20 },
  chartWrapper: { position: 'relative', height: 180, justifyContent: 'flex-end' },
  
  tooltipBox: {
    position: 'absolute',
    top: 35,
    left: '20%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    ...Platform.select({
      web: { boxShadow: '0 4px 12px rgba(0,0,0,0.05)' } as any
    })
  },
  
  axisX: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, paddingHorizontal: 4 },
  axisLabel: { fontSize: 12 },
  
  barChartContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', height: 160, paddingTop: 10 },
  barColumn: { alignItems: 'center', flex: 1 },
  barTrack: { height: 120, justifyContent: 'flex-end', width: '100%', alignItems: 'center' },
  actualBar: { width: 55, borderRadius: 4 },
  barItemName: { fontSize: 12, marginTop: 10, fontWeight: '500', textAlign: 'center' },

  tabBar: { 
    height: 70, 
    borderTopWidth: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    paddingHorizontal: 20,
    gap: Platform.OS === 'web' ? 15 : 4,
  },
  tabItem: { alignItems: 'center', justifyContent: 'center', height: '100%', paddingHorizontal: 12, minWidth: Platform.OS === 'web' ? 85 : 45 },
  tabItemActive: { borderRadius: 16, height: 52, paddingHorizontal: 16 },
  tabLabel: { fontSize: 11, fontWeight: '600', marginTop: 5, textAlign: 'center' }
});