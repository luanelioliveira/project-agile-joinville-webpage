<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm4>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="display-1 font-weight-thin">Sobre nós</div>
            </v-card-title>
            <v-card-text>
              O Agile Joinville é uma organização que não possui fins lucrativos, 
              mantida por um time de especialistas que fazem parte da comunidade joinvilense de métodos ágeis, 
              que compartilham do objetivo de incetivar e disseminar a cultura ágil por toda região.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="display-1 font-weight-thin">Contate-nos</div>
            </v-card-title>
            <v-card-text>
              Envie uma email para nós com sua elogios, críticas e sugestões.
            </v-card-text>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="black--text text--lighten-2">place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Joinville, Santa Catarina</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="black--text text--lighten-2">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{email}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>   
</template>

<script>
export default {
  data () {
    return {      
      email: 'agilejoinville@gmail.com',
    }
  }  
}
</script>

