<template>
  <v-app>
    <MenuApp />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import MenuApp from '@/components/App/MenuApp'

export default {
  name: 'App',
  components: {
    MenuApp
  }
}
</script>
