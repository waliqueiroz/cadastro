<template>
    <div>
        <topo></topo>
        <router-view/>
        <rodape></rodape>
    </div>
</template>

<script>
import Topo from '@/components/layout/Topo'
import Rodape from '@/components/layout/Rodape'
export default {
  name: "SiteTemplate",
  data() {
    return {};
  },
  components: {
      Topo,
      Rodape
  }
};
</script>

<style scoped>
</style>
