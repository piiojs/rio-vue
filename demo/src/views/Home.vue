<template>
  <div class="home">
    <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2019/11/Logo_full_blue.png" tag="img" height="50px"></PiioElement>
    <h1>Piio images for Vue.js</h1>
    <h2>Image tag example</h2>
    <div class="mb-20">
      <div v-highlight class="half-screen">
        <pre class="language-html">
          <code>
            &lt;PiioElement
            path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg"
            tag="IMG"&gt;
            &lt;/PiioElement&gt;
          </code>
        </pre>
      </div>
      <div class='half-screen'>
        <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="IMG">
        </PiioElement>
      </div>
    </div>
    <div class="mb-20">
      <div v-highlight class='half-screen'>
        <pre class="language-html">
          <code>
            &lt;PiioElement
            path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg"
            tag="img"&gt;
            &lt;/PiioElement&gt;
          </code>
        </pre>
      </div>
      <div class='half-screen'>
        <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="img">
        </PiioElement>
      </div>
    </div>

    <hr>
    <h2>Background example</h2>
    <div>
      <div v-highlight class='half-screen'>
        <pre class="language-html">
          <code>
            &lt;PiioElement
            path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg"
            tag="div"&gt;
              &lt;h1&gt;Your website faster,your images sharper.&lt;/h1&gt;
            &lt;/PiioElement&gt;
          </code>
        </pre>
      </div>
      <div class="half-screen">
        <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="div"
        style="width:90%;margin:0 auto;min-height:300px; color: #ffc107;background-size:cover;background-position:center;background-repeat:no-repeat">
          <h1>Your website faster,your images sharper.</h1>
        </PiioElement>
      </div>
    </div>
    <hr>
    <div>
      <h2>Picture tag with multiple sources example</h2>
      <div v-highlight class='half-screen'>
        <pre class="language-html">
          <code>
            &lt;picture&gt;
              &lt;PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg"
              tag="source"
              media="(min-width:969px)"&gt;
              &lt;/PiioElement&gt;
              &lt;PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg"
              tag="source"
              media="(max-width:969px)"&gt;
              &lt;/PiioElement&gt;
              &lt;PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg"
              tag="img"&gt;
              &lt;/PiioElement&gt;
            &lt;/picture&gt;
          </code>
        </pre>
      </div>
      <div class='half-screen'>
        <picture>
          <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-desktop.jpg" tag="source" media="(min-width:969px)">
          </PiioElement>
          <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="source" media="(max-width:969px)">
          </PiioElement>
          <PiioElement path="https://secureservercdn.net/198.71.233.106/w4y.80f.myftpupload.com/wp-content/uploads/2020/02/backpack-mobile.jpg" tag="img">
          </PiioElement>
        </picture>
      </div>
      <p>Read more about <a href="https://blog.piio.co/responsive/art-direction-showing-different-images-per-device/" target="_blank">Art Direction here</a>.</p>
    </div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home'
}
</script>
