<template>
  <div>
    <!--下面的所有内容都放这-->
    <div class="introduct-body-header van-hairline--bottom">
      <!--作者头像-->
      <div class="introduct-body-avator">
        <img src="../../../assets/image/girl/girl.jpg" width="100%" height="100%" style="border-radius: 50%;border: 2px solid #bdbdbd;">
      </div>
      <div style="display: inline-block;height: 100%;vertical-align: top;">
        <!--作者名称-->
        <div class="introduct-body-nickname" style="margin-top: 4px;font-size: 14px;">子衿_青青子衿</div>
        <!--作者粉丝数-->
        <div class="introduct-body-fans" style="margin-top: 4px;font-size: 11px;color: #b0b0b0;">62个粉丝</div>
      </div>
      <!--添加关注-->
      <div class="introduct-body-followbut">
        <span style="font-size: 20px;vertical-align: top">+</span>
        关注
      </div>

    </div>
    <!--主标题-->
    <div class="introduct-body-title" style="position: relative;">
      <div :class="{ 'van-ellipsis': more }" style="font-size: 15px;font-weight: 500;padding: 3px 30px 3px 10px;line-height: 25px;">抖音最近比较火的9277，甜腻，这波狗粮我先干了(末尾有彩蛋)</div>
      <div @click="showMore" style="position:absolute;right: 5px;top: 1px;height: 25px;width: 25px;text-align: center;line-height: 25px;color: #dcdcdc;">
        <span :class="['fa', more?'fa-chevron-down':'fa-chevron-up']" style=""></span>
      </div>
    </div>

    <!--播放量-->
    <div style="position: relative;">
      <div style="position: relative;color: #9c9c9c;">
        <div style="display: inline-block;padding-left: 10px;">
          <span class="fa fa-youtube-play"></span>
          &nbsp;
          <span>1.4万</span>
        </div>
        <div style="display: inline-block;padding-left: 10px;">
          <span class="fa fa-drivers-license-o"></span>
          &nbsp;
          <span>540</span>
        </div>
        <div style="display: inline-block;padding-left: 10px;">
          <span>05-31</span>
        </div>
      </div>
      <div></div>
    </div>
    <!--简介、副标题-->
    <div class="introduct-body-subtitle" style="position: relative">
      <div :class="{ 'van-ellipsis': more }" style="padding: 3px 30px 3px 10px;line-height: 25px;color: #9c9c9c;">抖音最近比较火的9277</div>
    </div>
    <!--功能按钮-->
    <div class="introduct-func-list van-hairline--bottom">
      <div v-for="(obj, index) in funcArr" :key="index" class="introduct-func-block">
        <div @click="changeSelected(index)"><span :class="['fa', obj.icoClass]" :style="{'font-size': '21px', 'color': funcSelected(obj.selected)}"></span></div>
        <div style="color: #9c9c9c;">{{obj.num ? obj.num : obj.name}}</div>
      </div>

    </div>
    <!--标记标签-->
    <div class="introduct-tag-list">
      <div v-for="(obj, index) in tagsArr" :key="index" class="introduct-tag">
        <van-tag plain>{{obj.title}}</van-tag>
      </div>
    </div>

    <!--相关性推荐-->
    <div class="introduct-same-list">
      <div v-for="(obj,index) in sameArr" :key="index" class="introduct-card van-hairline--bottom">
        <div class="introduct-card-img">
          <img :src='obj.imgUrl' height="100%" width="100%">
        </div>
        <div class="introduct-card-content">
          <!--主标题-->
          <div class="van-ellipsis" style="font-size: 18px;">{{obj.title}}</div>
          <!--up名-->
          <div class="van-ellipsis" style="margin: 15px 0 0 0;color: #999;">
            <div style="display: inline-block;height: 14px;width: 20px;text-align: center;line-height: 10px;vertical-align: top;border: 1px solid #eeeeee;border-radius: 3px;color: #dbdbdb;margin-top: 3px">up</div>
            <div style="display: inline-block;margin-left: 5px;vertical-align: top;">{{obj.user.name}}</div>
          </div>
          <div style="position: absolute;left: 2px;bottom: 0;">
            <span style="color: #999;" class="fa fa-youtube-play"></span>
            &nbsp;
            <span style="color: #999;">{{numFormat(obj.play)}}</span>
            &nbsp;&nbsp;&nbsp;
            <span style="color: #999;" class="fa fa-drivers-license-o"></span>
            &nbsp;
            <span style="color: #999;">{{numFormat(obj.view)}}</span>
          </div>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
    export default {
      name: "introduct",
      data() {
        return{
          more: false,
          /*功能按钮*/
          funcArr:[
            {icoClass: 'fa-thumbs-up', num: 343, selected: true},
            {icoClass: 'fa-gift', num: 128, selected: false},
            {icoClass: 'fa-star', num: 2001, selected: false},
            {icoClass: 'fa-cloud-download', name: '缓存', selected: false},
            {icoClass: 'fa-share', num: 224, selected: false},
          ],
          /*标签集合*/
          tagsArr:[
            {title: "情侣"},
            {title: "小姐姐"},
            {title: "狗粮"},
            {title: "日常"},
            {title: "抖音"},
          ],
          sameArr:[
            {title: '《崩坏3》全新动画短片「女王降临」',user:{name: '樱玲の月'},imgUrl: require('../../../assets/image/rank/rank1.jpg'),play: 165000, view: 840},
            {title: '【C菌】法国顶级团队打造神作!【底特律: 变人】实况, 更新第13集',user:{name: '卧龙寺'},imgUrl: require('../../../assets/image/rank/rank2.jpg'),play: 372000, view: 958},
            {title: '【逗鱼时刻】第156期 我的老父亲',user:{name: '何必怀念beginning'},imgUrl: require('../../../assets/image/rank/rank3.jpg'),play: 940000, view: 587},
            {title: '那些万恶之源的电影片段出处，你知道几个？',user:{name: '谷大明'},imgUrl: require('../../../assets/image/rank/rank4.jpg'),play: 75100, view: 115},
            {title: '起小点TOP10 VOL403 剑姬无双剑舞锋不可当',user:{name: '嗨儿'},imgUrl: require('../../../assets/image/rank/rank5.jpg'),play: 15800, view: 840},

      ]
        }
      },
      methods:{
        showMore() {
          const boolean = this.more;
          this.more = (boolean ? false : true);

        },
        /*返回颜色*/
        funcSelected(selected) {
          if (selected) {
               return '#fd7195'
          }
          return '#757575';
        },
        changeSelected(index) {
          this.funcArr[index].selected = this.funcArr[index].selected ? false : true;
        },
        //格式化数字
        numFormat(num){
          if (num/10000 >= 1) {
            num = num / 1000 +"万";
          }
          return num;
        }
      }
    }
</script>

<style scoped>

  .introduct-body-header{
    position: relative;
    width: 100%;
    height: 50px;
  }
  .introduct-body-avator{
    display: inline-block;
    height: 42px;
    width: 42px;
    margin: 4px 10px;

  }

  /*关注按钮*/
  .introduct-body-followbut{
    position: absolute;
    right: 10px;
    width: 60px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
    background-color: #fd7195;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(225, 232, 245, 0.61);

    top: 0;
    bottom: 0;
    margin: auto 0;

  }

  .introduct-func-list {
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
  }
    .introduct-func-block{
      width: 50px;
      height: 50px;
      text-align: center;

    }
  .introduct-tag-list{
    position: relative;
    width: 100%;
    height: 30px;
  }
    .introduct-tag{
      display: inline-block;
      height: 30px;
      width: 50px;
      text-align: center;
      line-height: 40px;
      vertical-align: top;
    }

  .introduct-same-list{
    position: relative;
    width: 100%;

  }
  .introduct-card{
    position: relative;
    height: 100px;
    width: 100%;
    margin: 5px 0;
    background-color: #ffffff;
  }


  .introduct-card-img{
    position: absolute;
    width: 120px;
    height: 80px;
    margin: 10px;
  }

  .introduct-card-content{
    position: absolute;
    left: 140px;
    right: 20px;
    height: 80px;
    margin: 10px 10px 10px 5px;
  }



</style>
