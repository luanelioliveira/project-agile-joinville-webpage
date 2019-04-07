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
        <v-btn small flat v-if="!isAuthenticated" to="/about"><span>Sobre</span></v-btn>
        <v-btn small flat v-if="!isAuthenticated" to="/jobs"><span>Vagas</span></v-btn>
        <v-btn small outline v-if="!isAuthenticated" to="/signin"><span>Login</span></v-btn>
        <v-btn small flat v-if="isAuthenticated" to="/profile"><span>Perfil</span></v-btn>
        <v-btn small flat v-if="isAuthenticated" @click="onLogout"><span>Logout</span></v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState("Authentication", ["isAuthenticated"])
  },
  methods: {
    ...mapActions('Authentication', ['signOut']),
    onLogout () {
      this.signOut()
      this.$router.push('/')
    }
  }
}
</script>
