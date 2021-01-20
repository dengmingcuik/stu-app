<template>
  <div class="tab-content-item s-list" id="student-list">
    <list-search></list-search>
    <list-table></list-table>
    <turn-page></turn-page>
    <transition>
      <list-modal v-if="showModal"></list-modal>
    </transition>
  </div>
</template>

<script>
import listSearch from '../components/stuList/listSearch';
import listTable from '../components/stuList/listTable';
import turnPage from '../components/stuList/turnPage';
import listModal from '../components/stuList/listModal';
import { mapState } from 'vuex';
export default {
  components: {
    listSearch,
    listTable,
    turnPage,
    listModal
  },
  computed: {
    ...mapState(['showModal'])
  }
};
</script>

<style scoped>
  .v-enter, .v-leave-to {
    top: -100%;
    height: 0;
  }
  .v-leave, .v-enter-to {
    top: 0;
    height: 100%;
  }
  .v-enter-active, .v-leave-active {
    transition: all .5s;
  }
</style>