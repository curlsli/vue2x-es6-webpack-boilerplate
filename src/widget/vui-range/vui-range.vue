<style scoped>
  .vui-range-wrapper {
    width: 100%;
    height: 100%;
    background-color: #414755;
    overflow: hidden;
  }
  .vui-range-wrapper .range,
  .vui-range-wrapper .range-btn {
    float: left;
  }
  .vui-range-wrapper .range {
    width: 30%;
    height: 3px;
    background-color: #13a9ba;
    transition: all 0.01s ease-in-out;
  }
  .vui-range-wrapper .range-btn {
    height: 3px;
    width: 0;
  }
  .vui-range-wrapper .range-btn:before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: #ffffff;
    border-radius: 100%;
    margin-top: -9px;
    margin-left: -10px;
    cursor: pointer;
    /*transition: all 0.2s ease-in-out;*/
  }
</style>

<template>
  <div class="vui-template-wrapper">
    <div class="vui-range-wrapper">
      <div ref="range" 
           class="range"
           :style="{'width': calcPercent}"
      >
      </div>
      <div ref="rangeBtn"
           @mousedown="__onMousedown"
           class="range-btn">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: null
      },
      onchange: {
        type: Function
      },
      max: {
        type: Number
      },
      min: {
        type: Number
      },
      step: {
        type: Number
      },
      background: {
        type: String
      },
      color: {
        type: String
      }
    },
    data () {
      return {
        element: null,
        model: {
          value: null,
          min: 0,
          max: 100
        },
        rangeWidth: 0,
      }
    },
    computed: {
      calcPercent() {
        return parseInt(this.value/(this.max || 100)*100) + '%';
      }
    },
    // 模块编译/挂载之后(不保证组建已在 document 中)
    mounted() {
      this.rangeWidth = this.value/(this.max || 100)*this.$el.offsetWidth;
    },
    updated() {

    },
    methods: {
      __onMousedown( e ) {
        if( e.which == 1 ){
          this.element = e;
          this.oldWith = this.$refs.range.offsetWidth;
          this.__addEvent(document,'mousemove', this.__onMousemove);
          this.__addEvent(document,'mouseup', this.__onMouseup);
        }
      },
      __onMousemove( e ) {
        // 拦截没有点击的情况
        if( !this.element ){
          return;
        }
        let wrapperWidth = this.$el.offsetWidth;
        let oldX = this.element.clientX;
        let curX = e.clientX;
        let moveX = curX - oldX;
        let newWidth = this.oldWith + moveX;
        if( newWidth > wrapperWidth ){
          newWidth = wrapperWidth;
        }else if( newWidth < 0 ){
          newWidth = 0;
        }
        let result = parseInt( newWidth/wrapperWidth*(this.max || 100) );
        this.__onChange( result );
      },
      __onMouseup( e ) {
        this.element = null;
        this.__removeEvent(document,'mousemove', this.__onMousemove);
        this.__removeEvent(document,'mouseup', this.__onMouseup);
      },
      __onChange( _result ) {
        this.onchange && this.onchange( _result );
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
      __removeEvent( _element, _type, __handler ) {
        if( _element.removeEventListener ){
          _element.removeEventListener(_type,__handler,false);
        }else if( _element.detachEvent ){
          _element.detachEvent('on'+_type,__handler);
        }else{
          _element['on'+_type]=null;
        }
      }
    }
  };
</script>

