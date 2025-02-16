document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector('.hamburger_menu');
    const menu = document.querySelector('.menu_items');

    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        menu.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
    });

    document.addEventListener("click", function (event) {
        if (!ham.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("active");
            ham.classList.remove("active");
        }
    });

    //スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {   //aタグに＃が存在したら以下実行
        anchor.addEventListener('click', function(e) {  //#のあるaタグをクリックした場合
            e.preventDefault(); //リンク動作を停止
            const targetId = this.getAttribute('href').substring(1);    //#以降のIDを取得
            const targetElement = document.getElementById(targetId);    //切り出したIDの位置を取得（トップから何Pxの位置にいるか
            window.scrollTo({
                top: targetElement.offsetTop,   //取得したIDにスクロール
                behavior: 'smooth'
            });
        });
    });

});