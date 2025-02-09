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
});