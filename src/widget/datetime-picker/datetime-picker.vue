<style scoped>
  .vui-datetime-picker-wrapper {
    position: relative;
  }
  .vui-datetime-picker-input {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    font-size: inherit;
    line-height: 1;
    background-color: inherit;
  }
  .vui-calendar-wrapper {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    position: absolute;
    width: 320px;
    margin: 15px 0 0 -1px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0px 30px -4px rgba(0,0,0,0.175);
    user-select: none;
    left: 0;
  }
  .vue-date-picker-calendar {
    overflow: hidden;
    padding: 10px 13px 15px 13px;
  }
  .vue-date-picker-calendar li {
    float: left;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin: 4px 5px;
    border-radius: 100%;
    overflow: hidden;
    color: #808080;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .vue-date-picker-calendar li:hover {
    background-color: rgba(255,26,75,0.1)
  }
  .vue-date-picker-calendar li.active {
    background-color: #ff1a4b;
    color: #fff;
  }
  .vue-date-picker-weekday {
    overflow: hidden;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 13px;
  }
  .vue-date-picker-weekday li {
    float: left;
    width: 32px;
    margin: 11px 5px;
    color: #808080;
    cursor: pointer;
  }
  .vue-date-picker-weekday li:hover {
    color: #333333;
  }
  .vue-date-picker-header {
    display: flex;
    height: 48px;
    line-height: 48px;
  }
  .vue-date-picker-header li {
    flex: 1;
  }
  .vue-date-picker-header li:last-child,
  .vue-date-picker-header li:first-child {
    width: 60px;
    flex: none;
  }
  .arrow-top {
    display: block;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    top: -20px;
    left: 26px;
  }
  .arrow-right {
    display: block;
    border: 8px solid transparent;
    border-left-color: #44464c;
    width: 0;
    height: 0;
    margin-top: 16px;
    margin-right: 27px;
    cursor: pointer;
  }
  .arrow-left {
    display: block;
    border: 8px solid transparent;
    border-right-color: #44464c;
    width: 0;
    height: 0;
    margin-top: 16px;
    margin-left: 27px;
    cursor: pointer;
  }
  .vue-date-picker-current-date {
    text-align: center;
  }
  .vue-date-picker-current-date span {
    cursor: pointer;
  }
  .vue-date-picker-current-date .year {
    color: #808080;
  }
  .vue-date-picker-months {
    overflow: hidden;
    padding: 10px 15px 15px 15px;
    font-size: 12px;
  }
  .vue-date-picker-months li {
    float: left;
    width: 72px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  .vue-date-picker-months li.active {
    border: 1px solid #ff1a4b;
  }
  .vue-date-picker-months li:hover {
    background-color: rgba(255,26,75,0.1)
  }
  .vue-date-picker-years {
    overflow: hidden;
    padding: 10px 12px 15px 12px;
  }
  .vue-date-picker-years li {
    float: left;
    width: 58px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .vue-date-picker-years li.active {
    border: 1px solid #ff1a4b;
  }
  .vue-date-picker-years li:hover {
    background-color: rgba(255,26,75,0.1)
  }
  .vue-date-picker-time {
    padding-bottom: 15px;
  }
  .vue-date-picker-btn {
    border: 1px solid #ff1a4b;
    border-radius: 4px;
    padding: 4px 10px;
    margin: 0;
    outline: 0;
    background-color: inherit;
    cursor: pointer;
    color: #ff1a4b;
  }


  .widget-close {
    position: absolute;
    top: 5px;
    right: 5px;
    display: block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 10px;
    background: black;
    opacity: 0.5;
  }
  .widget-close:hover {
    cursor: pointer;
    opacity: 1;
  }
  .widget-close::before, .widget-close::after {
    content: '';
    position: absolute;
    width: 80%;
    top: 68%;
    left: 10%;
    height: 4px;
    margin-top: -6px;
    border-radius: 5px;
    background: #ffffff;
  }
  .widget-close::before {
    transform: rotate(45deg);
  }
  .widget-close::after {
    transform: rotate(-45deg);
  }
</style>

<template>
  <div class="vui-datetime-picker-wrapper">
    <input type="text" 
           class="vui-datetime-picker-input"
           :placeholder="placeholder"
           @focus="handleInputFocus"
           @blur="handleInputBlur"
           v-model="result"
    ></input>
    <div class="widget-close" 
         v-show="modal.clear" 
         @click="clearResultDate">
    </div>
    <!-- date-time-picker-modal -->
    <div class="vui-calendar-wrapper"
         v-show="modal.picker"
    >
        <span class="arrow-top"></span>
        <!-- 年月面板 -->
        <ul class="vue-date-picker-header">
          <li>
            <span class="arrow-left" @click="lastMonth"></span>
          </li>
          <li>
            <p class="vue-date-picker-current-date">
              <span class="month"
                    @click="showMonthModal">
                {{months[currentDate.m-1]}}
              </span>
              <span class="year"
                    @click="showYearModal">
                {{currentDate.y}}
              </span>
            </p>
          </li>
          <li>
            <span class="arrow-right" @click="nextMonth"></span>
          </li>
        </ul>
        <!-- 星期面板 -->
        <ul class="vue-date-picker-weekday">
          <li v-for="name in weekdays">
            {{name}}
          </li>
        </ul>
        <!-- 日期面板 -->
        <ul class="vue-date-picker-calendar">
          <li v-for="number in calendarArr"
             :class="[ number == currentDate.d ? 'active' : '']"
             @click="selectDay( number )">
            {{number}}
          </li>
        </ul>
        <!-- 月份面板 -->
        <ul class="vue-date-picker-months" v-show="modal.month">
          <li v-for="(month, $index) in months"
              :class="[ $index == (currentDate.m-1) ? 'active' : '']"
              @click="selectMonth( $index )">
            {{month}}
          </li>
        </ul>
        <!-- 年份面板 -->
        <ul class="vue-date-picker-years" v-show="modal.year">
          <li v-for="year in years"
              :class="[ year == currentDate.y ? 'active' : '']"
              @click="selectYear(year)">
            {{year}}
          </li>
        </ul>
        <!-- 时间面板 -->
        <ul class="vue-date-picker-time" v-show="modal.time">
          <li>
            <span>{{timePicked}}</span>
          </li>
          <li>
            <span class="key">时</span>
            <input type="range" :max="maxHour" :min="minHour" step="1" v-model="currentDate.h"></input>
          </li>
          <li>
            <span class="key">分</span>
            <input type="range" :max="maxMinute" :min="minMinute" step="1" v-model="currentDate.mm"></input>
          </li>
          <li>
            <span class="key">秒</span>
            <input type="range" :max="maxSecond" :min="minSecond" step="1" v-model="currentDate.s"></input>
          </li>
          <li>
            <button class="vue-date-picker-btn" type="button" @click="setDate(date)">确定</button>
            <button class="vue-date-picker-btn" type="button" @click="hidePickerModal">取消</button>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      onblur: {
        type: Function,
      },
      onfocus: {
        type: Function,
      },
      onclick: {
        type: Function,
      },
      onchange: {
        type: Function,
      },

      dateDefault: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
      },
      allowNow: {
        type: Boolean,
        default: true
      },
      maxDate: {
        type: String,
        default: ''
      },
      minDate: {
        type: String,
        default: '1970-01-01'
      },
      maxHour: {
        type: Number,
        default: 23
      },
      minHour: {
        type: Number,
        default: 0
      },
      maxMinute: {
        type: Number,
        default: 59
      },
      minMinute: {
        type: Number,
        default: 0
      },
      maxSecond: {
        type: Number,
        default: 59
      },
      minSecond: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        result: '',
        calendarArr: [],
        currentDate: {
          y: '',
          m: '',
          d: '',
          h: '',
          mm: '',
          s: ''
        },
        modal: {
          picker: false,
          year: false,
          month: false,
          time: false,
          close: false,
        },
        i18n: {
          'zh-cn': {
            weekdays: [ '日', '一', '二', '三', '四', '五', '六' ],
            months: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
          },
          'en': {
            weekdays: {
              short: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
              full: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            },
            months: {
              short: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
              full: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
            },
          }
        },
        months: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        weekdays: [ '日', '一', '二', '三', '四', '五', '六' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
        years: [],
        delayTime: {},
      };
    },
    computed: {
      date () {
        let m = this.addZero(this.currentDate.m);
        let d = this.addZero(this.currentDate.d);
        let h = this.addZero(this.currentDate.h);
        let mm = this.addZero(this.currentDate.mm);
        let s = this.addZero(this.currentDate.s);
        return `${this.currentDate.y}-${m}-${d} ${h}:${mm}:${s}`;
      },
      timePicked () {
        this.currentDate.h = this.addZero(this.currentDate.h);
        this.currentDate.mm = this.addZero(this.currentDate.mm);
        this.currentDate.s = this.addZero(this.currentDate.s);
        return `${this.currentDate.h}:${this.currentDate.mm}:${this.currentDate.s}`;
      }
    },
    // 模块编译/挂载之后(不保证组建已在 document 中)
    mounted: function(){
      let self = this;
      let time;
      document.onmouseup = function(e){
        time = setTimeout(function(){
          self.hidePickerModal();
        },50);
      }
      self.$el.onclick = function(e){
        window.clearTimeout( time );
      }
      self.initCurrentDate( self.dateDefault );
      self.initCalendarArr();
    },
    methods: {
      // 去除两边空格
      trim( _str ) {
        return _str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
      },
      // 当前 $el 添加class
      addClass( _className ) {
        this.$el.className += ` ${_className}`;
      },
      // 当前 $el 移除class
      removeClass( _className ){
        let reg = new RegExp(`(?:^|\\s)${_className}(?:\\s|$)`);
        this.$el.className = this.trim( this.$el.className.replace( reg, ' ') );
      },
      // 当input focus 时候 $el addClass('active')
      handleInputFocus() {
        if( this.result ){
          this.modal.close = true;
        }else{
          this.modal.close = false;
        }
        this.addClass('active');
        this.showPickerModal();
      },
      // 当input blur 时候 $el addClass('active')
      handleInputBlur() {
        let self = this;
        this.modal.close = false;
        this.removeClass('active')
      },
      // 年份modal显示/隐藏
      showYearModal() {
        this.calcYears();
        this.modal.year = true;
        this.modal.month = false;
      },
      hideYearModal() {
        this.modal.year = false;
      },
      // 月份modal显示/隐藏
      showMonthModal() {
        this.modal.year = false;
        this.modal.month = true;
      },
      hideMonthModal() {
        this.modal.month = false;
      },
      // 时间modal显示/隐藏
      showTimeModal() {
        this.modal.time = true;
        this.modal.month = false;
        this.modal.year = false;
      },
      hideTimeModal() {
        this.modal.time = false;
      },
      // 日历modal显示/隐藏
      hidePickerModal () {
        this.modal.picker = false;
      },
      showPickerModal () {
        this.initCurrentDate( this.dateDefault );
        this.initCalendarArr();
        this.modal.picker = true;
      },
      getElementLeft(element){
          var actualLeft = element.offsetLeft;
          var current = element.offsetParent;
          while (current !== null){
              actualLeft += current.offsetLeft;
              current = current.offsetParent;
          }
          return actualLeft;
      },
      calcYears() {
        let currentYear = this.currentDate.y;
        let arr = [ currentYear ];
        for (var i = 0; i < 7; i++) {
          arr.unshift( parseInt(currentYear)-i-1 );
          arr.push( parseInt(currentYear)+i+1 );
        }
        this.years = arr;
      },
      // 选择天
      selectDay( _number ) {
        if( _number ){
          this.currentDate.d = _number;
        }
        this.showTimeModal();
      },
      // 选择月
      selectMonth( _index ) {
        this.currentDate.m = _index;
        this.initCalendarArr();
        this.hideMonthModal();
      },
      // 选择年
      selectYear( _year) {
        this.currentDate.y = _year;
        this.initCalendarArr();
        this.hideYearModal();
      },
      // 下一月
      nextMonth() {
        let currentMonth = this.currentDate.m;
        let nextMonth = currentMonth += 1;
        if( nextMonth > 12 ){
          nextMonth = nextMonth - 12;
          this.currentDate.y += 1;
        }
        this.currentDate.m = nextMonth;
        this.initCalendarArr();
      },
      // 上一月
      lastMonth() {
        let currentMonth = this.currentDate.m;
        let lastMonth = currentMonth - 1;
        if( lastMonth <= 0 ){
          lastMonth = 12 - lastMonth;
          this.currentDate.y -= 1;
        }
        this.currentDate.m = lastMonth;
        this.initCalendarArr();
      },
      // 初始化当前日期年月日
      // _timestamp 传入时间戳则根据时间戳初始化
      initCurrentDate( _timestamp ) {
        let currentTime = _timestamp || new Date().getTime();
        let t = new Date( currentTime )
        let y = t.getFullYear();
        let m = t.getMonth()+1;
        let d = t.getDate();
        let h = t.getHours();
        let mm = t.getMinutes();
        let s = t.getSeconds();
        this.currentDate = {
          y: y,
          m: m,
          d: d,
          h: h,
          mm: mm,
          s: s
        }
      },
      // 根据当前的日期计算日期显示的List
      initCalendarArr( _timestamp ){
        let y = this.currentDate.y;
        let m = this.currentDate.m;
        let arr = [];
        // 用当月第一天在一周中的日期值作为当月离第一天的天数
        for(let i = 1, firstDay = new Date(y, m - 1, 1).getDay(); i <= firstDay; i++){ 
          arr.push(''); 
        }
        // 用当月最后一天在一个月中的日期值作为当月的天数
        for(let i = 1, monthDay = new Date(y, m, 0).getDate(); i <= monthDay; i++){ 
          arr.push(i); 
        }
        // 补足剩余
        for(let i = arr.length; i< 42; i++ ){
          arr.push('');
        }
        this.calendarArr = arr
      },
      addZero(val) {
        val = Number(val);
        if (val < 10) {
            return '0' + val;
        }
        return val;
      },
      clearResultDate() {
        this.result = '';
        this.onChange && this.onChange( '' );
      },
      setDate(date) {
        this.result = date;
        this.onChange && this.onChange( date );
        this.hidePickerModal();
      },
    }
  };
</script>

