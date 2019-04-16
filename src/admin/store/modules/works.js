export default  {
  namespaced: true,
  state: {
    works: []
  },
  actions: {
    addNewWorkExample(store, WorkExample) {
      console.log(WorkExample);
      const formData = new FormData();

      formData.append('title', workExample.title);
      formData.append('techs', workExample.techs);
      formData.append('photo', workExample.photo);
      formData.append('link', workExample.link);
      formData.append('desc', workExample.desc);

      this.$axios.port('/works', formData);
    } 
  },
}
