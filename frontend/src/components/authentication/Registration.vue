<!-- <template>
  <div>
    <h2
      class=""
      :class="{
        '': !isActive,
        '': isActive
      }"
    >
      Registrieren
    </h2>
    <form v-on:submit.prevent="register()">
      <fieldset class="">
        <div class="">
          <input
            @mouseup="handleFormMouseEvent"
            type="text"
            name="username"
            class=""
            placeholder="Vorname Nachname"
            v-model="name"
          />
        </div>
        <div class="">
          <input
            @mouseup="handleFormMouseEvent"
            type="password"
            name="password"
            id=""
            class=""
            placeholder="E-Mail-Adresse"
            v-model="email"
          />
        </div>
        <div class="">
          <div class="">
            <input
              type="submit"
              value="Jetzt registrieren"
              class=""
            />
          </div>
        </div>
      </fieldset>
    </form>
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Registration",
  props: {},
  async setup(props, context) {
    const isActive = ref(false);
    const name = ref(null);
    const email = ref(null);

    function handleFormMouseEvent() {
      context.emit("on-form-mouse-up");
      isActive.value = true;
    }

    function deactivate() {
      context.emit("registration-deactivate");
      isActive.value = false;
    }

    return {
      isActive,
      name,
      email,
      handleFormMouseEvent,
      deactivate
    };
  }
});
</script>

<style scoped>
.sg-button-arrow {
  [data-icon] {
    padding-left: 10px;
    &:before {
      content: attr(data-icon);
    }
  }
}
</style> -->
