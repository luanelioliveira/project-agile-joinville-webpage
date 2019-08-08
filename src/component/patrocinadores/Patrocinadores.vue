<template>
  <div>
    <ListaPatrocinadores />
    <ItensPatrocinados />
  </div>
</template>

<script>
import ListaPatrocinadores from './ListaPatrocinadores';
import ItensPatrocinados from './itens/ItensPatrocinados';

export default {
  components: { ListaPatrocinadores, ItensPatrocinados },
}
</script>

