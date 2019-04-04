<template>
<v-container>
  
  <v-container fluid>
    <v-layout align-center column justify-center>
      <v-flex>
        <h1 class="display-2 font-weight-thin">Últimas Vagas Publicadas</h1>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-md>
    <v-layout wrap>
      
      <v-flex xs12 md4 v-for="vaga in vagas" :key="vaga.papel">
        <v-card max-width="400">
          <v-card-title>
            <v-icon large left>fas fa-user-tie</v-icon>
            <span class="title font-weight-thin ">{{vaga.papel}}</span>
          </v-card-title>
          <v-card-text>            
            {{vaga.descricao}}
          </v-card-text>
          <v-card-text >
            <div  class="font-weight-medium">{{vaga.empresa}}</div>
            <div>{{vaga.contato}}</div>
            <div><span class="caption">{{vaga.dataPublicada}}</span></div>
          </v-card-text>                  
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>        

  <v-container fluid>
    <v-layout align-center column justify-center>
      <v-flex>
        <v-btn large outline to="/jobs">Ver Mais</v-btn>
      </v-flex>
    </v-layout>    
  </v-container>   

</v-container>
</template>

<script>
export default {
  data () {
    return {
      vagas: [
        {
          id: 1,
          papel : 'Desenvolvedor Front-End',
          empresa : 'Empresa Tecnologia',
          contato : 'teste@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
        },
        {
          id: 2,
          papel : 'Desenvolvedor Back-End',
          empresa : 'Empresa Labs',
          contato : 'teste@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
        },
        {
          id: 3,
          papel : 'Desenvolvedor Oracle',
          empresa : 'Empresa Tech',
          contato : 'teste@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
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
