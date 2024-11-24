// 创建一个包含完整时间信息的 data 对象
const data = {
  year: 0,
  month: 0,
  day: 0,
  weekday: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  updateTime: function() {
    const now = new Date(); // 获取当前时间
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1; // 月份从 0 开始，需要加 1
    this.day = now.getDate();
    this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]; // 获取星期
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  },
  formatTime: function() {
    // 格式化时间为完整的时间字符串，精确到毫秒并包含时区
    let timeString = `${this.year}年${this.month < 10 ? '0' + this.month : this.month}月${this.day < 10 ? '0' + this.day : this.day}日 ` +
           `${this.weekday} ` +
           `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' +
             this.minutes : this.minutes}:${this.seconds < 10 ? '0' +
             this.seconds : this.seconds} `;

    // 如果分针指向20和50时，都输出“站起来活动一下吧！”
    if (this.minutes === 50 || this.minutes === 20) {
      timeString += "\n站起来活动一下吧!";
    }

    return timeString;
  }
};

// 每毫秒更新一次时间并显示
function updateClock() {
  data.updateTime(); // 更新时间
  document.getElementById('clock').textContent = data.formatTime(); // 更新时钟显示
}

// 初次加载时更新一次时钟
updateClock();
// 每毫秒更新时钟
setInterval(updateClock, 1); // 以毫秒为单位更新