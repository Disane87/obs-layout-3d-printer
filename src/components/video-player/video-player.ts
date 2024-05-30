// src/components/VideoPlayer.ts
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    videoSrc: {
      type: String as PropType<string>,
      required: true
    }
  }
})
