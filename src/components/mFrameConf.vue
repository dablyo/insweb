<template>
    <div id="conf">
        <el-col :span="3">    
            <div class="grid-content bg-purple" > 
                <leftconftree></leftconftree>
            </div>  
        </el-col>
        <el-col :span="15">    
            <div class="grid-content bg-secondary"> 
              <div class="vis-network" tabindex="900" style="position: relative; overflow: hidden; touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); ">
                <canvas width="100%" style="position: relative; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">

                </canvas>
              </div>                
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
import leftconftree from "@/components/mConfLeftTree.vue";
export default {
    name: "conf_frame", 
    components: {leftconftree},
    data: function (){
        return {
            treemsg : "this tree conf_frame",
            mapmsg  : "this map configure_frame",
            rightmsg: "this right configure_frame"
        };
    }
}
</script>
<style scope>
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}

.row-bg {
padding: 4px 2px;
background-color: #f9fafc;
}
.bg-secondary {
    background-color: #4f70ce;
}
.bg-primary {
    background-color: #12bbad;
}
</style>
