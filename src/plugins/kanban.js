import store from "store";

const appKey = require("../../project.json").appKey;

export default {
  install: function (Vue) {
    Vue.mixin({
      computed: {
        isMobile() {
          return this.$vuetify.breakpoint.mdAndDown;
        },
      },
      methods: {
        kanbanPriority(boards) {
          const tasks = [];
          const ongoing = [];
          const done = [];
          let x = 0;
          boards.forEach((board) => {
            const nboard = { ...board };
            let tasksCount = 0;
            let ongoingCount = 0;
            let doneCount = 0;
            board.items.forEach((item) => {
              switch (item.status) {
                case "ongoing":
                  ongoingCount++;
                  break;
                case "done":
                  doneCount++;
                  break;
                case "tasks":
                default:
                  tasksCount++;
                  break;
              }
            });

            nboard["index"] = x;
            nboard["tasksCount"] = tasksCount;
            nboard["ongoingCount"] = ongoingCount;
            nboard["doneCount"] = doneCount;

            if (ongoingCount > 0) {
              ongoing.push(nboard);
            } else if (doneCount > 0 && tasksCount < 1) {
              done.push(nboard);
            } else {
              tasks.push(nboard);
            }

            x++;
          });

          return {
            tasks,
            ongoing,
            done,
          };
        },
      },
    });

    Vue.prototype.$kanban = function () {
      const toLocal = () => {
        store.set(appKey, this.$store.state.kanban);
        this.$store.commit("forceRenderKey", String(Date.now()));
      };

      const toStore = () => {
        const data = store.get(appKey) || [];
        this.$store.commit("kanban", data);
      };

      const addBoard = (board) => {
        this.$store.commit("kanbanPush", board);
        toLocal();
      };

      const addTask = (index, task) => {
        const { name, status, due } = task;
        this.$store.commit("kanbanItemPush", {
          index,
          item: { name, status, due },
        });
        toLocal();
      };
      return {
        toLocal,
        toStore,
        addBoard,
        addTask,
      };
    };
  },
};
