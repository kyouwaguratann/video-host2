export function Footer() {
  return (
    <footer className="w-full min-h-[200px] bg-[#FFF4E6] flex items-center justify-center px-4 py-8">
      <p 
        className="text-center max-w-2xl"
        style={{
          fontSize: '14px',
          color: '#555555',
          lineHeight: '1.8',
          whiteSpace: 'pre-line'
        }}
      >
        {`企画：すな
動画編集：あず
R078へのメッセージ：あず
写真提供：みんな
作詞作曲：AI、すな`}
      </p>
    </footer>
  );
}