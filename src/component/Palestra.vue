<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <div class="headline">{{palestra.nome}}</div>
                <span class="grey--text">{{palestra.palestrante}}</span><br>
                <div v-if="palestra.descricao">
                    <span class="subheading">Detalhes</span>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </div>
            </div>
                <v-spacer></v-spacer>
                <span class="grey--text">{{palestra.horario}}</span><br>
        </v-card-title>

        <v-slide-y-transition>
            <v-card-text v-show="show">
                {{palestra.descricao}}
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>
export default {
    props: ['palestra'],
    data () { 
        return {
            show: false
        } 
    }
}
</script>
