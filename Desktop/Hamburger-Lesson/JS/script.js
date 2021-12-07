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

