
export interface ChakraQuestion {
  id: number;
  chakraId: string;
  question: string;
}

export interface ChakraInfo {
  id: string;
  name: string;
  englishName: string;
  position: string;
  color: string;
  colorHex: string;
  bgColorLight: string;
  element: string;
  theme: string;
  description: string;
  balancedTraits: string[];
  imbalancedTraits: string[];
  recommendations: string[];
  affirmation: string;
  personalizedGuidance: string;
}

export interface ChakraResult {
  chakraId: string;
  name: string;
  score: number;
  status: 'critical' | 'warning' | 'neutral' | 'good' | 'excellent';
  statusLabel: string;
  statusColor: string;
}

export interface TestResult {
  timestamp: Date;
  scores: Record<string, number>;
  results: ChakraResult[];
  overallScore: number;
  mostBalanced: string;
  needsAttention: string;
  personalizedInsight: string;
}

// 脈輪問卷題目 - 優化版本（簡潔日常語言）
export const chakraQuestions: ChakraQuestion[] = [
  // 根部脈輪 (Root Chakra) - 安全感、穩定
  { id: 1, chakraId: 'root', question: '我對目前的生活感到安心和穩定。' },
  { id: 2, chakraId: 'root', question: '我相信自己能夠應對生活中的挑戰。' },
  { id: 3, chakraId: 'root', question: '我對物質生活（食物、住所、金錢）感到滿足。' },
  { id: 4, chakraId: 'root', question: '我與家人和身邊的人有良好的連結。' },

  // 薦骨脈輪 (Sacral Chakra) - 創意、情感、享樂
  { id: 5, chakraId: 'sacral', question: '我的生活充滿創意和熱情。' },
  { id: 6, chakraId: 'sacral', question: '我能夠自由地表達自己的感受。' },
  { id: 7, chakraId: 'sacral', question: '我對親密關係感到舒適和滿足。' },
  { id: 8, chakraId: 'sacral', question: '我喜歡嘗試新的想法和體驗。' },

  // 太陽神經叢脈輪 (Solar Plexus Chakra) - 自信、意志力
  { id: 9, chakraId: 'solarPlexus', question: '我對自己的能力充滿信心。' },
  { id: 10, chakraId: 'solarPlexus', question: '我能夠做出適合自己的決定。' },
  { id: 11, chakraId: 'solarPlexus', question: '我能夠改變我的生活現狀。' },
  { id: 12, chakraId: 'solarPlexus', question: '我能夠克服困難並達成目標。' },

  // 心輪 (Heart Chakra) - 愛、同情、接納
  { id: 13, chakraId: 'heart', question: '我能夠用心去愛他人。' },
  { id: 14, chakraId: 'heart', question: '我能夠理解和同情他人的感受。' },
  { id: 15, chakraId: 'heart', question: '我感到被愛和被接納。' },
  { id: 16, chakraId: 'heart', question: '我能夠原諒自己和他人。' },

  // 喉輪 (Throat Chakra) - 表達、溝通
  { id: 17, chakraId: 'throat', question: '我能夠清楚地表達自己的想法。' },
  { id: 18, chakraId: 'throat', question: '我敢於說出自己真實的想法。' },
  { id: 19, chakraId: 'throat', question: '我的聲音在生活中被聽到和重視。' },
  { id: 20, chakraId: 'throat', question: '我能夠和他人進行有效的溝通。' },

  // 眉心輪 (Third Eye Chakra) - 直覺、洞察、願景
  { id: 21, chakraId: 'thirdEye', question: '我相信自己的直覺。' },
  { id: 22, chakraId: 'thirdEye', question: '我能夠看清事物的本質。' },
  { id: 23, chakraId: 'thirdEye', question: '我對生活有清晰的方向和目標。' },
  { id: 24, chakraId: 'thirdEye', question: '我能夠進入深層的冥想狀態。' },

  // 頂輪 (Crown Chakra) - 靈性連結、平靜、意義
  { id: 25, chakraId: 'crown', question: '我對靈性或精神層面感到好奇。' },
  { id: 26, chakraId: 'crown', question: '我經常感到內心的平靜和喜悅。' },
  { id: 27, chakraId: 'crown', question: '我相信生活有更深層的意義。' },
  { id: 28, chakraId: 'crown', question: '我感到與生命的流動和諧共振。' },
];

// 脈輪信息
export const chakraInfo: Record<string, ChakraInfo> = {
  root: {
    id: 'root',
    name: '根部脈輪',
    englishName: 'Root Chakra (Muladhara)',
    position: '脊椎底部',
    color: '紅色',
    colorHex: '#E63946',
    bgColorLight: '#F5E6E8',
    element: '地',
    theme: '生存、安全、穩定',
    description: '根部脈輪是您能量系統的基礎，掌管安全感、穩定性和生存本能。當它平衡時，您會感到踏實、有安全感，能夠信任生活。',
    balancedTraits: ['感到安全踏實', '相信自己', '經濟穩定', '身體健康', '與家人親近'],
    imbalancedTraits: ['容易焦慮不安', '缺乏安全感', '經濟困難', '身體疲勞', '孤立感'],
    recommendations: [
      '進行接地運動（赤腳踩草地、散步）',
      '多吃紅色食物（番茄、紅蘿蔔、紅棗）',
      '做瑜伽中的山式站姿',
      '冥想時專注於腳底的穩定感',
      '建立日常規律和安全的環境'
    ],
    affirmation: '我感到安全、踏實、被支持。',
    personalizedGuidance: '您的根部脈輪能量需要加強。建議您在日常生活中多做接地活動，例如赤腳在草地上走動、進行瑜伽練習，或是冥想時專注於腳底的穩定感。這些活動能幫助您重新建立安全感和信任感。'
  },
  sacral: {
    id: 'sacral',
    name: '薦骨脈輪',
    englishName: 'Sacral Chakra (Svadhisthana)',
    position: '下腹部',
    color: '橙色',
    colorHex: '#FF8C42',
    bgColorLight: '#FFE5D9',
    element: '水',
    theme: '創意、情感、享樂',
    description: '薦骨脈輪掌管您的創意、情感和享樂能力。當它平衡時，您會感到充滿熱情、有創意、能夠自由表達情感。',
    balancedTraits: ['充滿創意', '情感豐富', '享受生活', '親密關係滿足', '靈活適應'],
    imbalancedTraits: ['缺乏創意', '情感壓抑', '性冷淡', '親密關係困難', '過度控制'],
    recommendations: [
      '進行創意活動（繪畫、寫作、舞蹈）',
      '多喝水、泡澡放鬆',
      '做瑜伽中的髖部開放動作',
      '享受美食和感官體驗',
      '表達和分享自己的感受'
    ],
    affirmation: '我充滿創意、熱情、享受生活。',
    personalizedGuidance: '您的薦骨脈輪能量需要激發。建議您多進行創意活動，例如繪畫、寫作或舞蹈，也可以嘗試新的體驗和享受生活中的美好時刻。瑜伽中的髖部開放動作也能幫助您打開這個脈輪。'
  },
  solarPlexus: {
    id: 'solarPlexus',
    name: '太陽神經叢脈輪',
    englishName: 'Solar Plexus Chakra (Manipura)',
    position: '上腹部',
    color: '黃色',
    colorHex: '#FFD60A',
    bgColorLight: '#FFF4D6',
    element: '火',
    theme: '自信、意志力、個人力量',
    description: '太陽神經叢脈輪是您的力量中心，掌管自信、意志力和個人力量。當它平衡時，您會感到充滿力量、能夠做決定、有清晰的目標。',
    balancedTraits: ['充滿自信', '有決斷力', '目標明確', '充滿活力', '領導力強'],
    imbalancedTraits: ['缺乏自信', '優柔寡斷', '目標模糊', '容易疲勞', '被動消極'],
    recommendations: [
      '進行高強度運動（跑步、健身、拳擊）',
      '多吃黃色食物（香蕉、檸檬、薑）',
      '做瑜伽中的核心訓練',
      '冥想時專注於太陽神經叢的溫暖感',
      '設定明確的目標並採取行動'
    ],
    affirmation: '我充滿力量、自信、能夠實現目標。',
    personalizedGuidance: '您的太陽神經叢脈輪能量需要強化。建議您進行高強度運動來激發內在力量，例如跑步、健身或瑜伽。同時設定明確的目標，並採取具體行動去實現它們，這會幫助您重建自信和決斷力。'
  },
  heart: {
    id: 'heart',
    name: '心輪',
    englishName: 'Heart Chakra (Anahata)',
    position: '胸部中央',
    color: '綠色',
    colorHex: '#2ECC71',
    bgColorLight: '#E8F8F5',
    element: '風',
    theme: '愛、同情、連結',
    description: '心輪是愛與同情的中心，掌管您對自己和他人的愛。當它平衡時，您會感到充滿愛、能夠給予和接受愛、有同情心。',
    balancedTraits: ['充滿愛心', '同情他人', '親密關係良好', '自我接納', '寬恕他人'],
    imbalancedTraits: ['缺乏愛心', '冷漠無情', '親密關係困難', '自我批評', '無法原諒'],
    recommendations: [
      '進行有氧運動（瑜伽、太極、慢走）',
      '多吃綠色食物（菠菜、綠茶、青菜）',
      '做瑜伽中的胸部開放動作',
      '冥想時專注於心輪的溫暖和愛',
      '表達感謝和愛意給身邊的人'
    ],
    affirmation: '我充滿愛、同情、能夠給予和接受愛。',
    personalizedGuidance: '您的心輪能量需要打開。建議您多進行溫和的運動，例如瑜伽、太極或散步，並在冥想時專注於心輪的溫暖感。同時，試著表達感謝和愛意給身邊的人，這會幫助您打開心房，增進人際關係。'
  },
  throat: {
    id: 'throat',
    name: '喉輪',
    englishName: 'Throat Chakra (Vishuddha)',
    position: '喉嚨部位',
    color: '藍色',
    colorHex: '#3498DB',
    bgColorLight: '#EBF5FB',
    element: '乙太',
    theme: '表達、溝通、真實',
    description: '喉輪掌管您的表達和溝通能力。當它平衡時，您會感到能夠清楚表達自己、被聽到、能夠有效溝通。',
    balancedTraits: ['表達清晰', '溝通有效', '敢於發聲', '被聽到和重視', '真實自在'],
    imbalancedTraits: ['表達困難', '溝通不暢', '沉默寡言', '被忽視', '說謊或隱瞞'],
    recommendations: [
      '多唱歌或哼歌',
      '進行喉部瑜伽動作',
      '多喝溫水和藍色飲品（藍莓茶）',
      '冥想時專注於喉輪的清晰感',
      '練習真實表達自己的想法'
    ],
    affirmation: '我能夠清楚表達自己、被聽到、真實自在。',
    personalizedGuidance: '您的喉輪能量需要開啟。建議您多唱歌、進行喉部瑜伽動作，或是練習在安全的環境中表達自己的想法和感受。多喝溫水也能幫助喉輪的流動。試著在日常生活中更多地表達自己，這會逐漸增強您的表達能力。'
  },
  thirdEye: {
    id: 'thirdEye',
    name: '眉心輪',
    englishName: 'Third Eye Chakra (Ajna)',
    position: '眉心部位',
    color: '靛藍色',
    colorHex: '#9B59B6',
    bgColorLight: '#F4ECF7',
    element: '光',
    theme: '直覺、洞察、願景',
    description: '眉心輪掌管您的直覺和洞察力。當它平衡時，您會感到直覺敏銳、能夠看清事物本質、有清晰的願景。',
    balancedTraits: ['直覺敏銳', '洞察力強', '願景清晰', '記憶力好', '想像力豐富'],
    imbalancedTraits: ['直覺遲鈍', '缺乏洞察', '迷茫困惑', '記憶力差', '想像力不足'],
    recommendations: [
      '進行冥想練習',
      '多吃紫色食物（藍莓、紫葡萄、紫地瓜）',
      '做瑜伽中的前彎動作',
      '冥想時專注於眉心的光芒',
      '相信和跟隨自己的直覺'
    ],
    affirmation: '我的直覺敏銳、洞察力強、願景清晰。',
    personalizedGuidance: '您的眉心輪能量需要開發。建議您進行定期的冥想練習，特別是專注於眉心部位的冥想。也可以多吃紫色食物，如藍莓和紫葡萄。在日常生活中，試著相信和跟隨自己的直覺，這會幫助您逐漸增強洞察力和願景清晰度。'
  },
  crown: {
    id: 'crown',
    name: '頂輪',
    englishName: 'Crown Chakra (Sahasrara)',
    position: '頭頂',
    color: '紫色/白色',
    colorHex: '#E8DAEF',
    bgColorLight: '#F9F5FE',
    element: '思想',
    theme: '靈性、連結、平靜',
    description: '頂輪是您與靈性力量的連結點。當它平衡時，您會感到與更高的力量相連、內心平靜、生活有意義。',
    balancedTraits: ['靈性連結強', '內心平靜', '生活有意義', '智慧深厚', '超越自我'],
    imbalancedTraits: ['靈性迷茫', '內心混亂', '生活無意義', '缺乏智慧', '自我中心'],
    recommendations: [
      '進行靈性冥想',
      '多吃紫色和白色食物（葡萄、蓮子）',
      '做瑜伽中的頭部倒立動作',
      '冥想時專注於頭頂的光芒',
      '探索靈性修行和冥想'
    ],
    affirmation: '我與靈性力量相連、內心平靜、生活充滿意義。',
    personalizedGuidance: '您的頂輪能量需要開啟。建議您進行深層的靈性冥想，探索對您有意義的靈性修行。也可以嘗試瑜伽中的頭部倒立動作，或是在靜坐中專注於頭頂的光芒。這些練習會幫助您與更高的力量相連，找到生活的更深層意義。'
  }
};

// 脈輪狀態標籤和顏色
export const statusConfig = {
  critical: { label: '需要關注', color: '#E63946', bgColor: '#FFE5E5' },
  warning: { label: '不平衡', color: '#FF8C42', bgColor: '#FFE5D9' },
  neutral: { label: '中等', color: '#FFD60A', bgColor: '#FFF4D6' },
  good: { label: '平衡', color: '#2ECC71', bgColor: '#E8F8F5' },
  excellent: { label: '高度平衡', color: '#3498DB', bgColor: '#EBF5FB' }
};

// 計算脈輪狀態
export function getChakraStatus(score: number): ChakraResult['status'] {
  if (score < 1.5) return 'critical';
  if (score < 2.5) return 'warning';
  if (score < 3.5) return 'neutral';
  if (score < 4.5) return 'good';
  return 'excellent';
}

// 計算脈輪結果
export function calculateChakraResults(scores: Record<string, number>): ChakraResult[] {
  return Object.entries(scores).map(([chakraId, score]) => {
    const status = getChakraStatus(score);
    const statusInfo = statusConfig[status];
    const info = chakraInfo[chakraId];
    
    return {
      chakraId,
      name: info.name,
      score,
      status,
      statusLabel: statusInfo.label,
      statusColor: statusInfo.color
    };
  });
}

// 生成測試結果
export function generateTestResult(answers: Record<number, number>): TestResult {
  // 計算每個脈輪的平均分數
  const scores: Record<string, number> = {};
  const chakraQuestionCounts: Record<string, number> = {};
  
  chakraQuestions.forEach(q => {
    if (!scores[q.chakraId]) {
      scores[q.chakraId] = 0;
      chakraQuestionCounts[q.chakraId] = 0;
    }
    scores[q.chakraId] += answers[q.id] || 0;
    chakraQuestionCounts[q.chakraId]++;
  });
  
  // 計算平均分數
  Object.keys(scores).forEach(chakraId => {
    scores[chakraId] = scores[chakraId] / chakraQuestionCounts[chakraId];
  });
  
  // 計算脈輪結果
  const results = calculateChakraResults(scores);
  
  // 計算整體分數
  const overallScore = Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length;
  
  // 找出最平衡和最需要關注的脈輪
  const mostBalanced = results.reduce((a, b) => a.score > b.score ? a : b).chakraId;
  const needsAttention = results.reduce((a, b) => a.score < b.score ? a : b).chakraId;
  
  // 生成個性化洞察
  const personalizedInsight = generatePersonalizedInsight(results);
  
  return {
    timestamp: new Date(),
    scores,
    results,
    overallScore,
    mostBalanced,
    needsAttention,
    personalizedInsight
  };
}

// 生成個性化洞察
export function generatePersonalizedInsight(results: ChakraResult[]): string {
  const excellent = results.filter(r => r.status === 'excellent');
  const critical = results.filter(r => r.status === 'critical');
  
  if (excellent.length >= 6) {
    return '恭喜！您的能量高度平衡。您已經達到很好的靈性狀態。繼續您的靈性修行，幫助他人。';
  }
  
  if (critical.length >= 3) {
    return '您的能量需要調整。建議進行深度一對一的脈輪檢測和療癒，以找到根本原因並獲得個性化的平衡方案。';
  }
  
  return '您的能量處於過渡狀態。透過持續的冥想和自我覺察，您可以逐漸達到更高的平衡。建議進行深度檢測以了解更多細節。';
}
