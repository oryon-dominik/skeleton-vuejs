<!-- <template>
  <div>
    <form data-testid="logout-form" v-on:submit.prevent="unauthenticate()">
      <fieldset class="">
        <div class="n">
          <input
            type="submit"
            value="LogoutPage"
            class=""
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Unauthenticate",
  setup() {
    const router = useRouter();
    // const store = useStore();
    const unauthenticate = () => {
      // store.dispatch("user/logout");
      // store.dispatch("todos/clearState");
      localStorage.clear();
      router.push({ name: "HomePage" });
    };
    return {
      unauthenticate
    };
  }
});
</script>

<style lang="scss" scoped></style> -->
