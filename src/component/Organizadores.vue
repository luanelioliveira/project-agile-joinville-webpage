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
          <h2 class="display-2 font-weight-thin">ORGANIZADORES</h2>         
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex 
                v-for="(organizador, i) in organizadores"
                :key="i"
                xs6 md4 lg3 xl3
            >                
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-avatar size="140" color="grey lighten-4">
                    <img :src="organizador.imagem" alt="avatar">
                  </v-avatar>
                </v-card-text>
                <v-card-title class="layout justify-center">
                  <p class="text-xs-center">
                    <v-btn small depressed flat v-on:click="openPage(organizador.linkedin)">
                      {{organizador.nome}}
                    </v-btn>                                              
                  </p>                    
                </v-card-title>
                <v-card-text>
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
      organizadores: [
        {
          nome: 'Andre Ganske',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Fandre.jpg?alt=media&token=e90ca727-d13d-40da-acfd-aa1b5ac7ed84',
          linkedin: 'https://www.linkedin.com/in/andreganske/',
        },
        {
          nome: 'Camila Steffen',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Fcamila.jpg?alt=media&token=59535030-12da-437b-a279-1a8451cc18c6',
          linkedin: 'https://www.linkedin.com/in/camila-steffen/',
        },
        {
          nome: 'Fabio Trindade',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Ffabio.jpg?alt=media&token=839e76fe-3166-400f-aa8a-ba32b13c5f37',
          linkedin: 'https://www.linkedin.com/in/fabio-trindade-13a84a19/',
        },
        {
          nome: 'Felipe Toigo',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Ffelipe.jpg?alt=media&token=6048fe8f-e0ef-492e-94fc-fb1e694a5baf',
          linkedin: 'https://www.linkedin.com/in/felipetoigo/',
        },
        {
          nome: 'Gean Alex Pereira',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Fgean.jpg?alt=media&token=67b3a742-98c5-4b52-b3fd-6cddb889668d',        
          linkedin: 'https://www.linkedin.com/in/geanalexpereira/',
        },
        {
          nome: 'Luan Eli Oliveira',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Fluan.jpg?alt=media&token=aed96665-a986-438b-9d61-97c75178006a',
          linkedin: 'https://www.linkedin.com/in/luanoliveira/',
        },
        {
          nome: 'Richard Borges',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Frichard.jpg?alt=media&token=d8ecc153-d850-4b21-baf1-ae6924e2a117',
          linkedin: 'https://www.linkedin.com/in/richardborgescc/',
        },
        {
          nome: 'Tiago Jensen',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Forganizadores%2Ftiago.jpg?alt=media&token=dffceca7-bbeb-45c1-a461-9cde8119015b',
          linkedin: 'https://www.linkedin.com/in/tiagojensen/',
        },
      ],      
    }
  },
  methods : {
    openPage(page) {
      window.open(page,'_blank');
    },
  }, 
}
</script>

