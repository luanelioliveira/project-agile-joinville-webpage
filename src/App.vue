<template>
  <v-app>
    <v-toolbar app flat dark>   
      <v-toolbar-title>   
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="font-weight-medium ">AGILE&nbsp;</span>
          <span class="font-weight-thin">JOINVILLE</span>
        </router-link>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn flat v-if="!userIsAuthenticated" to="/about"><span>Sobre</span></v-btn>
        <v-btn flat v-if="!userIsAuthenticated" to="/contact"><span>Contato</span>  </v-btn>
        <v-btn outline v-if="!userIsAuthenticated" to="/signin"><span>Login</span>  </v-btn>
        <v-btn v-if="userIsAuthenticated" to="/profile"><span>Perfil</span>  </v-btn>
        <v-btn v-if="userIsAuthenticated" @click="onLogout"><span>Logout</span>  </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
