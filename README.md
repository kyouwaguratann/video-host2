# 動画の設定方法

`/components/VideoSection.tsx` ファイルで動画を設定できます。

## 方法1: YouTube動画を使用（推奨・最も簡単）

1. YouTube動画のURLから動画IDを取得
   - 例: `https://www.youtube.com/watch?v=wwBYUdSgG9s` → 動画IDは `wwBYUdSgG9s`
   - 例: `https://youtu.be/dQw4w9WgXcQ` → 動画IDは `dQw4w9WgXcQ`

2. `/components/VideoSection.tsx` を開いて以下を編集：

```typescript
const YOUTUBE_VIDEO_ID = "15hVICU8uXw"; // 動画IDを入力
const USE_YOUTUBE = true; // trueのまま
```

3. サムネイル画像も自動的にYouTubeから取得されます

**「動画を見る」ボタンを押すと自動的に再生が始まります！**

**これが最も簡単で確実な方法です！**

---

## 方法2: 直接MP4動画ファイルを使用

### オプションA: 外部URLの動画を使用

直接アクセスできるMP4ファイルのURLを使用：

```typescript
const USE_YOUTUBE = false; // falseに変更
const VIDEO_URL = "https://example.com/video.mp4";
const THUMBNAIL_URL = "https://example.com/thumbnail.jpg"; // サムネイル画像も設定
```

**テスト用サンプル動画URL:**
```typescript
const VIDEO_URL = "https://youtu.be/15hVICU8uXw";
```

### オプションB: ローカル動画ファイルを使用

1. 動画ファイル（MP4形式推奨）を用意
2. `/public/video/` フォルダに配置（例: `surprise.mp4`）
3. サムネイル画像も用意して配置（例: `thumbnail.jpg`）
4. コードで指定：

```typescript
const USE_YOUTUBE = false; // falseに変更
const VIDEO_URL = "/video/surprise.mp4";
const THUMBNAIL_URL = "/video/thumbnail.jpg"; // サムネイル画像
```

---

## サムネイル画像について

- **YouTube動画の場合**: 自動的にYouTubeのサムネイルが表示されます
- **MP4動画の場合**: `THUMBNAIL_URL` でサムネイル画像を指定してください
- サムネイルは動画を見る前も表示され、クリックすると動画が再生されます
- ボタンを押すと自動的に動画が再生されます

---

## サポートされている形式

### YouTube:
- YouTube動画のURL（通常の視聴ページ、ライブ配信など）
- 動画IDを抽出して使用
- 自動再生に対応

### 直接動画ファイル:
- **MP4** (.mp4) - 最も互換性が高い（推奨）
- **WebM** (.webm)
- **OGG** (.ogg)

---

## トラブルシューティング

### 動画が再生されない場合：

1. **YouTubeを使用している場合:**
   - `USE_YOUTUBE = true` になっているか確認
   - 動画IDが正しいか確認
   - 動画が「限定公開」や「非公開」でないか確認

2. **MP4ファイルを使用している場合:**
   - `USE_YOUTUBE = false` になっているか確認
   - URLが正しいか確認
   - ファイルが `/public/video/` フォルダに配置されているか確認
   - ブラウザの開発者ツールでエラーを確認

3. **自動再生されない場合:**
   - 一部のブラウザは自動再生をブロックすることがあります
   - サムネイルをクリックすると手動で再生できます

---

## 設定例

### 例1: YouTube動画（自動再生・サムネイル付き）
```typescript
const YOUTUBE_VIDEO_ID = "wwBYUdSgG9s";
const USE_YOUTUBE = true;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
```

### 例2: 外部MP4ファイル
```typescript
const USE_YOUTUBE = false;
const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const THUMBNAIL_URL = "https://images.unsplash.com/photo-1651399973942-1721a0de0851?w=1280";
```

### 例3: ローカルMP4ファイル
```typescript
const USE_YOUTUBE = false;
const VIDEO_URL = "/video/surprise.mp4";
const THUMBNAIL_URL = "/video/thumbnail.jpg";
```