<template>
  <div id="app">
    <div class="box">
      <el-input v-model="input" placeholder="" class="inp"></el-input>
      <el-button type="primary" @click="showDialog">生成 cron</el-button>
    </div>
    <el-dialog title="生成 cron" :visible.sync="showCron">
      <crontab @hide='showCron=false' @fill='crontabFill' :expression="expression"></crontab>
    </el-dialog>
  </div>
</template>

<script>
import crontab from './components/Crontab.vue'
export default {
  components: { crontab },
  data() {
    return {
      input: '',
      expression: '',
      showCron: false,
    }
  },
  methods: {
    crontabFill(value) {
      this.input = value
    },
    showDialog() {
      this.expression = this.input
      console.log(' this.expression ', this.expression);
      this.showCron = true
    },
  }
}
</script>

<style lang="scss">
.box {
  width: 500px;
  height: 100px;
  margin: 150px auto 0;
}
.inp {
  width: 300px !important;
  margin-right: 20px;
}
</style>




