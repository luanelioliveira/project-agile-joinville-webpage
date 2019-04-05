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
  }
}
</script>