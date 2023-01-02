<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
    props: {
        job: {
            type: Object as PropType<Job> | null
        }
    },
    methods: {
        removeJob() {
            this.$emit("removejob", null);
        }
    }
})


</script>

<template>
    <div class="bg-dark-blue text-tan w-full h-4/6 rounded-b-lg">
        <div v-if="job" class="m-3 min-h-5/7">
            <div class="flex flex-row text-light-orange text-lg">
                <div class="w-max">
                    <h1>{{ job.employer.toUpperCase() }}</h1>
                </div>
                <div class="w-8 ml-auto md:hidden cursor-pointer" @click="removeJob()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path class="fill-tan opacity-50"
                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                </div>
            </div>
            <div class="text-xs">
                <h2>{{ job.title }}</h2>
                <h2>{{ job.start_date }} - {{ job.end_date }}</h2>
            </div>
            <div class="bg-light-orange w-10 h-1 my-4" />
        </div>
        <div v-if="job" class="m-3 h-max">
            Contributions:
            <ul class="my-3 text-sm md:text-base" v-for="contribution in job.contributions">
                {{ contribution }}
            </ul>
        </div>
    </div>
</template>