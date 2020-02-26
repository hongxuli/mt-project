const state = () => ({
  // position: { province: ["天津"], city: ["天津"], ip: "" }
  position: {}
});

const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
};

const actions = {
  setPosition: ({ commit }, position) => {
    commit("setPosition", position);
  }
};

export default { namespaced: true, state, mutations, actions };
