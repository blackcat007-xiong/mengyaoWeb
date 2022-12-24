window.addEventListener('load', function() {
    var myChart = echarts.init(document.querySelector('.datail_echarts'));
    var option = {
        color: ['red'],
        title: {
            text: '旅游人数比例图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['旅游人数百分比']
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            //留白策略
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2019', '2020', '2021', '2022']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '旅游人数百分比',
            // 图表类型是线形图
            type: 'line',
            data: [80, 60, 30, 10]
        }]
    };

    myChart.setOption(option);
})