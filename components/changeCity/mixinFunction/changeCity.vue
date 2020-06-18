
<script>
export default {
  name: 'ChangeCity',
  methods:{
      changeCity:function (item) {

      const position = { province: '', city: item}
      this.$store.dispatch('geo/setPosition',position)
      }
  }

}
</script>
