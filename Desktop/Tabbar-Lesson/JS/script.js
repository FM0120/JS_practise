// https://web-camp.online/lesson/curriculums/222/contents/1551
// 1
// $(function() {
//   $('.menu-trigger').on('click', function(event) {
//     $(this).toggleClass('active');
//     $('#sp-menu').fadeToggle();
//     event.preventDefault();
//   })
// })


// $('.menu-trigger').on('click', function(event) {
//   // .menu-triggerクリック時に行われる処理
// });
// .on('click', function().
// menu-triggerがクリックされたときに、処理が行われるように設定しています。
// .menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されています。

// ハンバーガーメニュー用の設定を行う
// .toggleClass()でclass属性を切り替える
// .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッドです。
// トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。

// トグル処理とは
// プログラミングの分野でも、同じ処理や命令の実行によって二つの状態が交互に反転するような処理のことを
// 「トグル動作」「トグル処理」などと呼ぶ。 例えば「x=1-x」という代入文は、初期状態がx=0の場合、
// 実行するたびにxが0なら1に、1なら0に切り替わる。
// トグルとは、ある同じ操作を繰り返すことで、機能や状態のON/OFFを切り替える仕組みのことである。

// {/* <a class="menu-trigger" href="#"> */}
// aタグのclassにはmenu-triggerが指定され、activeは指定されていません。
// このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除されます。
// このように、.toggleClass()によって、class属性の追加と削除が交互に行われます。

// さらに、.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、activeクラスになったときにアイコンが「×」になるように設定されています。

// このため、以下のように書くことで、アイコンが切り替わります。
// $(this).toggleClass('active');

// .fadeToggle()　でフェードイン・フェードアウトを切り替える
// $('#sp-menu').fadeToggle();
// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。

// ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定しています。
// #sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されています。

// このように設定することで、ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになります。

// タブメニューを作ってみよう
// Queryで「クリックイベント」を設定する

// $('#tab-contents .tab[id != "tab1"]').hide()

// $('#tab-menu a').on('click', function(event) {
//   $("#tab-contents .tab").hide()
//   $("#tab-menu .active").removeClass("active")
//   $(this).addClass("active");
//   $($(this).attr("href")).show()
//   event.preventDefault()
// })

// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができます。
// 特定の属性を持つ要素のみ取得したいときは、以下のように記述します。

// $('要素[属性]')
// 属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述します。

// $('要素[属性 = "値"]')
// 今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたいと思います。
// 属性値が特定の値に等しくない要素だけを取得したいときは、以下のように記述します。

// $('要素[属性 != "値"]')
// また、.hide();は、特定のHTML要素を非表示にするメソッドです。
// このため、$('#tab-contents .tab[id != "tab1"]').hide();と記述することで、
// id="tab-contents"の要素のうち、class="tab"であり、id="tab1"ではない要素が非表示になります。


// 2
// Ajaxを学ぼう
// 「Ajax」とは「Ajax」では、JavaScriptの非同期通信を使って、Webサーバ間とデータのやり取りを行います。
// ちなみにAjaxとは、「Asynchronous JavaScript + XML」の略です（Asynchronous：非同期）。

// Ajax」では、JavaScriptを使って、非同期にサーバー間での通信を行います。
// たとえば、TwitterやFacebookで「いいね」ボタンを押すと、すぐに「いいね」アイコンに変わります。ページを再読み込みしたり、「送信」ボタンは押していません。
// このように「非同期通信」では、サーバにリクエストを送ったときに、サーバからの結果を待たずに画面が書き換えられます。
// この技術を実装しているのが、Ajaxです。

// Ajaxの仕組み
// イベント（ボタンのクリックなど）がクライアント側で発生する。
// 「API」を使って、サーバにリクエストを送信する（非同期通信）。
// リクエストされた情報の処理をサーバ側で行う。
// 処理の結果を、「JSON」形式でクライアントに送信する。
// レスポンスの結果でページが更新される。

// 「Web API」とは
// API（Application Programming Interface）は、サービス提供者がそのサービスを利用するためのインタフェースです。
// 「Web API」は、WebサーバやWebブラウザ用のAPIです。
// Web APIでは、API提供者とAPI利用者のやり取りをWeb上で行うので、プログラミング言語が異なるアプリケーションでも連携できるのが特徴です。
// 異なる言語間でも連携できることから、Web API同士を組み合わせて別の価値を生み出すことも可能です（マッシュアップ）。

// 現在、AmazonやTwitterをはじめ、さまざまなサービス事業者や企業によって公開され、提供されています。
// たとえば、自身のECサイト（ショッピングサイト）にAmazonの商品情報を表示させる場合、Amazonが提供するAPIを利用するだけで、簡単に自身のECサイトと紐づけて公開できます。

// Web APIでは、必要なURLを入力して「リクエスト」を行い、その「レスポンス」として結果を受け取っています。
// Web APIの基本になるのは、この「リクエストとレスポンス」です。

// 「JSON」とは
// JSON（JavaScript Object Notation）は、テキストベースのデータ交換フォーマットです。
// クライアントとサーバ間で「リクエストとレスポンス」を行うには、クライアント（人間）もサーバ（マシン）も互いに理解できるデータ形式にする必要があります。
// その際に利用されているのが、JSONです。

// Ajax（Asynchronous JavaScript + XML）の名前にあるように、Ajaxの非同期通信には、かつてはXMLが使われていました。
// しかし、XML形式はタグ数が多くて煩雑だったため、現在では、JSONを用いるのが一般的になっています。

// Ajaxを実装する
// 検索」ボタンクリック時の処理を書く
$(function(){
  $('#btn').on('click',function(){
  })
})
// 「検索」ボタンは、index.htmlファイルで<button id="btn">で設定しているので、script.jsファイルでは$('#btn')で取得します。
// .on('click', function()の記述は、すでにおなじみですね。「検索」ボタンがクリックされたときの処理を、それ以後の行に記述します。

// 天気情報をリクエストする処理を追記する

// 次に、天気予報の情報をWeb APIにリクエストする処理を追記します。
// なお、コード内の「API_KEY」の部分には、取得したAPIキーを" "で囲って記述してください。
// （API_KEY には、"取得したAPIキー" を記述）

// const API_KEY = "a67edf0d89566c78065ba0350195ef85";
// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?q=a67edf0d89566c78065ba0350195ef85" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     })  })
// })

// $.ajax()は、Ajaxを実装するメソッドです。
// オプション（パラメータ）も設定できます。今回は、urlとdataTypeの2つを設定しています。
// url
// dataType
// url:では、APIにリクエストするURLを指定します。
// 今回のURLは、http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid="取得したAPI" です。
// $('#cityname').val()で#citynameの値を受け取り、URLを結合させています。（val()は、HTMLのvalue属性を取得するメソッド）
// dataTypeでは、レスポンスとして取得したいデータの型を指定します。今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述します。


// 成功時と失敗時の処理を追記する
// （API_KEY には、"取得したAPIキー" を記述）
// const API_KEY = "a67edf0d89566c78065ba0350195ef85";

// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?q=a67edf0d89566c78065ba0350195ef85" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     }).done(function (data){
//       //通信成功
//     }).fail(function (data) {
//       //通信失敗
//     })  })
// })

// .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッドです。
// 「通信に成功する」とは、今回はWeb APIが正常に呼び出せたことを意味しています。
// どちらのメソッドでも(data)を指定していますが、その引数内に取得した結果が入ります。（dataは任意の変数名）

// 通信に成功した場合の処理を追記する

// （API_KEY には、"取得したAPIキー" を記述）
// const API_KEY = "a67edf0d89566c78065ba0350195ef85";

// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "https://api.openweathermap.org/data/2.5/weather?q=a67edf0d89566c78065ba0350195ef85" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     }).done(function (data){
//       //通信成功
//       // 位置
//       $('#place').text(data.name);
//       // 最高気温
//       $('#temp_max').text(data.main.temp_max);
//       // 最低気温
//       $('#temp_min').text(data.main.temp_min);
//       //湿度
//       $('#humidity').text(data.main.humidity);
//       //風速
//       $('#speed').text(data.wind.speed);
//       // 天気
//       $('#weather').text(data.weather[0].main);
//       // 天気アイコン
//       $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
//       $('img').attr("alt",data.weather[0].main);    }).fail(function (data) {
//       //通信失敗
//     })
//   })
// })

// $('#place').text(data.name);以下、
// $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換されます。
// たとえば、最高気温（temp_max）を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名"で取得しています。
// さらに、$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加されます。
// これにより、天気のアイコンを表示することができます。
// なお、アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".pngです。

// 通信に失敗した場合の処理を追記する

（API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "a67edf0d89566c78065ba0350195ef85";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=a67edf0d89566c78065ba0350195ef85" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name)
      // 最高気温
      $('#temp_max').text(data.main.temp_max)
      // 最低気温
      $('#temp_min').text(data.main.temp_min)
      //湿度
      $('#humidity').text(data.main.humidity)
      //風速
      $('#speed').text(data.wind.speed)
      // 天気
      $('#weather').text(data.weather[0].main)
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
      $('img').attr("alt",data.weather[0].main)
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。')      })
  })
})

