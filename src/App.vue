<script setup>
import { computed, ref } from "vue";

const weightList = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const selected = ref([400, 700]);

const inputText = ref("メロスは激怒した");

const importWeights = computed(() => {
  return selected.value.sort().join(";");
});

const antialias = ref("on");
</script>
<template>
  <div>
    <link
      :href="`https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${importWeights}`"
      rel="stylesheet"
    />
    <v-container>
      <h1 class="text-h3 py-8">Noto Sans JP フォントウェイト</h1>
      <v-col>
        <v-row>
          <v-card width="100%" class="pt-5">
            <v-col>
              <v-row align="center">
                <v-col>
                  <h2 class="text-h5 pl-4">利用するウェイト</h2>
                  <v-row class="pa-5 d-flex justify-center">
                    <v-checkbox
                      v-model="selected"
                      :label="weight"
                      :value="weight"
                      v-for="weight in weightList"
                      :key="weight"
                    ></v-checkbox>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h2 class="text-h5 pl-4 mb-1">
                    CSSのアンチエイリアス（macOSのみ有効）
                  </h2>
                  <v-radio-group class="pl-4" v-model="antialias">
                    <v-radio label="有効" value="on"></v-radio>
                    <v-radio label="無効" value="off"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h2 class="text-h5 pl-4 mb-1">文字</h2>
                  <p class="text-body-2 pl-4">
                    好きなテキストを入力してください
                  </p>
                  <v-text-field
                    v-model="inputText"
                    label="テキスト"
                    class="pa-4"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
    </v-container>

    <v-container>
      <v-col>
        <v-row> </v-row>
      </v-col>
    </v-container>
    <v-container>
      <v-col>
        <v-row>
          <v-card text="ウェイト normal" width="100%" class="mb-1">
            <p
              :class="`text antialias-${antialias}`"
              style="font-weight: normal"
            >
              {{ inputText }}
            </p>
          </v-card>
        </v-row>
        <v-row>
          <v-card text="ウェイト bold" width="100%" class="mb-12">
            <p :class="`text antialias-${antialias}`" style="font-weight: bold">
              {{ inputText }}
            </p>
          </v-card>
        </v-row>
        <v-row v-for="weight in weightList" :key="weight" class="mb-1">
          <v-card :text="`ウェイト${weight}`" width="100%">
            <p :class="`weight-${weight} text antialias-${antialias}`">
              {{ inputText }}
            </p>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 9 {
  .weight-#{$i*100} {
    font-weight: #{$i * 100};
  }
}

#app {
  p.text {
    padding: 0 1rem 1rem;
    font-size: 32px;
    font-family: "Noto Sans JP", sans-serif !important;
  }
}

.antialias-on {
  -moz-osx-font-smoothing: grayscale !important;
  -webkit-font-smoothing: antialiased !important;
}
</style>
