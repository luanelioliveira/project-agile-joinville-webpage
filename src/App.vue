<template>
  <v-app>
    <v-content>
      <Cabecalho />
      <Palestrantes />
      <Programacao />

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          justify-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2 font-weight-thin">LOCALIZAÇÃO</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe
                          id="gmap_canvas"
                          width="100%"
                          height="100%"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14312.332763631206!2d-48.8535643!3d-26.2589633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x624c0303ba7bf8a7!2sSENAI+Joinville+Norte+I!5e0!3m2!1spt-BR!2sbr!4v1557257375168!5m2!1spt-BR!2sbr"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        />
                    </div>
                </div>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <span class="subheading">
                R. Arno Waldemar Dohler, 957 - Zona Industrial Norte, Joinville
              </span>
            </div>
          </v-flex>
        </v-layout>
      </section>

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
import ListaPalestras from './component/ListaPalestras'
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
    ListaPalestras,
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
.mapouter {
  height:400px;
  width:100%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>