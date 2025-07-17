window.onload = () => {

    let c = function(a) {
        console.log(a)
    }

    c(Object.keys(document.querySelectorAll('.mainPage li')).length);
    c(Object.keys(document.querySelectorAll('.istorichniFotoPage li')).length);

    //------------------------------------------------------------------------------------------------------------------------------


    $('.in').hide();

    //------------------------------------------------------------------------------------------------------------------------------


    // Відкривання меню
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
    });


    //------------------------------------------------------------------------------------------------------------------------------


    // Закривання меню
    $('.list_menuLi').click(function(event) {
        $('.header_burger,.header_menu').removeClass('active');
    });

    //------------------------------------------------------------------------------------------------------------------------------


    // 
    $('#cross').click(function(event) {
        document.querySelector('input').value = '';
    });

    //------------------------------------------------------------------------------------------------------------------------------

    $('#arrow').click(function(event) {
        $('.header_burger,.header_menu').removeClass('active');
    });



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
		let l;


        // let listIF = document.querySelectorAll('.istorichniFotoPage li');
        // console.log(ul);
		
		


        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let i = 0; i < li.length; i++) {
            let a = li[i].getElementsByTagName("p")[0];
            if (li[i].getElementsByTagName("p")[0] != null) {


                if (a.innerHTML.toUpperCase().indexOf(filter) == -1) {
                   li[i].classList.add('hide');
				   l = document.getElementsByClassName("hide");
				   console.log(l.length);
				   if(l.length == 37){
					   $('.in').show();
				   }else{
					       $('.in').hide();
				   }
					   

					
                    // li[i].style.display = "";
                } else {
                    // li[i].style.display = "none";
                    li[i].classList.remove('hide');
					
                }
                $('#cross').click(function(event) {
                    li[i].classList.remove('hide');
					
                });

            }
        }


    }
    document.addEventListener('keyup', search);


   
    setTimeout(() => {
        // document.footer.classList.add('loaded');
        $('footer').toggleClass('loaded');
    }, 1);





};