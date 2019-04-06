<template>
<v-container>
  
  <v-container fluid>
    <v-layout align-center column justify-center>
      <v-flex>
        <h1 class="display-2 font-weight-thin">Últimas Vagas Publicadas</h1>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs4 v-for="job in jobs" :key="job.id">
        <v-card max-width="400">
          <v-card-title>
            <v-icon large left>fas fa-user-tie</v-icon>
            <span class="title font-weight-thin ">{{job.role}}</span>
          </v-card-title>
          <v-card-text>            
            {{job.description}}
          </v-card-text>
          <v-card-text >
            <div  class="font-weight-medium">{{job.company}}</div>
            <div>{{job.contact}}</div>
            <div><span class="caption">{{job.datePublished}}</span></div>
          </v-card-text>                  
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>        

  <v-container fluid>
    <v-layout align-center column justify-center>
      <v-flex>
        <v-btn large outline to="/jobs">Ver Mais</v-btn>
      </v-flex>
    </v-layout>    
  </v-container>   

</v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  mounted() {
    this.getJobsTop3();
  },
  computed: {
    ...mapGetters("Jobs", ["jobs"])
  },
  methods: {
    ...mapActions("Jobs", ["getJobsTop3"])
  }
}
</script>
