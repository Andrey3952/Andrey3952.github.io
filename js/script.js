

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

    function search() {
        let input = document.getElementById("input");
        let filter = input.value.toUpperCase();
        let ul = document.getElementById("list");
        let li = ul.getElementsByTagName("li");
        // let listIF = document.querySelectorAll('.istorichniFotoPage li');
        // console.log(ul);


        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let i = 0; i < li.length; i++) {
            let a = li[i].getElementsByTagName("p")[0];
            if (li[i].getElementsByTagName("p")[0] != null) {


                if (a.innerHTML.toUpperCase().indexOf(filter) == -1) {
                    li[i].classList.add('hide');
                    // li[i].style.display = "";
                } else {
                    // li[i].style.display = "none";
                    li[i].classList.remove('hide');
                }

            }
        }


    }
    document.addEventListener('keyup', search);


    // let input = document.querySelector('#input');
    // input.oninput = function () {
    //     let valu = this.value.trim();
    //     let value = valu.toUpperCase();
    //     let list = document.querySelectorAll('.mainPage li');
    //     let listIF = document.querySelectorAll('.istorichniFotoPage li');


    //     if (value != '') {

    //         listIF.forEach(elem => {

    //             if (elem.innerText.search(value) == -1) {
    //                 elem.classList.add('hide')
    //             }
    //             $('h1').click(function (event) {
    //                 $('#input').val('');
    //                 elem.classList.remove('hide');
    //                 $('.in').hide();
    //             });
    //         });











    //         list.forEach(elem => {
    //             console.log(list);

    //             if (elem.innerText.search(value) == -1) {
    //                 elem.classList.add('hide')
    //             }
    //             $('h1').click(function (event) {
    //                 $('#input').val('');
    //                 elem.classList.remove('hide');
    //                 $('.in').hide();
    //             });
    //         });
    //     } else {
    //         list.forEach(elem => {
    //             elem.classList.remove('hide');
    //         });

    //         listIF.forEach(elem => {
    //             elem.classList.remove('hide');
    //         });
    //     }
    //     if ($('.hide').length == Object.keys(list).length) {
    //         $('.in').show();

    //     } else {
    //         $('.in').hide();

    //     }
    // }

    //------------------------------------------------------------------------------------------------------------------------------

    setTimeout(() => {
        // document.footer.classList.add('loaded');
        $('footer').toggleClass('loaded');
    }, 1);





};
