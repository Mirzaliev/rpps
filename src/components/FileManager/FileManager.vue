<template>
  <div ref="fileform" class="file-manager fm">
    <f-m-toolbar></f-m-toolbar>
    <div class="fm-whiteboard">
      <f-m-display></f-m-display>
      <f-m-library></f-m-library>
    </div>
    <div ref="dragHover" class="fm-dragHover" style="display: none;">
      <div class="fm-dragHover-content">
        <i class="upload icon"></i>
        <h3>Перетащите файлы сюда</h3>
      </div>
    </div>
  </div>
</template>

<script>
import FMToolbar from "@/components/FileManager/Toolbar/FMToolbar.vue";
import FMDisplay from "@/components/FileManager/WhiteBoard/Display/FMDisplay.vue";
import FMLibrary from "@/components/FileManager/WhiteBoard/Library/FMLibrary.vue";

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
    FMLibrary
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
      this.$refs.fileform.addEventListener("dragover", function() {this.$refs.dragHover.style.display = "block";}.bind(this));
      this.$refs.fileform.addEventListener("dragenter", function() {this.$refs.dragHover.style.display = "block";}.bind(this));
    },
    removeDragHover() {
      this.$refs.fileform.addEventListener("dragleave", function() {this.$refs.dragHover.style.display = "none";}.bind(this));
      this.$refs.fileform.addEventListener("dragend", function() {this.$refs.dragHover.style.display = "none";}.bind(this));
      this.$refs.fileform.addEventListener("drop", function() {this.$refs.dragHover.style.display = "none";}.bind(this));
    }
  }
};
</script>

<style lang="sass" src="./FileManager.sass"></style>
