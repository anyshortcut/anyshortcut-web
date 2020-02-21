<template>
  <div class="detail-modal" @click="$emit('shortcut-modal-close')">
    <div class="detail-container" @click="$event.stopPropagation()">
      <div class="left">
        <div class="left-top">
          <div class="left-top-t">
            <img :src="ww.favicon" alt />
            <div class="left-title">
              <a :href="ww.url" class="left-href">
                <h1>{{ww.title}}</h1>
                <small>{{ww.url}}</small>
              </a>
            </div>
          </div>
          <div class="left-text">
            linked with
            <span>ALT+{{ww.key}}</span>
          </div>
        </div>
        <div class="left-bottom">
          <div>
            <img src="#" alt />
            <div>
              Used times:
              <span>0</span>
            </div>
          </div>
          <div>
            <img src="#" alt />
            <div>
              Saved time:
              <span>0 seconds</span>
            </div>
          </div>
          <canvas id="myChart" width="360" height="220"></canvas>
        </div>
      </div>
      <div class="right">
        <div class="right-title">
          <div>Secondary shortcut list</div>
          <div class="right-x" @click="$emit('shortcut-modal-close')">X</div>
        </div>
        <!-- <ul v-if="detas.length !== 0">
                    <li v-for="(deta,index) in detas" :key="index">
                        <img :src="deta.favicon" alt="" class="shortcut-img">
                        <div class="shortcut-url">
                            <div>{{deta.title}}</div>
                            <small>{{ deta.url }}</small>
                        </div>
                        <span class="shortcut-key">{{deta.key}}</span>
                    </li>
        </ul>-->
        <listCard :ee="detas" @ShortcutDetail="shy"></listCard>
        <p>{{statis}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import listCard from "./list";
import Chart from "chart.js";

export default {
  name: "ShortcutDetail",
  data() {
    return {
      detas: "",
      statis: ""
    };
  },
  components: {
    listCard
  },
  props: ["ww"],
  async created() {
    try {
      let response = await fetch(
        `https://api.anyshortcut.com/shortcut/${this.ww.id}/secondaries`,
        {
          credentials: "include"
        }
      );
      this.detas = (await response.json()).data;
      let response2 = await fetch(
        `https://api.anyshortcut.com/stats/shortcut?shortcut_id=${this.ww.id}`,
        {
          credentials: "include"
        }
      );
      let chart = (await response2.json()).data;
      let arr = [];
      for(let i=1; i<8; i++){
        arr.push(chart[i])
      }
      this.statis = arr
    } catch (err) {
      alert(err);
    }
    this.yy();
  },
  methods: {
    shy(item) {
      window.open(item.url);
    },
    yy() {
      let myChart = document.getElementById("myChart");
      Chart.defaults.global.defaultFontColor = "#FFFFFF";
      Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";
      new Chart(myChart, {
        type: "bar",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              // label: 'Week statistics',
              data: this.statis,
              backgroundColor: "rgba(255, 255, 255, 0.4)"
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'

              // borderColor:
              // 'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'

              // borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
            // labels:{
            //     fontColor : 'white'
            // }
          },
          title: {
            display: true,
            text: "Week statisticsa",
            fontStyle: "normal",
            padding: 15,
            fontSize: 15
          },
          tooltips: {
            backgroundColor: "#F4F4F4",
            titleFontColor: "#1882EF",
            bodyFontColor: "#1882EF"
          },
          scales: {
            scaleLabel: {
              fontColor: "#B4D8FC"
            },
            xAxes: [
              {
                barPercentage: 0.6,
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMin: 0,
                  suggestedMax: 5
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.detail-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail-container {
  /*background-color: white;  */
  width: 800px;
  height: 500px;
  /*position: relative;*/
  /*margin: auto;*/
  border-radius: 4px;
  box-shadow: 4px 4px 21px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: nowrap;
}

.left {
  width: 50%;
  height: 100%;
  background-color: white;
  border-right: 1px solid #ececec;
  border-radius: 4px 0 0 4px;
}

.left-top {
  /* padding: 20px 20px 0;
        white-space: nowrap; */
  height: 30%;
}

.left-top-t {
  padding: 20px 20px 0;
  white-space: nowrap;
}
.left-top-t img {
  width: 42px;
  height: 42px;
  display: inline-block;
}
.left-title {
  display: inline-block;
  max-width: 315px;
  margin-left: 10px;
  overflow: hidden;
}

.left-href {
  text-decoration: none;
}

.left-href > h1 {
  font-size: 22px;
  margin: 0;
}

.left-text {
  text-align: center;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 5px;
  letter-spacing: 1px;
}

.left-text > span {
  padding: 2px 10px;
  background-color: white;
  border-radius: 2px;
  margin-left: 6px;
  box-shadow: 0px 2px 8px 2px rgba(0,0,0,0.1)
}

.left-bottom {
  background-color: #1882ef;
  height: 70%;
}
.left-bottom div {
  /* padding: 5px 0 0 30px; */
  padding-left: 36px;

  color: white;
}
.right {
  width: 50%;
  height: 100%;
  background-color: #fefefe;
  border-radius: 0 4px 4px 0;
}

.right-title {
  padding: 15px;
  border-bottom: 1px solid;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.right-x {
  padding: 0 10px;
}

li {
  list-style: none;
}
</style>