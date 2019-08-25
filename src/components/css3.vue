<template>
<div class="main">
    <h1>水平垂直居中</h1>
    <h2>子元素不固定宽高</h2>
    <h3>flex</h3>
    <div class="box box0">
  	    <div class="content0">
              <span>hell</span>
              <br/>
              ssssssss
              <br/>
              shshsh
  		</div>
    </div>
    <h3>position+translate</h3>
    <div class="box box1">
  	    <div class="content">
              <span>hell</span>
              <br/>
              ssssssss
              <br/>
              shshsh
  		</div>
    </div>
    <h3>table-cell+vertical-align</h3>
    <div class="box box2">
  	    <div class="content2">
              <span>hell</span>
              <br/>
              ssssssss
              <br/>
              shshsh
  		</div>
    </div>
    <h2>子元素固定宽高</h2>
    <h3>top,right,left,bottom:0+margin:auto</h3>
    <div class="box box3">
  	    <div class="content3">
              <span>hell</span>
              <br/>
              ssssssss
              <br/>
              shshsh
  		</div>
    </div>
</div>
</template>
<style scoped>
.main{
    padding-left: 20px;
}
.box{
    margin:10px;
    width:200px;
    height: 200px;
    background-color: skyblue;
}
.box0{
    display: flex;
    justify-content: center;
    align-items: center;
}
.box1{		
    
    position: relative;
}
.content{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.box2{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.content2{
    display: inline-block;
}
.box3{	
    position: relative;
}
.content3{
    width:50%;
    height: 50%;
    border:2px solid rgb(243, 137, 137);
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
}
</style>