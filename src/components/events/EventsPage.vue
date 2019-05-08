<template>
    <v-container>  
        <v-layout>
            <v-flex>
                <h1 class="display-2 font-weight-thin">Eventos</h1>
            </v-flex>
        </v-layout>
        <v-container>
            <v-container>  
                <v-layout mb-3>
                    <v-flex>
                        <span class="display-1 font-bold">Agile Joinville Conference 2019</span>
                    </v-flex>
                </v-layout>       
                <v-layout>
                    <v-flex>
                        <template>
                        <v-carousel 
                        height="330"
                        prev-icon="fas fa-angle-left"
                        next-icon="fas fa-angle-right"
                        hide-delimiters>
                            <v-carousel-item
                            v-for="(speaker,i) in speakers"
                            :key="i"
                            :src="speaker.src"
                            ></v-carousel-item>
                        </v-carousel>
                        </template>              
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container>
                <v-layout align-center column justify-center text-xs-center mb-3>
                    <v-flex>
                        <span class="display-1">Programação</span>
                    </v-flex>
                </v-layout>
                
                <v-container>
                    <v-layout >
                        <v-flex>                                        
                            <v-timeline
                            align-top
                            dense
                            >
                                <v-timeline-item
                                small
                                v-for="(program,i)  in programs"
                                :key="i"
                                >
                                <v-layout pt-3>
                                    <v-flex xs3 md1>
                                        <strong>{{program.hour}}</strong>
                                    </v-flex>
                                    <v-flex xs9>
                                        <strong>{{program.title}}</strong>
                                        <div class="mb-2">{{program.description}}</div>                                        
                                        <div class="caption mb-2">{{program.speaker}}</div>
                                        <v-avatar>
                                            <v-img :src="program.urlImage"></v-img>
                                        </v-avatar>
                                    </v-flex>
                                </v-layout>
                                </v-timeline-item>
                            </v-timeline>
                        </v-flex>
                    </v-layout>
                </v-container> 
            </v-container>

            <v-container>
                <v-layout align-center column justify-center text-xs-center mb-3>
                    <v-flex>
                        <span class="display-1">Patrocinadores</span>
                    </v-flex>
                </v-layout>                   
                <v-container grid-list-lg>
                    <v-layout>
                    <v-flex xs12 sm12>
                        <v-container grid-list-sm fluid>
                            <v-layout row wrap>
                            <v-flex v-for="sponsor in sponsors" :key="sponsor.name"
                                align-center
                                justify-center
                                layout
                                >                  
                                <v-avatar size="120">
                                    <v-img 
                                        :alt="sponsor.name" 
                                        :src="sponsor.image" 
                                        :lazy-src="sponsor.image"
                                        aspect-ratio="1" class="grey lighten-2" >
                                        <template v-slot:placeholder>
                                        <v-layout fill-height align-center justify-center ma-0>
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-layout>
                                        </template>
                                    </v-img>
                                </v-avatar>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                    </v-layout>
                </v-container>        
            </v-container>
            
            <v-container>
                <v-layout align-center column justify-center text-xs-center mb-3>
                    <v-flex>
                        <span class="display-1">Local do Evento</span>
                    </v-flex>
                </v-layout>
                <v-layout align-center column justify-center text-xs-center>
                    <v-flex>
                        <p>Auditório Principal, SENAI Norte</p>
                        <p>R. Arno Waldemar Dohler, 957 - Zona Industrial Norte, Joinville</p>
                    </v-flex>  
                </v-layout>          
                <v-layout>
                    <v-flex>
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
                    </v-flex>                
                </v-layout>  
                                 
            </v-container>

            <v-container>
                <v-layout align-center column justify-center text-xs-center>
                    <v-flex>
                        <p class="display-1">Quer patrocinar ou divulgar sua empresa em nosso evento?</p>
                        <p>Mande um e-mail para: agile.joinville@gmail.com</p>
                    </v-flex>  
                </v-layout>          
            </v-container>

        </v-container>  
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    data () {
      return {
        speakers: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fspeakers-01.jpeg?alt=media&token=733be759-2a48-49ff-be4e-904560f04267'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fspeakers-02.jpeg?alt=media&token=0e552009-6bba-4028-a75f-48d0b6757a90'
          }
        ],
        programs: [
            {
                title: "Credenciamento",
                hour: "08h",
                icon: "fas fa-bullhorn",
                urlImage: "",
                speaker: "",
                description: "Iniciaremos o credenciamento a partir das 8h. Não esqueça de levar um documento com foto."
            },
            {
                title: "Como liderar pessoas em ambientes ágeis?",
                hour: "09h15",
                icon: "fas fa-chalkboard-teacher",
                urlImage: "https://media.licdn.com/dms/image/C4D03AQGMAUDxAP71Vw/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=R6eOZ4zRPc3k2RkLhyLcUxbmJwAQ7F8-DAU0nSOm-sk",
                speaker: "Bruna Von Runkel",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Desenvolvendo produtos com Lean Inception",
                hour: "10h15",
                icon: "fas fa-chalkboard-teacher",
                urlImage: "https://media.licdn.com/dms/image/C4E03AQG9IYGA8lqBfg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=PhfxzP0idpCW2Nf4RLQsTEoheRjvNZNyQOwIOZKtP-Y",
                speaker: "Cleiton (Caco) Luis Mafra",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Coffee Break",
                hour: "11h15",
                icon: "fas fa-coffee",
                urlImage: "",
                speaker: "",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Debate entre os Keynotes",
                hour: "13h15",
                icon: "fas fa-comment-alt",
                urlImage: "",
                speaker: "",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Encerramento do Evento",
                hour: "14h15",
                icon: "fab fa-expeditedssl",
                urlImage: "",
                speaker: "",
                description: ""
            }            
        ]
      }
    },
    mounted() {
    this.getSponsors();
    },
    computed: {
        ...mapGetters("Sponsors", ["sponsors"])
    },
    methods: {
        ...mapActions("Sponsors", ["getSponsors"])
    }
  }
</script>

<style>
.mapouter {
  text-align:right;
  height:400px;
  width:100%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}
</style>