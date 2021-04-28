<template>
  <div class="w-full h-screen flex flex-col space-y-8 py-6 overflow-y-hidden">
    <div class="flex justify-between">
      <div class="font-semibold text-2xl">Kanban</div>

      <div class="space-x-6">
        <button
          class="px-4 py-2 rounded-md bg-black border-2 border-yellow-600 text-yellow-600"
        >
          Manage Workboard
        </button>
        <button
          class="px-4 py-2 rounded-md bg-black border-2 border-yellow-600 text-yellow-600"
        >
          Buat Tiket
        </button>
      </div>
    </div>

    <div class="w-full flex-row h-full overflow-y-hidden flex space-x-8">
      <div class="flex space-x-6 mb-8">
        <!-- Board List -->
        <div
          class="w-100 flex flex-col h-full"
          v-for="(item, index) in boardList"
          :key="index"
        >
          <div class="bg-dark py-5 font-semibold px-4 rounded-t">
            {{ item.name }}
          </div>
          <div class="bg-dark001 p-4 rounded-b overflow-y-auto">
            <div class="w-full space-y-4" v-show="item.cards.length > 0">
              <div
                :ondrop="(event) => drop(event, item.name)"
                :ondragover="(event) => allowDrop(event)"
                v-for="it in item.cards"
                :key="it"
                class="bg-dark002 space-y-3 border border-gray-400 rounded p-3"
                draggable="true"
                id="drag_1"
                :ondragstart="() => drag(it, item.name)"
              >
                <span class="font-semibold">{{ it.taskID }} {{ " " }}</span>
                <span>{{ it.title }}</span>
                <div class="w-full flex justify-between">
                  <div
                    :title="`${it.sp} Story Point`"
                    class="bg-gray-600 px-2 py-1"
                  >
                    {{ it.sp }}
                  </div>
                  <div
                    :title="it.assign"
                    class="w-8 h-8 bg-gray-600 rounded-sm"
                  >
                    <img :src="it.image" class="w-full h-full rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div
              v-show="!item.cards.length"
              :ondrop="(event) => drop(event, item.name)"
              :ondragover="(event) => allowDrop(event)"
              class="h-24 bg-dark002 border-dashed border-2 border-gray-400 rounded"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface ICard {
  taskID: string;
  title: string;
  sp: number;
  assign: string;
  image: string;
}
interface IBoard {
  id: number;
  name: string;
  cards: ICard[];
}
export default defineComponent({
  name: "KanbanBoard",
  data() {
    return {
      boardList: [
        {
          id: 1,
          name: "Backlog",
          cards: [
            {
              taskID: "T1234",
              title: "Create Reusable A",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T134",
              title: "Create Reusable B",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T145234",
              title: "Create Reusable C",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T12234",
              title: "Create Reusable D",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T124234",
              title: "Create Reusable E",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T123564",
              title: "Create Reusable F",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T126534",
              title: "Create Reusable G",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T1234",
              title: "Create Reusable H",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
            {
              taskID: "T124",
              title: "Create Reusable I",
              sp: 3,
              assign: "mul14",
              image:
                "https://dn9qobbfc75i5.cloudfront.net/file/data/egwttea7gfxpck3tb6b4/PHID-FILE-hh4pe47w5jjtwmbszn75/profile",
            },
          ],
        },
        {
          id: 2,
          name: "To Do",
          cards: [],
        },
        {
          id: 3,
          name: "Done",
          cards: [],
        },
      ] as IBoard[],
      selectedData: {} as ICard,
      boardName: "" as string,
    };
  },
  methods: {
    drag(data: ICard, boardName: string) {
      this.selectedData = data;
      this.boardName = boardName;
    },
    drop(event: any, boardName: string) {
      const boardBefore = this.boardList.filter(
        (val: IBoard) => val.name == this.boardName
      );
      const before = boardBefore.map((val: IBoard) =>
        val.cards.filter(
          (card: ICard) => card.taskID !== this.selectedData.taskID
        )
      );
      boardBefore[0].cards = before[0];
      const boardSelect = this.boardList.filter(
        (val: IBoard) => val.name == boardName
      );
      const card = boardSelect.map(
        (val: IBoard) => (val.cards = [...val.cards, this.selectedData])
      );
      console.log("card", card);
    },
    allowDrop(ev: any) {
      ev.preventDefault();
    },
  },
});
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #b3b3b3;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
