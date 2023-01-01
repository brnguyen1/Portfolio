<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
    props: {
        education: {
            type: Object as PropType<Education>,
            required: true
        }
    }
})


</script>

<template>
    <div class="bg-dark-blue block text-tan w-full h-4/6 ml-auto ">
        <div class="m-3 min-h-5/7">
            <div class="text-light-orange text-lg">
                <h1>{{ education.school.toUpperCase() }}</h1>
            </div>
            <div class="text-xs">
                <h2>{{ education.degree }}</h2>
                <h2>{{ education.start_date }} - {{ education.end_date }}</h2>
                <h2 class="my-2"> GPA: <span class="underline">{{ education.gpa }}</span></h2>
                <span v-if="education.courses">
                    <h2>Courses:</h2>
                    <p class="inline" v-for="(course, index) in education.courses">{{ course }}<span
                            v-if="index < education.courses.length - 1">, </span> </p>
                </span>
            </div>
            <div class="bg-light-orange w-10 h-1 my-5"/>
        </div>
        <div class="m-3 h-max text-sm md:text-base">
            {{ education.description }}
        </div>
    </div>
</template>