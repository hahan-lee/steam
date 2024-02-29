(function ($) {
  class Steam {
    init() {
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.footer();
      this.popup();
    }
    header() {
      $(".main-btn").on({
        mouseenter(e) {
          $(".sub").stop().slideUp(0);
          $(this).next().stop().slideDown(300);
          $(".main-btn").removeClass("on");
          $(this).addClass("on");
        },
        focus(e) {
          $(".sub").stop().slideUp(0);
          $(this).next().stop().slideDown(300);
          $(".main-btn").removeClass("on");
          $(this).addClass("on");
        },
      });

      $(".col").on({
        mouseleave(e) {
          $(".sub").stop().slideUp(300);
          $(".main-btn").removeClass("on");
        },
      });
    }
    section1() {}
    section2() {}
    section3() {
      let cnt = 0;

      function mainSlide() {
        // 작동하려면 position:relative 필요함..하....
        $(".slide-wrap")
          .stop()
          .animate({ left: `${-100 * cnt}%` }, 300, function () {
            if (cnt > 4) cnt = 0;
            if (cnt < 0) cnt = 4;
            $(".slide-wrap")
              .stop()
              .animate({ left: `${-100 * cnt}%` }, 0);
          });
        $(".under-slide-wrap")
          .stop()
          .animate({ left: `${-100 * cnt}%` }, 300, function () {
            if (cnt > 4) cnt = 0;
            if (cnt < 0) cnt = 4;
            $(".under-slide-wrap")
              .stop()
              .animate({ left: `${-100 * cnt}%` }, 0);
          });
        console.log("dfd");
      }

      function nextCount() {
        cnt += 1;
        mainSlide();
      }

      function prevCount() {
        cnt -= 1;
        mainSlide();
      }

      function autoTimer() {
        setInterval(nextCount, 6000);
      }

      autoTimer();

      $(".left-arrow").on({
        click() {
          prevCount();
        },
      });
      $(".right-arrow").on({
        click() {
          nextCount();
        },
      });

      //5.페이지(이미지) 버튼 클릭 이벤트 : idx를 cnt에 저장하고 메인함수 호출
      // $(".under-img").each(function (idx) {
      //   $(this).on({
      //     click() {
      //       // clearInterval();
      //       // cnt = idx;
      //       // mainSlide();
      //       // autoTimer();
      //       alert("알림")
      //     },
      //   });
      // });
      $(".under-img").each(function (idx) {
        $(this).on({
          click() {
            const n = Math.ceil((idx - 3) / 4); // 슬라이드 번호 1 ~ 5
            let bg = $(this).css("background-image");
            // console.log(`.slide${n}`);
            // console.log("링크 배경이미지 ? " + bg);
            //console.log("하단이미지 인덱스 번호 :" + idx);
            //console.log("하단이미지 인덱스 변경 : " + n);
            $(`.slide${n} .img-box`).css({ backgroundImage: bg });
          },
        });
      });
    }
    footer() {
      // console.log('f');

      $("#family").on({
        change() {
          if ($(this).val() !== "") {
            window.open($(this).val());
          }
        },
      });
    }

    popup() {
      $(".not1").on({
        click() {
          $(".popup").addClass("open");
        },
      });

      $(".close-btn").on({
        click() {
          $(".popup").removeClass("open");
        },
      });
    }
  }
  let steam = new Steam();
  steam.init();
})(jQuery);
