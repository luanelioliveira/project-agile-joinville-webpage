<template>
  <v-app>
    <v-content>
      <Cabecalho />
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
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>      
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout column >
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-2 font-weight-thin">PROGRAMAÇÃO</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap justify-space-around fill-height column>
                <ListaPalestras/>
              </v-layout>
            </v-container>            
          </v-flex>
        </v-layout>
      </section>

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
import Biografia from './component/Biografia'
import ListaPalestras from './component/ListaPalestras'
import Patrocinadores from './component/Patrocinadores'
import ItensPatrocinados from './component/ItensPatrocinados'
import DivulgacaoApoio from './component/DivulgacaoApoio'
import Organizacao from './component/Organizacao'
import Rodape from './component/Rodape'

export default {
  components: { 
    Cabecalho,
    Biografia,
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
        palestrantes: [
          {
            nome: 'Ana G. Soares',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fsoares.jpeg?alt=media&token=e091b545-9122-4cd1-ac60-7ff087355d6c',
            biografia: 'Ana G. Soares é Consultora Agile Coach. Kanban Coach Professional (KCP) reconhecido pela Lean Kanban University, graduada em Ciência da Computação com MBA em Gestão de Projetos. Possui mais de 10 anos de experiência em projetos de software, atuou em diversos clientes como SEARA, AMBEV, Multilog, Ministério da Pesca, Prefeituras, Tribunais e Ministérios Públicos.​ Especialista em Método Kanban, Métricas, Ágil Escalado, Lean e Design Thinking. ​Criadora da Roda Ágil, ferramenta para o desenvolvimento de times de alta performance e fundadora da UNIAGIL e do site metodokanban.com.br. Atualmente é Mestranda em Administração'
          },
          {
            nome: 'Ana Spieker',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fspieker.jpeg?alt=media&token=9e1f91e6-5def-4db3-bde4-4d49ee966870',
            biografia: 'Agile Coach, atuando hoje com a transformação ágil em mais de 50 Squads na TOTVS. Atua há mais de 20 anos com projetos de TI, sendo os últimos 4 anos diretamente com agilidade. Formada em Administração de Empresas pela UNIVILLE com MBA em Gestão de Projetos pela FGV. Certificada PMP – Project Management Professional pelo PMI – Project Management Institute, CSM – Certified Scrum Master pela Scrum Alliance, CSPO – Certified Scrum Product Owner pela Scrum Alliance e CAC – Certified Agile Coach pela Massimus. Possui ainda formação em Management 3.0 e em PSC – Professional & Self Coaching pelo IBC – Instituto Brasileiro de Coaching.'
          },
          {
            nome: 'Bruna Von Runkel',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fbruna.jpeg?alt=media&token=01e1097a-f68b-47a4-8a7b-54b73721cd80',
            biografia: 'Psicóloga, CRP - 12/16539, Especialista em Gestão estratégica de Pessoas pela PUC PR. Certificada em Personal & Professional Coaching pela Sociedade Brasileira de Coaching. Formação complementar em Orientação Profissional & Planejamento de Carreira. Coordenadora e Business Partner de RH na TOTVS, atua há mais de 10 anos neste segmento com desenvolvimento de lideranças e times ágeis. Instrutora de treinamentos organizacionais de lideranças, relações interpessoais e gestão de pessoas. Atua também como Consultora de Carreira e Orientadora Profissional em consultório particular'
          },
          {
            nome: 'Caco (Cleiton Mafra)',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fcaco.jpeg?alt=media&token=74a323d7-3ae1-4da6-b987-08d3f0631ac8',
            biografia: 'Enterprise Agile Coach na Resultados Digitais, Atua junto aos times de Engenharia e Produto e conectando coma estratégia da empresa, que lida com alta tecnologia e um crescimento acelerado. A Resultados Digitais (RDStation) está entre as maiores empresas de marketing Digital do Mundo e está presente em mais de 20 países. Caco é especialista no método Kanban, já treinou mais de 400 pessoas no Método Kanban e ajudou mais de 60 times a adotar o método. Ajuda empresas de tecnologia a terem sucesso, resultados de longo prazo e equipes de alta performance. Já realizou várias palestras em eventos pelos Brasil como Agile Brazil, Lean Kanban Brazil, Scrum Gathering Rio, Agile Trends, TDC Floripa, TDC SP, TDC Porto Alegre, Agile Floripa e outros eventos/meetups da comunidade.'
          }
        ]
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