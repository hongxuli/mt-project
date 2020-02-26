<template>
  <div class="m-iselect">
    <span class="name">按省份搜素</span>
    <el-select
      v-model="pvalue"
      placeholder="省份"
    >
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市"
    >
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data: ()=>{
    return {
      province:[],
      pvalue:'',
      city:[],
      cvalue:'',
      input:'',
      cities:[],
    }
  },
  watch:{
    pvalue: async function(newPvalue){
      let self = this
      let {status, data:{city}} = await self.$axios.get(`/geo/province/${newPvalue}`)
      if (status === 200){
        self.city = city.map((item)=>{
          return{
            value: item.id,
            label: item.name
          }
        })
        self.cvalue =''
      }
    },

  },
  mounted: async function getProvinces () {
      let self= this
      let {status, data:{province}} = await this.$axios.get('/geo/province')
      if(status === 200){

      this.province = province.map(item=>{
        return {
          value:item.id,
          label:item.name
        }
      })
    } },

  methods:{
    querySearchAsync: async function(queryString,cb){
      if(!this.cities.length){
        let {status,data:{city}} = await this.$axios.get('/geo/city')
        if(status===200){
          this.cities = city.map(item=> {return {value:item.name}})
        }
      }
      cb(this.cities.filter(item=>item.value.indexOf(queryString)>-1))
    },
    handleSelect:function(){
      //redirect to home page with choosen city
    }
  }

}
</script>

<style lang = 'scss'>
@import '@/assets/css/changeCity/iselect.scss';
</style>
