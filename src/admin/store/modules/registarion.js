const autorization = {
  state: {
    email: '',
    password: ''
  },
  actions: {
    send: (state) => {
        // fetch ->
    }
  },
  getters: {

  },
  mutations: {
    handleEmail: (state, value) => {
        state.email = value;
    },
    handlePass: (state, value) => {
        state.password = value;
    },
  }
}
export default autorization;
