<template>
  <h1>Home</h1>
  This is the Home-page showing
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import Authenticate from "../components/authentication/Authenticate.vue";
// import Registration from "../components/authentication/Registration.vue";
// import ForgetPassword from "./../components/authentication/ForgetPassword.vue";

export default defineComponent({
  name: "Home",
  components: {
//     // Authenticate,
//     // Registration,
//     // ForgetPassword
  },
  setup() {
    // const authActive = ref(false);
    // const regActive = ref(false);
    // const store = useStore();
    
    // FIXME: testing the vuex-store
    // console.log("foobar's state:", store.state.foobar)
    // store.commit('foobar/incrementFoobar', 10)
    // console.log("foobar's state:", store.state.foobar)
    // console.log(":)")

    // const router = useRouter();
    // const isLoggedIn = store.state.user.isLoggedIn;

    // if (isLoggedIn) {
    //   router.push({ name: "Dashboard" });
    // }
    // const showForgetPassword = ref(false);

    // function handleMouseUpAuth() {
    //   authActive.value = true;
    //   regActive.value = false;
    // }

    // function handleMouseUpReg() {
    //   regActive.value = true;
    //   authActive.value = false;
    // }

    // function regDeactivate() {
    //   regActive.value = false;
    // }

    // function authDeactivate() {
    //   authActive.value = false;
    // }

    // function activateForgetPassword() {
    //   showForgetPassword.value = true;
    // }

    return {
      // handleMouseUpAuth,
      // handleMouseUpReg,
      // authActive,
      // regActive,
      // regDeactivate,
      // authDeactivate,
      // showForgetPassword,
      // activateForgetPassword
    };
  }
});
</script>
<style lang="scss" scoped>

</style>
