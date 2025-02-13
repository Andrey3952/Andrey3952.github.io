window.onload = () => {
    $(document).ready(function () {


        // $('.ZAImg.ImgAA').show();

        var walked = 0;
        var clas = ['.AA', '.AB', '.AC',
            '.BA', '.BB', '.BC',
            '.CA', '.CB', '.CC'];
        var crosses = [];
        var zeros = [];
        var game = 0;
        var menu = 0;

        function win() {

            if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".BA") !== -1 && zeros.indexOf(".CA") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".BA") !== -1 && crosses.indexOf(".CA") !== -1) {

                $(".AImgAABACA").show();
                game = 1;
            }

            else if (zeros.indexOf(".AB") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".CB") !== -1 || crosses.indexOf(".AB") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".CB") !== -1) {
                $(".AImgABBBCB").show();
                game = 1;
            }

            else if (zeros.indexOf(".AC") !== -1 && zeros.indexOf(".BC") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".AC") !== -1 && crosses.indexOf(".BC") !== -1 && crosses.indexOf(".CC") !== -1) {
                $(".AImgACBCCC").show();
                game = 1;
            }

            else if (zeros.indexOf(".CA") !== -1 && zeros.indexOf(".CB") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".CA") !== -1 && crosses.indexOf(".CB") !== -1 && crosses.indexOf(".CC") !== -1) {
                $(".AImgCACBCC").show();
                game = 1;
            }

            else if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".AB") !== -1 && zeros.indexOf(".AC") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".AB") !== -1 && crosses.indexOf(".AC") !== -1) {
                $(".AImgAAABAC").show();
                game = 1;
            }

            else if (zeros.indexOf(".BA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".BC") !== -1 || crosses.indexOf(".BA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".BC") !== -1) {
                $(".AImgBABBBC").show();
                game = 1;
            }

            else if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".CC") !== -1) {
                $(".AImgAABBCC").show();
                game = 1;
            }

            else if (zeros.indexOf(".CA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".AC") !== -1 || crosses.indexOf(".CA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".AC") !== -1) {
                $(".AImgCABBAC").show();
                game = 1;
            }
        }


        $('.1').click(function (event) {
            $('.none').removeClass('none');
            $('.menu').addClass('none');
            menu = 1;
        })

        $('.2').click(function (event) {
            $('.none').removeClass('none');
            $('.menu').addClass('none');
            menu = 2;
        })

        $('.3').click(function (event) {
            $('.none').removeClass('none');
            $('.menu').addClass('none');
            menu = 3;
        })

        $('.4').click(function (event) {
            $('.none').removeClass('none');
            $('.menu').addClass('none');
            menu = 4;
        })

        $(clas.join()).click(function (event) {







            var thisClassString = clas[clas.indexOf("." + $(this).attr("class").substr(12, 14))];
            var thisClassInt = clas.indexOf("." + $(this).attr("class").substr(12, 14));


            if (game === 0) {
                if (thisClassInt !== -1) {
                    walked++


                    // if (menu == 3){
                    //     crosses.push(thisClassString)


                    //     for (let i = 0; i < crosses.length; i++) {



                    //         if (thisClassString === crosses[i]) {
                    //             var a = '.CAImg.Img' + crosses[i].substr(1, 2);

                    //             $(a).addClass('Crosses');
                    //             $(a).show();

                    //             clas.splice(thisClassInt, 1);

                    //         }


                    //     }



                    //     var thisClassIntR = Math.floor(Math.random() * clas.length)
                    //     var thisClassStringR = clas[thisClassIntR]

                    //     zeros.push(thisClassStringR);


                    //     console.log(thisClassStringR);
                    //     for (let i = 0; i < zeros.length; i++) {

                    //         if (thisClassStringR === zeros[i]) {
                    //             var a = '.ZAImg.Img' + zeros[i].substr(1, 2);
                    //             $(a).addClass('Zero');
                    //             $(a).show();



                    //             clas.splice(thisClassIntR, 1);

                    //         }
                    //     }
                    // }




                    if (menu == 3 || menu == 4) {
                        console.log(clas);
                        $("#blocker").show();
                        // Додаємо елемент до масиву crosses, якщо його ще немає
                        if (!crosses.includes(thisClassString)) {
                            crosses.push(thisClassString);
                        }

                        var a = '.CAImg.Img' + thisClassString.substr(1, 2);
                        $(a).addClass('Crosses').show();

                        // Видаляємо елемент з масиву clas після використання
                        clas.splice(thisClassInt, 1);




                        if (crosses.length == 4 && menu == 4) {
                            $('.op').removeClass('op');

                            clas.push(crosses[0]);
                            var b = '.CAImg.Img' + crosses[0].substr(1, 2);
                            $(b).hide();
                            $(b).removeClass('thisClassString');
                            crosses.shift();

                            var a = '.ZAImg.Img' + zeros[0].substr(1, 2) + '.Zero';
                            $(a).addClass('op');
                        }



                        win();

                        if (clas.length > 0 && game === 0) {


                            var thisClassIntR = Math.floor(Math.random() * clas.length);
                            var thisClassStringR = clas[thisClassIntR];

                            // Додаємо елемент до масиву zeros, якщо його ще немає
                            if (!zeros.includes(thisClassStringR)) {
                                zeros.push(thisClassStringR);
                            }
                            setTimeout(function () {
                                $("#blocker").hide();
                                //$("body").css("pointer-events", "auto");
                                // Генеруємо випадковий елемент з масиву clas





                                var b = '.ZAImg.Img' + thisClassStringR.substr(1, 2);
                                $(b).addClass('Zero').show();

                                // Видаляємо елемент з масиву clas після використання
                                clas.splice(thisClassIntR, 1);

                                console.log(thisClassStringR);


                           


                            if (zeros.length == 4 && menu == 4) {
                                $('.op').removeClass('op');
                                clas.push(zeros[0]);
                                var b = '.ZAImg.Img' + zeros[0].substr(1, 2);



                                $(b).hide();

                                $(b).removeClass('thisClassString')

                                zeros.shift();
                            }

                            if (crosses.length == 3 && menu == 4) {
                                var a = '.CAImg.Img' + crosses[0].substr(1, 2) + '.Crosses';

                                $(a).addClass('op');

                            }
                        }, 600); // 1000 мілісекунд = 1 секунди
                        setTimeout(function () {
                            win();
                        }, 700);

                        }
                    }

























if(menu == 1 || menu == 2){
                    if (walked % 2 !== 0) {

                        crosses.push(thisClassString)


                        for (let i = 0; i < crosses.length; i++) {



                            if (thisClassString === crosses[i]) {
                                var a = '.CAImg.Img' + crosses[i].substr(1, 2);

                                $(a).addClass('Crosses');
                                $(a).show();

                                clas.splice(thisClassInt, 1);


                            }


                        }

                        if (crosses.length == 4 && menu == 2) {
                            $('.op').removeClass('op');

                            clas.push(crosses[0]);
                            var b = '.CAImg.Img' + crosses[0].substr(1, 2);
                            $(b).hide();
                            $(b).removeClass('thisClassString');
                            crosses.shift();

                            var a = '.ZAImg.Img' + zeros[0].substr(1, 2) + '.Zero';
                            $(a).addClass('op');
                        }









                        win();

                    } else  {


                        zeros.push(thisClassString);



                        for (let i = 0; i < zeros.length; i++) {

                            if (thisClassString === zeros[i]) {
                                var a = '.ZAImg.Img' + zeros[i].substr(1, 2);
                                $(a).addClass('Zero');
                                $(a).show();



                                clas.splice(thisClassInt, 1);


                            }
                        }

                        if (menu == 2) {
                            if (zeros.length == 4) {
                                $('.op').removeClass('op');
                                clas.push(zeros[0]);
                                var b = '.ZAImg.Img' + zeros[0].substr(1, 2);



                                $(b).hide();

                                $(b).removeClass('thisClassString')

                                zeros.shift();
                            }

                            if (crosses.length == 3) {
                                var a = '.CAImg.Img' + crosses[0].substr(1, 2) + '.Crosses';

                                $(a).addClass('op');

                            }
                        }
                        win();
                    }
                }

                    



                }
            }




        });

        //if (game !== 0 || clas.length === 0){
        $('*').dblclick(function (event) {
            //location.reload();

            for (let i = 0; i < crosses.length; i++) {
                clas.push(crosses[i]);
                

                var a = '.CAImg.Img' + crosses[i].substr(1, 2);

                $(a).hide();

                crosses.splice(i,1);

            }

             for (let i = 0; i < zeros.length; i++) {
                clas.push(zeros[i]);
                

                var a = '.ZAImg.Img' + zeros[i].substr(1, 2);

                $(a).hide();

                zeros.splice(i,1);

            }

            walked = 0;
            game = 0;

             $(".AImgAABACA").hide();
             $(".AImgABBBCB").hide();
             $(".AImgACBCCC").hide();
             $(".AImgCACBCC").hide();
             $(".AImgBABBBC").hide();
             $(".AImgAAABAC").hide();
             $(".AImgAABBCC").hide();
             $(".AImgCABBAC").hide();

             $("#blocker").hide();




        });
        //}


    }
    )
        ;
}

















