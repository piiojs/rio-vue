export default {
  name: 'piioElement',
  props: {
    path: String,
    tag: String
  },
  computed: {
    cTag: function () {
      let cTag = this.tag.toLowerCase();
      return cTag;
    }
  }
};
