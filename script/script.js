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
    section1() {
    }
    section2() { }
    section3() {


      let cnt = 0;


      function mainSlide() {
        // 작동하려면 position:relative 필요함..하....
        $(".slide-wrap").stop().animate({ left: `${-100 * cnt}%` }, 300, function () {
          if (cnt > 4) cnt = 0;
          if (cnt < 0) cnt = 4;
          $(".slide-wrap").stop().animate({ left: `${-100 * cnt}%` }, 0)
        })
        console.log("dfd")

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

      $('.left-arrow').on({
        click() {
          prevCount();
        }
      })
      $('.right-arrow').on({
        click() {
          nextCount();
        }
      })

    }
    footer() {
      // console.log('f');




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
