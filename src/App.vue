<template>
  <v-app>
    <v-content>
      <Cabecalho />
      <Palestrantes />
      <Programacao />
      <Localizacao />      
      <Patrocinadores />  
      <ItensPatrocinados />   
      <DivulgacaoApoio />   
      <DivulgacaoEvento />           
      <Organizacao /> 
      <Organizadores /> 
      <Rodape /> 
    </v-content>
  </v-app>
</template>

<script>
import Cabecalho from './component/Cabecalho'
import Palestrantes from './component/Palestrantes'
import Programacao from './component/Programacao'
import Localizacao from './component/Localizacao'
import Patrocinadores from './component/Patrocinadores'
import ItensPatrocinados from './component/ItensPatrocinados'
import DivulgacaoApoio from './component/DivulgacaoApoio'
import DivulgacaoEvento from './component/DivulgacaoEvento'
import Organizacao from './component/Organizacao'
import Organizadores from './component/Organizadores'
import Rodape from './component/Rodape'

export default {
  components: { 
    Cabecalho,
    Palestrantes,
    Programacao,  
    Localizacao,
    Patrocinadores,
    ItensPatrocinados,
    DivulgacaoApoio,
    DivulgacaoEvento,
    Organizacao,
    Organizadores,
    Rodape
  },
  name: 'App',  
}
</script>
