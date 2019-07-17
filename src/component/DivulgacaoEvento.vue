<template>
  <section>
    <v-parallax src="https://images.pexels.com/photos/2376995/pexels-photo-2376995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="380">
      <v-layout column align-center justify-center>
        <div class="display-2 font-weight-thin white--text mb-3 text-xs-center">Venha participar e adiquirir novos conhecimentos!</div>
        <span class="font-weight-bold font-italic">"Compartilhar conhecimento é o caminho mais próximo da sabedoria..."</span>
        <v-btn class="black mt-5" dark flat round depressed large v-on:click="openPage(inscricoes)">
          FAZER MINHA INSCRIÇÃO
        </v-btn>            
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data () {
    return {
      inscricoes: 'https://inscricoes.agilebrazil.com/',
    }
  },
  methods : {
    openPage(page) {
      window.open(page,'_blank');
    },
  },
}
</script>


