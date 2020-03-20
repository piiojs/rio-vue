export default {
  name: 'piioElement',
  props: {
    path: String,
    tag: String
  },
  computed: {
    computedTag: function () {
      return this.tag.toLowerCase();
    }
  }
};
