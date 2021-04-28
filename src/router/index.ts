import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CanbanBoard from "@/views/CanbanBoard/index.vue";
import ChatRoom from "@/views/ChatRoom/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CanbanBoard",
    component: CanbanBoard,
  },
  // {
  //   path: "/",
  //   name: "ChatRoom",
  //   component: ChatRoom,
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
