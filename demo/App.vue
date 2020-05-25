<template>
  <div id="app">
    <div class="box">
      <el-input v-model="input" placeholder class="inp"></el-input>
      <el-button type="primary" @click="showDialog">生成 cron</el-button>
    </div>
    <el-dialog title="生成 cron" :visible.sync="showCron">
      <vcrontab
        @hide="showCron=false"
        @fill="crontabFill"
        :expression="expression"
      ></vcrontab>
    </el-dialog>
  </div>
</template>

<script>
import vcrontab from "../src/components/Crontab.vue";
export default {
  components: { vcrontab },
  data() {
    return {
      input: "",
      expression: "",
      showCron: false,
      hideComponent: ["second"],
    };
  },
  methods: {
    crontabFill(value) {
      this.input = value;
    },
    showDialog() {
      this.expression = this.input;
      " this.expression ", this.expression;
      this.showCron = true;
    },
  },
};
</script>

<style>
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
