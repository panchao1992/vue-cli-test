<template>
    <div>
        <div>{{city}}</div>
        <div id="iCenter"></div>
    </div>
</template>
<script>
import MapService from 'wqr-amap'
export default {
    data(){
        return {
            city:''
        }
    },
    created(){
        let obj = {                                     
            id: 'container',                            
            key: '1234567890',
            mapStyle: {                                
                zoom: 14,                             
                resizeEnable: true
            },
        }
        let mapService = new MapService(obj)
        mapService.initMap().then(()=>{
            mapService.showLocation()
        })
        /* let that = this
        var mapObj = new AMap.Map('iCenter');
        mapObj.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
               that.city = result.city
            })
        }) */
    },
    mounted(){
        /* var map = new AMap.Map('iCenter', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom:11, //初始化地图层级
        });
        var options = {
            'showButton': true,//是否显示定位按钮
            'buttonPosition': 'LB',//定位按钮的位置
            'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
            'showMarker': true,//是否显示定位点
            'markerOptions':{//自定义定位点样式，同Marker的Options
            'offset': new AMap.Pixel(-18, -36),
            'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
            },
            'showCircle': true,//是否显示定位精度圈
            'circleOptions': {//定位精度圈的样式
                'strokeColor': '#0093FF',
                'noSelect': true,
                'strokeOpacity': 0.5,
                'strokeWeight': 1,
                'fillColor': '#02B0FF',
                'fillOpacity': 0.25
            }
        }
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                alert(status)
                alert(result)
                if (status === 'complete' && result.info === 'OK') {
                    console.log(result)
                    alert(result)
                }
            })
        }) */
    },
    methods:{

    }
}
</script>
<style scoped>
#iCenter{
    width:100%;
    /* height:800px; */
}
</style>
