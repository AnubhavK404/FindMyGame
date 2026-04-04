export type MoodId = 
  | 'happy' 
  | 'sad' 
  | 'angry' 
  | 'calm' 
  | 'anxious' 
  | 'dreamy' 
  | 'confident' 
  | 'lonely' 
  | 'excited' 
  | 'curious';

export interface MoodConfig {
  id: MoodId;
  label: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor?: string;
  particleType: 'float' | 'drift' | 'jitter' | 'pulse' | 'fade' | 'orbit';
  emoji: string;
}

export const MOODS: Record<MoodId, MoodConfig> = {
  happy: {
    id: 'happy',
    label: 'Happy',
    primaryColor: '#FFD700', // Gold
    secondaryColor: '#FF8C00', // DarkOrange
    tertiaryColor: '#FFFACD', // LemonChiffon
    particleType: 'float',
    emoji: '☀️',
  },
  sad: {
    id: 'sad',
    label: 'Sad',
    primaryColor: '#1E90FF', // DodgerBlue
    secondaryColor: '#00008B', // DarkBlue
    tertiaryColor: '#4682B4', // SteelBlue
    particleType: 'fade',
    emoji: '🌧️',
  },
  angry: {
    id: 'angry',
    label: 'Angry',
    primaryColor: '#FF0000', // Red
    secondaryColor: '#8B0000', // DarkRed
    tertiaryColor: '#4B0082', // Indigo
    particleType: 'jitter',
    emoji: '🌋',
  },
  calm: {
    id: 'calm',
    label: 'Calm',
    primaryColor: '#00FA9A', // MediumSpringGreen
    secondaryColor: '#20B2AA', // LightSeaGreen
    tertiaryColor: '#E0FFFF', // LightCyan
    particleType: 'drift',
    emoji: '🌊',
  },
  anxious: {
    id: 'anxious',
    label: 'Anxious',
    primaryColor: '#D3D3D3', // LightGray
    secondaryColor: '#696969', // DimGray
    tertiaryColor: '#708090', // SlateGray
    particleType: 'jitter',
    emoji: '🌪️',
  },
  dreamy: {
    id: 'dreamy',
    label: 'Dreamy',
    primaryColor: '#DA70D6', // Orchid
    secondaryColor: '#9370DB', // MediumPurple
    tertiaryColor: '#FFB6C1', // LightPink
    particleType: 'pulse',
    emoji: '🌌',
  },
  confident: {
    id: 'confident',
    label: 'Confident',
    primaryColor: '#FFD700', // Gold
    secondaryColor: '#B8860B', // DarkGoldenRod
    tertiaryColor: '#DAA520', // GoldenRod
    particleType: 'orbit',
    emoji: '🦁',
  },
  lonely: {
    id: 'lonely',
    label: 'Lonely',
    primaryColor: '#2F4F4F', // DarkSlateGray
    secondaryColor: '#000000', // Black
    tertiaryColor: '#778899', // LightSlateGray
    particleType: 'fade',
    emoji: '🌑',
  },
  excited: {
    id: 'excited',
    label: 'Excited',
    primaryColor: '#FF4500', // OrangeRed
    secondaryColor: '#FFFF00', // Yellow
    tertiaryColor: '#FF6347', // Tomato
    particleType: 'jitter',
    emoji: '⚡',
  },
  curious: {
    id: 'curious',
    label: 'Curious',
    primaryColor: '#ADFF2F', // GreenYellow
    secondaryColor: '#32CD32', // LimeGreen
    tertiaryColor: '#00FF7F', // SpringGreen
    particleType: 'drift',
    emoji: '🔍',
  },
};

export const getMoodConfig = (id: MoodId) => MOODS[id];
