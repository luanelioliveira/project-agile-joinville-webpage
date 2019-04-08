<template>
    <div>        
        <Top />
        <Sponsors />
        <Jobs />
        <Footer />     
    </div>
</template>

<script>
import Top from './components/Top'
import Sponsors from './components/Sponsors'
import Jobs from './components/Jobs'
import Footer from './components/Footer'

export default {
  components: {
    Top,
    Sponsors,
    Jobs,
    Footer
  }
}
</script>