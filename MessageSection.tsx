import { MessageCircle } from 'lucide-react';

export function MessageSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-20 landscape:py-12">
      {/* メッセージ・コメントエリア - 吹き出しグラフィック */}
      <div 
        className="relative max-w-3xl w-full"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
        }}
      >
        <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 landscape:p-6 shadow-2xl">
          {/* コメントアイコン */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-full shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* 吹き出しの三角形（下向き） */}
          <div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderTop: '20px solid rgba(255, 255, 255, 0.95)',
            }}
          />
          
          {/* メッセージコンテンツ */}
          <div className="pt-4 space-y-4">
            <h3 
              className="text-center"
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#FF7F42',
                whiteSpace: 'pre-line',
              }}
            >
            {`R068ゼミ長　あず\nからのメッセージ`}
            </h3>
            
            <div className="space-y-3">
              {/* メッセージ例1 */}
              <div className="bg-orange-50 rounded-2xl p-4 border-l-4 border-orange-400">
                <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: '#333', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
{`3年生のみんなへ。
西田研究室に入って3ヶ月。
初めて全員で挑んだ「津田沼2025」はどうでしたか？
楽しいけど、苦しくて、とにかく必死で、あっという間だったよね。

準備期間中、そして当日の2日間、本当にいろんなことがあったけれど、無事に全員で完走できたことが何より嬉しかったです。
何もかもが初めてで、迷うこともたくさんあったよね。

意見がまとまらなくてデイリー通りに進まなかったあの日、納期に追われてアセアセしていたあの日、先生のFBの前に心臓がバクバクしていたあの日。
たくさ悩んだWBS、何度直しても終わらない成果物…。

先輩からのFBも、直しても直してもまた指摘されて、「もうどうしよう…」って涙が出そうになった瞬間もあったと思います。
何度も「これでいいのかな」「本当に正しいのかな」って悩んで、たくさん笑って、たくさん泣いて、やっと迎えた津田沼祭。

1日目の設置準備をしていたみんなの目、本当にキラキラしてました。
"いよいよ始まるんだ！"っていうワクワクがカメラ越しにも伝わってきました（笑）

1日目の終わり、みんなの顔が「やり切った！」でいっぱいだったのを覚えています。
深夜にはリーダー緊急会議が開かれて、きっと2日目の朝はみんなの心がドキドキしてたよね（わたしも）。

何もかもが初めてで戸惑ったと思うけれど、1日目の反省を生かしてしっかりオペレーションを組んで、緊張しながら開店を迎えた2日目。
日曜日ということもあって、6号館の入口まで長蛇の列ができていたね。

私もプラカードを持ってふらふらしていたけど、看板を見たお客さんが「あ！ここだ、小籠包！」「美味しそう！」「イラストすごい上手！」って褒めてくれて、自分のことのように嬉しかったです。

先生も言ってたけど、プロジェクトの道中はいつだって苦しいし、衝突もあるし、泣きたくなるし、逃げたくなる。
でも、達成できた時、そんな感情がどこかに吹っ飛ぶ勢いでしんどさが一気に光に変わるよねーーー
その瞬間が気持ちよくなってきたら、それはもうプロジェクト変態の仲間入りです（笑）

1年後、みんなが4年生になって津田沼祭を振り返ったとき、この時間がかけがえのない思い出になっていたら嬉しいな。

私たちに声をかけるの緊張したと思うし、気を遣わせちゃったこともたくさんあったよねーーー
それでも質問してくれたり、頼ってくれたり、ありがとう。
急遽わがまま言ってガチャガチャのスペースを貸してくれたのもありがとう。

まだ完全に距離は縮まりきっていないかもだけど、今日の打ち上げで、少しでも距離が近くなっていたらいいなと思ってこのメッセージを書いています。

仲良くなれた…？（笑）
とにかく、最後まで完走おめでとう！みなさんお疲れさまでした！
あと卒業までの数ヶ月、よろしくね`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}