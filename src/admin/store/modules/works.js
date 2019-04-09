export default  {
  namespaced: true,
  state: {
    works: []
  },
  actions: {
    addNewWorkExample(store, WorkExample) {
      console.log(WorkExample);
    }  
  },
}
