<template>
    <v-container>  
        <v-layout>
            <v-flex>
                <h1 class="display-2 font-weight-thin">Vagas Disponíveis</h1>
            </v-flex>
        </v-layout>
        <v-container>  
        <v-layout row wrap>
            <v-flex xs12>
                <v-expansion-panel popout>
                <v-expansion-panel-content v-for="vaga in vagas" :key="vaga" >
                     <template v-slot:actions>
                        <v-icon color="primary">fas fa-angle-down</v-icon>
                     </template>
                    <template v-slot:header>
                        <div>{{vaga.papel}}</div>
                    </template>
                    <v-card>
                        <v-card-text>{{vaga.descricao}}</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                </v-expansion-panel>
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
