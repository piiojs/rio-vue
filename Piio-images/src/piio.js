export default {
  name: 'Piio',
  components: {

  },
  props: {
    domainKey: String
  },
  created(){
    var preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = '//pcdn.piiojs.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    var preload = document.createElement('link');
    preload.rel = 'preload';
    preload.as = 'script';
    preload.href = '//pcdn.piiojs.com/'+this.domainKey+'/image.min.js';
    document.head.appendChild(preload);

    var piioScript = document.createElement('script');
    piioScript.type = 'text/javascript';
    piioScript.textContent = '(function(i,m,a,g,e) {e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",g.onerror = function() {(g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",e.parentNode.insertBefore(g, e);}, e.parentNode.insertBefore(g, e);}(document, "script", "'+this.domainKey+'"));';
    document.head.appendChild(piioScript);

  },
  computed: {
  }
};
