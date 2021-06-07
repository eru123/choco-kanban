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
};

const mutations = {
  ...mutate(state),
  kanbanPush: (state, value) => {
    state.kanban.push(value);
  },
};

const actions = {
  kanbanRemove: ({ state, commit }, index) => {
    const res = [];
    let x = 0;
    state.kanban.forEach((kan) => {
      if (x !== index) {
        res.push(kan);
      }
      x++;
    });
    commit("kanban", res);
  },
};

const modules = {};

module.exports = { state, mutations, actions, modules };
