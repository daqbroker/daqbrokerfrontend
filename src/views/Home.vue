<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="WELCOME - HOME" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created(){
  	window.fetch("/api/test").then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));
    let socket = new WebSocket("ws://localhost:8001/api/ws");
    socket.onmessage = function(e){
      console.log("GOT MESSAGE", e);
    }
    socket.onopen = function(e){
      socket.send("THIS IS A MESSAGE");
    }
    socket.onerror = function(e){
      console.log("I GOT AN ERROR", e, e.message);
    }
  }
};
</script>
