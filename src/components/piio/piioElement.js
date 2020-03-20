export default {
  name: 'piioElement',
  props: {
    path: String,
    tag: String
  },
  computed: {
    isImage: function () {
      let tag = this.tag.toLowerCase();
      return tag === 'img';
    }
  }
};
