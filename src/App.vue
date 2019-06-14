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
            <h1 class="white--text font-weight-black mb-2 headline text-xs-center">10 de Agosto de 2019</h1>
            <div class="subheading font-weight-black mb-3 text-xs-center">Powered by Agile Joinville</div>
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
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Palestrantes Confirmados</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://media.licdn.com/dms/image/C4E03AQG9IYGA8lqBfg/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=Z8SZqfAq02QCeJ65R6NSNwKeU5kDRdC1H81-XtHX_m4" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Cleiton Luis Mafra</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-xs-center">Em breve maiores informações</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://media.licdn.com/dms/image/C4E03AQHjm2ITEDGZFw/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=-t9b9nDkACROLHAJUHFZer2zvyA8J32X9AE4mbVADNo" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Ana G. Soares</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-xs-center">Em breve maiores informações</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://media.licdn.com/dms/image/C4E03AQFYlH46mgBG6Q/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=TeY0NRHeLLM8-Ae7PadozCjw7XSFZwp-uVPNXph5D8U" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Ana Spieker</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-xs-center">Em breve maiores informações</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://media.licdn.com/dms/image/C4D03AQGMAUDxAP71Vw/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=bW9S1fy2XTo01vLtfTVaZD8FFfajSye0m2YgGEHin9k" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Bruna Von Runkel</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="text-xs-center">Em breve maiores informações</p> 
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
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Programação</h2>
            </div>
          </v-flex>
          <v-flex xs10>
            <v-container grid-list>
              <v-layout row wrap align-center>
                <v-timeline>
                    <v-timeline-item
                      v-for="(speakers, i) in speakers"
                      :key="i"
                      :color="speakers.color"
                      small
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`title font-weight-bold ${speakers.color}--text`"
                          v-text="speakers.hour"
                        ></span>
                      </template>
                      <div class="py-3">
                        <h2 :class="`title font-weight-light ${speakers.color}--text`">{{speakers.name}}</h2>
                        <div>
                          {{speakers.description}}
                        </div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
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
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1">Apoios e Patrocínios</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="130" color="grey lighten-4">
                        <img src="http://www.unica-facil.com.br/images/icon-empresa.png" alt="avatar">
                      </v-avatar>
                    </v-card-text>                    
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="130" color="grey lighten-4">
                        <img src="http://www.unica-facil.com.br/images/icon-empresa.png" alt="avatar">
                      </v-avatar>
                    </v-card-text>                    
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="130" color="grey lighten-4">
                        <img src="http://www.unica-facil.com.br/images/icon-empresa.png" alt="avatar">
                      </v-avatar>
                    </v-card-text>                    
                  </v-card>
                </v-flex>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="130" color="grey lighten-4">
                        <img src="http://www.unica-facil.com.br/images/icon-empresa.png" alt="avatar">
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
                  v-for="(item, i) in itemsSponsors"
                  :key="i"
                  xs12 sm6 md6 lg4 xl3>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      :class="`elevation-${hover ? 12 : 2}`"
                    >
                      <v-img :aspect-ratio="16/9" :src="item.urlImage">              
                          <div
                            :class="`d-flex transition-fast-in-fast-out font-weight-bold ${!item.pendent ? 'grey' : 'black'} v-card--reveal white--text`"
                            style="height: 100%;"
                          >
                              {{item.msg}}
                          </div>                  
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
                        <v-btn v-if="!item.pendent" flat icon color="blue" class="mr-0">
                          <v-icon>thumb_up_alt</v-icon>
                        </v-btn>      
                        <v-btn v-if="item.pendent" flat icon color="red" class="mr-0">
                          <v-icon>thumb_down_alt</v-icon>
                        </v-btn>              
                      </v-card-title>
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
                Envie um e-mail para: agile.joinville@gmail.com
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
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
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
                      <v-list-tile-title>agilejoinville@gmail.com</v-list-tile-title>
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
export default {
  name: 'App',
  data () {
    return {
       itemsSponsors: [
          {
            name: 'Auditório',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fauditorio.jpeg?alt=media&token=51657047-4a9c-4a48-86af-fb24da3713d9',
            description: 'Espaço para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Crachás',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcracha.jpg?alt=media&token=02037c90-dc24-4bf7-aa28-71e77427da02',
            description: '100 unidades de crachá e cordão',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Coffee',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcoffee.jpg?alt=media&token=4858e576-8850-4126-8d38-1266def52057',
            description: 'Coffee para até 100 pessoas',
            pendent: false,
            msg: "PATROCINADO"
          },
          {
            name: 'Camisetas',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcamisetas.jpeg?alt=media&token=4488507d-0f69-4894-805d-1e0afbee6a0b',
            description: 'Camisetas para até 100 pessoas',
            pendent: true,
            msg: "PENDENTE"
          },
          {
            name: 'Canetas',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcanetas.jpeg?alt=media&token=a09003bd-62a4-4862-a1de-6efc573763f0',
            description: 'Canetas para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Blocos de Anotação',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fbloco.jpeg?alt=media&token=a8d9b266-9e08-4171-b36c-6efe0d9fa413',
            description: 'Blocos para até 100 pessoas',
            pendent: true,
            msg: "PENDENTE"
          },
          {
            name: 'Stickers',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fstickers.jpeg?alt=media&token=9fb45ef8-f4d7-4537-aaf3-704c0332c7a2',
            description: 'Stickers para até 100 pessoas',
            pendent: true,
            msg: "PENDENTE"
          },
          {
            name: 'Copos',
            urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcopos.jpeg?alt=media&token=be184d1e-cb30-4ced-905b-d3def9a0aae3',
            description: 'Copos para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO'
          }

       ],
       speakers: [
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