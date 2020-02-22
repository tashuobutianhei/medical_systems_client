
export default {
  setCookie(name: string, value: string) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
  },
  getCookie(name: string ) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
  },
  delCookie(name: string ) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);

      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      var cval = (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
      if (cval != null)
          document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  },
  transformData(obj: any) {
      var params = new FormData();
      Object.keys(obj).forEach(item=>{
          params.append(item, obj[item])
      })
      return params;
  }
}