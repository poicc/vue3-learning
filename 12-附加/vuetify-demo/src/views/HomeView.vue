<template>
  <v-container fluid>
    <v-row justify="center">
      <v-progress-linear indeterminate color="teal"></v-progress-linear>
      <br />

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  />
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="grey--text">
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    <div class="d-flex mt-5">
      <div>
        <div class="subheading"></div>
        <v-date-picker
          color="teal"
          v-model="date2"
          :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
          :events="functionEvents"
        ></v-date-picker>
      </div>

      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card class="mx-auto text-center" color="teal" dark max-width="600">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :value="value1"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item"> ${{ item.value }} </template>
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="text-h4 font-weight-thin">Sales Last 24h</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text> Go to Report </v-btn>
        </v-card-actions>
      </v-card>

      <v-switch
        v-model="ex11"
        label="success"
        color="teal"
        value="success"
        hide-details
      ></v-switch>
    </div>
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      class="mt-2"
    >
      <v-btn>
        <span>Video</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import WebSite from "../components/WebSite.vue";
export default {
  name: "Home",
  components: {
    WebSite,
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ["red", "#00f"];
      return false;
    },
  },
  data() {
    return {
      show: false,
      value: 1,
      value1: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      list: [
        {
          url: 'https://www.aliyun.com/"',
          logoImg: "http://47.96.31.161:9000/my-file/icon/aliyun.png",
          title: "阿里云",
          subTitle: "点击领取200元阿里云优惠券",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg: "http://47.96.31.161:9000/my-file/icon/tengxunyun.png",
          title: "腾讯云",
          subTitle: "点击领取200元腾讯云优惠券",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg: "http://47.96.31.161:9000/my-file/icon/huaweiyun.png",
          title: "华为云",
          subTitle: "点击领取200元华为云优惠券",
        },
        {
          url: 'https://www.aliyun.com/"',
          logoImg: "http://47.96.31.161:9000/my-file/icon/qiniuyun.png",
          title: "七牛云",
          subTitle: "点击领取200元华为云优惠券",
        },
      ],
      messages: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "John Leider",
          title: "Welcome to Vuetify!",
          excerpt: "Thank you for joining our community...",
        },
        {
          color: "red",
          icon: "mdi-account-multiple",
          name: "Social",
          new: 1,
          total: 3,
          title: "Twitter",
        },
        {
          color: "teal",
          icon: "mdi-tag",
          name: "Promos",
          new: 2,
          total: 4,
          title: "Shop your way",
          exceprt: "New deals available, Join Today",
        },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
    };
  },
};
</script>
