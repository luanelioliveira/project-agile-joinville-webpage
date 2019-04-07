<template>
<v-container>
  
  <v-container fluid>
    <v-layout align-center column justify-center text-xs-center>
      <v-flex>
        <h1 class="display-2 font-weight-thin">Apoios & Patrocínios</h1>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-md>
    <v-layout>
      <v-flex xs12 sm12>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="sponsor in getList" :key="sponsor.name"
                align-center
                justify-center
                layout
                text-xs-center >                  
                  <v-avatar size="160">
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
    this.setList();
  },
  computed: {
    ...mapGetters("Sponsors", ["getList"])
  },
  methods: {
    ...mapActions("Sponsors", ["setList"])
  }
}
</script>
