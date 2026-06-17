export const tokens = {
  light: {
    background: '#f9f6f0',           // Fond crème du tableau de bord (image_97eb14.png)
    foreground: '#09090b',           // Texte principal sombre
    card: '#ffffff',                 // Blanc pur des cartes et du header (image_97eb14.png)
    cardForeground: '#09090b',
    popover: '#ffffff',
    popoverForeground: '#09090b',
    primary: '#dc2626',              // Le rouge vif Royal POS (image_46bd4c.png)
    primaryForeground: '#ffffff',
    muted: '#64748b',                // Gris ardoise pour icônes et textes secondaires
    mutedForeground: '#71717a',
    accent: '#f4f4f5',
    accentForeground: '#09090b',
    border: '#f1f1f3',               // Bordures fines des cartes
    input: 'rgba(255, 255, 255, 0.12)', // Transparence de la boîte de login (image_97f980.jpg)
    ring: '#dc2626',
  },
  dark: {
    background: '#09090b',
    foreground: '#f4f4f5',
    card: '#18181b',
    cardForeground: '#f4f4f5',
    popover: '#18181b',
    popoverForeground: '#f4f4f5',
    primary: '#dc2626',
    primaryForeground: '#ffffff',
    muted: '#27272a',
    mutedForeground: '#a1a1aa',
    accent: '#27272a',
    accentForeground: '#f4f4f5',
    border: '#27272a',
    input: 'rgba(255, 255, 255, 0.05)',
    ring: '#dc2626',
  }
};

// Exportation globale du thème actif
export const theme = tokens.light;