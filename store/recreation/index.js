import { make } from 'vuex-pathify';

const state = () => ({
  sports: ['skating', 'ice skating']
});

const mutations = make.mutations(state);
const actions = make.actions(state);
const getters = make.getters(state);

export default {
  state,
  mutations,
  actions,
  getters,
};
