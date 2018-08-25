<template>
  <v-container fluid grid-list-md style="-webkit-font-smoothing: antialiased;">
    <v-layout row wrap>
      <v-flex id="clock-area" xl8 lg8 md8 sm12 xs12>
        <v-card color="red" id="tomato">
          <div class="timer-slogan">
            <h3>你坚持不下去的，赶紧放弃吧</h3>
          </div>
          <div id="timer">
            <span id="time-session">Focus Session<br>专注时间</span>
            <span id="time-countdown">120:00</span>
          </div>
          <div id="timer-control">
            <v-btn fab color="white" class="control-btn">
              <v-icon>clear</v-icon>
            </v-btn>
            <v-btn large fab color="white" class="control-btn">
              <v-icon style="font-size: xx-large">play_arrow</v-icon>
            </v-btn>
            <v-btn fab color="white" class="control-btn">
              <span style="font-size: x-large">?</span>
            </v-btn>
          </div>
        </v-card>
      </v-flex>
      <v-flex xl4 lg4 md4 sm12 sx12>
        <v-card>
          <v-toolbar color="primary" dense dark>
            <v-toolbar-title>时间设置</v-toolbar-title>
          </v-toolbar>
          <v-subheader>滑动滑块选取时间 (分钟)</v-subheader>
          <v-card-text>
            <v-slider
              v-model="value"
              :rules="rules"
              label="专注时长"
              :min="10"
              :max="120"
              step="5"
              thumb-label
            ></v-slider>
            <v-slider
              v-model="value"
              label="休息时长"
              :min="1"
              :max="60"
              thumb-label
            ></v-slider>
            <v-slider
              v-model="value"
              label="长休息时长"
              :min="1"
              :max="60"
              thumb-label
            ></v-slider>
            <v-slider
              v-model="value"
              :rules="rules"
              label="几个番茄后进行一次长休息？"
              :min="2"
              :max="10"
              thumb-label
            ></v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "PomodoroClock"
  }
</script>

<style scoped>
  #timer {
    position: relative;
    width: 230px;
    height: 230px;
    border: 4px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    flex-flow: column wrap;
    overflow: hidden;
    transition: background-color .5s ease;
  }

  #timer::before {
    content: '';
    position: absolute;
    background: #04ACFF;
    width: 100%;
    bottom: 0;
    animation: wipe 60s cubic-bezier(.2,.6,.8,.4) forwards;
  }

  @keyframes wipe {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  .timer-slogan{
    padding: 30px 0;
    text-align: center;
    color: white;
  }

  #time-session {
    z-index: 1;
    font-weight: 500;
  }

  #time-countdown {
    z-index: 1;
    font-size: 2.5rem;
  }

  #timer-control{
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  #timer-control > .control-btn{
    margin-left: 15px; margin-right: 15px;
  }

</style>