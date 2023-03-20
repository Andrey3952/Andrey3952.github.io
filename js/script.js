

window.onload = () => {

    let c = function (a) {
        console.log(a)
    }

    c(Object.keys(document.querySelectorAll('.mainPage li')).length);
    c(Object.keys(document.querySelectorAll('.istorichniFotoPage li')).length);

    //------------------------------------------------------------------------------------------------------------------------------


    $('.in').hide();

    //------------------------------------------------------------------------------------------------------------------------------


    // Відкривання меню
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
    });


    //------------------------------------------------------------------------------------------------------------------------------


    // Закривання меню
    $('.list_menuLi').click(function (event) {
        $('.header_burger,.header_menu').removeClass('active');
    });

    //------------------------------------------------------------------------------------------------------------------------------


    const scrollBtn = document.querySelector('.isShowBtn')

    window.onscroll = () => {
        if (window.scrollY > 1000) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShowBtn_hide');
        }
    }
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0)
    }

    //------------------------------------------------------------------------------------------------------------------------------

    let input = document.querySelector('#input');
    input.oninput = function () {
        let valu = this.value.trim();
        let value = valu.toUpperCase();
        let list = document.querySelectorAll('.mainPage li');
        let listIF = document.querySelectorAll('.istorichniFotoPage li');


        if (value != '') {

            listIF.forEach(elem => {

                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide')
                }
                $('h1').click(function (event) {
                    $('#input').val('');
                    elem.classList.remove('hide');
                    $('.in').hide();
                });
            });











            list.forEach(elem => {

                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide')
                }
                $('h1').click(function (event) {
                    $('#input').val('');
                    elem.classList.remove('hide');
                    $('.in').hide();
                });
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide');
            });

            listIF.forEach(elem => {
                elem.classList.remove('hide');
            });
        }
        if ($('.hide').length == Object.keys(list).length) {
            $('.in').show();

        } else {
            $('.in').hide();

        }
    }

    //------------------------------------------------------------------------------------------------------------------------------

    setTimeout(() => {
        // document.footer.classList.add('loaded');
        $('footer').toggleClass('loaded');
    }, 1);





};
