<template>
  <header>
    <router-link to="/"><img src="@/assets/images/logo.png" alt="포럼 로고" class="logo"></router-link>
    <router-link to="/login" class="profile">
      <img src="@/assets/images/user.png" alt="프로필 사진" class="profile-image">
      <p>로그인</p>
    </router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 0.5px solid darkgray;
}

.logo {
  height: 70px;
  cursor: pointer;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 0.5px solid darkgray;
  border-radius: 50%;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
}

.profile-image {
  width: 30px;
  height: 30px;
}
</style>