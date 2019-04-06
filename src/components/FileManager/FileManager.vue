<template>
  <div ref="fileform" class="file-manager fm">
    <f-m-toolbar></f-m-toolbar>
    <div class="fm-whiteboard">
      <f-m-display></f-m-display>
      <f-m-library></f-m-library>
      <f-m-details></f-m-details>
    </div>
    <!--<div class="fm_is-dragover-message">-->
      <!--<h1>Перетащите в эту область ващи файлы</h1>-->
    <!--</div>-->
  </div>
</template>

<script>
import FMToolbar from "@/components/FileManager/Toolbar/FMToolbar.vue";
import FMDisplay from "@/components/FileManager/WhiteBoard/Display/FMDisplay.vue";
import FMLibrary from "@/components/FileManager/WhiteBoard/Library/FMLibrary.vue";
import FMDetails from "@/components/FileManager/WhiteBoard/Details/FMDetails.vue";

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
    FMDetails
  },
  data() {
    return {
      dragAndDropCapable: false,
      files: []
    };
  },
  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    /*If drag and drop capable, then we continue to bind events to our elements.
     */
    if (this.dragAndDropCapable) {
      /*
        Listen to all of the drag events and bind an event listener to each
        for the fileform.
      */
      this.listenAllDragEvents();
      // /*
      //
      this.addDragHover();
      // */
      //   Add an event listener for drop to the form
      this.removeDragHover();
    }
  },
  methods: {
    determineDragAndDropCapable() {
      let div = document.createElement("div");
      /*
        Check to see if the `draggable` event is in the element
        or the `ondragstart` and `ondrop` events are in the element. If
        they are, then we have what we need for dragging and dropping files.

        We also check to see if the window has `FormData` and `FileReader` objects
        present so we can do our AJAX uploading
      */
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    listenAllDragEvents() {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop"
      ].forEach(
        function(evt) {
          /*
            For each event add an event listener that prevents the default action
            (opening the file in the browser) and stop the propagation of the event (so
            no other elements open the file in the browser)
          */
          this.$refs.fileform.addEventListener(
            evt,
            function(e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );
    },

    addDropListenerForm() {
      this.$refs.fileform.addEventListener(
        "drop",
        function(e) {
          /*
            Capture the files from the drop event and add them to our local files
            array.
          */
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.files.push(e.dataTransfer.files[i]);
          }
        }.bind(this)
      );
    },

    addDragHover() {
      ["dragover", "dragenter"].forEach(
        function(event) {
          this.$refs.fileform.addEventListener(
            event,
            function() {
              this.$refs.fileform.classList.add("fm_is-dragover");
            }.bind(this),
            false
          );
        }.bind(this)
      );
    },
    removeDragHover() {
      ["dragleave", "dragend", "drop"].forEach(
        function(event) {
          this.$refs.fileform.addEventListener(
            event,
            function() {
              this.$refs.fileform.classList.remove("fm_is-dragover");
            }.bind(this),
            false
          );
        }.bind(this)
      );
    }
  }
};
</script>

<style lang="sass" src="./FileManager.sass"></style>
