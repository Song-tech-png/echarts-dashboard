
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
var data = [
    
     {name: '上海', value: 160},
     {name: '攀枝花', value: 150},
     {name: '厦门', value: 166},
     {name: '湛江', value: 153},
     {name: '西安', value: 198},
     {name: '北京', value: 250},
     {name: '徐州', value: 179},
     {name: '大理', value: 155},
     {name: '武汉', value: 188},
    
];
var geoCoordMap = {
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '厦门':[118.1,24.46],   
    '湛江':[110.359377,21.270708],
    '西安':[108.95,34.27],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '大理':[100.25,25.60],
    '武汉':[114.31,30.52],  
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
option = {
  title: {
        text: '毕业旅游打卡城市规划',
        left: 'center',
		top:'40',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
		zoom:1.2,
        itemStyle: {
            normal: {
                areaColor: 'rgba(2,37,101,.5)',
                borderColor: 'rgba(112,187,252,.5)'
            },
            emphasis: {
                areaColor: 'rgba(2,37,101,.8)'
            }
        }
    },

    series : [
        {
            name: '城市名',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
             symbol: "pin",
            symbolSize: function (val) {
                return val[2] / 8;
            },
            label: {
                normal: {
                    color: "#fff",
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffdb5c'
                }
            }
        },

    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

