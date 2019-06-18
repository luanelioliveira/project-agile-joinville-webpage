<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="font-weight-bold title">{{palestra.titulo}}</div>
                <div class="body-2 font-weight-light">{{palestra.subtitulo}}</div>
                <span class="font-italic grey--text">{{palestra.palestrante}}</span><br>
                <v-layout class="ml-0 my-1" align-center>
                    <v-icon class="mr-1">access_time</v-icon>
                    <span class="font-weight-bold grey--text">{{palestra.horario}}</span>
                </v-layout>
                <v-btn
                    v-if="palestra.descricao"
                    depressed outline small @click="show = !show"
                    color="indigo"
                    class="white--text ml-0"
                >
                    Detalhes
                    <v-icon right dark>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
            </div>
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
