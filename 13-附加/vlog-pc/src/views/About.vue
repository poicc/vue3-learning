<template>
  <v-card class="mx-auto" max-width="600">
    <v-card dark flat>
      <!-- <v-btn absolute bottom color="pink" right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->

      <v-img
        :src="user.banner"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container class="fill-height">
          <v-row align="center">
            <strong class="text-h3 font-weight-regular">星期六</strong>
            <v-row justify="end">
              <div class="text-h5 font-weight-light mr-2">23</div>
              <div class="text-uppercase font-weight-light mr-6">四月 2022</div>
            </v-row>
          </v-row>
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2020.1</strong>
            </v-col>
            <v-col>
              <strong>我们相遇</strong>
              <div class="text-caption">到现在八百多天</div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2020.11</strong>
            </v-col>
            <v-col>
              <strong>结束软件1851最后一次实训</strong>
              <div class="text-caption mb-2">Hangouts</div>
              <v-avatar>
                <v-img
                  src="https://niit-soft.oss-cn-hangzhou.aliyuncs.com/upload/147bee1c-559e-46a3-99c2-5fcf4273f3d6.jpg"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://cdn.jsdelivr.net/gh/poicc/image@main/me.2r7p6lo57zy0.webp"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2021.9</strong>
            </v-col>
            <v-col>
              <strong>感谢再次相遇</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2022.4</strong>
            </v-col>
            <v-col>
              <strong>故事还在继续</strong>
              <div class="text-caption">Happe Day</div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
}
</script>

<style></style>
