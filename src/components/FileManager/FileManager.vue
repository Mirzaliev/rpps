<template>
  <div class="file-manager fm">
    <f-m-toolbar></f-m-toolbar>
    <div class="fm-whiteboard">
      <f-m-display></f-m-display>
      <f-m-library></f-m-library>
    </div>
  </div>
</template>

<script>
import FMToolbar from '@/components/FileManager/Toolbar/FMToolbar.vue';
import FMDisplay from '@/components/FileManager/WhiteBoard/Display/FMDisplay.vue';
import FMLibrary from '@/components/FileManager/WhiteBoard/Library/FMLibrary.vue';

export default {
  name: "FileManager",
  props: {
    hash: {
      type: String
    }
  },
  components: {
    FMToolbar,
    FMDisplay,
    FMLibrary,
  }
};
</script>

<style
  lang="sass"
  src="../../assets/sass/components/FileManager/FileManager.sass"
></style>
