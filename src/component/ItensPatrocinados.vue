<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex
              v-for="(item, i) in itensPatrocinados"
              :key="i"
              xs12 sm6 md6 lg3 xl3>
              <v-hover>
                <v-card 
                    :class="`elevation-${hover ? 12 : 2}` "
                    slot-scope="{ hover }"
                >           
                  <v-img :aspect-ratio="16/9" :src="item.urlImage">              
                    <v-expand-transition>           
                        <div
                          v-if="hover"
                          :class="`d-flex transition-fast-in-fast-out font-weight-bold ${!item.pendent ? 'black' : ''} v-card--reveal white--text`"
                          style="height: 100%;"
                        >
                            {{item.organization}}
                        </div>                  
                    </v-expand-transition>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="headline">{{item.name}}</span>
                      <div class="d-flex">
                        <div class="grey--text text--darken-2">
                            {{item.description}}
                        </div>
                      </div>
                    </div>
                    <v-spacer></v-spacer>           
                  </v-card-title>
                  <v-card-text >
                      <span v-if="!item.pendent">
                        <v-btn depressed outline color="grey" class="white--text">
                          Patrocinado
                          <v-icon right dark>favorite</v-icon>
                        </v-btn>
                      </span>
                      <span v-if="item.pendent">
                        <v-btn 
                          v-on:click="sendMail(email)" 
                          depressed
                          color="cyan" 
                          class="white--text" >
                          Patrocine
                          <v-icon right dark>favorite_border</v-icon>
                        </v-btn>
                      </span>
                  </v-card-text>
                </v-card>
              </v-hover>          
            </v-flex>
          </v-layout>
        </v-container>                
      </v-flex>  
    </v-layout>
  </section>    
</template>

<script>
export default {
  data () {
    return {
      itensPatrocinados: [
        {
          name: 'Auditório',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fauditorio.jpeg?alt=media&token=51657047-4a9c-4a48-86af-fb24da3713d9',
          description: 'Espaço para até 100 pessoas',
          pendent: false,
          msg: 'PATROCINADO',
          organization: 'SENAI'
        },
        {
          name: 'Crachás',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcracha.jpg?alt=media&token=02037c90-dc24-4bf7-aa28-71e77427da02',
          description: '100 unidades de crachá e cordão',
          pendent: false,
          msg: 'PATROCINADO',
          organization: 'IDEAL CARDS'
        },
        {
          name: 'Coffee',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcoffee.jpg?alt=media&token=4858e576-8850-4126-8d38-1266def52057',
          description: 'Coffee para até 100 pessoas',
          pendent: false,
          msg: "PATROCINADO",
          organization: 'MAGRATHEA LABS'
        },
        {
          name: 'Copos',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcopos.jpeg?alt=media&token=be184d1e-cb30-4ced-905b-d3def9a0aae3',
          description: 'Copos para até 100 pessoas',
          pendent: false,
          msg: 'PATROCINADO',
          organization: 'KIRIHUB'
        },
        {
          name: 'Canetas',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcanetas.jpeg?alt=media&token=a09003bd-62a4-4862-a1de-6efc573763f0',
          description: 'Canetas para até 100 pessoas',
          pendent: false,
          msg: 'PATROCINADO',
          organization: 'UNIMED FEDERAÇÃO SC'
        },
        {
          name: 'Blocos de Anotação',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fbloco.jpeg?alt=media&token=a8d9b266-9e08-4171-b36c-6efe0d9fa413',
          description: 'Blocos para até 100 pessoas',
          pendent: false,
          msg: "PATROCINADO",
          organization: 'SOFT EXPERT'
        },
        {
          name: 'Camisetas',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fcamisetas.jpeg?alt=media&token=4488507d-0f69-4894-805d-1e0afbee6a0b',
          description: 'Camisetas para até 100 pessoas',
          pendent: true,
          msg: "PENDENTE",
          organization: ''
        },
        {
          name: 'Stickers',
          urlImage: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/sponsors%2Fstickers.jpeg?alt=media&token=9fb45ef8-f4d7-4537-aaf3-704c0332c7a2',
          description: 'Stickers para até 100 pessoas',
          pendent: true,
          msg: "PENDENTE",
          organization: ''
        }
      ]      
    }
  }  
}
</script>

