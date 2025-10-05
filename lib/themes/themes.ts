export type ThemeName = 'coastal' | 'terracotta' | 'lavender';

export interface Theme {
  name: ThemeName;
  displayName: string;
  emoji: string;
  description: string;
  colors: {
    primary: string;
    primaryRgb: string;
    accent: string;
    accentRgb: string;
    background: string;
    backgroundRgb: string;
    text: string;
    textRgb: string;
    bgSecondary: string;
    bgTertiary: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  coastal: {
    name: 'coastal',
    displayName: 'Coastal Mist',
    emoji: '🌫️',
    description: 'Professional, serene, and clean',
    colors: {
      primary: '#A2B9D1',
      primaryRgb: '162, 185, 209',
      accent: '#84A9A6',
      accentRgb: '132, 169, 166',
      background: '#F0F2F5',
      backgroundRgb: '240, 242, 245',
      text: '#4D5359',
      textRgb: '77, 83, 89',
      bgSecondary: '#E8EAED',
      bgTertiary: '#DFE1E4',
      textSecondary: '#6B7178',
      textTertiary: '#8A9099',
      border: '#D1D5DB',
    },
  },
  terracotta: {
    name: 'terracotta',
    displayName: 'Warm Terracotta',
    emoji: '🍑',
    description: 'Warm, inviting, and creative',
    colors: {
      primary: '#E8CFC6',
      primaryRgb: '232, 207, 198',
      accent: '#F3D9C3',
      accentRgb: '243, 217, 195',
      background: '#FCF8F5',
      backgroundRgb: '252, 248, 245',
      text: '#6B5E5A',
      textRgb: '107, 94, 90',
      bgSecondary: '#F5EDE8',
      bgTertiary: '#EFE3DC',
      textSecondary: '#857570',
      textTertiary: '#9F8D87',
      border: '#E5D5CC',
    },
  },
  lavender: {
    name: 'lavender',
    displayName: 'Lavender & Mint',
    emoji: '🌿',
    description: 'Modern, fresh, and energetic',
    colors: {
      primary: '#D6D2E4',
      primaryRgb: '214, 210, 228',
      accent: '#C4E4D4',
      accentRgb: '196, 228, 212',
      background: '#F9F9F9',
      backgroundRgb: '249, 249, 249',
      text: '#595959',
      textRgb: '89, 89, 89',
      bgSecondary: '#F1F1F1',
      bgTertiary: '#E9E9E9',
      textSecondary: '#737373',
      textTertiary: '#8C8C8C',
      border: '#D9D9D9',
    },
  },
};

export const defaultTheme: ThemeName = 'coastal';
