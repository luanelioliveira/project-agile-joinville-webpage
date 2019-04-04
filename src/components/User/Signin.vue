<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
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
                  <form @submit.prevent="onSignin()">
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      console.log('Dismissed Alert!')
      this.$store.dispatch('clearError')
    }
  }
}
</script>

