<template>
    <div>
        <v-flex >
            <v-container grid-list  >
                <v-layout row wrap justify-space-around fill-height column 
                xs12 v-for="(apresentacao, i) in apresentacoes" :key="i">    
                    <Palestra :palestra="apresentacao" />
                </v-layout>
            </v-container>
        </v-flex>
    </div>
</template>

<script>
import Palestra from './Palestra'

export default {
    components: { Palestra },
    data () {
        return {
            apresentacoes: [
                {
                    cor: 'black',
                    nome: 'Credenciamento',
                    palestra: '',
                    horario: '08:00 - 09:00',
                    palestrante: '',
                    descricao: ''
                },
                {
                    cor: 'black',
                    nome: 'Abertura',
                    palestra: '',
                    horario: '09:00 - 09:10',
                    palestrante: '',
                    descricao: ''
                },
                {
                    cor: 'black',
                    nome: 'Palestra 1',
                    palestra: 'A Definir',
                    horario: '09:10 - 10:00',
                    palestrante: 'Cleiton Luis Mafra',
                    descricao: 'A Definir'
                },
                {
                    cor: 'black',
                    nome: 'Palestra 2',
                    palestra: 'A Definir',
                    horario: '10:00 - 10:50',
                    palestrante: 'Ana G. Soares',
                    descricao: 'A Definir'
                },
                {
                    cor: 'black',
                    nome: 'Interalo',
                    palestra: '',
                    horario: '10:50 - 11:00',
                    palestrante: '',
                    descricao: ''
                },
                {
                    cor: 'black',
                    nome: 'Palestra 3',
                    palestra: 'A Definir',
                    horario: '11:00 - 11:50',
                    palestrante: 'Bruna Von Runkel',
                    descricao: 'A Definir'
                },
                {
                    cor: 'black',
                    nome: 'Palestra 4',
                    palestra: 'A Definir',
                    horario: '11:50 - 12:30',
                    palestrante: 'A Definir',
                    descricao: 'A Definir'
                },
                {
                    cor: 'black',
                    nome: 'Mesa Redonda',
                    palestra: '',
                    horario: '12:30 - 13:10',
                    palestrante: '',
                    descricao: ''
                },
                {
                    cor: 'black',
                    nome: 'Encerramento',
                    palestra: '',
                    horario: '13:10 - 13:20',
                    palestrante: '',
                    descricao: ''
                }
            ]
        }
    }


}
</script>
