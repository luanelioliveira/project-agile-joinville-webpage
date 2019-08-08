<template>

  <section>
    <v-layout column >
      <v-flex xs12 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-2 font-weight-thin">PROGRAMAÇÃO</h2>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap justify-space-around fill-height column>
            <ListaPalestras/>
          </v-layout>
        </v-container>            
      </v-flex>
    </v-layout>
  </section>

</template>

<script>
import ListaPalestras from './palestras/ListaPalestras'

export default {
  components: { 
    ListaPalestras,
  },
  data () {
    return {
      
    }
  }  
}
</script>

