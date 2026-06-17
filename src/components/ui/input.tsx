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
import { theme } from '../themes/color';

interface DashboardScreenProps {
  onLogout: () => void;
}

export function DashboardScreen({ onLogout }: DashboardScreenProps) {
  const produitsPlusVendus = [
    { name: 'Coca-Cola', value: 2, color: '#dc2626' },
    { name: 'Pizza royale', value: 1, color: '#a21caf' },
    { name: 'Poulet braisé', value: 1, color: '#dc2626' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      
      {/* 1. HEADER */}
      <View style={[styles.header, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.userInfo}>
          <View style={[styles.avatarFake, { backgroundColor: theme.primary }]}>
            <Text style={{ fontSize: 16, color: '#ffffff' }}>👑</Text>
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
        
        {/* 2. BANNIÈRE PRINCIPALE AVEC DÉGRADÉ ROYAL */}
        <View style={[styles.banner, { backgroundColor: theme.primary }]}>
          <Text style={styles.bannerTitle}>Tableau de bord</Text>
          <Text style={styles.bannerSubtitle}>Vue instantanée des ventes, revenus et performances.</Text>
        </View>

        {/* 3. CARTES DE STATISTIQUES */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}><CheckCircle2 size={18} color={theme.primary} /></View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$13.92</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Ventes du jour</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}><BarChart3 size={18} color={theme.primary} /></View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$31.32</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Ventes du mois</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}><Banknote size={18} color={theme.primary} /></View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>2</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Factures</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}><Users size={18} color={theme.primary} /></View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>2</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Utilisateurs</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={styles.iconWrapper}><CreditCard size={18} color={theme.primary} /></View>
            <Text style={[styles.statValue, { color: theme.foreground }]}>$31.32</Text>
            <Text style={[styles.statLabel, { color: theme.muted }]}>Revenus</Text>
          </View>
        </View>

        {/* 4. BLOCS DES DEUX GRAPHIQUES */}
        <View style={styles.chartsRow}>
          
          {/* GRAPHIQUE 1 : ÉVOLUTION DES VENTES */}
          <View style={[styles.chartCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.chartTitle, { color: theme.foreground }]}>Évolution des ventes</Text>
            <View style={styles.chartContainerWithAxis}>
              
              {/* Axe Y de gauche */}
              <View style={styles.axisY}>
                <Text style={styles.axisLabelY}>20</Text>
                <Text style={styles.axisLabelY}>15</Text>
                <Text style={styles.axisLabelY}>10</Text>
                <Text style={styles.axisLabelY}>5</Text>
                <Text style={styles.axisLabelY}>0</Text>
              </View>

              <View style={styles.chartWrapper}>
                <Svg height="150" width="100%">
                  <Defs>
                    <SvgGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <Stop offset="0%" stopColor={theme.primary} stopOpacity="0.3" />
                      <Stop offset="100%" stopColor={theme.primary} stopOpacity="0.0" />
                    </SvgGradient>
                  </Defs>
                  {/* Lignes de grille */}
                  <Path d="M 0 0 L 600 0M 0 37.5 L 600 37.5M 0 75 L 600 75M 0 112.5 L 600 112.5M 0 150 L 600 150" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3" />
                  
                  {/* Tracé exact de la courbe : Plat du jeu. au lun., pic mar., descente mer. */}
                  <Path d="M 0 150 L 62 150 L 124 150 L 186 150 L 248 150 Q 285 140 310 40 T 372 65 L 372 150 Z" fill="url(#grad)" />
                  <Path d="M 0 150 L 62 150 L 124 150 L 186 150 L 248 150 Q 285 140 310 40 T 372 65" fill="none" stroke={theme.primary} strokeWidth={2} />
                </Svg>

                <View style={styles.axisX}>
                  {['jeu.', 'ven.', 'sam.', 'dim.', 'lun.', 'mar.', 'mer.'].map((day, idx) => (
                    <Text key={idx} style={[styles.axisLabelX, { color: theme.mutedForeground }]}>{day}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* GRAPHIQUE 2 : PRODUITS LES PLUS VENDUS */}
          <View style={[styles.chartCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.chartTitle, { color: theme.foreground }]}>Produits les plus vendus</Text>
            <View style={styles.chartContainerWithAxis}>
              
              {/* Axe Y gradué spécifique de image_50ae2f.png */}
              <View style={styles.axisY}>
                <Text style={styles.axisLabelY}>2</Text>
                <Text style={styles.axisLabelY}>1.5</Text>
                <Text style={styles.axisLabelY}>1</Text>
                <Text style={styles.axisLabelY}>0.5</Text>
                <Text style={styles.axisLabelY}>0</Text>
              </View>

              <View style={styles.barChartContainer}>
                {/* Lignes de repère horizontales en arrière-plan */}
                <View style={styles.barGridOverlay}>
                  <View style={styles.gridLine} />
                  <View style={styles.gridLine} />
                  <View style={styles.gridLine} />
                  <View style={styles.gridLine} />
                  <View style={[styles.gridLine, { borderBottomWidth: 1, borderColor: '#71717a' }]} />
                </View>

                {produitsPlusVendus.map((prod, index) => (
                  <View key={index} style={styles.barColumn}>
                    <View style={styles.barTrack}>
                      <View 
                        style={[
                          styles.actualBar, 
                          { 
                            height: prod.value === 2 ? 150 : 75, 
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

        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* 5. TAB BAR EXTRA-PRÉCISE */}
      <View style={[styles.tabBar, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <TouchableOpacity style={styles.tabItem}>
          <ShoppingCart size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>POS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive, { backgroundColor: theme.primary }]}>
          <BarChart3 size={18} color="#ffffff" strokeWidth={2} />
          <Text style={[styles.tabLabel, { color: '#ffffff', fontWeight: '700' }]}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Box size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Produits</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <CreditCard size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Ventes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Calendar size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Jour</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <FileText size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Mois</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Users size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Utilisateurs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Settings size={18} color="#64748b" strokeWidth={1.8} />
          <Text style={styles.tabLabel}>Paramètres</Text>
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
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarFake: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  userName: { fontSize: 16, fontWeight: '700', letterSpacing: -0.3 },
  userRole: { fontSize: 12, marginTop: 1 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  logoutBtn: { flexDirection: 'row', paddingHorizontal: 14, height: 36, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  logoutBtnText: { fontSize: 13, fontWeight: '600' },
  
  scrollContainer: { flex: 1, padding: 24 },
  banner: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
    ...Platform.select({
      web: { backgroundImage: 'linear-gradient(90deg, #b91c1c 0%, #7e22ce 100%)' } as any,
    }),
  },
  bannerTitle: { fontSize: 26, fontWeight: '800', color: '#ffffff' },
  bannerSubtitle: { fontSize: 13, color: 'rgba(255, 255, 255, 0.85)', marginTop: 4 },
  
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 24 },
  statCard: { flex: 1, minWidth: Platform.OS === 'web' ? 180 : '45%', padding: 20, borderRadius: 16, borderWidth: 1 },
  iconWrapper: { width: 36, height: 36, borderRadius: 8, backgroundColor: 'rgba(220, 38, 38, 0.05)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  statValue: { fontSize: 22, fontWeight: '800', letterSpacing: -0.5 },
  statLabel: { fontSize: 12, marginTop: 4, fontWeight: '500' },
  
  chartsRow: { flexDirection: Platform.OS === 'web' ? 'row' : 'column', gap: 24 },
  chartCard: { flex: 1, padding: 24, borderRadius: 16, borderWidth: 1 },
  chartTitle: { fontSize: 18, fontWeight: '700', marginBottom: 24 },
  
  chartContainerWithAxis: { flexDirection: 'row', alignItems: 'stretch', height: 150 },
  axisY: { width: 30, justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 8, paddingBottom: 2 },
  axisLabelY: { fontSize: 11, color: '#71717a', height: 14 },
  
  chartWrapper: { flex: 1, justifyContent: 'flex-end', position: 'relative', borderLeftWidth: 1, borderBottomWidth: 1, borderColor: '#71717a' },
  axisX: { flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: -22, left: 0, right: 0 },
  axisLabelX: { fontSize: 11 },
  
  barChartContainer: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', borderLeftWidth: 1, borderColor: '#71717a' },
  barGridOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'space-between', zIndex: 0 },
  gridLine: { borderBottomWidth: 1, borderStyle: 'dashed', borderColor: '#e4e4e7', height: 1 },
  
  barColumn: { alignItems: 'center', flex: 1, zIndex: 1 },
  barTrack: { height: 150, justifyContent: 'flex-end', width: '100%', alignItems: 'center' },
  actualBar: { width: Platform.OS === 'web' ? 65 : 40, borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  barItemName: { fontSize: 11, marginTop: 10, fontWeight: '500', position: 'absolute', bottom: -22 },

  tabBar: { 
    height: 75, 
    borderTopWidth: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    paddingHorizontal: 16,
    gap: Platform.OS === 'web' ? 12 : 2,
  },
  tabItem: { alignItems: 'center', justifyContent: 'center', height: '100%', paddingHorizontal: 10, minWidth: Platform.OS === 'web' ? 85 : 42 },
  tabItemActive: { borderRadius: 14, height: 48, minWidth: Platform.OS === 'web' ? 100 : 80 },
  tabLabel: { fontSize: 11, color: '#64748b', fontWeight: '500', marginTop: 4, textAlign: 'center' }
});