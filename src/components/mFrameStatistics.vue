<template>
    <div>
        <el-col :span="3">    
            <div class="grid-content bg-purple"> 
                {{  treemsg }}
            </div>  
        </el-col>
        <el-col :span="15">    
            <div class="grid-content bg-purple-light"> 
                {{  mapmsg }}
            </div>  
        </el-col>
        <el-col :span="6">    
            <div class="grid-content bg-purple"> 
                {{  rightmsg }}
            </div>  
        </el-col>       
    </div>
</template>

<script>
export default {
    name: "sta_frame",
    data: function (){
        return {
            treemsg : "this tree statistics_frame",
            mapmsg  : "this map statistics_frame",
            rightmsg: "this right statistics_frame"
        };
    }
}
</script>
<style scope>
.el-row {
    margin-top: 4px;
    margin-bottom: 2px;
}
.el-col {
border-radius: 4px;
}
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 4px 2px;
background-color: #f9fafc;
}
</style>


