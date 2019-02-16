<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p v-html="message">no message.</p>
    <hr>
    <div class="right">
      <router-link to="/">Go to Top</router-link>
    </div>
  </section>
</template>

<script>
export default {
  // パラメータがない場合、エラー表示
  validate({ params }) {
    if (params.id == undefined || params.pass == undefined) {
      return false;
    } else {
      return true;
    }
  },
  data: function() {
    return {
      title: "Login"
    };
  },
  computed: {
    message: function() {
      let id =
        this.$route.params.id != undefined
          ? this.$route.params.id
          : "*** no id ***";
      let pass =
        this.$route.params.pass != undefined
          ? this.$route.params.pass
          : "*** no password ***";
      return "Id:" + id + "<br>PASS:" + pass;
    }
  }
};
</script>