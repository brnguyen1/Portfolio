<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        current_school: {
            type: Object as PropType<Education>,
            required: true
        },
        schools: {
            type: Array<Education>,
            required: true
        }
    },
    methods: {
        changeSchool(new_school) {
            this.$emit("changeschool", new_school);
        }
    }
})
</script>

<template>
    <div class="grid grid-cols-1 divide-y bg-dark-blue bg-gradient-to-t from-white via-dark-blue to-white w-1.5 h-full">
        <div v-for="education in schools" class="my-auto w-max border-none cursor-pointer"
            @click="changeSchool(education)">
            <div class="mx-2 ">
                <p>{{ education.school }}</p>
                <p class="text-xs">{{ education.degree }}</p>
                <p class="italic text-xs">{{ education.start_date }} - {{ education.end_date }}</p>
            </div>

            <div v-if="education.degree == current_school.degree"
                class="bg-dark-blue border border-2 border-dark-blue w-8 h-8 rounded-2xl -ml-3"></div>
            <div v-else class="bg-white border border-2 border-dark-blue w-8 h-8 rounded-2xl -ml-3">

            </div>
        </div>
    </div>
</template>