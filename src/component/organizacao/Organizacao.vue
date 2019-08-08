<template>
  <div>
    <ListaOrganizadores />
    <SobreOrganizacao />
  </div>
</template>

<script>
import SobreOrganizacao from './SobreOrganizacao';
import ListaOrganizadores from './ListaOrganizadores';

export default {
  components: { SobreOrganizacao, ListaOrganizadores },
}
</script>
