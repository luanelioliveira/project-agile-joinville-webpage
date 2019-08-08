<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1">Quer apoiar, patrocinar ou divulgar sua empresa no evento?</h2>
          <span class="subheading mt-3">
            
          </span>
        </div>
      </v-flex>
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <span class="subheading">
            Envie um e-mail para {{email}}
          </span>
        </div>
      </v-flex>          
    </v-layout>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: 'agilejoinville@gmail.com',
    }
  }  
}
</script>

