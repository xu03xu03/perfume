/平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 顯示或隱藏回到頂部按鈕
window.onscroll = function() {
    let backToTopButton = document.querySelector('.back-to-top');
    let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    console.log('Current scroll position:', scrollPosition); // 檢查當前滾動距離

    if (scrollPosition > 300) {
        backToTopButton.style.display = "block";
        console.log('Back to top button displayed'); // 確認按鈕是否顯示
    } else {
        backToTopButton.style.display = "none";
        console.log('Back to top button hidden'); // 確認按鈕是否隱藏
    }
};


// 平滑滾動到頂部
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Back to top button clicked'); // 確認按鈕點擊事件被觸發
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



