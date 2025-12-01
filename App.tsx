import { useState, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { MessageSection } from './components/MessageSection';
import { SurpriseSection } from './components/SurpriseSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const videoSectionRef = useRef<HTMLElement>(null);

  const handleShowVideo = () => {
    setShowVideo(true);
    setAutoPlay(true);
    
    // 動画セクションまでスムーズにスクロール
    setTimeout(() => {
      videoSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 温かみのあるグラデーション背景 - 複数レイヤー */}
      <div className="fixed inset-0 -z-10">
        {/* メインのグラデーション */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FFD6A5 0%, #FFAB73 25%, #FF9A62 50%, #FF8C52 75%, #FF7F42 100%)',
          }}
        />
        
        {/* 放射状のオーバーレイ - 中央から */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(255, 204, 153, 0.8) 0%, transparent 60%)',
          }}
        />
        
        {/* 浮遊する装飾的な円 */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255, 230, 179, 0.8) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 150, 0.8) 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
            animation: 'float 25s ease-in-out infinite 5s',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-25 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 190, 120, 0.8) 0%, transparent 70%)',
            top: '50%',
            right: '5%',
            animation: 'float 30s ease-in-out infinite 10s',
          }}
        />
      </div>
      
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[120px] landscape:gap-[60px] relative z-0">
        <HeroSection onButtonClick={handleShowVideo} />
        <VideoSection 
          ref={videoSectionRef}
          showVideo={showVideo} 
          autoPlay={autoPlay} 
        />
        <MessageSection />
        <SurpriseSection />
      </div>
      <Footer />
    </div>
  );
}