<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="font-weight-bold title">{{palestra.titulo}}</div>
                <div class="body-2 font-weight-light">{{palestra.subtitulo}}</div>
                <span class="font-italic grey--text">{{palestra.palestrante}}</span><br>
                <v-layout class="ml-0 mb-1" align-center>
                    <v-icon class="mr-2">access_time</v-icon>
                    <span class="font-weight-bold grey--text">{{palestra.horario}}</span>
                </v-layout>
            </div>
                <v-spacer></v-spacer>
                    <v-btn
                        v-if="palestra.descricao"
                        small fab @click="show = !show"
                        color="blue-grey"
                        class="white--text"
                    >
                        <v-icon dark>{{ show ? 'remove' : 'add' }}</v-icon>
                    </v-btn>
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
