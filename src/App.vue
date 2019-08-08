<template>
  <v-app>
    <v-content>
      <Cabecalho />
      <Palestrantes />
      <Programacao />
      <Localizacao />      
      <Patrocinadores />  
      <ItensPatrocinados />   
      <Divulgacao />            
      <Organizacao /> 
      <Rodape /> 
    </v-content>
  </v-app>
</template>

<script>
import Cabecalho from './component/cabecalho/Cabecalho'
import Palestrantes from './component/palestrantes/Palestrantes'
import Programacao from './component/programacao/Programacao'
import Localizacao from './component/localizacao/Localizacao'
import Patrocinadores from './component/patrocinadores/Patrocinadores'
import Divulgacao from './component/divulgacao/Divulgacao'
import Organizacao from './component/organizacao/Organizacao'
import Rodape from './component/rodape/Rodape'

export default {
  components: { 
    Cabecalho,
    Palestrantes,
    Programacao,  
    Localizacao,
    Patrocinadores,
    Divulgacao,
    Organizacao,
    Rodape
  },
  name: 'App',  
}
</script>
