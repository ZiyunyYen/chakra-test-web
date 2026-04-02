import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ChakraKnowledge() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const chakras = [
    {
      name: '海底輪',
      location: '尾骨底部',
      color: 'from-red-400 to-red-600',
      emoji: '🔴',
      mastery: '安全感、生存、基本需求',
      energy: '穩定性、根基',
    },
    {
      name: '生殖輪（丹田）',
      location: '生殖器官附近',
      color: 'from-orange-400 to-orange-600',
      emoji: '🟠',
      mastery: '創造力、情感、性能量',
      energy: '流動性、創意',
    },
    {
      name: '太陽神經叢輪（胃輪）',
      location: '太陽神經叢位置',
      color: 'from-yellow-400 to-yellow-600',
      emoji: '🟡',
      mastery: '自信、個人力量、意志力',
      energy: '行動力、決心',
    },
    {
      name: '心輪',
      location: '心臟附近',
      color: 'from-green-400 to-green-600',
      emoji: '💚',
      mastery: '愛、同情、寬恕',
      energy: '連結、療癒',
    },
    {
      name: '喉輪',
      location: '喉部',
      color: 'from-blue-400 to-blue-600',
      emoji: '🔵',
      mastery: '溝通、表達、真誠',
      energy: '聲音、真實',
    },
    {
      name: '眉心輪（第三眼）',
      location: '眉心',
      color: 'from-indigo-400 to-indigo-600',
      emoji: '💜',
      mastery: '直覺、洞察力、智慧',
      energy: '洞見、覺知',
    },
    {
      name: '頂輪',
      location: '頭頂',
      color: 'from-purple-400 to-purple-600',
      emoji: '🟣',
      mastery: '靈性、覺悟、宇宙連結',
      energy: '超越、統一',
    },
  ];

  const chakraStates = [
    {
      title: '過度亢進',
      description: '當脈輪過度活躍，就像一台過熱的引擎。能量雖強，但也容易失衡。',
      examples: [
        '太陽神經叢輪過度亢進時，人會變得過於控制、好勝或自我中心。',
        '心輪過度開放時，可能過度依附他人、為愛失去自我。',
      ],
      icon: '🔥',
      color: 'from-red-100 to-orange-100',
    },
    {
      title: '能量平衡',
      description: '這是脈輪最理想的狀態。當能量穩定時，你會發現自己既能感受、又能放下。',
      examples: [
        '喉輪平衡時，你能自在表達又不傷人。',
        '眉心輪平衡時，你的直覺會清晰、有智慧。',
      ],
      icon: '⚖️',
      color: 'from-green-100 to-emerald-100',
    },
    {
      title: '過度低落',
      description: '當脈輪能量過低，就像電量不足。人會變得容易疲倦、失去方向感、或封閉情感。',
      examples: [
        '生殖輪低落時，會感到缺乏創造力、情感麻木。',
        '頂輪低落時，則會喪失靈性連結，覺得生命失去意義。',
      ],
      icon: '🔋',
      color: 'from-blue-100 to-cyan-100',
    },
  ];

  const testingMethods = [
    {
      title: '問卷測試',
      description:
        '最簡單、最容易操作的測試方式。誠實地回答關於情緒、身體與日常狀態的問題，就能初步了解你目前七大脈輪的運作情況。',
      details: [
        '你在生活中感受到的安全感',
        '你的情感流動與創造力',
        '你是否能自在地表達與溝通',
        '你最近的情緒穩定度與靈感狀態',
      ],
    },
    {
      title: '能量掃描',
      description:
        '由具備能量感知能力的療癒師進行的專業、直觀測試方式。療癒師透過手部感應或靈性覺知，感受你的能量流動、氣場厚度與頻率變化。',
      details: [
        '哪個脈輪能量太強、哪個太弱',
        '情緒與身體反應的根源',
        '能量流動的細微變化',
        '個性化的靈性指導',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          脈輪知識庫
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          深入了解七脈輪的奧秘，發現你內在的能量地圖
        </p>
        <div className="spiritual-divider mb-8" />
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="chakra-glow rounded-lg p-8 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            前言：發現你的能量地圖
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              你是否曾經覺得自己明明沒有生病，卻常常感到疲倦、焦慮或情緒低落？其實，這些狀況往往不是偶然，而是你體內的「能量中心」——也就是脈輪——在提醒你：能量失衡了。
            </p>
            <p>
              「脈輪（Chakra）」這個詞源自印度古老的哲學體系，在梵文中意為「旋轉之輪」。它象徵著人體內七個能量中心的流動與轉動，就像一個個微小的能量漩渦，持續影響著你的身體、情緒與靈性狀態。
            </p>
            <p>
              你可以把脈輪想成身體的「能量開關」。當開關正常運作，能量會自然流動，生活也就會輕盈順暢；但若開關卡住或短路，就容易陷入疲倦、焦躁、混亂與不安。
            </p>
          </div>
        </div>
      </motion.section>

      {/* Seven Chakras Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          七大脈輪主掌
        </h2>
        <div className="grid gap-6">
          {chakras.map((chakra, index) => (
            <motion.div
              key={chakra.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="chakra-glow rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${chakra.color} p-1`}>
                <div className="bg-white/95 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{chakra.emoji}</span>
                        <h3 className="text-2xl font-bold text-foreground">
                          {chakra.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        位置：{chakra.location}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                            主要掌管
                          </p>
                          <p className="text-foreground">{chakra.mastery}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                            能量層面
                          </p>
                          <p className="text-foreground">{chakra.energy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Chakra States Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          三種脈輪狀態
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {chakraStates.map((state, index) => (
            <motion.div
              key={state.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`chakra-glow rounded-lg p-6 bg-gradient-to-br ${state.color} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{state.icon}</span>
                <h3 className="text-xl font-bold text-foreground">
                  {state.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                {state.description}
              </p>
              <div className="space-y-2">
                {state.examples.map((example, idx) => (
                  <p key={idx} className="text-sm text-foreground/70">
                    • {example}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testing Methods Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          脈輪測試方法
        </h2>
        <div className="space-y-4">
          {testingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="chakra-glow rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleSection(method.title)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/70 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-foreground text-left">
                  {method.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                    expandedSection === method.title ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === method.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-border"
                >
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-foreground/70">
                        ✓ {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="chakra-glow rounded-lg p-8 bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            準備好開始你的脈輪之旅了嗎？
          </h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            現在就透過我們的脈輪能量檢測，了解你目前的能量狀態。每個人的能量地圖都是獨特的，透過檢測，你將發現自己的能量優勢與需要調整的地方。
          </p>
          <a
            href="/"
            className="inline-block bg-[#D4AF37] hover:bg-[#C9A227] text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            開始脈輪檢測
          </a>
        </div>
      </motion.section>
    </div>
  );
}
