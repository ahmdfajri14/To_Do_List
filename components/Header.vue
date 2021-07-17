<template>
  <div>
    <div v-if="homepage">
      <v-row
        no-gutters
        style="margin: 20px 10px 0px 10px"
        justify="space-between"
      >
        <v-col>
          <p style="font-weight: bold; font-size: 24px">{{ greeting }},</p>
          <p style="color: #ec7c7c; font-weight: bold; font-size: 36px">
            {{ userName }}
          </p>
        </v-col>
        <v-col v-if="numberOfFinish">
          <div
            style="
              width: 59px;
              height: 59px;
              border-radius: 50%;
              background: #a0ffc1;
              margin-top: 10px;
              text-align: center;
              line-height: 59px;
              margin-left: 100px;
            "
            class="pa-7 secondary rounded-circle d-inline-block"
          >
            <div
              style="
                position: absolute;
                width: 31px;
                height: 31px;
                border-radius: 50%;
                background: #ff8585;
                text-align: center;
                line-height: 31px;
                right: 25px;
                top: 25px;
                color: white;
              "
            >
              {{ numberOfFinish }}
            </div>
            <v-icon width="27.73px" color="black">mdi-check</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="numberOfList" no-gutters style="margin-left: 10px">
        <v-col style="flex-grow: 0.15 !important">
          <div
            style="
              width: 31px;
              height: 31px;
              border-radius: 50%;
              background: #c1daff;
              margin-top: 10px;
              text-align: center;
              font-size: 14px;
              line-height: 31px;
            "
            class="pa-7 secondary rounded-circle d-inline-block"
          >
            {{ numberOfList }}
          </div>
        </v-col>
        <v-col>
          <p class="text-justify" style="padding-top: 15px">
            Active To-do List
          </p>
        </v-col>
      </v-row>
    </div>
    <v-row v-else no-gutters>
      <v-col style="flex-grow: 0.3 !important">
        <v-btn color="#FA8072" width="20px" depressed tile @click="handleBack">
          <v-icon width="120px" dark> mdi-menu-left </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <p
          class="text-justify"
          style="padding-top: 10px; font-size: 12px; font-weight: bold"
        >
          {{ title }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    greeting: {
      type: String,
      default: "Hello",
    },
    userName: {
      type: String,
      default: "Lione",
    },
    homepage: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Back",
    },
    numberOfList: {
      type: Number,
      default: 2,
    },
    numberOfFinish: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleBack() {
      window.history.back();
    },
  },
};
</script>
