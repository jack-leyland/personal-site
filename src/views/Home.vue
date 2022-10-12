<script setup lang="ts">
  import IntroPanel from "../components/IntroPanel.vue"
  import ContactPanel from "../components/ContactPanel.vue"
  </script>
  
  <template>
      <div class="animate-fade sm:animate-homeSlide absolute left-8 sm:left-48 top-0 pt-28 sm:pt-56 h-[99vh] z-10 w-[calc(100vw-4rem)] sm:w-[calc(50vw-12rem)]">
          <IntroPanel />
          <br>
          <ContactPanel />
      </div>
  </template>