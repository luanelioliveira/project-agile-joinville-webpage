<template>
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
</template>

<script>
export default {
  data () {
    return {
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
    }
  }  
}
</script>

