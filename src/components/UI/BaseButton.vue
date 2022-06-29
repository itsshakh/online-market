<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background: #4971ff;
  border-radius: 5px;
  padding: 13px 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #2251f8;
  transition: all 0.3s ease;
}
</style>