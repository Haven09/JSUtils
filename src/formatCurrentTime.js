/**
 * description: 将时间格式化显示
 * Created Date: 2018-01-10 4:19:23 pm
 * Author: Haven
 * -----
 * Last Modified:
 * Modified By:
 * -----
 */
function formatCurrentTime(time) {
  if (!time) {
    return "";
  }
  var t = new Date(time),
    y = t.getFullYear(),
    M = t.getMonth() + 1,
    d = t.getDate(),
    h = t.getHours(),
    m = t.getMinutes(),
    s = t.getSeconds();

  function format(val) {
    return val < 10 ? "0" + val : val + "";
  }
  M = format(M);
  d = format(d);
  h = format(h);
  m = format(m);
  s = format(s);

  return `${y}-${M}-${d} ${h}:${m}:${s}`;
}

module.exports = formatCurrentTime;