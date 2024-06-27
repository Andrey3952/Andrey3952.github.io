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


        $(clas.join()).click(function (event) {

            var thisClassString = clas[clas.indexOf("." + $(this).attr("class").substr(12, 14))];
            var thisClassInt = clas.indexOf("." + $(this).attr("class").substr(12, 14));

            if (game === 0) {
                console.log(game);
                if (thisClassInt !== -1) {
                    walked++

                    if (walked % 2 !== 0) {

                        crosses.push(thisClassString);


                        for (let i = 0; i < crosses.length; i++) {

                            if (thisClassString === crosses[i]) {
                                var a = '.CAImg.Img' + crosses[i].substr(1, 2);

                                $(a).addClass('Crosses');


                                clas.splice(thisClassInt, 1);

                            }
                        }


                    } else {
                        zeros.push(thisClassString);


                        for (let i = 0; i < zeros.length; i++) {

                            if (thisClassString === zeros[i]) {
                                var a = '.ZAImg.Img' + zeros[i].substr(1, 2);
                                $(a).addClass('Zero');


                                clas.splice(thisClassInt, 1);

                            }
                        }
                    }

                }
            }
            else{
                $('*').dblclick(function(event) {
                    location.reload();
                });
            }

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

            else if ( zeros.indexOf(".AA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".CC") !== -1 || crosses.indexOf(".AA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".CC") !== -1) {
                $(".AImgAABBCC").show();
                game = 1;
            }

            else if ( zeros.indexOf(".CA") !== -1 && zeros.indexOf(".BB") !== -1 && zeros.indexOf(".AC") !== -1 || crosses.indexOf(".CA") !== -1 && crosses.indexOf(".BB") !== -1 && crosses.indexOf(".AC") !== -1) {
                $(".AImgCABBAC").show();
                game = 1;
            }



    



        });

    }
    )
        ;
}

















