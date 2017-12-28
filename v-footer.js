Vue.component('v-footer', {
  props: ['active', 'showHeader'],
  template: '<div class="sys-container" v-if="showHeader">\
  <div class="sys-header-box"  >\
    <div class="sys-header">\
      <div class="sys-title">\
        <img src="images/logo.png" />\
        <p>\
          <span class="sys-name" > 浙灵智慧消防报警管理系统</span>\
          <span> ZheLing Intelligent fire alarm management system</span>\
        </p>\
      </div>\
      <div class="sys-set">\
        <div class="sys-info" >\
          <img src="images/headPhoto.png" />\
          <p>\
            <span>系统管理员</span>\
            <span class="sys-changePwd" @click="showToastMask" > 修改密码</span >\
          </p >\
        </div >\
        <div class="sys-quit">\
          <img src="images/quit.png" />\
        </div>\
      </div>\
    </div>\
  </div>\
  <ul class="sys-tab">\
    <li class="sys-tab-li" @click="goto(0)"> 报警地图<span :class="[active==0?\'borderLine\':\'\',]"></span></li>\
    <li class="sys-tab-li" @click="goto(1)" >报警记录<span :class="[active==1?\'borderLine\':\'\',]"></span></li>\
    <li class="sys-tab-li" @click="goto(2)" >设备信息<span :class="[active==2?\'borderLine\':\'\',]"></span></li>\
    <li class="sys-tab-li" @click="goto(3)" >系统管理<span :class="[active==3?\'borderLine\':\'\',]"></span></li>\
  </ul>\
  <div class="sys-changeBox" v-cloak v-if="showTosat" @click.stop >\
    <div class="sys-changeContent ">\
      <div class="sys-changeTitle ">\
        <h4>修改密码</h4>\
        <span class="delete" @click="hideTosat">X</span>\
      </div>\
    <div class="sys-changeForm">\
        <p class="passwordList">\
          <span>旧密码：</span><input type="password" placeholder="请输入旧密码" v-model="oldPwd" /></p>\
        <p class="passwordList">\
          <span>新密码：</span><input type="password" placeholder="请输入新密码" v-model="newPwd" /></p>\
        <p class="passwordList">\
          <span>确认密码：</span><input type="password" placeholder="请再次输入新密码" v-model="reNewPwd" /></p>\
      </div>\
      <div class="sys-changeFooter">\
        <span @click="hideTosat" style="cursor:pointer;">取消</span>\
      <button type="button" class="sys-sure" @click="sure" > 确定</button >\
      </div>\
    </div>\
  </div>\
</div>',
  data: function () {
    return {
      showTosat: false,
      oldPwd: '',
      newPwd: '',
      reNewPwd: ''
    }
  },
  methods: {
    goto: function (i) {
      var pages = ["map.html", "recode.html", "deviceInfo.html"]
      location.href = pages[i]
    },
    showToastMask: function () {
      this.showTosat = true
    },
    hideTosat: function () {
      this.showTosat = false;
    },
    sure: function () {
      this.showTosat = false;
    }
  }
})




