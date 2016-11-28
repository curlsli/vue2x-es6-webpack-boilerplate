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
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    position: absolute;
    width: 318px;
    height: 365px;
    margin: 15px 0 0 -1px;
    text-align: center;
    background-color: #515765;
    border-radius: 8px;
    box-shadow: 0 0px 30px -4px rgba(0,0,0,0.175);
    user-select: none;
    left: 0;
  }
  .vui-calendar-tab {
    box-sizing: border-box;
    height: 75px;
    padding: 20px 20px 15px 20px;
    overflow: hidden;
    border-radius: 6px;
  }
  .vui-panel {
    position: relative;
    height: 290px;
  }
  .vui-calendar-tab li {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    float: left;
    border:1px solid #3a404c;
    text-align: left;
    font-size: 12px;
    color: #989eae;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .vui-calendar-tab li:hover {
    background-color: #464c5a;
  }
  .vui-calendar-tab li:nth-child(1) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: 0;
  }
  .vui-calendar-tab li:nth-child(2) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .vui-calendar-tab li.active {
    background-color: #414755;
  }
  .svg-icon-date,
  .svg-icon-time {
    float: left;
    width: 16px;
    height: 16px;
    fill: #989eae;
    margin: 11px 0 11px 32px;
  }
  .vui-calendar-tab li span {
    margin: 13px 10px;
    line-height: 1;
    float: left;
  }
  .vui-calendar-day,
  .vui-calendar-weekday {
    overflow: hidden;
    margin: 0 12px;
    font-size: 14px;
  }
  .vui-calendar-day li {
    box-sizing: border-box;
    float: left;
    width: 32px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 13px;
    overflow: hidden;
    color: #9096a5;
    transition: all 0.2s ease-in-out;
    margin: 3px 5px;
  }
  .vui-calendar-day li:not(.null):hover {
    background-color: #464c5a;
    cursor: pointer;
  }
  .vui-calendar-day li.active {
    background-color: #414755;
    color: #989eae;
    font-weight: bold;
  }
  .vui-calendar-weekday {
    margin-top: 10px;
  }
  .vui-calendar-weekday li {
    box-sizing: border-box;
    float: left;
    width: 32px;
    height: 26px;
    line-height: 26px;
    margin: 3px 5px;
    cursor: pointer;
    color: #797f8d;
  }
  .vui-calendar-header {
    position: relative;
    margin: 0 20px;
    color: #989eae;
    margin-bottom: 10px;
  }
  .vui-calendar-header li:nth-child(1) {
    position: absolute;
    width: 28px;
    height: 100%;
    left: 0;
    top: 0;
  }
  .vui-calendar-header li:nth-child(2) {
    width: 216px;
    padding: 0 28px;
    height: 28px;
    line-height: 28px;
  }
  .vui-calendar-header li:nth-child(3) {
    position: absolute;
    width: 28px;
    height: 100%;
    right: 0;
    top: 0;
  }
  .arrow-top {
    display: block;
    border: 10px solid transparent;
    border-bottom-color: #515765;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    top: -20px;
    left: 26px;
  }
  .arrow-right,
  .arrow-left {
    box-sizing: border-box;
    display: block;
    cursor: pointer;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    border: 1px solid #6a707e;
    position: relative;
    background-color: #515765;
    transition: all 0.2s ease-in-out;
  }
  .arrow-right:hover,
  .arrow-left:hover {
    border-color: #9399a9;
  }
  .arrow-right:hover:before {
    border-left-color: #9399a9;
  }
  .arrow-left:hover:before {
    border-right-color: #9399a9;
  }
  .arrow-right:before {
    content: '';
    display: block;
    border: 6px solid transparent;
    border-left-color: #6a707e;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    right: 3px;
    top: 7px;
    transition: all 0.2s ease-in-out;
  }
  .arrow-right:after {
    content: '';
    display: block;
    border: 6px solid transparent;
    border-left-color: #515765;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 7px;
  }
  .arrow-left:before {
    content: '';
    display: block;
    border: 6px solid transparent;
    border-right-color: #6a707e;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    left: 3px;
    top: 7px;
    transition: all 0.2s ease-in-out;
  }
  .arrow-left:after {
    content: '';
    display: block;
    border: 6px solid transparent;
    border-right-color: #515765;
    width: 0;
    height: 0;
    cursor: pointer;
    position: absolute;
    left: 5px;
    top: 7px;
  }
  .vui-calendar-ym {
    text-align: center;
  }
  .vui-calendar-ym span {
    cursor: pointer;
  }
  .vui-calendar-ym .month {
    margin-right: 4px;
  }
  .vui-calendar-ym .year:hover,
  .vui-calendar-ym .month:hover {
    color: rgba(255,255,255,0.7);
    transition: all 0.2s ease-in-out;
  }
  .vui-calendar-month {
    overflow: hidden;
    font-size: 12px;
    width: 282px;
    margin: 15px auto;
    color: #989eae;
  }
  .vui-calendar-month li {
    float: left;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  .vui-calendar-month li.active {
    background-color: #414755;
  }
  .vui-calendar-month li:hover {
    background-color: #464c5a;
  }
  .vui-calendar-year {
    overflow: hidden;
    width: 280px;
    margin: 15px auto;
    color: #989eae;
  }
  .vui-calendar-year li {
    float: left;
    width: 56px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: 200;
  }
  .vui-calendar-year li.active {
    background-color: #414755;
  }
  .vui-calendar-year li:hover {
    background-color: #464c5a;
  }
  .vui-calendar-time {
    padding-bottom: 15px;
  }
  .vui-calendar-time li {
    overflow: hidden;
  }
  .vui-calendar-time li:nth-child(1) {
    margin-bottom: 10px;
  }
  .vui-calendar-time .key {
    width: 258px;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    color: #8c92a1;
    display: inline-block;
  }
  .time-wrapper {
    overflow: hidden;
    width: 198px;
    margin: 0 auto;
  }
  .time-wrapper li {
    float: left;
    font-size: 22px;
    color: #989eae;
  }
  .time-block {
    box-sizing: border-box;
    width: 54px;
    height: 50px;
    background-color: #414755;
    border: 1px solid #3d4350;
    border-radius: 6px;
  }
  .time-number {
    display: block;
    margin-top: 14px;
  }
  .time-semicolon {
    width: 18px;
  }
  .widget-close {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    display: block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 10px;
    background: #515765;
    opacity: 0.5;
  }
  .widget-close:hover {
    cursor: pointer;
    opacity: 1;
  }
  .widget-close:before, 
  .widget-close:after {
    content: '';
    position: absolute;
    width: 62%;
    top: 68%;
    left: 18%;
    height: 1px;
    margin-top: -4px;
    border-radius: 5px;
    background: #ffffff;
  }
  .widget-close:before {
    transform: rotate(45deg);
  }
  .widget-close:after {
    transform: rotate(-45deg);
  }
  .time-range {
    width: 240px;
    height: 3px;
    margin: 14px auto;
  }
  .vui-calendar-submit {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: #13a9ba;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: bold;
    width: 275px;
    height: 40px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out;
  }
  .vui-calendar-submit:hover {
    background-color: #14b6c8;
  }
  .vui-calendar-submit:active {
    background-color: #129baa;
  }
</style>

<template>
  <div class="vui-datetime-picker-wrapper">
    <!-- 默认的 input -->
    <input type="text" 
           class="vui-datetime-picker-input"
           :placeholder="placeholder"
           @focus="handleInputFocus"
           @blur="handleInputBlur"
           v-model="result"
           ref="input"
    ></input>
    <!-- 清除内容按钮 -->
    <div class="widget-close"
         v-show="modal.clear"
         @click="clearResultDate"
    >
    </div>
    <div class="vui-calendar-wrapper"
         v-show="modal.picker"
    >
      <span class="arrow-top"></span>
      <ul class="vui-calendar-tab">
        <li :class="[ currentTab == 'date' ? 'active' : '']"
            @click="switchTab('date')">
          <svg class="svg-icon-date" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M334.460278 64.05756l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956L334.460278 156.664735c4.297792 0 7.776956-3.479165 7.776956-7.776956L342.237234 71.834516C342.237234 67.536724 338.758069 64.05756 334.460278 64.05756zM766.797642 64.05756l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956L774.574598 71.834516C774.574598 67.536724 771.095433 64.05756 766.797642 64.05756zM939.016289 64.05756l-94.858399 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 138.75727c0 4.297792-3.479165 7.776956-7.776956 7.776956l-200.563605 0c-4.297792 0-7.776956-3.479165-7.776956-7.776956L620.263416 71.834516c0-4.297792-3.479165-7.776956-7.776956-7.776956l-200.563605 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 138.75727c0 4.297792-3.479165 7.776956-7.776956 7.776956l-200.563605 0c-4.297792 0-7.776956-3.479165-7.776956-7.776956L188.02838 71.834516c0-4.297792-3.479165-7.776956-7.776956-7.776956l-71.322874 0C84.267413 64.05756 64.313381 84.011592 64.313381 108.468072l0 812.487259c0 4.297792 3.479165 7.776956 7.776956 7.776956l879.921655 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-836.022784C959.891276 73.369441 950.579394 64.05756 939.016289 64.05756zM828.501649 805.221945 195.60068 805.221945c-4.297792 0-7.776956-3.479165-7.776956-7.776956L187.823723 349.758369c0-4.297792 3.479165-7.776956 7.776956-7.776956l632.900969 0c4.297792 0 7.776956 3.479165 7.776956 7.776956l0 447.584291C836.380933 801.74278 832.79944 805.221945 828.501649 805.221945zM396.266613 434.588588l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C404.04357 438.067753 400.564405 434.588588 396.266613 434.588588zM550.577796 434.588588l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C558.45708 438.067753 554.875587 434.588588 550.577796 434.588588zM704.991306 434.588588l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C712.768262 438.067753 709.289098 434.588588 704.991306 434.588588zM396.266613 619.905266l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C404.04357 623.384431 400.564405 619.905266 396.266613 619.905266zM550.577796 619.905266l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C558.45708 623.384431 554.875587 619.905266 550.577796 619.905266zM704.991306 619.905266l-77.053263 0c-4.297792 0-7.776956 3.479165-7.776956 7.776956l0 77.053263c0 4.297792 3.479165 7.776956 7.776956 7.776956l77.053263 0c4.297792 0 7.776956-3.479165 7.776956-7.776956l0-77.053263C712.768262 623.384431 709.289098 619.905266 704.991306 619.905266z" />
          </svg>
          <span>Date</span>
        </li>
        <li :class="[ currentTab == 'time' ? 'active' : '']"
            @click="currentTab = 'time'">
          <svg class="svg-icon-time" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M516.266667 962.798933C270.916267 962.798933 72.055467 763.938133 72.055467 518.621867S270.916267 74.410667 516.266667 74.410667c245.3504 0 444.2112 198.8608 444.2112 444.2112S761.617067 962.798933 516.266667 962.798933zM516.266667 157.661867c-199.338667 0-360.925867 161.5872-360.925867 360.925867 0 199.304533 161.5872 360.925867 360.925867 360.925867 199.2704 0 360.96-161.621333 360.96-360.925867C877.192533 319.2832 715.537067 157.661867 516.266667 157.661867zM696.661333 560.2304 613.410133 560.2304l-55.534933 0-41.608533 0 0 0c-23.005867 0-41.642667-18.6368-41.642667-41.642667l0-249.856c0-23.005867 18.6368-41.642667 41.642667-41.642667s41.608533 18.6368 41.608533 41.642667l0 208.247467 55.534933 0 83.2512 0c23.074133 0 41.6768 18.6368 41.6768 41.642667S719.735467 560.2304 696.661333 560.2304z" />
          </svg>
          <span>Time</span>
        </li>
      </ul>
      <div class="tab-content">
        <div class="vui-panel" v-show="currentTab == 'date'">

          <!-- 年月面板 -->
          <ul class="vui-calendar-header">
            <li>
              <span class="arrow-left" @click="last"></span>
            </li>
            <li>
              <p class="vui-calendar-ym">
                <span class="month"
                      @click="showMonthModal"
                      v-show="checkmode == 'month' || checkmode == 'default'"
                >
                  {{months[currentDate.m-1]}}
                </span>
                <span class="year"
                      @click="showYearModal"
                      v-show="checkmode == 'default'"
                >
                  {{currentDate.y}}
                </span>
                <span class="year"
                      v-show="checkmode == 'year'"
                >
                  {{years[0]}} - {{years[years.length-1]}}
                </span>
              </p>
            </li>
            <li>
              <span class="arrow-right" @click="next"></span>
            </li>
          </ul>

          <!-- 星期面板 -->
          <ul class="vui-calendar-weekday" v-show="modal.weekday">
            <li v-for="name in weekdays">
              {{name}}
            </li>
          </ul>

          <!-- 日期面板 -->
          <ul class="vui-calendar-day" v-show="modal.day">
            <li v-for="number in calendarArr"
               :class="[ number == currentDate.d ? 'active' : '', number ? '': 'null']"
               @click="number ? selectDay( number ) : ''">
              {{number}}
            </li>
          </ul>

          <!-- 月份面板 -->
          <ul class="vui-calendar-month" v-show="modal.month">
            <li v-for="(month, $index) in months"
                :class="[ $index == (currentDate.m-1) ? 'active' : '']"
                @click="selectMonth( $index+1 )">
              {{month}}
            </li>
          </ul>

          <!-- 年份面板 -->
          <ul class="vui-calendar-year" v-show="modal.year">
            <li v-for="year in years"
                :class="[ year == currentDate.y ? 'active' : '']"
                @click="selectYear(year)">
              {{year}}
            </li>
          </ul>

          <button type="button" class="vui-calendar-submit"  @click="setDate(date)">Save</button>

        </div>
        <div class="vui-panel" v-show="currentTab == 'time'">
          
          <!-- 时间面板 -->
          <ul class="vui-calendar-time" v-show="modal.time">
            <li>
              <ul class="time-wrapper">
                <li class="time-block">
                  <span class="time-number hours">
                    {{currentDate.h}}
                  </span>
                </li>
                <li class="time-semicolon">
                  <span class="time-number">
                    :
                  </span>
                </li>
                <li class="time-block">
                  <span class="time-number minutes">
                    {{currentDate.mm}}
                  </span>
                </li>
                <li class="time-semicolon">
                  <span class="time-number">
                    :
                  </span>
                </li>
                <li class="time-block">
                  <span class="time-number second">
                    {{currentDate.s}}
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <label class="key">Hours:</label>
              <vui-range 
                class="time-range" 
                :max="24" 
                :min="0" 
                :step="1" 
                :value="currentDate.h"
                :onchange="handleHoursRangeChange"
              >
              </vui-range>
            </li>
            <li>
              <label class="key">Minutes:</label>
              <vui-range 
                class="time-range" 
                :max="60" 
                :min="0" 
                :step="1" 
                :value="currentDate.mm"
                :onchange="handleMinutesRangeChange"
              >
              </vui-range>
            </li>
            <li>
              <label class="key">Second:</label>
              <vui-range 
                class="time-range" 
                :max="60" 
                :min="0" 
                :step="1" 
                :value="currentDate.s"
                :onchange="handleSecondRangeChange"
              >
              </vui-range>
            </li>
          </ul>
          <button type="button" class="vui-calendar-submit" @click="setDate(date)">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vuiRange from '../vui-range/vui-range.vue';
  export default {
    components: {
      'vui-range': vuiRange
    },
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
        currentTab: 'date',
        modal: {
          day: true,
          weekday: true,
          picker: false,
          year: false,
          month: false,
          time: true,
          clear: false,
        },
        checkmode: 'default',
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
        months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        weekdays: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
        years: [],
        delayTime: {},
        range: {
          currentEle: null,
        }
      };
    },
    computed: {
      date () {
        let m = this.formatZero(this.currentDate.m);
        let d = this.formatZero(this.currentDate.d);
        let h = this.formatZero(this.currentDate.h);
        let mm = this.formatZero(this.currentDate.mm);
        let s = this.formatZero(this.currentDate.s);
        return `${this.currentDate.y}-${m}-${d} ${h}:${mm}:${s}`;
      },
      timePicked () {
        this.currentDate.h = this.formatZero(this.currentDate.h);
        this.currentDate.mm = this.formatZero(this.currentDate.mm);
        this.currentDate.s = this.formatZero(this.currentDate.s);
        return `${this.currentDate.h}:${this.currentDate.mm}:${this.currentDate.s}`;
      }
    },
    // 模块编译/挂载之后(不保证组建已在 document 中)
    mounted: function(){
      let self = this;
      let time;

      self.__addEvent(document, 'mouseup', function(e){
        time = setTimeout(function(){
          self.hidePickerModal();
        },50);
      })

      self.__addEvent( self.$el, 'click', function( e ){
        window.clearTimeout( time );
      })

      self.initCurrentDate( self.dateDefault );
      self.initCalendarArr();
      
      self.__addEvent(document, 'keyup', function( e ){
        if( self.modal.picker == true && e.keyCode == 13 ){
          self.setDate( self.getFomatResult() );
        }
      })


      function handleInputChange(e){
        if( e.target.value != '' ){
          self.modal.clear = true;
        }
      }

      self.__addEvent(self.$refs.input, 'input', handleInputChange)

      self.__addEvent(self.$refs.input, 'propertychange', handleInputChange)
      
    },
    methods: {
      switchTab( _tabname ) {
        this.currentTab = _tabname;
        if( _tabname == 'date' ){
          this.switchDayView();
        }
      },
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
          this.modal.clear = true;
        }else{
          this.modal.clear = false;
        }
        this.addClass('active');
        this.showPickerModal();
      },
      // 当input blur 时候 $el addClass('active')
      handleInputBlur() {
        let self = this;
        let t = setTimeout(function(){
          self.modal.clear = false;
          window.clearTimeout( t );
        },100)
        this.removeClass('active')
      },
      switchDayView() {
        this.modal.weekday = true;
        this.modal.day = true;
        this.modal.month = false;
        this.modal.year = false;
        this.checkmode = 'default';
      },
      showDayModal() {
        this.modal.weekday = true;
        this.modal.day = true;
      },
      // 年份modal显示/隐藏
      showYearModal() {
        this.checkmode = 'year';
        this.calcYears();
        this.modal.year = true;
        this.modal.weekday = false;
        this.modal.day = false;
        this.modal.month = false;
      },
      hideYearModal() {
        this.modal.year = false;
      },
      // 月份modal显示/隐藏
      showMonthModal() {
        this.checkmode = 'month';
        this.modal.month = true;
        this.modal.weekday = false;
        this.modal.day = false;
        this.modal.year = false;
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
        this.checkmode = 'default';
        this.currentDate.m = _index;
        this.initCalendarArr();
        this.hideMonthModal();
        this.showDayModal();
      },
      // 选择年
      selectYear( _year) {
        this.checkmode = 'default';
        this.currentDate.y = _year;
        this.initCalendarArr();
        this.hideYearModal();
        this.showDayModal();
      },
      next() {
        if( this.checkmode == 'default' || this.checkmode == 'month' ){
          this.nextMonth();
        }
        if( this.checkmode == 'year'){
          this.currentDate.y = this.currentDate.y + 10;
          this.calcYears();
        }
      },
      last() {
        if( this.checkmode == 'default' || this.checkmode == 'month' ){
          this.lastMonth();
        }
        if( this.checkmode == 'year'){
          this.currentDate.y = this.currentDate.y - 10;
          this.calcYears();
        }
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
          h: this.formatZero(h),
          mm: this.formatZero(mm),
          s: this.formatZero(s) 
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
      formatZero( _number ) {
        let number = Number(_number);
        return number < 10 ? '0' + number : number;
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
      handleSecondRangeChange( _s ){
        this.currentDate.s = this.formatZero(_s);
      },
      handleMinutesRangeChange( _mm ){
        this.currentDate.mm = this.formatZero(_mm);
      },
      handleHoursRangeChange( _h ){
        this.currentDate.h = this.formatZero(_h) ;
      },
      getFomatResult(){
        let m = this.formatZero(this.currentDate.m);
        let d = this.formatZero(this.currentDate.d);
        let h = this.formatZero(this.currentDate.h);
        let mm = this.formatZero(this.currentDate.mm);
        let s = this.formatZero(this.currentDate.s);
        return `${this.currentDate.y}-${m}-${d} ${h}:${mm}:${s}`;
      },
      __addEvent( _element, _type, __handler ) {
        if( _element.addEventListener ){
          _element.addEventListener(_type,__handler,false);
        }else if( _element.attachEvent ){
          _element.attachEvent('on'+_type,__handler);
        }else{
          _element['on'+_type]=__handler;
        }
      },
    }
  };
</script>

