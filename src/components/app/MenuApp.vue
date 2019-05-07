<template>
  <div id="menuApp">
    <v-navigation-drawer temporary v-model="sideNav" absolute>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Início</v-list-tile-content>
        </v-list-tile>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else to="/signin">
          <v-list-tile-action>
            <v-icon>fas fa-sign-in-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Login</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>  
    <v-toolbar app flat dark>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-md-and-up">
        <v-icon>fas fa-bars</v-icon>
      </v-toolbar-side-icon>       
      <v-toolbar-title>   
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="font-weight-medium ">AGILE&nbsp;</span>
          <span class="font-weight-thin">JOINVILLE</span>
        </router-link>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn 
            flat
            small 
            v-for="item in menuItems" 
            :key="item.title"
            :to="item.link"
            >
            {{ item.title }}
          </v-btn>
          <v-btn small outline v-if="!isAuthenticated" to="/signin"><span>Login</span></v-btn>
          <v-btn small flat v-if="isAuthenticated" @click="onLogout"><span>Logout</span></v-btn>
        </div>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'fas fa-address-card', title: 'Sobre', link: '/about' },
        { icon: 'fas fa-calendar', title: 'Eventos', link: '/events' },
        { icon: 'fas fa-briefcase', title: 'Vagas', link: '/jobs' }
      ]
      if (this.isAuthenticated) {
        menuItems = [
          { icon: 'fas fa-user', title: 'Perfil', link: '/profile' },
        ]
      }
      return menuItems
    },
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
