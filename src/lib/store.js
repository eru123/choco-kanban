const mutate = (stateInstance) => {
  const res = {};
  for (let x in stateInstance) {
    res[x] = (state, value) => {
      state[x] = value;
    };
  }
  return res;
};

const state = {
  title: "Kanban Boards",
  kanban: [],
  forceRenderKey: "default",
  boardSelect: false,
  boardSelected: [],
  taskSelect: false,
  taskSelected: [],
};

const mutations = {
  ...mutate(state),
  kanbanPush: (state, value) => {
    const { name, items } = value;
    state.kanban.push({ name, items });
  },
  kanbanItemPush: (state, value) => {
    const { index, item } = value;
    state.kanban[index].items.push(item);
  },
};

const actions = {
  kanbanRemove: ({ state, commit }, index) => {
    const res = [];
    let x = 0;
    state.kanban.forEach((kan) => {
      if (x != index) {
        res.push(kan);
      }
      x++;
    });
    commit("kanban", res);
  },
  toggleTaskSelectItem: ({ state, commit }, index) => {
    const items = state.taskSelected;
    let inItems = false;
    const newItems = [];
    items.forEach((item) => {
      if (item == index && !inItems) {
        inItems = true;
      } else {
        newItems.push(item);
      }
    });
    if (!inItems) newItems.push(index);
    commit("taskSelected", newItems);
  },
  resetState({ commit }) {
    for (let x in state) {
      commit(x, state[x]);
    }
  },
};

const modules = {};

module.exports = { state, mutations, actions, modules };
