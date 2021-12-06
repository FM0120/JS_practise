// オプションを指定してSkipprの実行1
// $(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
//   transition : 'fade',
//   // 変化にかかる時間（ミリ秒）
//   speed : 1000,
//   // easingの種類
//   easing : 'easeOutQuart',
//   // ナビゲーションの形（"block" or "bubble"）
//   navType : 'block',
//   // 子要素の種類（"div" or "img"）
//   childrenElementType : 'div',
//   // ナビゲーション矢印の表示（trueで表示）
//   arrows : true,
//   // スライドショーの自動再生（falseで自動再生なし）
//   autoPlay : false,
//   // 自動再生時のスライド切替間隔（ミリ秒）
//   autoPlayDuration : 5000,
//   // キーボードの矢印キーによるスライド送りの設定（trueで有効）
//   keyboardOnAlways : true,
//   // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
//   hidePrevious : false
// })

// 【トップに戻るを作ってみよう】
// HTMLとCSSで枠組みを作成する(index.html,style.css 2)

// jQueryで「マウスクリック」イベントを設定する
// $(function(){
//   $('#back a').on('click',function(event){
//     // イベント発生時に行われる処理
//     $('body','html').animate({
//        // #back内のaタグがクリックされたときの処理
//       //  $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定されます。
//       //  ここでは、id="back"内のaタグがクリックされたときに、処理が行われるように記述しています。
//       scrollTop:0
//     },800)
//     event.preventDefault
//   })
// })

// .on('click',function(event)
// クリック後に複数のイベントが行われるようにしたいので、第1引数にイベント名のclick、第2引数に関数を指定しています。

// function(event)のeventはイベントオブジェクトというもので、今回はclickイベントが発生した際の様々な情報をeventという名前の引数に渡されます。
// eventという名でなくても構いません。function(e)と、されることも多いです。

// この引数に渡されるイベントオブジェクトは省略が可能です。

// スクロールイベント」を設定する
// $('body, html').animate({
//   scrollTop:0
// }, 800);
// event.preventDefault();
// });
// animate() は、アニメーション効果を設定するjQueryの関数です。
// HTML要素のCSSプロパティを変化させることで動きを設定します。


// $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);

// scrollTop は、スクロール位置を取得できるメソッドです。
// 今回は「scrollTop:0」を指定しているので、「最上部に移動する」の意味になります。
// また、アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味になります。
// アニメーションの動作時間は、ミリ秒で指定する以外にも、「slow」、「normal」、「fast」で指定することも可能です。

// ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定されています。
// これは、「body要素またはhtml要素」の意味になります。
// 2つの要素を指定するのは、ユーザの利用環境によって指定対象の要素が変化するためです。

// event.preventDefault(); は、aタグの機能を無効にするメソッドです。
// aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化しています。

