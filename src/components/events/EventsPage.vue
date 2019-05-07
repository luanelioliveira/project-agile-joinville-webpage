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
                
                <v-layout>
                    <v-flex>                
                        <v-timeline align-top>
                            <v-timeline-item
                            v-for="(program,i)  in programs"
                            :key="i"
                            large
                            :icon="program.icon"
                            fill-dot
                            color="black"
                            >
                                <template v-slot:opposite>
                                    <span class="title font-weight-light">
                                    <v-icon class="mr-1">fas fa-calendar-alt</v-icon>
                                    {{program.hour}}
                                    </span>
                                </template>
                                <v-card class="elevation-2" dark>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="title">{{program.title}}</div>
                                            <span class="grey--text">{{program.speaker}}</span>
                                        </div>                                                                
                                    </v-card-title>
                                    <v-card-text class="white text--primary">{{program.description}}</v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>                
                    </v-flex>
                </v-layout>                
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
                        <span class="display-1">Local</span>
                    </v-flex>
                </v-layout>  
                <v-layout align-center column justify-center text-xs-center>
                    <v-flex fluid>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14312.332763631206!2d-48.8535643!3d-26.2589633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x624c0303ba7bf8a7!2sSENAI+Joinville+Norte+I!5e0!3m2!1spt-BR!2sbr!4v1557257375168!5m2!1spt-BR!2sbr"
                        frameborder="0" 
                        style="border:0" 
                        allowfullscreen>
                        </iframe>
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
                hour: "08h às 09h",
                icon: "fas fa-bullhorn",
                urlImage: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                speaker: "",
                description: "Iniciaremos o credenciamento a partir das 8h. Não esqueça de levar um documento com foto."
            },
            {
                title: "Como liderar pessoas em ambientes ágeis?",
                hour: "09h15",
                icon: "fas fa-chalkboard-teacher",
                urlImage: "http://i.pravatar.cc/64",
                speaker: "Bruna Von Runkel",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Desenvolvendo produtos com Lean Inception",
                hour: "10h15",
                icon: "fas fa-chalkboard-teacher",
                urlImage: "http://i.pravatar.cc/64",
                speaker: "Caco",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Coffee Break",
                hour: "11h15",
                icon: "fas fa-coffee",
                urlImage: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                speaker: "",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Debate entre os Keynotes",
                hour: "13h15",
                icon: "fas fa-comment-alt",
                urlImage: "https://images.pexels.com/photos/1059114/pexels-photo-1059114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                speaker: "",
                description: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit."
            },
            {
                title: "Encerramento do Evento",
                hour: "14h15",
                icon: "fab fa-expeditedssl",
                urlImage: "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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