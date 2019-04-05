<template>
    <div>        
        <Top />
        <Sponsors />
        <Jobs />
        <Footer />     
    </div>
</template>

<script>
import Top from './Top'
import Sponsors from './Sponsors'
import Jobs from './Jobs'
import Footer from './Footer'

export default {
  components: {
    Top,
    Sponsors,
    Jobs,
    Footer
  },
  data () {
    return {
      socials: [
        'fab fa-facebook',
        'fab fa-instagram',
        'fab fa-linkedin'
      ],
      vagas: [
        {
          id: 1,
          papel : 'Product Owner',
          empresa : 'FESC Tecnologia',
          contato : 'luannn@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
        },
        {
          id: 2,
          papel : 'Engenheiro de Software',
          empresa : 'Magrathea Labs',
          contato : 'luannn@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
        },
        {
          id: 3,
          papel : 'Scrum Master',
          empresa : 'Mercos',
          contato : 'luannn@gmail.com',
          dataPublicada: '04/04/2019',
          descricao: 'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
        }
      ]
    }
  },  
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>