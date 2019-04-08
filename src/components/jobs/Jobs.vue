<template>
    <v-container>  
        <v-layout>
            <v-flex>
                <h1 class="display-2 font-weight-thin">Vagas</h1>
            </v-flex>
        </v-layout>
        <v-container grid-list-lg>
          <v-layout row wrap v-if="jobs">
            <v-flex xs12 md4 v-for="job in jobs" :key="job.id">
              <v-card>
                <v-card-title>
                  <span class="headline font-weight-black ">{{job.company}}</span>
                </v-card-title>
                <v-card-text>
                    <h3 class="subheading mb-0">{{job.role}}</h3>
                    <div  class="grey--text font-italic">{{job.description}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-list-tile>
                    <v-list-tile-content>
                      <span class="caption">
                        <v-icon small class="mr-1">fas fa-envelope</v-icon>
                        {{job.contact}}
                      </span>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout  align-center column justify-center v-else>
            <v-flex>
              <span class="text-uppercase">
                <v-btn disabled>Não há vagas publicadas</v-btn>
              </span>
            </v-flex>
          </v-layout>
        </v-container>  

    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  mounted() {
    this.getJobs();
  },
  computed: {
    ...mapGetters("Jobs", ["jobs"])
  },
  methods: {
    ...mapActions("Jobs", ["getJobs"])
  }
}
</script>
