<!-- <template lang="">
  <div>
    <h2 class="">
      Passwort vergessen
    </h2>
    <p class="">{{ notification }}</p>
    <p class="" v-if="error != null">{{ error }}</p>
    <form v-on:submit.prevent="sendmail()" class="-small-top">
      <fieldset class="">
        <div class="">
          <input
            @mouseup="handleFormMouseEvent"
            type="text"
            name="email"
            class=""
            placeholder="E-Mail-Adresse"
            v-model="email"
          />
        </div>
        <div class="">
          <input
            type="submit"
            value="Freigabe-Link senden"
            class=""
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import CloseButton from "./../generic/CloseButton.vue";
export default defineComponent({
  name: "ForgetPassword",
  components: {
    // CloseButton
  },
  setup() {
    const email = ref("");
    const error = ref(null);
    const notification = ref(
      "Bitte geben Sie Ihre E-Mail-Adresse ein. Sie erhalten in wenigen Augenblicken einen Freigabe Link."
    );

    function sendmail() {
      console.log("sendmail");
      notification.value =
        "E-Mail gesendet. Sie erhalten Ihren Link in wenigen Augenblicken.";
    }

    return {
      sendmail,
      email,
      error,
      notification
    };
  }
});
</script>
<style lang=""></style> -->
