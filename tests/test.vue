<template>
  <page-layout>
    <div class="exception__content">
       <gl-result
        status="403"
        title="403"
        sub-title="抱歉，您无权访问此页面"
      />
    </div>
  </page-layout>
</template>

<style lang="scss" scoped>
.exception__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;
  border-radius: 4px;


  &__img {
    position: relative;
    width: 211px;
    height: 180px;
    background: url('@/assets/images/403.png') no-repeat 100% 100%;
  }

  &__text {
    margin-top: 20px;
    font-size: 20px;
    color: #3d3d3d;
    text-align: center;
  }
}
</style>
