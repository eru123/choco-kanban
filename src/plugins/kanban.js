import store from "store";

const appKey = require("../../project.json").appKey;
const colors = [
  { text: "No Color", value: "#fff" },
  { text: "Blue", value: "#BBDEFB" },
  { text: "Green", value: "#C8E6C9" },
  { text: "Red", value: "#FFCDD2" },
  { text: "Orage", value: "#FFE0B2" },
  { text: "Amber", value: "#FFECB3" },
  { text: "Yellow", value: "#FFF9C4" },
  { text: "Lime", value: "#F0F4C3" },
  { text: "Teal", value: "#B2DFDB" },
  { text: "Cyan", value: "#B2EBF2" },
  { text: "Indigo", value: "#C5CAE9" },
  { text: "Purple", value: "#E1BEE7" },
  { text: "Pink", value: "#F8BBD0" },
  { text: "Brown", value: "#D7CCC8" },
  { text: "Grey", value: "#F5F5F5" },
];

const dateUnits = [
  { text: "Minutes", value: 60 },
  { text: "Hours", value: 3600 },
  { text: "Days", value: 86400 },
  { text: "Weeks", value: 604800 },
  { text: "Months", value: 2.628e6 },
  { text: "Years", value: 3.154e7 },
];
export default {
  install: function (Vue) {
    Vue.mixin({
      data: () => ({
        colors,
        dateUnits,
      }),
      computed: {
        isMobile() {
          return this.$vuetify.breakpoint.mdAndDown;
        },
        boardSelect() {
          return this.$store.state.boardSelect;
        },
        taskSelect() {
          return this.$store.state.taskSelect;
        },
        boardSelected() {
          return this.$store.state.boardSelected;
        },
        taskSelected() {
          return this.$store.state.taskSelected;
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
        toggleTaskSelect() {
          this.$store.commit("taskSelect", !this.taskSelect);
          this.$store.commit("taskSelected", []);
        },
        toggleTaskSelectItem(k) {
          this.$store.dispatch("toggleTaskSelectItem", k);
        },
        toggleBoardSelect() {
          this.$store.commit("boardSelect", !this.boardSelect);
          this.$store.commit("boardSelected", []);
        },
      },
    });
    Vue.directive("remaining", function (el, binding) {
      const remains = function (mss) {
        let resV = 0;
        let resT = "";
        const ms = +Number(mss) - Date.now();
        dateUnits.forEach(({ text, value }) => {
          if (ms > value * 1000) {
            resV = value * 1000;
            resT = text;
          }
        });
        return {
          unit: resT,
          value: Math.round(ms / resV),
        };
      };
      const alarms = function (due, alarm) {
        let resV = 0;
        let resT = "";
        const dateNow = Date.now();
        const ms = due - (dateNow + (alarm - dateNow));
        console.log("ms", ms);
        dateUnits.forEach(({ text, value }) => {
          if (ms > value * 1000) {
            resV = value * 1000;
            resT = text;
          }
        });
        return {
          unit: resT,
          value: Math.round(ms / resV),
        };
      };
      let res = "";

      if (binding.value.hasDue) {
        const due = remains(binding.value.due);
        res =
          binding.value.status == "done"
            ? "✔️ Done before Due"
            : due.value < 1
            ? "⚠️ <span style='color: #C62828;text-shadow:1px 1px 1px #FFEBEE'>Already Due</span>"
            : due.unit
            ? `🕒 Due in ${due.value} ${due.unit}`
            : "🕒 No Due +";

        if (binding.value.hasAlarm && binding.value.status != "done") {
          const alarm = alarms(binding.value.due, binding.value.alarm);
          console.log("alarm", alarm);
          res +=
            binding.value.status != "ongoing"
              ? ""
              : alarm.unit && due.value > alarm.value
              ? ` ⏰ Alarms in ${alarm.value} ${alarm.unit}`
              : "";
        }
      } else {
        res = "🕒 No Due";
      }

      el.innerHTML = res;
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
        const { name, status, due, hasDue, color, alarm, hasAlarm } = task;
        this.$store.commit("kanbanItemPush", {
          index,
          item: { name, status, due, hasDue, color, alarm, hasAlarm },
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
