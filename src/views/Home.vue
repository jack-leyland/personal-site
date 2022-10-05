<script setup lang="ts">
  import IntroPanel from "../components/IntroPanel.vue"
  import ContactPanel from "../components/ContactPanel.vue"
  </script>
  
  <template>
      <div class="animate-homeSlide absolute left-48 top-0 pt-56 h-[100vh] z-10 max-w-[calc(50vw-12rem)]">
          <IntroPanel />
          <br>
          <ContactPanel />
      </div>
  </template>