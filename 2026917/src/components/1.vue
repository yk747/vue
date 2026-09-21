<template>
  <div>
    <input type="text" placeholder="输入用户名" v-model="username" /><br />
    <span>{{username}}</span>
    <p>
      <input type="radio" name="xb" id="r1" value="男" v-model="gender"/>
      <label for="r1">男</label><br />
      <input type="radio" name="xb" id="r2" value="女" v-model="gender"/>
      <label for="r2">女</label><br />
      <span>性别是：{{gender}}</span>
    </p>
    <input type="checkbox" id="tongyi" v-model="agreed" true-value="同意" false-value="不同意"/>
    <label for="tongyi">是否同意条款？</label>
    <p>{{agreed}}</p>

    <!-- 作业 -->
    <input type="text" v-model.number="num1"/>+
    <input type="text" v-model.number="num2"/>=
    <span>{{num1+num2}}</span>
  </div>
</template>

<script setup>
import {ref} from 'vue';
//定义变量
let username = ref('')
let gender = ref('')
let agreed = ref('')

// 作业
let num1 = ref(0)
let num2 = ref(0)
</script>

<style>

</style>
