import { useState, useRef, useEffect, forwardRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoSectionProps {
  showVideo: boolean;
  autoPlay: boolean;
}

// ========================================
// 動画の設定
// ========================================
// 以下のいずれかの方法で動画を指定できます：

// 方法1: YouTube動画を埋め込む場合
// YouTubeのURLから動画IDを取得して使用
// 例: https://www.youtube.com/watch?v=VIDEO_ID または https://youtu.be/VIDEO_ID
const YOUTUBE_VIDEO_ID = "15hVICU8uXw"; // URLから動画IDを抽出
const USE_YOUTUBE = true; // YouTubeを使用する場合はtrue

// 方法2: 直接動画ファイル（MP4など）を使用する場合
// 外部URL（直接MP4リンク）またはローカルファイル（/public/video/ファイル名.mp4）
const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
// const VIDEO_URL = "/video/surprise.mp4"; // ローカルファイルを使う場合

// サムネイル画像の設定
// YouTubeのサムネイルまたは任意の画像URLを指定
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
// const THUMBNAIL_URL = "https://images.unsplash.com/photo-1651399973942-1721a0de0851?w=1280"; // カスタムサムネイルを使う場合

// ========================================

export const VideoSection = forwardRef<HTMLElement, VideoSectionProps>(
  function VideoSection({ showVideo, autoPlay }, ref) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // 自動再生の処理
    useEffect(() => {
      if (showVideo && autoPlay) {
        // YouTube動画の場合、サムネイルを自動的に非表示にする
        if (USE_YOUTUBE) {
          const timer = setTimeout(() => {
            setShowThumbnail(false);
          }, 800);
          return () => clearTimeout(timer);
        }
        
        // MP4動画の場合のみ自動再生
        if (!USE_YOUTUBE) {
          const timer = setTimeout(() => {
            if (videoRef.current && videoLoaded) {
              videoRef.current.play().then(() => {
                setIsPlaying(true);
                setShowThumbnail(false);
              }).catch(err => {
                console.log('自動再生がブロックされました:', err);
              });
            }
          }, 500);
          return () => clearTimeout(timer);
        }
      }
    }, [showVideo, autoPlay, videoLoaded]);

    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
          setShowThumbnail(false);
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handleVideoEnded = () => {
      setIsPlaying(false);
    };

    const handleVideoLoadedData = () => {
      setVideoLoaded(true);
    };

    const handleVideoError = (e: any) => {
      console.error('動画の読み込みエラー:', e);
      setVideoLoaded(false);
    };

    const handleThumbnailClick = () => {
      setShowThumbnail(false);
      if (!USE_YOUTUBE && videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };

    // YouTube埋め込みURL（自動再生付き）
    const youtubeEmbedUrl = autoPlay 
      ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&mute=0`
      : `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0`;

    return (
      <section ref={ref} className="w-full min-h-[820px] landscape:min-h-[500px] flex flex-col items-center justify-center gap-5 landscape:gap-3 px-4 py-8 landscape:py-4">
        <div 
          className="relative w-full max-w-[1280px] aspect-video landscape:max-h-[70vh] bg-black rounded-[20px] border-2 border-white flex items-center justify-center overflow-hidden"
          style={{
            opacity: showVideo ? 1 : 0.3,
            transition: 'opacity 0.5s ease',
          }}
        >
          {showVideo ? (
            <>
              {USE_YOUTUBE ? (
                // YouTube動画の埋め込み
                <div className="relative w-full h-full">
                  {showThumbnail && (
                    <div 
                      className="absolute inset-0 z-10 cursor-pointer group"
                      onClick={handleThumbnailClick}
                    >
                      <ImageWithFallback
                        src={THUMBNAIL_URL}
                        alt="動画サムネイル"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={youtubeEmbedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                // 通常のMP4動画
                <>
                  {showThumbnail && (
                    <div 
                      className="absolute inset-0 z-10 cursor-pointer group"
                      onClick={handleThumbnailClick}
                    >
                      <ImageWithFallback
                        src={THUMBNAIL_URL}
                        alt="動画サムネイル"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}
                  <video
                    ref={videoRef}
                    src={VIDEO_URL}
                    className="w-full h-full object-contain"
                    onEnded={handleVideoEnded}
                    onClick={handlePlayPause}
                    onLoadedData={handleVideoLoadedData}
                    onError={handleVideoError}
                    controls={false}
                    playsInline
                    autoPlay={autoPlay}
                    muted={false}
                  />
                  {!isPlaying && videoLoaded && !showThumbnail && (
                    <button
                      onClick={handlePlayPause}
                      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </button>
                  )}
                  {!videoLoaded && !showThumbnail && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-white" style={{ fontSize: '18px' }}>
                        動画を読み込み中...
                      </p>
                      <p className="text-white/60 text-sm max-w-md text-center px-4">
                        動画が表示されない場合は、VIDEO_URLを確認してください
                      </p>
                    </div>
                  )}
                  {isPlaying && (
                    <button
                      onClick={handlePlayPause}
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all"
                    >
                      <Pause className="w-6 h-6 text-white" />
                    </button>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="relative w-full h-full">
              <ImageWithFallback
                src={THUMBNAIL_URL}
                alt="動画サムネイル"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <p className="text-white" style={{ fontSize: '20px' }}>
                  ここに動画が入ります
                </p>
              </div>
            </div>
          )}
        </div>
        
        <p 
          className="text-white text-center"
          style={{
            fontSize: '22px',
            opacity: showVideo ? 1 : 0.5,
            transition: 'opacity 0.5s ease',
          }}
        >
          再生してみてね！
        </p>
      </section>
    );
  }
);
VideoSection.displayName = 'VideoSection';