export default {
  name: 'piioElement',
  props: {
    path: String,
    tag: String,
    isImage: false
  },
  methods: {
    controlingTag() {
      let tag = this.tag.toLowerCase();
      if (tag === 'img') {
        this.isImage = true;
      } else {
        this.isImage = false;
      }
    }
  },
  mounted() {
  this.controlingTag();
  }
};
