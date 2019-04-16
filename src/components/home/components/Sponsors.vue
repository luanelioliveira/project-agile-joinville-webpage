<template>
<v-container>
  
  <v-container fluid>
    <v-layout align-center column justify-center text-xs-center>
      <v-flex>
        <h1 class="display-2 font-weight-thin">Apoios & Patrocínios</h1>
      </v-flex>
    </v-layout>
  </v-container>

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
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
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
