<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
    props: {
        job: {
            type: Object as PropType<Job>,
            required: true
        }
    }
})


</script>

<template>
    <div class="bg-dark-blue block text-tan w-full h-4/6 ml-auto rounded-b-lg">
        <div class="m-3 min-h-5/7">
            <div class="text-light-orange text-lg">
                <h1>{{ job.employer.toUpperCase() }}</h1>
            </div>
            <div class="text-xs">
                <h2>{{ job.title }}</h2>
                <h2>{{ job.start_date }} - {{ job.end_date }}</h2>
            </div>
            <div class="bg-light-orange w-10 h-1 my-4" />
        </div>
        <div class="m-3 h-max">
            Contributions:
            <ul class="my-3 text-sm md:text-base" v-for="contribution in job.contributions">
                {{ contribution }}
            </ul>
        </div>
    </div>
</template>