/**
 * 格式化时间
 * @param {date} date
 * @returns {string} 时间字符串 yyyy-MM-dd hh:mm:ss
 */
exports.coverDate = date => {
  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds()
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  h = h > 9 ? h : '0' + h
  m = m > 9 ? m : '0' + m
  s = s > 9 ? s : '0' + s
  return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
}

/**
* 转换时间格式
* @param {object} helper APP的helper
* @param {string} date "2018-03-15T04:20:00.000Z"
* @returns {string} 时间字符串 yyyy-MM-dd hh:mm:ss
*/
exports.formatDate = (helper, date) => {
  let _date = new Date(date)
  return helper.coverDate(_date)
}

/**
 * 处理成功响应
 * @param {object} param 处理完请求后，返回给前端的核心参数 
 */
exports.success = ({
  ctx,
  res = null,
  message = '请求成功'
}) => {
  ctx.body = {
    Code: 200,
    data: res,
    message
  }
  ctx.status = 200
}

/**
 * 处理错误响应
 * @param {object} param 处理完请求后，返回给前端的核心参数 
 */
exports.error = ({
  ctx,
  res = null,
  message = '操作失败',
  Code = 200
}) => {
  ctx.body = {
    Code,
    data: res,
    message
  }
  ctx.status = 200
}

/**
 * 生成随机验证码
 * @param {number} len 多少位验证码
 */
exports.randomString = (len) => {　　
  len = len || 6;　　
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
  var maxPos = chars.length;　　
  var pwd = '';　　
  for (var i = 0; i < len; i++) {　　　　
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));　　
  }　　
  return pwd;
}

/**
 * 遍历树结构数组
 * @param {array} parent 父数组
 * @param {array} children 子数组
 */
exports.toTree = (parent, children) => {
  if (!children) {
    children = [];
    for (let i = 0; i < parent.length; i++) {
      let item = parent[i];
      item.children = [];
      if (item.pid) {
        children.push(item);
        parent.splice(i, 1);
        i--;
      }
    }
    if (parent.length) {
      exports.toTree(parent, children);
    }
  } else {
    if (!children.length) {
      return;
    }
    parent.map(item => {
      for (let i = 0; i < children.length; i++) {
        if (item.id === children[i].pid) {
          item.children.push(children[i]);
          children.splice(i, 1);
          i--;
        }
      }
      if (item.children.length) {
        exports.toTree(item.children, children)
      }
    })
  }
  return parent;
}






