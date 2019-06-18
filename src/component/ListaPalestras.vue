<template>
    <div>
        <v-flex >
            <v-container grid-list-xl  >
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
                    titulo: 'Credenciamento',
                    subtitulo: '',
                    horario: '08:30 - 09:00',
                    palestrante: '',
                    descricao: ''
                },
                {
                    titulo: 'Abertura',
                    subtitulo: '',
                    horario: '09:00 - 09:10',
                    palestrante: '',
                    descricao: ''
                },
                {
                    titulo: 'Método Kanban',
                    subtitulo: 'Como Começar e Entrar no Modo Maratona',
                    horario: '09:10 - 10:00',
                    palestrante: 'Caco (Cleiton Mafra)',
                    descricao: 'Você está com dificuldades de liderar seu time? Seu time está com dificuldades para cumprir os prazos e realizar as entregas? Seu time está frequentemente sobrecarregado? Você está com dúvida por onde começar? Não desanime, você não está sozinho, isso é mais comum do que você pensa! Vou apresentar como a abordagem e as práticas do método Kanban podem ajudar seu time a identificar e resolver problemas, estimulando atos de liderança, um ambiente de alta performance, ajudando a escalar para toda a organização e garantindo que você comece da maneira certa e tenha consistência para garantir os resultados se sustentem no longo prazo.'
                },
                {
                    titulo: 'Scrum & Kanban',
                    subtitulo: 'Conheça as Diferenças',
                    horario: '10:00 - 10:50',
                    palestrante: 'Ana G. Soares',
                    descricao: 'O Scrum e o Kanban, compartilham alguns conceitos semelhantes, com abordagens diferentes, confundindo as pessoas na sua utilização. Descubra como aplicar as técnicas do jeito certo e de acordo com a sua necessidade.'
                },
                {
                    titulo: 'Intervalo',
                    subtitulo: '',
                    horario: '10:50 - 11:00',
                    palestrante: '',
                    descricao: ''
                },
                {
                    titulo: 'RH na Transformação Ágil',
                    subtitulo: 'Oportunidades Mapeadas',
                    horario: '11:00 - 11:50',
                    palestrante: 'Ana Spiker & Bruna Von Runkel',
                    descricao: 'Organizações que estão passando pela transformação Ágil, precisam reconhecer a importância das pessoas como diferencial competitivo. E quando falamos de pessoas, falamos de uma nova forma de gestão. Uma gestão muito mais colaborativa que preza pela transparência e pela adaptabilidade. Uma gestão inspiradora, que lidera pelo exemplo, dá feedbacks constantes e que empodera os times com confiança. Venha entender como a parceria estabelecida entre o RH e Agile Coach vem ajudando na evolução da organização rumo à Gestão 3.0. '
                },
                {
                    titulo: 'Palestra 4',
                    subtitulo: '',
                    horario: '11:50 - 12:30',
                    palestrante: 'Grupo de Resgate em Montanha',
                    descricao: 'A Definir'
                },
                {
                    titulo: 'Mesa Redonda',
                    subtitulo: '',
                    horario: '12:30 - 13:10',
                    palestrante: '',
                    descricao: ''
                },
                {
                    titulo: 'Encerramento',
                    subtitulo: '',
                    horario: '13:10 - 13:20',
                    palestrante: '',
                    descricao: ''
                }
            ]
        }
    }


}
</script>
