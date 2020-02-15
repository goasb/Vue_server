var vueConfigs = {
    el: '#contents', /* 요소를 바꾸어 봅시다! ( Change DIV id ) */
    data: {
      contents: '여기는 Vue의 영역',
      aside: '여기는 aside',
      header: '여기는 header',
      footer: '여기는 footer'
    }
  };
  var app = new Vue( vueConfigs );
  app.$el.style.backgroundColor = 'yellow';