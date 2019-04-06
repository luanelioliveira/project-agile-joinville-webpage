<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo darken-4">
        &copy;&nbsp;2019&nbsp;—&nbsp;<strong>Agile</strong>&nbsp;Joinville
        <v-spacer></v-spacer>

        <v-btn v-for="icon in socials" :key="icon" class="mx-3" dark icon >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

    </v-card>
  </v-footer> 
</template>

<script>
export default {
  data () {
    return {
      socials: [
        'fab fa-facebook',
        'fab fa-instagram',
        'fab fa-linkedin'
      ]
    }
  }
}
</script>