<template>
  <div class="language-switch">
    <div class="language-title">ChangeLang</div>
    <div class="language-list">
      <div
        v-for="(value, key) in langMap"
        v-show="key !== locale"
        :key="key"
        class="language-item"
        @click="setLanguage(key)"
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale, messages } = useI18n()

const langMap: Record<string, any> = {}
Object.keys(messages.value).forEach((key) => {
  langMap[key] = messages.value[key].langname
})

const setLanguage = (value: string) => {
  locale.value = value
}
</script>

<style lang="scss" scoped>
.language-switch {
  width: 100px;
  position: relative;
  display: inline-block;
  user-select: none;

  .language-title {
    cursor: pointer;
    height: 32px;
    line-height: 32px;
    background-color: #eee;
    border-radius: 5px;
  }

  .language-list {
    display: none;
    position: absolute;
    width: calc(100% - 10px);
    background-color: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 5px;

    .language-item {
      cursor: pointer;
      padding: 6px 12px;
      &:hover {
        background-color: #eee;
      }
    }
  }
}

.language-switch:hover .language-list {
  display: block;
}
</style>
