export function FloatingDumplings() {
  // よりリアルな小籠包のSVGシルエット - パーツを統合して均一に
  const DumplingIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg 
      viewBox="0 0 120 120" 
      className={className}
      style={style}
      fill="currentColor"
    >
      {/* 小籠包の統合された本体 - 単一パスで均一に */}
      <path 
        d="M 60 42 
           L 62 46 Q 63 48, 64 50 Q 66 54, 68 58
           Q 80 60, 88 65 Q 95 70, 95 82 Q 95 92, 85 97 Q 75 100, 60 100 Q 45 100, 35 97 Q 25 92, 25 82 Q 25 70, 32 65 Q 40 60, 52 58
           Q 54 54, 56 50 Q 57 48, 58 46 Z" 
        fillOpacity="1"
      />
      
      {/* プリーツ（ひだ）のライン装飾のみ - fillなし */}
      <g stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.2" fill="none">
        <path d="M 35 62 Q 38 52, 41 62" />
        <path d="M 41 60 Q 44 50, 47 60" />
        <path d="M 47 59 Q 50 48, 53 59" />
        <path d="M 53 58 Q 56 46, 59 58" />
        <path d="M 59 58 Q 62 46, 65 58" />
        <path d="M 65 59 Q 68 48, 71 59" />
        <path d="M 71 60 Q 74 50, 77 60" />
        <path d="M 77 62 Q 80 52, 83 62" />
      </g>
      
      {/* ハイライト - 明るい部分 */}
      <ellipse cx="50" cy="68" rx="8" ry="4" fill="rgba(255, 255, 255, 0.2)" />
      
      {/* 底部のライン */}
      <path 
        d="M 35 85 Q 45 88, 60 88 Q 75 88, 85 85" 
        stroke="rgba(0, 0, 0, 0.1)" 
        strokeWidth="1.2" 
        fill="none"
      />
    </svg>
  );

  // 小籠包の設定（20個に増加）
  const dumplings = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 50 + Math.random() * 60, // 50-110px（サイズアップ）
    duration: 15 + Math.random() * 25, // 15-40秒
    delay: Math.random() * 10, // 0-10秒の遅延
    rotation: Math.random() * 360, // 初期回転
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {dumplings.map((dumpling) => (
        <div
          key={dumpling.id}
          className="absolute text-white/20"
          style={{
            left: dumpling.left,
            top: dumpling.top,
            width: `${dumpling.size}px`,
            height: `${dumpling.size}px`,
            animation: `floatDumpling ${dumpling.duration}s ease-in-out ${dumpling.delay}s infinite, rotateDumpling ${dumpling.duration * 0.7}s linear ${dumpling.delay}s infinite`,
            transform: `rotate(${dumpling.rotation}deg)`,
          }}
        >
          <DumplingIcon 
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 15px rgba(255, 200, 150, 0.15))',
            }}
          />
        </div>
      ))}
    </div>
  );
}