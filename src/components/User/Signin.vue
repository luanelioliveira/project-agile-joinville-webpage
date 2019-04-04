<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 offset-sm4>
          <v-card>
              <v-card-title primary-title>
                <v-layout align-center column justify-center>
                  <v-flex>
                    <span class="display-1 font-weight-medium ">AGILE&nbsp;</span>
                    <span class="display-1 font-weight-thin">JOINVILLE</span>                        
                  </v-flex>                  
                </v-layout>
              </v-card-title>
              <v-card-text>
                  <form @submit.prevent="onSignIn()">
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                                  name = "email"
                                  label = "Email"
                                  id = "email"
                                  v-model = "email"
                                  type = "email"
                                  required>
                              </v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                                  name = "password"
                                  label = "Password"
                                  id = "password"
                                  v-model = "password"
                                  type = "password"
                                  required>
                              </v-text-field>
                          </v-flex>
                      </v-layout>                    
                      <v-layout row align-center column justify-center>
                        <v-flex xs12>
                          <v-btn outline type="submit" :disabled = "loading" :loading = "loading">
                            Entrar                            
                          </v-btn>
                        </v-flex>
                      </v-layout>
                  </form>
              </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="alert" :timeout="5000" absolute bottom color="error">
      {{this.error}}
      <v-btn dark flat @click="alert = false">Fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data () {
    return {
      email: '',
      password: '',
      alert: false
    }
  },
  computed: {
    ...mapState('Application', ['error']),
    ...mapState('Application', ['loading'])
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.cleanError();
      }
    }
  },
  methods: {
    ...mapActions('Authentication', ['signIn']),
    ...mapActions('Application', ['cleanError']),
    onSignIn() {
      const user = {
        email: this.email,
        password: this.password
      }            
      this.signIn(user);
    }
  }
}
</script>

