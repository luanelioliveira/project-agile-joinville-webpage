<template>
<v-container>
  
  <v-container fluid>
    <v-layout align-center column justify-center>
      <v-flex>
        <h1 class="display-2 font-weight-thin">Apoios & Patrocínios</h1>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-md>
    <v-layout>
      <v-flex xs12 sm12>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="apoiador in apoiadores" :key="apoiador.nome"
                align-center
                justify-center
                layout
                text-xs-center >
                  
                  <v-avatar size="160">
                      <v-img 
                        :alt="apoiador.nome" 
                        :src="apoiador.urlImage" 
                        :lazy-src="apoiador.urlImage"
                        aspect-ratio="1" class="grey lighten-2" >
                        <template v-slot:placeholder>
                          <v-layout fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                  </v-avatar>

              </v-flex>
            </v-layout>
          </v-container>
      </v-flex>
    </v-layout>
  </v-container>        
</v-container>
</template>

<script>
export default {
  data () {
    return {
      apoiadores: [
        
        {
          nome: 'Senai Joinville',
          urlImage: require('@/assets/senai.jpg')
        },
        {
          nome: 'FESC Tecnologia',
          urlImage: require('@/assets/fesc.png')
        },
        {
          nome: 'Magrathea Labs',
          urlImage: require('@/assets/magrathea.png')
        },
        {
          nome: 'Unimed SC',
          urlImage: require('@/assets/unimed.jpg')
        }
      ]
    }
  },  
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
