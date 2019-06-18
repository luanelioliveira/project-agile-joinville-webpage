<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="subheading">{{palestra.titulo}}</div>
                <div class="body-2">{{palestra.subtitulo}}</div>
                <span class="font-italic grey--text">{{palestra.palestrante}}</span><br>
                <div v-if="palestra.descricao">
                    <span class="">Saiba mais</span>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                </div>
            </div>
            <v-spacer></v-spacer>
            <span class="font-weight-bold grey--text">{{palestra.horario}}</span>
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
