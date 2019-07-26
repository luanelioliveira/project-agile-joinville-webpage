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
export default {
  data () {
    return {
      patrocinadores: [
        {
          nome: 'FESC',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FFESC.png?alt=media&token=c8bf30e0-eb65-4c7e-988b-4fa2155a0710'
        },
        {
          nome: 'IdealCards',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FIdealCards.png?alt=media&token=b995fa6c-af99-4c84-8fb0-06a65960701a'
        },
        {
          nome: 'Kirihub',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FKirihub.png?alt=media&token=f5974f7c-6fe5-4acb-98a4-a14cb6aca4a0'
        },
        {
          nome: 'Magrathea Labs',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FMagratheaLabs-1.png?alt=media&token=d6386a2e-6dc6-4a99-9994-9f85297b0132'
        },
        {
          nome: 'Senai',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FSenai.png?alt=media&token=c029e3eb-0d95-49cb-8bce-d2ecb3c99362'
        },
        {
          nome: 'Softexpert',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fsoftexpert.png?alt=media&token=4ee9412a-fc51-42f7-b33f-e56b8071ad64'
        },
        {
          nome: 'Supero',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fsupero-nova.png?alt=media&token=9ca30921-d137-4f0c-83a4-9c965621935d'
        },
        {
          nome: 'Unimed Santa Catarina',
          url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FUNIMEDSC.png?alt=media&token=65290a98-510f-4257-ba44-a491d6999b30'
        }
      ],
    }
  }  
}
</script>

