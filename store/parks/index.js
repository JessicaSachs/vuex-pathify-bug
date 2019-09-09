import { make } from 'vuex-pathify'

const state = () => ({
  facts: [],
  parks: {},
  penguins: { name: 'maria' }
});

const mutations = make.mutations(state);
const actions = make.actions(state);

const getters = {
  ...make.getters(state),
  penguinsAndRecreation(state) {
    console.log(arguments);
    return [state.penguins.name].concat()
  }
};

export default {
  getters,
  mutations,
  actions,
  state
}
