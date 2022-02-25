<!-- <template>
  <div>
    <h2
      class=""
      :class="{
        '': !isActive,
        '': isActive
      }"
    >
      Login
    </h2>
    <p class="" v-if="error != null">{{ error }}</p>
    <form v-on:submit.prevent="authenticate()">
      <fieldset class="">
        <div class="">
          <input
            @mouseup="handleFormMouseEvent"
            type="text"
            name="username"
            class=""
            placeholder="E-Mail-Adresse"
            v-model="username"
            data-testid="input-username"
          />
        </div>
        <div class="">
          <input
            @mouseup="handleFormMouseEvent"
            type="password"
            name="password"
            class=""
            placeholder="Passwort"
            v-model="password"
            data-testid="input-password"
          />
        </div>
        <div class="">
          <input
            type="submit"
            value="Jetzt anmelden"
            class=""
            data-testid="input-submit"
          />
        </div>
      </fieldset>
    </form>
    <div class="">
      <a @click.prevent="passwordForgetClicked">Passwort vergessen ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onErrorCaptured } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Authenticate",
  props: {},
  
  setup(props, context) {
    const router = useRouter();
    const username = ref(null);
    const password = ref(null);
    const isActive = ref(false);
    const store = useStore();
    const isLoggedIn = computed(() => store.state.user.isLoggedIn);
    const error = ref(null);

    // onErrorCaptured(() => {
    //   console.log('ErrorCaptured!')
    //   // err: Error, instance: Component, info: string => ?boolean
    // })

    const authenticate = async () => {
      const authResponse = await store.dispatch("user/login", {
        username: username.value,
        password: password.value
      });
      if (authResponse && isLoggedIn) {
        //localStorage.removeItem('vuex')
        router.push({ name: "Dashboard" });
      } else {
        error.value = "Sorry, Username oder Passwort sind nicht bekannt";
      }
    };

    function handleFormMouseEvent() {
      context.emit("on-form-mouse-up");
      isActive.value = true;
    }

    function deactivate() {
      isActive.value = false;
      context.emit("authentication-deactivate");
    }

    function passwordForgetClicked() {
      context.emit("password-forget-clicked");
    }

    return {
      error,
      isActive,
      username,
      password,
      authenticate,
      handleFormMouseEvent,
      deactivate,
      passwordForgetClicked
    };
  }
});
</script>

<style lang="scss" scoped></style> -->
