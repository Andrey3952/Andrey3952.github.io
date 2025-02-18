window.onload = () => {
    $(document).ready(function () {


        // $('.ZAImg.ImgAA').show();

        var walked = 0;
        var clas = ['.AA', '.AB', '.AC',
            '.BA', '.BB', '.BC',
            '.CA', '.CB', '.CC'];
        var crosses = [];
        var zeros = [];
        var ky = ['.AA', '.AC', '.CA', '.CC']
        var game = 0;
        var menu = 0;

        function win() {

            if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".BA") !== -1 && zeros.indexOf(".CA") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".BA") !== -1 && crosses.indexOf(".CA") !== -1) {
                return 1;
            }

            else if (zeros.indexOf(".AB") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".CB") !== -1 || crosses.indexOf(".AB") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".CB") !== -1) {
                return 2;
            }

            else if (zeros.indexOf(".AC") !== -1 && zeros.indexOf(".BC") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".AC") !== -1 && crosses.indexOf(".BC") !== -1 && crosses.indexOf(".CC") !== -1) {

                return 3;
            }

            else if (zeros.indexOf(".CA") !== -1 && zeros.indexOf(".CB") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".CA") !== -1 && crosses.indexOf(".CB") !== -1 && crosses.indexOf(".CC") !== -1) {

                return 4;
            }

            else if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".AB") !== -1 && zeros.indexOf(".AC") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".AB") !== -1 && crosses.indexOf(".AC") !== -1) {

                return 5;
            }

            else if (zeros.indexOf(".BA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".BC") !== -1 || crosses.indexOf(".BA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".BC") !== -1) {

                return 6;
            }

            else if (zeros.indexOf(".AA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".CC") !== -1) {

                return 7;
            }

            else if (zeros.indexOf(".CA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".AC") !== -1 || crosses.indexOf(".CA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".AC") !== -1) {

                return 8;
            }

            else {
                return 0;
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


            if (win() === 0) {
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
                        // console.log(clas);
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

                        if (clas.length > 0 && win() === 0) {


                            var thisClassIntR = Math.floor(Math.random() * clas.length);
                            var thisClassStringR = clas[thisClassIntR];





                            var thisKyIntR = Math.floor(Math.random() * ky.length);
                            var thisKyStringR = ky[thisKyIntR];


                            for (i = 0; i < ky.length; i++) {
                                if (clas.indexOf(ky[i]) !== -1) {
                                    thisClassStringR = ky[i];
                                    thisClassIntR = clas.indexOf(ky[i]);

                                    console.log(thisClassStringR);

                                }


                            }
                            // 
                            // console.log(clas[thisClassIntR]);

                            if (clas.indexOf(".BB") !== -1) {
                                thisClassStringR = ".BB";
                                thisClassIntR = clas.indexOf(".BB");

                            }



                            // if (clas.length === 6 && (clas.indexOf(".BA") !== -1 || clas.indexOf(".BC") !== -1)) {

                            //     a = Math.floor(Math.random() * 2)


                            //     a = 2;
                            //     console.log((a === 1 && clas.indexOf(".BA") !== -1) === false);
                            //     if (clas.indexOf(".BA") !== -1) {
                            //         if (a === 1) {
                            //             thisClassStringR = ".BA";
                            //             thisClassIntR = clas.indexOf(".BA");

                            //         }
                            //     }

                            //     else {
                            //         thisClassStringR = ".BC";
                            //         thisClassIntR = clas.indexOf(".BC");
                            //         console.log(a);
                            //     }

                            // }

                            if (clas.length === 6) {
                                if ((crosses.indexOf('.AA') !== -1 && crosses.indexOf('.CC') !== -1) || (crosses.indexOf('.AC') !== -1 && crosses.indexOf('.CA') !== -1)) {
                                    a = Math.floor(Math.random() * 2)
                                    console.log(a)

                                    if (a === 0) {
                                        thisClassStringR = ".BA";
                                        thisClassIntR = clas.indexOf(".BA");

                                    }
                                    else {
                                        thisClassStringR = ".BC";
                                        thisClassIntR = clas.indexOf(".BC");
                                    }

                                }
                            }







                            for (i = 0; i < clas.length; i++) {
                                crosses.push(clas[i]);
                                if (win() !== 0 && menu == 3) {
                                    thisClassStringR = clas[i];
                                    thisClassIntR = i;
                                    crosses.pop();


                                    break;
                                }
                                crosses.pop();


                            }



                            for (i = 0; i < clas.length; i++) {





                                zeros.push(clas[i]);
                                if (win() !== 0 && menu == 3) {
                                    thisClassStringR = clas[i];
                                    thisClassIntR = i;


                                    zeros.pop();
                                    break;
                                }

                                zeros.pop();

                            }


                            console.log("--------");
















                            // Додаємо елемент до масиву zeros, якщо його ще немає
                            // if (!zeros.includes(thisClassStringR)) {
                            //     zeros.push(thisClassStringR);
                            // }
                            setTimeout(function () {



                                $("#blocker").hide();
                                //$("body").css("pointer-events", "auto");
                                // Генеруємо випадковий елемент з масиву clas






                                var b = '.ZAImg.Img' + thisClassStringR.substr(1, 2);
                                $(b).addClass('Zero').show();

                                // Видаляємо елемент з масиву clas після використання




                                zeros.push(clas[thisClassIntR]);
                                clas.splice(thisClassIntR, 1);







                                // clas.indexOf(".BB") 




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
                                // console.log(zeros);
                            }, 600); // 1000 мілісекунд = 1 секунди
                            setTimeout(function () {
                                win();
                            }, 700);

                        }
                    }


























                    if (walked % 2 !== 0 && menu == 1 || menu == 2) {

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

                    } else if (menu == 1 || menu == 2) {


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

            if (menu == 3 || menu == 4) {


                setTimeout(function () {



                    switch (win()) {
                        case 1:
                            $(".AImgAABACA").show();
                            break;
                        case 2:
                            $(".AImgABBBCB").show();
                            break;
                        case 3:
                            $(".AImgACBCCC").show();
                            break;
                        case 4:
                            $(".AImgCACBCC").show();
                            break;
                        case 5:
                            $(".AImgAAABAC").show();
                            break;
                        case 6:
                            $(".AImgBABBBC").show();
                            break;
                        case 7:
                            $(".AImgAABBCC").show();
                            break;
                        case 8:
                            $(".AImgCABBAC").show();
                            break;
                    }

                }, 1000);

            }

            else {
                switch (win()) {
                    case 1:
                        $(".AImgAABACA").show();
                        break;
                    case 2:
                        $(".AImgABBBCB").show();
                        break;
                    case 3:
                        $(".AImgACBCCC").show();
                        break;
                    case 4:
                        $(".AImgCACBCC").show();
                        break;
                    case 5:
                        $(".AImgAAABAC").show();
                        break;
                    case 6:
                        $(".AImgBABBBC").show();
                        break;
                    case 7:
                        $(".AImgAABBCC").show();
                        break;
                    case 8:
                        $(".AImgCABBAC").show();
                        break;
                }
            }






        });

        //if (game !== 0 || clas.length === 0){
        $('*').dblclick(function (event) {
            //break;
            // location.reload();
            walked = 0;
            clas = ['.AA', '.AB', '.AC',
                '.BA', '.BB', '.BC',
                '.CA', '.CB', '.CC'];
            crosses = [];
            zeros = [];

            $("#blocker").hide();

            for (i = 0; i < clas.length; i++) {
                // $('.op').removeClass('op');

                // clas.push(crosses[0]);
                // var b = '.CAImg.Img' + crosses[0].substr(1, 2);
                // $(b).hide();
                // $(b).removeClass('thisClassString');
                // crosses.shift();

                // var a = '.ZAImg.Img' + zeros[0].substr(1, 2) + '.Zero';
                // $(a).addClass('op');

                var a = '.ZAImg.Img' + clas[i].substr(1, 2) + '.Zero';
                $(a).hide();

                var b = '.CAImg.Img' + clas[i].substr(1, 2) + '.Crosses';
                $(b).hide();



                $(".AImgAABACA").hide();

                $(".AImgABBBCB").hide();

                $(".AImgACBCCC").hide();

                $(".AImgCACBCC").hide();

                $(".AImgAAABAC").hide();

                $(".AImgBABBBC").hide();

                $(".AImgAABBCC").hide();

                $(".AImgCABBAC").hide();
            }



        });
        //}



    }
    )
        ;
}

















