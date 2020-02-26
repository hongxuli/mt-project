<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.active?'s-nav-active':'']"
        @click="navSelect"
      >
        {{ item.txt }}
      </dd>
    </dl>
    <ul>
      <Item
        v-for="(item,idx) in products[page]"
        :key="idx"
        :meta="item"
      />
    </ul>
  </div>
</template>
<script>
import Item from './product.vue'
export default {
  components: {
    Item
  },
    props: {
    list: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
       nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        }, {
          name: 's-price',
          txt: '价格最低',
          active: false
        }, {
          name: 's-visit',
          txt: '人气最高',
          active: false
        }, {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ],
      products: [],
      page: 0
    };
  },
  created(){
    this.pagenation()
  },
  methods:{
    pagenation:function () {

      let self = this
      let numOfPage = 0
      if(self.list){
        numOfPage = self.list.length/10
        let rest  = self.list.length%10
        if(rest != 0 ) numOfPage++

        for(let i = 0 ; i<numOfPage; i++){
          let start = i*10
          let end = (i+1)*10
          if(i==numOfPage-1){
            end = start+rest+1
            let subList = self.list.slice(start,end)
            self.products.push(subList)
          }else{
            let subList = self.list.slice(start,end)
            self.products.push(subList)
          }

        }

      }
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
