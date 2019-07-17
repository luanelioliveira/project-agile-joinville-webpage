<template>
  <v-app>
    <v-content>
      <Cabecalho />
      <Palestrantes />
      <Programacao />
      <Localizacao />      
      <Patrocinadores />  
      <ItensPatrocinados />   
      <DivulgacaoApoio />     
      
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
      <Organizacao /> 
      <Rodape /> 
    </v-content>
  </v-app>
</template>

<script>
import Cabecalho from './component/Cabecalho'
import Palestrantes from './component/Palestrantes'
import Programacao from './component/Programacao'
import Localizacao from './component/Localizacao'
import Patrocinadores from './component/Patrocinadores'
import ItensPatrocinados from './component/ItensPatrocinados'
import DivulgacaoApoio from './component/DivulgacaoApoio'
import Organizacao from './component/Organizacao'
import Rodape from './component/Rodape'

export default {
  components: { 
    Cabecalho,
    Palestrantes,
    Programacao,  
    Localizacao,
    Patrocinadores,
    ItensPatrocinados,
    DivulgacaoApoio,
    Organizacao,
    Rodape
  },
  name: 'App',
  data () {
    return {
        email: 'agilejoinville@gmail.com',
        inscricoes: 'https://inscricoes.agilebrazil.com/',
    }
  },
  methods : {
    openPage(page) {
      window.open(page,'_blank');
    },
    sendMail(email) {
      this.openPage('mailto:' + email);
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>