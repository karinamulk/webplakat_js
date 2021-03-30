$(document).ready(function(){

  $("#color1").hover(function(){
    if ($(".izv_vision").hasClass("vision_color2")) {
      $(".izv_vision").removeClass("vision_color2");
    }
    if ($(".izv_vision").hasClass("vision_color3")) {
      $(".izv_vision").removeClass("vision_color3");
    }
    $(".izv_vision").addClass("vision_color1");
  });
  $("#color2").hover(function(){
    if ($(".izv_vision").hasClass("vision_color1")) {
      $(".izv_vision").removeClass("vision_color1");
    }
    if ($(".izv_vision").hasClass("vision_color3")) {
      $(".izv_vision").removeClass("vision_color3");
    }
    $(".izv_vision").addClass("vision_color2");
  });
  $("#color3").hover(function(){
    if ($(".izv_vision").hasClass("vision_color1")) {
      $(".izv_vision").removeClass("vision_color1");
    }
    if ($(".izv_vision").hasClass("vision_color2")) {
      $(".izv_vision").removeClass("vision_color2");
    }
    $(".izv_vision").addClass("vision_color3");
  });


  let a = 4;
  let blur_1;
  $("#bottom_plus").click(function(){

    if (a <= 8) {
      a += 2;
      blur_1 = "blur("+a+"px)";

      $(".izv_vision").css("filter", blur_1);
    }
    console.log(a);
    console.log(blur_1);
  });
  $("#bottom_minus").click(function(){

    if (a >= 2) {
      a -= 2;
      blur_1 = "blur("+a+"px)";

      $(".izv_vision").css("filter", blur_1);
    }
    console.log(a);
    console.log(blur_1);
  });



  // let time = 0;
  // setInterval(function(){
  //
  //   $("#think_counter_result4").html(time);
  //   time += 1;
  //   if (time > 10) {
  //     $("#think_counter_result3").addClass("blocker");
  //   }
  //   if (time > 100) {
  //     $("#think_counter_result2").addClass("blocker");
  //   }
  //   if (time > 1000) {
  //     $("#think_counter_result1").addClass("blocker");
  //   }
  //   if (time > 9999) {
  //     time = 0;
  //     $("#think_counter_result1").removeClass("blocker");
  //     $("#think_counter_result2").removeClass("blocker");
  //     $("#think_counter_result3").removeClass("blocker");
  //   }
  // }, 100);


  let izv_second_counter2 = 1;
  $(".buttom_handle2").click(function(){
    if (izv_second_counter2 == 4) {
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1000%");
      }, 20);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-900%");
      }, 30);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-800%");
      }, 40);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-700%");
      }, 50);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-600%");
      }, 60);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-500%");
      }, 70);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-400%");
      }, 80);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-300%");
      }, 90);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-200%");
      }, 100);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-100%");
      }, 110);
      izv_second_counter2 = 5;
      console.log(izv_second_counter2);

      if ($("#handle_box2").hasClass("buttom_rotate_0")) {
        $("#handle_box2").removeClass("buttom_rotate_0");
      }
      if ($("#handle_box2").hasClass("buttom_rotate30")) {
        $("#handle_box2").removeClass("buttom_rotate30");
      }
      $("#handle_box2").addClass("buttom_rotate_30");
    }
    if (izv_second_counter2 == 3) {
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1900.001%");
      }, 20);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1800%");
      }, 30);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1700%");
      }, 40);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1600%");
      }, 50);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1400%");
      }, 70);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1300%");
      }, 80);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1200%");
      }, 90);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1100%");
      }, 100);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1000%");
      }, 110);
      izv_second_counter2 += 1;
      console.log(izv_second_counter2);
      if ($("#handle_box2").hasClass("buttom_rotate_30")) {
        $("#handle_box2").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box2").hasClass("buttom_rotate30")) {
        $("#handle_box2").removeClass("buttom_rotate30");
      }
      $("#handle_box2").addClass("buttom_rotate_0");

    }
    if (izv_second_counter2 == 2) {
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1000%");
      }, 20);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1200%");
      }, 30);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1300%");
      }, 40);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1400%");
      }, 50);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1600%");
      }, 70);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1700%");
      }, 80);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1800%");
      }, 90);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1900.001%");
      }, 100);
      izv_second_counter2 += 1;
      console.log(izv_second_counter2);
      if ($("#handle_box2").hasClass("buttom_rotate_30")) {
        $("#handle_box2").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box2").hasClass("buttom_rotate_0")) {
        $("#handle_box2").removeClass("buttom_rotate_0");
      }
      $("#handle_box2").addClass("buttom_rotate30");

    }
    if (izv_second_counter2 == 1) {

      setTimeout(function(){
        $(".izv_second2").css("background-position","-100%");
      }, 20);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-200%");
      }, 30);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-300%");
      }, 40);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-400%");
      }, 50);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-600%");
      }, 70);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-700%");
      }, 80);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-800%");
      },90);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-900%");
      }, 100);
      setTimeout(function(){
        $(".izv_second2").css("background-position","-1000%");
      }, 110);
      izv_second_counter2 += 1;
      console.log(izv_second_counter2);
      if ($("#handle_box2").hasClass("buttom_rotate_30")) {
        $("#handle_box2").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box2").hasClass("buttom_rotate30")) {
        $("#handle_box2").removeClass("buttom_rotate30");
      }
      $("#handle_box2").addClass("buttom_rotate_0");
    }
    if (izv_second_counter2 == 5) {
      izv_second_counter2 = 1;
    }
  });


  let izv_second_counter1 = 1;
  $(".buttom_handle1").click(function(){
    if (izv_second_counter1 == 4) {
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1000%");
      }, 20);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-900%");
      }, 30);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-800%");
      }, 40);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-700%");
      }, 50);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-600%");
      }, 60);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-500%");
      }, 70);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-400%");
      }, 80);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-300%");
      }, 90);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-200%");
      }, 100);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-100%");
      }, 110);
      izv_second_counter1 = 5;
      console.log(izv_second_counter1);

      if ($("#handle_box1").hasClass("buttom_rotate_0")) {
        $("#handle_box1").removeClass("buttom_rotate_0");
      }
      if ($("#handle_box1").hasClass("buttom_rotate30")) {
        $("#handle_box1").removeClass("buttom_rotate30");
      }
      $("#handle_box1").addClass("buttom_rotate_30");
    }
    if (izv_second_counter1 == 3) {
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1900.001%");
      }, 20);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1800%");
      }, 30);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1700%");
      }, 40);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1600%");
      }, 50);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1400%");
      }, 70);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1300%");
      }, 80);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1200%");
      }, 90);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1100%");
      }, 100);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1000%");
      }, 110);
      izv_second_counter1 += 1;
      console.log(izv_second_counter1);
      if ($("#handle_box1").hasClass("buttom_rotate_30")) {
        $("#handle_box1").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box1").hasClass("buttom_rotate30")) {
        $("#handle_box1").removeClass("buttom_rotate30");
      }
      $("#handle_box1").addClass("buttom_rotate_0");

    }
    if (izv_second_counter1 == 2) {
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1000%");
      }, 20);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1200%");
      }, 30);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1300%");
      }, 40);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1400%");
      }, 50);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1600%");
      }, 70);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1700%");
      }, 80);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1800%");
      }, 90);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1900.001%");
      }, 100);
      izv_second_counter1 += 1;
      console.log(izv_second_counter1);
      if ($("#handle_box1").hasClass("buttom_rotate_30")) {
        $("#handle_box1").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box1").hasClass("buttom_rotate_0")) {
        $("#handle_box1").removeClass("buttom_rotate_0");
      }
      $("#handle_box1").addClass("buttom_rotate30");

    }
    if (izv_second_counter1 == 1) {

      setTimeout(function(){
        $(".izv_second1").css("background-position","-100%");
      }, 20);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-200%");
      }, 30);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-300%");
      }, 40);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-400%");
      }, 50);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-500%");
      }, 60);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-600%");
      }, 70);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-700%");
      }, 80);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-800%");
      },90);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-900%");
      }, 100);
      setTimeout(function(){
        $(".izv_second1").css("background-position","-1000%");
      }, 110);
      izv_second_counter1 += 1;
      console.log(izv_second_counter1);
      if ($("#handle_box1").hasClass("buttom_rotate_30")) {
        $("#handle_box1").removeClass("buttom_rotate_30");
      }
      if ($("#handle_box1").hasClass("buttom_rotate30")) {
        $("#handle_box1").removeClass("buttom_rotate30");
      }
      $("#handle_box1").addClass("buttom_rotate_0");
    }
    if (izv_second_counter1 == 5) {
      izv_second_counter1 = 1;
    }
  });

  $("#keyboard5").click(function(){
    setTimeout(function(){
      $("#line_text_saved").css("opacity", "100%");
      $("#line_text_unsaved").css("opacity", "0%");
      if ($(window).width() >= 1680) {
        $(".line_text2").css("left", "61.1%");
      }
      if ($(window).width() > 1366 && $(window).width() <= 1440) {
        $(".line_text2").css("left", "62.9%");
      }
    }, 300);
  });

  let serious = [
    "надо&nbspкупить&nbspмашину",
    "100+20×6=???",
    "нашла&nbspрешение&nbspпо&nbspпроекту!",
    "завтра&nbspплатить&nbspза&nbspипотеку",
    "пора&nbspвыпить&nbspтаблетки",
    "может&nbspуволиться...",
    "ну&nbspна&nbsp500&nbspр&nbspнеделю&nbspпроживу",
    "мама&nbspпросила&nbspполить&nbspцветы",
    "меня&nbspотчислят&nbspскоро",
    "дома&nbspхлеб&nbspкончился&nbspвроде",
    "надо&nbspпораньше&nbspлечь&nbspспать",
    "блин,&nbspиз&nbspбанка&nbspопять&nbspзвонят",
    "вечером&nbspсозвон&nbspс&nbspзаказчиком",
    "запишу,&nbspпока&nbspне&nbspзабыла",
    "а&nbspсколько&nbspсоли&nbspнадо&nbspв&nbspсуп?"
  ]
  let lite = [
    "как&nbspбесит&nbspВася...",
    "посмотрю&nbspчасок&nbspаниме",
    "мало&nbspполовин,&nbspмало,&nbspмало&nbspполовин",
    "может&nbspза&nbspпивом&nbspсходить?",
    "урааа&nbspвыходной",
    "какая&nbspкрасивая&nbspсобака ",
    "опять&nbspчас&nbspв&nbspтиктоке&nbspзалипала",
    "Егорка&nbspкраш))))",
    "уф,&nbspя&nbspрастолстела",
    "почему&nbspон&nbspне&nbspпишет&nbspмне?!",
    "на&nbspнеделе&nbspв&nbspТЦ&nbspсхожу",
    "почему&nbspСтим&nbspне&nbspгрузится?",
    "о,&nbspклассная&nbspфотка",
    "закажу&nbspроллы&nbspна&nbspвечер",
    "пойду&nbspспать"
  ]
  console.log(serious[1])

  $("#mode_buttom_left").click(function(){
    $("#mode_text").text("ЛАЙТОВЫЙ");
    $("#mode_text").css("left", "calc(50% - 106px)");
    $("#think1_text").html(lite[0]);
    $("#think2_text").html(lite[1]);
    $("#think3_text").html(lite[2]);
    $("#think4_text").html(lite[3]);
    $("#think5_text").html(lite[4]);
    $("#think6_text").html(lite[5]);
    $("#think7_text").html(lite[6]);
    $("#think8_text").html(lite[7]);
    $("#think9_text").html(lite[8]);
    $("#think10_text").html(lite[9]);
    $("#think11_text").html(lite[10]);
    $("#think12_text").html(lite[11]);
    $("#think13_text").html(lite[12]);
    $("#think14_text").html(lite[13]);
    $("#think15_text").html(lite[14]);
    $(".think").css("display", "block");
    $(".think").css("opacity", "100");
  });
  $("#mode_buttom_right").click(function(){
    $("#mode_text").text("СЕРЬЁЗНЫЙ");
    $("#mode_text").css("left", "calc(50% - 112px)");

    $("#think1_text").html(serious[0]);
    $("#think2_text").html(serious[1]);
    $("#think3_text").html(serious[2]);
    $("#think4_text").html(serious[3]);
    $("#think5_text").html(serious[4]);
    $("#think6_text").html(serious[5]);
    $("#think7_text").html(serious[6]);
    $("#think8_text").html(serious[7]);
    $("#think9_text").html(serious[8]);
    $("#think10_text").html(serious[9]);
    $("#think11_text").html(serious[10]);
    $("#think12_text").html(serious[11]);
    $("#think13_text").html(serious[12]);
    $("#think14_text").html(serious[13]);
    $("#think15_text").html(serious[14]);
    $(".think").css("display", "block");
    $(".think").css("opacity", "100");
  });

  $(".skip_buttom").mouseover(function(e){
    $(this).parent().css('transition', '0.1s');
    $(this).parent().css('background-color', '#A4DDD4');

  });
  $(".skip_buttom").mouseleave(function(e){
    $(this).parent().css('transition', '0.3s');
    $(this).parent().css('background-color', 'black');

  });
  $(".skip_buttom").click(function(){
    $(this).parent().css("transition", ".3s");
    $(this).parent().css("opacity", "0");
    setTimeout(function(){
      $(this).parent().css("display", "none");
    }, 500);
  });


  // $(".fp_buttom").click(function(){
  //   $(".fp_bar_active").css("animation-play-state", "running");
  //   setTimeout(function(){
  //     $(".fp_bar").css("background", "#A4DDD4");
  //   }, 3000);
  //   setTimeout(function(){
  //     $(".allpage").css("opacity", "0%");
  //     $(".content").css("opacity", "100%");
  //     $(".think_counter_result").css("opacity", "100%");
  //     $(".think").css("display", "block");
  //     $(".izv1").removeClass("stop");
  //     $(".izv2").removeClass("stop");
  //     $(".izv_third1").removeClass("stop");
  //     $(".active_point").removeClass("stop");
  //     $(".cross").removeClass("stop");
  //     $(".light_triangle").removeClass("stop");
  //     $(".light_round").removeClass("stop");
  //     $(".line_text2").removeClass("stop");
  //   }, 3100);
  //   setTimeout(function(){
  //     $(".allpage").css("display", "none");
  //   }, 3400);
  // });

});
