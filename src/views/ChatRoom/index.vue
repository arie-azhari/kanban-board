<template>
  <div>
    <div>
      <button @click="handleOpen">chat</button>
      <button @click="handleOpenTask">task</button>
    </div>
    <div class="w-full flex bg-dark001">
      <div class="bg-red-900 w-full p-7">
        <div class="w-full h-10 bg-gray-700 flex space-x-5 justify-center">
          <div class="h-10 w-10 bg-blue-600"></div>
          <div class="h-10 w-10 bg-blue-600"></div>
          <div class="h-10 w-10 bg-blue-600"></div>
        </div>
      </div>

      <div
        class="bg-blue-900 transition-width transition-slowest"
        :class="isOpen ? 'w-1/2' : 'w-0'"
      >
        <div v-show="isOpen">
          <p>chat</p>
        </div>
      </div>

      <div
        class="bg-blue-900 transition-width transition-slowest"
        :class="isOpenTask ? 'w-1/2' : 'w-0'"
      >
        <p v-show="isOpenTask">Task</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOpen: false,
      isOpenTask: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = !this.isOpen;
    },
    handleOpenTask() {
      this.isOpenTask = !this.isOpenTask;
    },
  },
});
</script>
<style scoped>
.test-enter-from,
.test-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
.test-enter-active,
.test-leave-active {
  transition: all 0.3s ease-out;
}
.test-enter-to,
.test-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
