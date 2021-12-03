import '../css/main.css'
import myCharts from './charts'

new myCharts({
  select: '#box1',
  ratio: 1.5,
  type: 'cirque',
})

new myCharts({
  select: '#box2',
  ratio: 1.5,
  type: 'line',
  data: [
    {
      xVal: '周一',
      yVal: 40,
    },
    {
      xVal: '周二',
      yVal: 70,
    },
    {
      xVal: '周三',
      yVal: 30,
    },
    {
      xVal: '周四',
      yVal: 80,
    },
    {
      xVal: '周五',
      yVal: 30,
    },
    {
      xVal: '周六',
      yVal: 20,
    },
    {
      xVal: '周日',
      yVal: 90,
    },
  ],
})

new myCharts({
  type: 'histogram',
  ratio: 1.5,
  select: '#box3',
  data: [
    {
      xVal: 'vue',
      yVal: 80,
    },
    {
      xVal: 'react',
      yVal: 70,
    },
    {
      xVal: 'angular',
      yVal: 40,
    },
    {
      xVal: 'webpack',
      yVal: 90,
    },
    {
      xVal: 'nodeJs',
      yVal: 60,
    },
    {
      xVal: 'typescript',
      yVal: 40,
    },
    {
      xVal: 'ES6+',
      yVal: 100,
    },
  ],
})
