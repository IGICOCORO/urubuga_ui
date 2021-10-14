<template>
  <div id="app">
    <div id="nav">
     <navbar/>
     </div>
    <router-view/>
  </div>
</template>
<script>
import NavBar from "./components/navbar"
export default {
  components: { NavBar },
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

