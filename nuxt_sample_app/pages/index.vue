<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr>
    <pre>[{{now}}]</pre>
    <router-link to="/other">Go to Other</router-link>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Hello",
      message: "this is message.",
      now: "wait..."
    };
  },
  created: function() {
    setInterval(() => {
      var d = new Date();
      this.now = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }, 1000);
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
