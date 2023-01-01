<script lang="ts">

export default {
    props: {
        header: String,
        skills: Array<Skill>
    }
}

</script>

<template>
    <div class="grid grid-cols-1 border drop-shadow-sm justify-items-start w-4/6 md:h-full h-max m-auto rounded-xl">
        <div class="text-center w-full mx-auto my-2">
            {{ header }}
        </div>
        <div v-for="skill in skills" class="flex border rounded-xl h-max w-5/6 my-2 mx-auto">
            <div class="w-16 h-16 border border-y-0 border-l-0 border-right-4 rounded-l-xl">
                <img v-if="skill.picture" :src="skill.picture" class="w-full h-full object-contain"/>
            </div>
            <div class="h-fit w-fit my-auto mr-auto ml-5 text-sm md:text-lg">{{ skill.name }}</div>
        </div>
    </div>
</template>