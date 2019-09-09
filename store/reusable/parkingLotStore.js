import { make } from 'vuex-pathify';

const state = () => ({
  parkingLot: true,
});

const mutations = make.mutations(state);
const actions = make.actions(state);
const getters = make.getters(state);

export default { state, mutations, actions, getters, namespaced: true };

