<template>
    <div>        
        <Top />
        <Sponsors />
        <Jobs />
        <Footer />     
    </div>
</template>

<script>
import Top from './Components/Top'
import Sponsors from './Components/Sponsors'
import Jobs from './Components/Jobs'
import Footer from './Components/Footer'

export default {
  components: {
    Top,
    Sponsors,
    Jobs,
    Footer
  }
}
</script>