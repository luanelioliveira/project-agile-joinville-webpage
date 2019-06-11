<template>
  <v-app>
    <v-content>
      <section>
        <v-parallax src="https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="./assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text font-weight-thin mb-2 display-3 text-xs-center">AGILE JOINVILLE CONFERENCE</h1>
            <h1 class="white--text font-weight-black mb-2 headline text-xs-center">10 de Agosto de 2019</h1>
            <div class="subheading font-weight-black mb-3 text-xs-center">Powered by Agile Joinville</div>
            <v-btn
              class="grey darken-4 font-weight-black mt-5"
              dark
              large
              flat
              
            >
              AGUARDAR INSCRIÇÕES
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
              <h2 class="display-1">Keynotes Confirmados!</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://www.pena.com.br/wp-content/uploads/2017/05/user-icon.jpg" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Cleiton (Caco) Luis Mafra</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar size="150" color="grey lighten-4">
                        <img src="https://www.pena.com.br/wp-content/uploads/2017/05/user-icon.jpg" alt="avatar">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Ana G. Soares</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
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
                          :class="`headline font-weight-bold ${speakers.color}--text`"
                          v-text="speakers.hour"
                        ></span>
                      </template>
                      <div class="py-3">
                        <h2 :class="`headline font-weight-light mb-3 ${speakers.color}--text`">{{speakers.name}}</h2>
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
                      <v-img 
                        :aspect-ratio="16/9" 
                        :src="item.urlImage"
                      >              
                          <div
                            v-if="!item.pendent"
                            class="d-flex transition-fast-in-fast-out font-weight-bold black v-card--reveal white--text"
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
                        <v-btn v-if="!item.pendent" dark fab small color="green" class="mr-0">
                          <v-icon>check</v-icon>
                        </v-btn>      
                        <v-btn v-if="item.pendent" dark fab small color="orange darken-3" class="mr-0">
                          <v-icon>alarm</v-icon>
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
            urlImage: 'https://images.pexels.com/photos/296883/pexels-photo-296883.jpeg',
            description: 'Espaço para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Crachás',
            urlImage: 'https://rm2.com.br/wp-content/uploads/2018/09/cracha-e-credencial.jpg',
            description: '100 unidades de crachá e cordão',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Coffee',
            urlImage: 'https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg',
            description: 'Coffee para até 100 pessoas',
            pendent: true,
            msg: "Pendente"
          },
          {
            name: 'Camisetas',
            urlImage: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
            description: 'Camisetas para até 100 pessoas',
            pendent: true,
            msg: "Pendente"
          },
          {
            name: 'Canetas',
            urlImage: 'https://images.pexels.com/photos/910332/pexels-photo-910332.jpeg',
            description: 'Canetas para até 100 pessoas',
            pendent: false,
            msg: 'PATROCINADO'
          },
          {
            name: 'Blocos de Anotação',
            urlImage: 'https://images.pexels.com/photos/158771/notebook-pen-table-blank-158771.jpeg',
            description: 'Blocos para até 100 pessoas',
            pendent: true,
            msg: "Pendente"
          },
          {
            name: 'Stickers',
            urlImage: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg',
            description: 'Stickers para até 100 pessoas',
            pendent: true,
            msg: "Pendente"
          },
          {
            name: 'Copos',
            urlImage: 'https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg',
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
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Abertura',
          hour: '09:00 - 09:10',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Palestra 1',
          hour: '09:10 - 10:00',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Palestra 2',
          hour: '10:00 - 10:50',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Interalo',
          hour: '10:50 - 11:00',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Palestra 3',
          hour: '11:00 - 11:50',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Palestra 4',
          hour: '11:50 - 12:30',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'black',
          name: 'Mesa Redonda',
          hour: '13:10 - 13:20',
          description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
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