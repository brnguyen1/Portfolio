<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        current_job: {
            type: Object as PropType<Nullable<Job>>
        },
        jobs: {
            type: Array<Job>,
            required: true
        }
    },
    methods: {
        changeJob(new_job) {
            this.$emit("changejob", new_job);
        }
    }
})
</script>

<template>
    <div
        class="grid grid-cols-1 divide-y bg-dark-blue bg-gradient-to-t from-white via-dark-blue to-white w-1.5 h-full">
        <div v-for="job in jobs" class="my-auto w-max border-none cursor-pointer" @click="changeJob(job)">
            <div class="mx-2 text-sm md:text-base">
                <p>{{ job.title }}</p>
                <p class="text-xs">{{ job.employer }}</p>
                <p class="italic text-xs">{{ job.start_date }} - {{ job.end_date }}</p>
            </div>

            <div v-if="current_job && job.title == current_job.title"
                class="bg-dark-blue border border-2 border-dark-blue w-8 h-8 rounded-2xl -ml-3"></div>
            <div v-else class="bg-white border border-2 border-dark-blue w-8 h-8 rounded-2xl -ml-3">

            </div>
        </div>
    </div>
</template>