var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  radar: {
      indicator: [
        { max: 100 },
        { max: 100 },
        { max: 100 },
        { max: 100 },
        { max: 100 }
      ],
      center: ['50%', '50%'],
      radius: ['0%', '100%'],
      axisName:{
        show: false,
      },
      axisLine:{
        show: false,
      },
      splitLine:{
        show: false,
      },
      splitArea:{
        show: false,
      },
      silent: true,
      
    },
  series: [
    {
      type: 'radar',
      symbol: 'none',
      silent: true,
      lineStyle: {
        opacity: 0.8,
        color: '#fff',
        width: 2,
        join:"round",
        cap: 'round',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0.58,
          y2: 1,
          colorStops: [
            {
              offset: 0.13, color: '#e37dfd' // 0% 处的颜色
           },
           {
              offset: 0.58, color: '#9d5de7' // 0% 处的颜色
           }, 
          {
              offset: 1, color: '#6142d4' // 100% 处的颜色
          }
          ],
          global: false // 缺省为 false
        },
      },
      data: [
        {
          value: [96, 88, 92, 88, 86],
          
        }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);