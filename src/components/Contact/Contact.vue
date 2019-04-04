<template>
    <v-container>  
        <v-layout>
            <v-flex>
                <h1 class="display-2 font-weight-thin">Contato</h1>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-snackbar v-model="snackbar" absolute top right color="success">
                    <span>Contato enviado com sucesso!</span>
                    <v-icon dark>fas fa-check</v-icon>
                </v-snackbar>                
                <v-form  ref="form">
                    <v-container grid-list-xl fluid>
                        <v-layout wrap>
                            <v-flex xs12 sm12>
                                <v-text-field
                                  v-model="nome"
                                  :rules="nomeRegras"
                                  label="Nome Completo"
                                  required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12>
                                <v-text-field
                                  v-model="email"
                                  :rules="emailRegras"
                                  label="Email"
                                  type = "email"
                                  required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea 
                                  v-model="assunto" 
                                  :rules="assuntoRegras"
                                  required>
                                  <template v-slot:label>
                                      <div>Assunto</div>
                                  </template>
                                </v-textarea>
                            </v-flex>
                        </v-layout>
                    </v-container>

                    <v-container fluid>
                        <v-layout>
                            <v-flex>
                                <v-btn large outline @click="validate">Enviar Contato</v-btn>
                            </v-flex>
                        </v-layout>    
                    </v-container>   
                                        
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {      
      return {
        valid: true,
        nome: '',
        nomeRegras: [
            v => !!v || 'Nome é obrigatório',
            v => (v && v.length >= 10) || 'Informe ao menos 10 caracteres'
        ],
        email: '',
        emailRegras: [
            v => !!v || 'E-mail é obrigatório',
            v => /.+@.+/.test(v) || 'Informe um email válido'
        ],  
        assunto: '',
        assuntoRegras: [
            v => !!v || 'Assunto é obrigatório',
            v => (v && v.length >= 10) || 'Informe no mínimo 10 caracteres'
        ],      
        snackbar: false
      }
    },

    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
                this.reset()
            }
        },
        reset () {
            this.$refs.form.reset()
        },
    }
  }
</script>