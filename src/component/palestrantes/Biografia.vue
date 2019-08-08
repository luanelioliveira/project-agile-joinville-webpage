<template>
    <v-dialog
        v-model="dialog"
        width="500"
    >
        <template v-slot:activator="{ on }">
        <v-btn
            depressed color="blue-grey darken-4" class="white--text"                                  
            v-on="on"
        >
            Biografia
        </v-btn>
        </template>

        <v-card>
        <v-card-title
            class="headline grey lighten-2"
            primary-title
        >
            {{palestrante.nome}}
        </v-card-title>

        <v-card-text>
            {{palestrante.biografia}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="primary"
            flat
            @click="dialog = false"
            >
            Fechar
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>   
</template>

<script>
export default {
  props: ['palestrante'],
  data () {
    return {
        dialog: false
    }
  }    
}
</script>