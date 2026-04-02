import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { ChakraResult } from '@/lib/chakraData';

interface ChakraRadarProps {
  results: ChakraResult[];
}

export function ChakraRadar({ results }: ChakraRadarProps) {
  const data = results.map((result) => ({
    name: result.name,
    score: parseFloat(result.score.toFixed(2)),
    fill: result.statusColor,
  }));

  return (
    <div className="w-full h-96 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <PolarGrid stroke="rgba(107, 91, 149, 0.2)" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: '#3D3D3D', fontSize: 12 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fill: '#6B5B95', fontSize: 11 }} />
          <Radar
            name="能量指數"
            dataKey="score"
            stroke="#6B5B95"
            fill="#D4AF8F"
            fillOpacity={0.3}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
