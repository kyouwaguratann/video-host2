import { useState, useRef, useEffect } from 'react';
import { Confetti } from './Confetti';
import { Upload, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SurpriseSection() {
  const [images, setImages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // スクロールで表示されたらアニメーションを開始
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[360px] landscape:min-h-[300px] flex flex-col items-center justify-center gap-4 landscape:gap-3 px-4 overflow-hidden pb-12 landscape:pb-8"
    >
      <Confetti position="bottom" />
      
      {/* タイトル - フェードイン */}
      <h2 
        className="text-center text-white px-4"
        style={{
          fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: 'clamp(28px, 6vw, 40px)',
          lineHeight: '1.4',
          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        これからもよろしくね！
      </h2>
      
      {/* サブテキスト - 遅延フェードイン */}
      <p 
        className="text-center px-4"
        style={{
          fontSize: 'clamp(16px, 3.5vw, 20px)',
          color: '#FFF4E6',
          lineHeight: '1.6',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
        }}
      >
        みんなで思い出の写真を共有しよう！
      </p>

      {/* 画像アップロードエリア */}
      <div 
        className="mt-8 w-full max-w-4xl px-2"
        style={{
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className="mx-auto flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-xl text-white hover:bg-white/30 transition-all hover:scale-105 active:scale-95"
          style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}
        >
          <Upload className="w-5 h-5" />
          思い出の写真を追加
        </button>

        {/* 画像グリッド - スタッガードアニメーション */}
        {images.length > 0 && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative group aspect-square rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/60 transition-all hover:scale-105"
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`思い出 ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}