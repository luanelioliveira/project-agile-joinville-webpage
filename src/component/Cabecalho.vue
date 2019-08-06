<template>
  <section>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/others%2Fjoinville-edited2.jpg?alt=media&token=23f558ab-4c5f-45ae-b2db-e2ebdc7b95ba" height="700">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="white--text font-weight-thin display-3 text-xs-center">AGILE JOINVILLE</h1>
        <h1 class="white--text font-weight-black mb-2 display-1 text-xs-center">C O N F E R E N C E</h1>
        <h1 class="white--text font-weight-bold mb-2 title text-xs-center">10 • AGOSTO • 2019</h1>
        <v-btn class="indigo darken-3 mt-4" dark flat round depressed large>
          INSCRIÇÕES ENCERRADAS
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>

</template>

<script>
export default {
  data () {
    return {
      inscricoes: 'https://inscricoes.agilebrazil.com/',
    }
  },
  methods : {
    openPage(page) {
      window.open(page,'_blank');
    },
  },
}
</script>

