<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xl4 lg4 md6 sm12 xs12>
        <v-card color="primary" class="black--text">
          <v-layout>
            <v-flex xs5>
              <v-card-media
                :src="userAvatar"
                height="125px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7>
              <v-card-title>
                <div>
                  <div class="headline">{{userName}}</div>
                  <div>{{userDescription}}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="px-3 py-2">
            <span v-if="isUserLogin">
              <v-icon>filter_9</v-icon> &nbsp;&nbsp;
              <v-tooltip top>
                <span slot="activator">用户等级 {{userLevel}}</span><span>用户等级衡量一名用户的活跃度<br>和完成规划的任务数量</span>
              </v-tooltip>
            </span>
            <v-spacer></v-spacer>
            <span v-if="isUserLogin">
              <v-icon>monetization_on</v-icon>&nbsp;&nbsp;
              <v-tooltip top>
                <span slot="activator">积分 {{userCredits}}</span><span>积分可用于线上交易</span>
              </v-tooltip>
            </span>
            <span v-if="!isUserLogin">
              <v-btn color="secondary" small>登录/注册</v-btn>
            </span>
          </v-card-actions>
        </v-card>

        <v-flex>
          <v-card>
            <v-toolbar color="primary darken-2" flat dense dark>
              <v-toolbar-title>任务索引</v-toolbar-title>
            </v-toolbar>
            <v-list>
              <v-list-group
                v-for="item in items"
                v-model="item.active"
                :key="item.title"
                :prepend-icon="item.action"
                no-action
              >
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile
                  v-for="subItem in item.items"
                  :key="subItem.title"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon>{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-card>
        </v-flex>
      </v-flex>
      <v-flex lg8 xl8 md6 sm12 xs12>
        <v-card>
          <v-toolbar color="pink" dark>
            <v-toolbar-title>任务列表</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="mic"
              class="mx-3"
              flat
              label="Search"
              prepend-inner-icon="search"
              solo-inverted
            ></v-text-field>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(item, index) in todos">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <!--<v-icon-->
                    <!--v-if="selected.indexOf(index) < 0"-->
                    <!--color="grey lighten-1"-->
                  <!--&gt;-->
                    <!--star_border-->
                  <!--</v-icon>-->

                  <v-icon
                    color="yellow darken-2"
                  >
                    star
                  </v-icon>
                </v-list-tile-action>

              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "WelcomePage",
    data () {
      return {
        isUserLogin: false,
        userAvatar: 'https://api.adorable.io/avatars/125/',
        userLevel: 0,
        userCredits: 0,
        userName: "未登录",
        userDescription: "你可以在不登录的状态下继续使用，但无法获得成就，也无法使用部分线上功能",
        items: [
          {
            action: 'today',
            title: '日期索引',
            items: [
              { title: '分配至今天' },
              { title: '分配至本周' }
            ]
          },
          {
            action: 'local_offer',
            title: '分类索引',
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            action: 'priority_high',
            title: '优先级索引',
            items: [
              { title: '高优先级' },
              { title: '中优先级' },
              { title: '低优先级' }
            ]
          },
          {
            action: 'folder_open',
            title: '任务夹',
            items: [
              { title: '已完成任务' },
              { title: '星标任务' },
              { title: '延期任务' },

            ]
          }
        ],
        todos: [
          {
            action: '15 min',
            headline: 'Brunch this weekend?',
            title: 'Ali Connors',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            action: '2 hr',
            headline: 'Summer BBQ',
            title: 'me, Scrott, Jennifer',
            subtitle: "Wish I could come, but I'm out of town this weekend."
          },
          {
            action: '6 hr',
            headline: 'Oui oui',
            title: 'Sandra Adams',
            subtitle: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            action: '12 hr',
            headline: 'Birthday gift',
            title: 'Trevor Hansen',
            subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
          },
          {
            action: '18hr',
            headline: 'Recipe to try',
            title: 'Britta Holt',
            subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>