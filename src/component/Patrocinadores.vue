<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"          
      justify-space-around
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-2 font-weight-thin">APOIOS & PATROCÍNIOS</h2>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex 
                v-for="(patrocinador, i) in patrocinadores"
                :key="i"
                xs12 sm6 md6 lg4 xl4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-avatar size="240" color="grey lighten-4">
                    <img :src="patrocinador.url" alt="avatar">
                  </v-avatar>
                </v-card-text>                    
              </v-card>
            </v-flex>    
          </v-layout>
        </v-container>
      </v-flex>                        
    </v-layout>
  </section>
</template>

<script>
import service from '../services/PatrocinadoresService';

export default {
  data () {
    return {
      patrocinadores: [],      
    }
  },
  mounted() {
    service.getPatrocinadores()
    .then(result => {
      this.patrocinadores = result;
    });
  },
}
</script>

