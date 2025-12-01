import { Confetti } from './Confetti';

interface HeroSectionProps {
  onButtonClick: () => void;
}

export function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen landscape:min-h-[600px] flex flex-col items-center justify-center gap-6 landscape:gap-4 pt-[160px] landscape:pt-20 px-4 overflow-hidden">
      <Confetti position="top" />
      
      {/* タイトル - フェードイン＋スライドアップアニメーション */}
      <h1 
        className="text-center text-white animate-fade-in-up"
        style={{
          fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: 'clamp(36px, 8vw, 64px)',
          fontWeight: 'bold',
          textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          lineHeight: '1.2',
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
        }}
      >
        津田沼祭！お疲れ様！
      </h1>
      
      {/* サブテキスト - 遅延フェードイン */}
      <p 
        className="text-center text-white"
        style={{
          fontSize: 'clamp(18px, 3.5vw, 24px)',
          fontWeight: 'normal',
          lineHeight: '1.5',
          animation: 'fadeInUp 1s ease-out 0.3s forwards',
          opacity: 0,
          whiteSpace: 'pre-line',
        }}
      >
        {`このページはR078の\nみんなが主役です☺︎`}
      </p>
      
      {/* ボタン - 遅延フェードイン＋ホバー時のパルスエフェクト */}
      <button
        onClick={onButtonClick}
        className="mt-8 landscape:mt-4 px-8 py-4 landscape:py-3 rounded-2xl text-white transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
        style={{
          fontSize: 'clamp(16px, 3vw, 20px)',
          fontWeight: '500',
          background: 'linear-gradient(135deg, #FF9966 0%, #FF7F50 100%)',
          boxShadow: '0 4px 16px rgba(255, 127, 80, 0.4), 0 8px 32px rgba(255, 153, 102, 0.2)',
          animation: 'fadeInUp 1s ease-out 0.6s forwards, pulse 2s ease-in-out 1.6s infinite',
          opacity: 0,
        }}
      >
        {/* ボタンのシャインエフェクト */}
        <span 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            animation: 'shine 3s ease-in-out infinite',
          }}
        />
        <span className="relative z-10">動画を見る</span>
      </button>
      
      {/* 装飾的な浮遊パーティクル */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white/20"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '10%',
              animation: `floatUp ${5 + i * 2}s ease-in-out ${i * 0.5}s infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}