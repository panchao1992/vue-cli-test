
<template>
  <div>
    <img src="../assets/img/timg.gif" class="imgUrl">
    <img src="../assets/img/timg.gif" class="imgUrl">
    <img src="../assets/img/timg.gif" class="imgUrl">
    <img src="../assets/img/timg.gif" class="imgUrl">
    <div class="tabTitle" id="tabId">
      <div class="pull-left tabText" :class="isUnderLine? 'tabOnText':''" @click="tapClick(0)">
        Tab左
        <div class="underline" v-show="isUnderLine"></div>
      </div>
      <div class="pull-left v-line"></div>
      <div class="pull-left tabText" :class="!isUnderLine? 'tabOnText':''" @click="tapClick(1)">
       Tab右
        <div class="underline" v-show="!isUnderLine"></div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="fixedTab" v-show="isFixed">
      <div class="pull-left tabText" :class="isUnderLine? 'tabOnText':''" @click="tapClick(0)">
        Tab左
        <div class="underline" v-show="isUnderLine"></div>
      </div>
      <div class="pull-left v-line"></div>
      <div class="pull-left tabText" :class="isUnderLine? '':'tabOnText'" @click="tapClick(1)">
         Tab右
        <div class="underline" v-show="!isUnderLine"></div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="floatOne">
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
    </div>
    <div id="floatTwo">
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
      <img
        src="../assets/img/timg.gif"
        style="width:100%"
      >
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      isUnderLine: true,
      offsetTop: "",
      offsetTop2: "",
      isFixed: false,
      tabH: "",
      scrollTop: "",
      total: "",
      step: "",
      isFixed: false
    };
  },
  methods: {
    tapClick: function(index) {
      var scrollTop;
      var total;
      if (index == 0) {
        scrollTop =                                         //窗口的垂直滚动距离
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        total = document.querySelector("#tabId").offsetTop; //#tabId距离顶部的距离
        let step = total / 50; // 平滑滚动，时长300ms，每10ms一跳，共30跳
        if (total > scrollTop) {
          this.smoothDown(scrollTop, total, step);
        } else {
          let newTotal = scrollTop - total;
          step = newTotal / 10;
          this.step = step;
          this.smoothUp(scrollTop, total, step);
        }
      } else {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        total = document.querySelector("#floatTwo").offsetTop - this.tabH;
        let step = total / 50;
        if (total > scrollTop) {
          this.smoothDown(scrollTop, total, step);
        } else {
          let newTotal = scrollTop - total;
          step = newTotal / 10;
          this.step = step;
          this.smoothUp(scrollTop, total, step);
        }
      }
    },
    smoothDown(scrollTop, total, step) {
      (function smoothDown2() {
        if (scrollTop < total) {
          scrollTop += step; // 移动一小段
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop; // 设定每一次跳动的时间间隔为10ms
          setTimeout(smoothDown2, 10);
        } else {
          // 限制滚动停止时的距离
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      })();
    },
    smoothUp(scrollTop, total, step) {
      (function smoothUp2() {
        if (scrollTop > total) {
          scrollTop -= step;
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          setTimeout(smoothUp2, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      })();
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var tabTop = document.querySelector("#tabId").offsetTop;
      var offsetTop2 = document.querySelector("#floatTwo").offsetTop;
      this.offsetTop2 = offsetTop2;
      var top2 = this.offsetTop2 - this.tabH;
      scrollTop >= tabTop ? (this.isFixed = true) : (this.isFixed = false);
      scrollTop >= top2
        ? (this.isUnderLine = false)
        : (this.isUnderLine = true);
    }
  },
   mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
    var tabH = document.getElementById("tabId").clientHeight;
    this.tabH = tabH;
   },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
 
<style scoped>
.imgUrl {
  /* width: 100%; */
}
/*tab切换*/
.tabTitle {
  width: 7.5rem;
  height: 0.88rem;
  background: #fff;
  margin-top: 0.12rem;
}
.tabText {
  width: 3.73rem;
  height: 0.88rem;
  line-height: 0.88rem;
  color: #666;
  font-size: 0.28rem;
  text-align: center;
  position: relative;
}
.tabOnText {
  color: #ff9130;
}
.v-line {
  width: 0.04rem;
  height: 0.28rem;
  background-color: #f0f0f0;
  margin: 0.3rem auto;
}
.underline {
  position: absolute;
  bottom: 0.02rem;
  left: 0.97rem;
  width: 1.8rem;
  height: 0.02rem;
  background-color: #ff9130;
}
/* tab固定 */
.fixedTab {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 7.5rem;
  height: 0.88rem;
  background: #fff;
  z-index: 20;
}
</style>