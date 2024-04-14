document.querySelector('.hambuger').addEventListener('click', function() {
    this.classList.toggle('on');
    var modal = document.querySelector('.modal');
    var navbox = document.querySelector('.navbox');
    
    if (modal.style.opacity === '1' && navbox.classList.contains('on')) {
        modal.style.opacity = '0';
        navbox.classList.remove('on');
        setTimeout(function() {
            modal.style.display = 'none';
        }, 300); // CSS의 transition 시간과 동일한 값으로 설정
    } else {
        modal.style.display = 'block';
        setTimeout(function() {
            modal.style.opacity = '1';
            navbox.classList.add('on');
        }, 10); // setTimeout의 최소값
    }
});
