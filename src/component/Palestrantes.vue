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
          <h2 class="display-2 font-weight-thin">PALESTRANTES</h2>         
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex 
                v-for="(palestrante, i) in palestrantes"
                :key="i"
                xs12 md6 lg3 xl3
            >                
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-avatar size="200" color="grey lighten-4">
                    <img :src="palestrante.imagem" alt="avatar">
                  </v-avatar>
                </v-card-text>
                <v-card-title class="layout justify-center">
                  <div>
                    <h2 class="headline text-xs-center font-weight-light">{{palestrante.nome}}</h2>
                    <div class="d-flex">
                      <p class="text-xs-center">
                          <Biografia :palestrante="palestrante" />             
                      </p>
                    </div>
                  </div>                    
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-if="palestrantes.length == 0">
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">              
                  Não há palestrantes cadastrados
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
import firebase from 'firebase';
import Biografia from './Biografia'

export default {
  components: { 
    Biografia,
  },
  data () {
    return {
      palestrantes: [],         
    }
  },
  mounted() {
    this.getPalestrantes();
  },
  methods: {
    getPalestrantes() {
      const db = firebase.firestore();
      const palestrantesCollection = db.collection('palestrantes').orderBy("nome");
      palestrantesCollection.get()
        .then( snapshot => {
          const palestrantes = [];
          snapshot.forEach(doc => {
            palestrantes.push({
              nome: doc.data().nome,
              imagem: doc.data().imagem,
              biografia: doc.data().biografia,
            });
          });
          this.palestrantes = palestrantes;
        });
    }
  }, 
}
</script>

