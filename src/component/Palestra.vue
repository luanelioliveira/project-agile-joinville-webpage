<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="font-weight-bold subheading">{{palestra.titulo}}</div>
                <div class="body-2">{{palestra.subtitulo}}</div>
                <span class="font-italic grey--text">{{palestra.palestrante}}</span><br>
                <div v-if="palestra.descricao">
                    <v-btn
                        small round flat @click="show = !show"
                        color="blue-grey"
                        class="white--text"
                    >
                        detalhes
                        <v-icon right dark>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>                    
                </div>
            </div>
            <v-spacer></v-spacer>
            <v-icon class="mr-2">access_time</v-icon>
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
