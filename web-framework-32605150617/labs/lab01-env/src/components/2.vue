<template>
  <div class="app-container">
    <h1>单词长度计算器</h1>
    <div class="input-section">
      <textarea 
        v-model="inputText" 
        placeholder="请输入单词长度"
        class="text-input"
      ></textarea>
    </div>
    
    <div class="button-group">
      <button @click="calculate" class="calculate-btn">Calculate</button>
      <button @click="clear" class="clear-btn">Clear</button>
    </div>
    
    <div v-if="results.length > 0" class="results-section">
      <h2>计算结果：</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index">
          "{{ result.word }}"  长度: {{ result.length }}
        </li>
      </ul>
    </div>
    
    <div v-if="realtimeResults.length > 0" class="realtime-results">
      <h2>实时计算结果</h2>
      <ul>
        <li v-for="(result, index) in realtimeResults" :key="'realtime-'+index">
          "{{ result.word }}" - 长度: {{ result.length }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const inputText = ref('');
    const results = ref([]);
    
    const realtimeResults = computed(() => {
      if (!inputText.value.trim()) return [];
      
      return inputText.value.split(/\s+/)
        .filter(word => word.length > 0)
        .map(word => ({
          word,
          length: word.length
        }));
    });
    
    watch(inputText, (newValue) => {
      console.log('输入文本已变化:', newValue);
    });
    
    const calculate = () => {
      if (!inputText.value.trim()) {
        results.value = [];
        return;
      }
      
      results.value = inputText.value.split(/\s+/)
        .filter(word => word.length > 0)
        .map(word => ({
          word,
          length: word.length
        }));
    };
    
    const clear = () => {
      inputText.value = '';
      results.value = [];
    };
    
    return {
      inputText,
      results,
      realtimeResults,
      calculate,
      clear
    };
  }
}
</script>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.text-input {
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.button-group {
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.calculate-btn {
  background-color: #4CAF50;
  color: white;
}

.clear-btn {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.8;
}

.results-section, .realtime-results {
  margin-top: 20px;
  padding: 15px;
  background-color: #643636;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
s
h1, h2 {
  color: #333;
}
</style>