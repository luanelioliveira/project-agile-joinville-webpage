<template>
  <v-app>
    <v-content>
      <section>
        <v-parallax src="https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/others%2Fjoinville-edited2.jpg?alt=media&token=23f558ab-4c5f-45ae-b2db-e2ebdc7b95ba" height="700">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text font-weight-thin display-3 text-xs-center">AGILE JOINVILLE</h1>
            <h1 class="white--text font-weight-black mb-2 display-1 text-xs-center">C O N F E R E N C E</h1>
            <h1 class="white--text font-weight-bold mb-2 title text-xs-center">10 • AGOSTO • 2019</h1>
            <v-btn class="indigo darken-3 mt-4" dark flat round depressed large v-on:click="openPage(inscricoes)">
              FAZER MINHA INSCRIÇÃO
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

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

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex
                  v-for="(item, i) in itensPatrocinados"
                  :key="i"
                  xs12 sm6 md6 lg3 xl3>
                  <v-hover>
                    <v-card 
                       :class="`elevation-${hover ? 12 : 2}` "
                       slot-scope="{ hover }"
                    >           
                      <v-img :aspect-ratio="16/9" :src="item.urlImage">              
                        <v-expand-transition>           
                            <div
                              v-if="hover"
                              :class="`d-flex transition-fast-in-fast-out font-weight-bold ${!item.pendent ? 'black' : ''} v-card--reveal white--text`"
                              style="height: 100%;"
                            >
                                {{item.organization}}
                            </div>                  
                        </v-expand-transition>
                      </v-img>
                      <v-card-title>
                        <div>
                          <span class="headline">{{item.name}}</span>
                          <div class="d-flex">
                            <div class="grey--text text--darken-2">
                               {{item.description}}
                            </div>
                          </div>
                        </div>
                        <v-spacer></v-spacer>           
                      </v-card-title>
                      <v-card-text >
                          <span v-if="!item.pendent">
                            <v-btn depressed outline color="grey" class="white--text">
                              Patrocinado
                              <v-icon right dark>favorite</v-icon>
                            </v-btn>
                          </span>
                          <span v-if="item.pendent">
                            <v-btn 
                              v-on:click="sendMail(email)" 
                              depressed
                              color="cyan" 
                              class="white--text" >
                              Patrocine
                              <v-icon right dark>favorite_border</v-icon>
                            </v-btn>
                          </span>
                      </v-card-text>
                    </v-card>
                  </v-hover>          
                </v-flex>
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
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Quer apoiar, patrocinar ou divulgar sua empresa no evento?</h2>
              <span class="subheading mt-3">
                
              </span>
            </div>
          </v-flex>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <span class="subheading">
                Envie um e-mail para {{email}}
              </span>
            </div>
          </v-flex>          
        </v-layout>
      </section>

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

      <v-footer class="grey darken-4" height="auto">
        <v-container grid-list-xl>
          <v-layout row wrap justify-space-between align-center>
            <v-flex xs12 sm6>
              <v-card class="elevation-0 transparent">
                <v-card-title class="white--text layout justify-center">
                  Copyright © 2019 Agile Joinville - Todos os direitos reservados
                </v-card-title>               
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="elevation-0 transparent">
                <v-card-title class="layout justify-center">
                  <v-avatar
                    v-for="(social, i) in socials" :key="i"
                    class="mx-3"
                    size="40"
                    style="cursor: pointer"
                    v-bind:href="social.account"
                  >
                    <img 
                      :src="social.image" 
                      v-on:click="openPage(social.account)" 
                      alt="avatar">
                  </v-avatar>       
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>

    </v-content>
  </v-app>
</template>

<script>
import Biografia from './component/Biografia'
import ListaPalestras from './component/ListaPalestras'

export default {
  components: { Biografia, ListaPalestras },
  name: 'App',
  data () {
    return {
        email: 'agilejoinville@gmail.com',
        inscricoes: 'https://inscricoes.agilebrazil.com/',
        socials: [
          { 
            name: 'Facebook',
            account: 'https://www.facebook.com/AgileJoinvilleConf', 
            image: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/socials%2Ffacebook.png?alt=media&token=6b4289a4-710d-4a15-8180-688ac92124a4' 
          },
          { 
            name: 'Instagram',
            account: 'https://www.instagram.com/AgileJoinville', 
            image: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/socials%2Finstagram.png?alt=media&token=85cbaf14-0546-4800-ae4e-cef86535deb5' 
          },
          { 
            name: 'Linkedin',
            account: 'https://www.linkedin.com/company/agilejoinville/', 
            image: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/socials%2Flinkedin.png?alt=media&token=2d67a8f5-09bf-4445-a836-5e482fc9896b' 
          },
          { 
            name: 'Youtube',
            account: 'https://www.youtube.com/channel/UCish83IHokYTejxWLtHTByA', 
            image: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/socials%2Fyoutube.png?alt=media&token=0b35af4c-5840-4886-8a33-3e27c20b818a' 
          }
        ],
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
            nome: 'Unimed Santa Catarina',
            url: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2FUNIMEDSC.png?alt=media&token=65290a98-510f-4257-ba44-a491d6999b30'
          }
        ],
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
        ],
        itensPatrocinados: [
          {
            name: 'Auditório',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fauditorio.jpeg?alt=media&token=51657047-4a9c-4a48-86af-fb24da3713d9',
            description: 'Espaço para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'SENAI'
          },
          {
            name: 'Crachás',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcracha.jpg?alt=media&token=02037c90-dc24-4bf7-aa28-71e77427da02',
            description: '100 unidades de crachá e cordão',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'IDEAL CARDS'
          },
          {
            name: 'Coffee',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcoffee.jpg?alt=media&token=4858e576-8850-4126-8d38-1266def52057',
            description: 'Coffee para até 100 pessoas',
            pendent: false,
            msg: "PATROCINADO",
            organization: 'MAGRATHEA LABS'
          },
          {
            name: 'Copos',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcopos.jpeg?alt=media&token=be184d1e-cb30-4ced-905b-d3def9a0aae3',
            description: 'Copos para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'KIRIHUB'
          },
          {
            name: 'Canetas',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcanetas.jpeg?alt=media&token=a09003bd-62a4-4862-a1de-6efc573763f0',
            description: 'Canetas para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'UNIMED FEDERAÇÃO SC'
          },
          {
            name: 'Blocos de Anotação',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fbloco.jpeg?alt=media&token=a8d9b266-9e08-4171-b36c-6efe0d9fa413',
            description: 'Blocos para até 100 pessoas',
            pendent: false,
            msg: "PATROCINADO",
            organization: 'SOFT EXPERT'
          },
          {
            name: 'Camisetas',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcamisetas.jpeg?alt=media&token=4488507d-0f69-4894-805d-1e0afbee6a0b',
            description: 'Camisetas para até 100 pessoas',
            pendent: true,
            msg: "PENDENTE",
            organization: ''
          },
          {
            name: 'Stickers',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fstickers.jpeg?alt=media&token=9fb45ef8-f4d7-4537-aaf3-704c0332c7a2',
            description: 'Stickers para até 100 pessoas',
            pendent: true,
            msg: "PENDENTE",
            organization: ''
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