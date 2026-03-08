 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_1()
echarts_2()
echarts_3()
echarts_4()
echarts_5()
echarts_6()


function echarts_1(){
    var myChart = echarts.init(document.getElementById('jinzita'));
    
    var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
    color:[ "rgba(152, 198, 25, 1)","rgba(29, 149, 190, 1)","rgba(190, 160, 29, 1)","rgba(208, 218, 61, 0.5)"],
        series: [
          {
            name: '收入',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '30%',
            top: '5%',
            colorBy: "data",
            label: {
              position: 'left'
            },
            data: [
              { value: 60, name: '寒假兼职' },
              { value: 30, name: '课外兼职' },
              { value: 10, name: '节日红包' },
              { value: 80, name: '暑假兼职' },
              { value: 100, name: '父母资助' }
            ]
          },
          {
            name: '支出',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '30%',
            top: '50%',
            sort: 'ascending',
            label: {
              position: 'right'
            },
            data: [
              { value: 60, name: '吃饭开销' },
              { value: 30, name: '学习开销' },
              { value: 10, name: '护肤品开销' },
              { value: 80, name: '生活用品开销' },
              { value: 100, name: '衣服开销' }
            ]
          }
        ]
      };
      myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }



function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
var data = [683, 234, 234, 523, 345, 320, 280, 271, 254, 229, 210, 190, 182]
option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: '' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend:{
        orient: 'vertical',
        textStyle:{
            fontSize:8,
            color:"#fff"
    },
    left:"right",
    itemStyle: {
        normal: {
            shadowBlur: 30,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
        }

    }, 
},
   grid: {
          left: '0',
          top:"13%",
          right: '0',
          bottom: '0%',
         containLabel: true
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: '' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },

    xAxis: {
      type: 'value',
       show: false
    },
    yAxis: {
      type: 'category',
      data: ['小航（男）', '小雪（女）', '小娇（女）', '小雨（男）', '小寒（女）', '小杰（男）'],
      inverse: true,
          axisLine: { show: false},
          splitLine:{ show: false},
          axisTick:{ show: false},
     axisLabel: {
              textStyle: {
                  color:"#fff"
              },
          },
           
    },
    series: [
      {
        name: '体重(kg)',
        type: 'bar',
         yAxisIndex: 0,
        stack: 'total',
        barWidth: 20,
        itemStyle:{
            barBorderRadius: [50,0,0,50],
            color:"rgba(35, 184, 194, 1)"
        },
        label: {
          show: true,
           normal: {
                  show: true,
                  formatter: '{c}',
              }
        },
        emphasis: {
          focus: 'series'
        },
        data: [66,46,47.5,70,46,67]
      },
      
      {
        name: '年龄',
        type: 'bar',
        stack: 'total',
        
        label: {
          show: true
        },
        itemStyle:{    
            color:"rgba(211, 120, 34, 1)"
    
        },
        emphasis: {
          focus: 'series'
        },
        data: [18, 25, 26,19,22,23]
      },
      
      {
        name: '身高(cm)',
        type: 'bar',
        stack: 'total',
        itemStyle:{
            barBorderRadius: [0,50,50,0],
            color:"rgba(187, 190, 33, 1)"
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [181,175,163,179,164,175]
      }
    ]
  };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

        
    }

//************************************************************************** */

	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        //var myChart = echarts.init(document.querySelector(".box .boxnav"));
         var myChart = echarts.init(document.getElementById('echart3'));
          var option = {
            grid: {
                   left: '0',
                   top: '40',
                   right: '0',
                   bottom: '10',
                   width:"60%",
                   containLabel: true,
                   backgroundColor:"red"
               },
                 /*  legend: {
                       top: 0,
                       left:"center",
                       textStyle: {
                       color: "#fff",
                   },       
                   },*/
           
                   tooltip: {
                       trigger: 'axis',
                       axisPointer: { // 坐标轴指示器，坐标轴触发有效
                           type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                       }
           
                   },
           
                   xAxis: {
                       type: 'category',
                       data: ["专业核心课程","专业课程","学科基础","专业选修","通识课程",],
                       axisTick: { //---坐标轴 刻度
                           show: true, //---是否显示
                       },
           
                       axisLine: { //---坐标轴 轴线
                           show: true, //---是否显示
                           lineStyle: {
                               color: 'rgba(255,255,255,.1)',         
                               width: 1,          
                               type: 'dotted',
                           },
           
                       },
           
                       axisLabel: {//X轴文字
                           textStyle: {
                               fontSize: 10,
                               color: '#fff'
                           },
           
                       },
           
                   },
           
                   yAxis: {
           
                       type: 'value',
           
                       splitLine: {//分割线
           
                           show: true,
           
                           lineStyle: {
                          color: 'rgba(255,255,255,.1)',
           
                               width: 1,
                               type: 'dotted'
           
                           }
           
                       },
           
                       axisLabel: {//Y轴刻度值
                           formatter: '{value}',
                           textStyle: {
                               fontSize: 15,
                               color: '#fff'
                           },
                       },
                       axisLine: { //---坐标轴 轴线
                           show: false, //---是否显示
           
                       },
           
                   },
                   color: ['#37a2da','#9fe6b8','#e7bcf3','#8378ea'],
           
                   series: [{
                       name: '学期成绩',
                       type: 'bar',
                       data: [168,170,88,92,87],
                       barWidth: 20,
                       itemStyle: {
                           normal: {
                               barBorderRadius: [50,50,0,0],
                               color: "#446ACF",
           
                           }
           
                       },
           
                   },
                   {
                    name: '圆环',
                    type: 'pie',
                    
                    center: ['80%', '60%'],
                    avoidLabelOverlap: false,
                   
                    itemStyle: {
                        normal: {
                            shadowBlur: 30,
                            shadowColor: 'rgba(0, 0, 0, 0.4)'
                        },
                      borderColor: '#fff',
                      borderWidth: 0
                    },
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                        label: {
                          show: true,
                          fontSize: 20,
                          fontWeight: 'bold'
                        },
                      },
                   
                    label: {normal: {formatter: '{b} :\n{c}({d}%)'}},
                    labelLine: {
                        normal: {
                             length:5,
                             length2:15,
                            lineStyle: { width: 1}
                        }
                    },
                    data: [
                      { value: 1, name: '优秀' },
                      { value: 4, name: '良好' },
                      { value: 5, name: '及格' },
                      { value: 0, name: '不及格' },
                    ]
                  }
                ],           
         };
          myChart.setOption(option);
          //窗口等比缩放
          window.addEventListener("resize",function(){
              myChart.resize();
          });
          //柱状图更换数据
          var dataAll = [
            {year: "大一上", data: [168,170,88,92,87] },
            { year: "大一下", data: [98,160,188,82,85] },
            { year: "大二上", data: [152,128,80,90,81] },
            { year: "大二下", data: [158,175,82,81,80] },
            { year: "大三上", data: [180,173,160,92,0] },
          ];

          //饼图更换数据
          var dataAll1 = [
            {year:"大一上",data:[
            { value: 1, name: '优秀' },
            { value: 4, name: '良好' },
            { value: 5, name: '及格' },
            { value: 0, name: '不及格' }]},
            {year:"大一下",data:[
                { value: 3, name: '优秀' },
                { value: 2, name: '良好' },
                { value: 3, name: '及格' },
                { value: 0, name: '不及格' }]},
                {year:"大二上",data:[
                    { value: 1, name: '优秀' },
                    { value: 5, name: '良好' },
                    { value: 4, name: '及格' },
                    { value: 0, name: '不及格' }]},
                    {year:"大二下",data:[
                        { value: 2, name: '优秀' },
                        { value: 3, name: '良好' },
                        { value: 5, name: '及格' },
                        { value: 0, name: '不及格' }]},
                        {year:"大三上",data:[
                            { value: 3, name: '优秀' },
                            { value: 3, name: '良好' },
                            { value: 2, name: '及格' },
                            { value: 0, name: '不及格' }]}
          ];

          $(".box h3 ").on("click", "a", function() {
            option.series[0].data = dataAll[$(this).index()].data;
            myChart.setOption(option);
          });
          $(".box h3 ").on("click", "a", function() {
            option.series[1].data = dataAll1[$(this).index()].data;
            myChart.setOption(option);
          });
        
    }

   


//********************************************************************************/

	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("echart4"),"srh");
        var option = { 
 grid: {
        left: '0',
		top: '30',
        right: '0',
        bottom: '10',
        containLabel: true
    },

        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }

        },

        xAxis: {

            type: 'category',

            data: ["大一上","大一下","大二上","大二下","大三上",],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'rgba(255,255,255,.1)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

        },

        yAxis: {
            scale:true,
            type: 'value',
            splitLine: {//分割线
                show: true,
                lineStyle: {
               color: 'rgba(25,255,255,.1)',
                    width: 1,
                    type: 'dotted'
                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,
                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示
            },

        },

        series: [
            {
            name: '学科基础',
            type: 'line',
            stack: 'Total',
            data: [90,88,82,86,91],
        }, 
{
name: '专业核心',
type: 'line',
stack: 'Total',
data: [85,80,92,86,81],
}, 
{

name: '专业选修',
type: 'line',
stack: 'Total',
data: [86,88,92,80,83],
}, 
{

name: '专业课程',
type: 'line',
stack: 'Total',
data: [83,80,82,76,79],
}, 

{
name: '通识课程',
type: 'line',
stack: 'Total',
data: [91,83,85,86,88],
}, 
    ]

    };
    myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

        $('#sel').change(function() {
            myChart.dispose();
            let Theme = $ (this).val();
            myChart = echarts.init(document.getElementById('echart4'),Theme);
            myChart.setOption(option);
    
        }
    )
    }
	function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
 option = {
          legend: {
           orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            textStyle:{
                color:'rgba(255,255,255,.5)'
            },
              top:'25%',
              left:"75%",
          right:30,
            data:['考研','考公','就业','入伍']
        },
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
       
        calculable : true,
        series : [
            {
              
                type:'pie',
                radius : [20, 70],
                center: ["38%", "50%"],
                roseType : 'area',
                data:[ 
                    {value:25, name:'考研'},
                    {value:15, name:'考公'},
                    {value:13, name:'就业'},
                    {value:10, name:'入伍'},
               
                ],
                
                 label: {
                 normal: {
                     formatter: function(param) {
                         return param.name +':\n' + param.value +'\n';
                     }
    
                 }
             },
             labelLine: {
                 normal: {
                      length:5,
                      length2:15,
                     lineStyle: { width: 1}
                 }
             },
    
             itemStyle: {
                 normal: {
                     shadowBlur: 30,
                     shadowColor: 'rgba(0, 0, 0, 0.4)'
                 }
    
             },
            }
        ]
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
option = {
   
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        indicator: [{
            text: '篮球/喜剧',
            max: 10
        }, {
            text: '跑步/动漫',
            max: 10
        }, {
            text: '有氧操/韩剧',
            max: 10
        }, {
            text: '羽毛球/恐怖',
            max: 10
        }, {
            text: '乒乓球/动作',
            max: 10
        }],
        
        center: ['48%', '60%'],
        radius: '70%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
    
        name: {
            padding:-5,
            formatter: '{value}',
            textStyle: {
              
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        
        tooltip: {
            trigger: 'item'
        },
        data: [{
            name: '运动类型',
            value: [5, 7, 2, 1, 3],
            lineStyle: {
                normal: { 
                    color:'#03b48e',
                    width:2,
                }
            },
            areaStyle: {
                normal: {
                    color: '#03b48e',
                    opacity:.4
                }
            },
            symbolSize: 0,
          
        }, {
            name: '影视类型',
            value: [3, 2, 7, 5, 6],
            symbolSize: 0,
            lineStyle: {
                normal: { 
                    color:'#3893e5',
                    width:2,
                }
            },
                 areaStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 0.5)'
                }
            }
        }]
    }, ]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









