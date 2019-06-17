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
            <h1 class="white--text font-weight-thin mb-2 display-3 text-xs-center">AGILE JOINVILLE CONFERENCE</h1>
            <h1 class="white--text font-weight-black mb-2 headline text-xs-center">10 DE AGOSTO DE 2019</h1>
            <v-btn
              class="indigo darken-3 mt-4"
              dark
              flat
              round
              depressed
              large
            >
              SAVE THE DATE
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
              <h2 class="display-1">Palestrantes Confirmados</h2>         
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
                      <v-avatar size="180" color="grey lighten-4">
                        <img :src="palestrante.imagem" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div>
                        <span class="headline text-xs-center">{{palestrante.nome}}</span>
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
        <v-layout
          column
          class="my-5"          
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Programação</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list>
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
              <h2 class="display-1">Localização</h2>
              <span class="subheading">
                R. Arno Waldemar Dohler, 957 - Zona Industrial Norte, Joinville
              </span>
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
              <h2 class="display-1">Apoios e Patrocínios</h2>
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
                            <v-btn depressed color="cyan" class="white--text">
                               Patrocine Aqui
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
                Envie um e-mail para {{email}}
              </span>
            </div>
          </v-flex>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://images.pexels.com/photos/2376995/pexels-photo-2376995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Venha participar e adiquirir novos conhecimentos!</div>
            <em>"Compartilhar conhecimento é o caminho mais próximo da sabedoria..."</em>
            <v-btn
              class="black mt-5"
              dark
              large
            >
              Aguardar Inscrições
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-for 
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Sobre nós</div>
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
                  <div class="headline">Contate-nos</div>
                </v-card-title>
                <v-card-text>
                  Envie uma email para nós com sua elogios, críticas e sugestões.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="red--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Joinville, Santa Catarina</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="red--text text--lighten-2">email</v-icon>
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
      <v-footer class="grey darken-4">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Copyright © 2019 Agile Joinville - Todos os direitos reservados
            </div>
          </v-flex>
        </v-layout>
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
            biografia: 'Em breve maiores informações'
          },
          {
            nome: 'Ana Spieker',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fspieker.jpeg?alt=media&token=9e1f91e6-5def-4db3-bde4-4d49ee966870',
            biografia: 'Em breve maiores informações'
          },
          {
            nome: 'Bruna Von Runkel',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fbruna.jpeg?alt=media&token=01e1097a-f68b-47a4-8a7b-54b73721cd80',
            biografia: 'Em breve maiores informações'
          },
          {
            nome: 'Cleiton Luis Mafra',
            imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fcaco.jpeg?alt=media&token=74a323d7-3ae1-4da6-b987-08d3f0631ac8',
            biografia: 'Em breve maiores informações'
          }
        ],
        itensPatrocinados: [
          {
            name: 'Auditório',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fauditorio.jpeg?alt=media&token=51657047-4a9c-4a48-86af-fb24da3713d9',
            description: 'Espaço para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'Nome da Empresa'
          },
          {
            name: 'Crachás',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcracha.jpg?alt=media&token=02037c90-dc24-4bf7-aa28-71e77427da02',
            description: '100 unidades de crachá e cordão',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'Nome da Empresa'
          },
          {
            name: 'Coffee',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcoffee.jpg?alt=media&token=4858e576-8850-4126-8d38-1266def52057',
            description: 'Coffee para até 100 pessoas',
            pendent: false,
            msg: "PATROCINADO",
            organization: 'Nome da Empresa'
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
            name: 'Canetas',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcanetas.jpeg?alt=media&token=a09003bd-62a4-4862-a1de-6efc573763f0',
            description: 'Canetas para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'Nome da Empresa'
          },
          {
            name: 'Blocos de Anotação',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fbloco.jpeg?alt=media&token=a8d9b266-9e08-4171-b36c-6efe0d9fa413',
            description: 'Blocos para até 100 pessoas',
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
          },
          {
            name: 'Copos',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcopos.jpeg?alt=media&token=be184d1e-cb30-4ced-905b-d3def9a0aae3',
            description: 'Copos para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO',
            organization: 'Nome da Empresa'
          }

       ],
       apresentacoes: [
          {
            color: 'black',
            name: 'Credenciamento',
            hour: '08:00 - 09:00',
            description: ''
          },
          {
            color: 'black',
            name: 'Abertura',
            hour: '09:00 - 09:10',
            description: ''
          },
          {
            color: 'black',
            name: 'Palestra 1',
            hour: '09:10 - 10:00',
            description: ''
          },
          {
            color: 'black',
            name: 'Palestra 2',
            hour: '10:00 - 10:50',
            description: ''
          },
          {
            color: 'black',
            name: 'Interalo',
            hour: '10:50 - 11:00',
            description: ''
          },
          {
            color: 'black',
            name: 'Palestra 3',
            hour: '11:00 - 11:50',
            description: ''
          },
          {
            color: 'black',
            name: 'Palestra 4',
            hour: '11:50 - 12:30',
            description: ''
          },
          {
            color: 'black',
            name: 'Mesa Redonda',
            hour: '13:10 - 13:20',
            description: ''
          }
      ]
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