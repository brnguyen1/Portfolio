<script lang="ts">
import revs_pic from '../assets/revs.png'
import portfolio_pic from '../assets/portfolio.png'
import spotitube_pic from '../assets/spotitube.png'

let revs: Project = {
    name: "Rev's American Grill Kiosk",
    picture: revs_pic,
    technologies: ["React.js", "Express.js", "PostgreSQL"],
    description: "Two-in-one solution featuring a kiosk view and point of sale system for Rev's American grill. Customers are able to place orders which will populate a queue which employees will be able to complete. SMS feature is integrated so that when customers place an order they will be notified when their order is created and completed. Manager dashboard features dynamic data tables which can easily be implemented by calling the entity name.",
    link: "https://github.com/brnguyen1/revs-web-app"
}

let portfolio: Project = {
    name: "Personal Web Application",
    picture: portfolio_pic,
    technologies: ["Vue.js", "TailwindCSS"],
    description: "This is the web application that you are currently seeing. I developed this web application with inspiration from many sources for design",
    link: "https://github.com/brnguyen1/Portfolio"
}

let spotitube: Project = {
    name:"Spotitube",
    picture: spotitube_pic,
    technologies: ["React.js, Express.js"],
    description: "Spotitube is a web application which allows users to convert Spotify playlists to YouTube playlist. The goal of this application is to minimize time converting a large playlist. This application supports up to about 80 songs. YouTube Data API and Spotify API were used to develop this web application.",
    link: "https://github.com/brnguyen1/spotitube"
}

export default {
    data() {
        return {
            projects: [revs, portfolio, spotitube],
            current_project: revs,
            index: 0
        }
    },
    methods: {
        changeProject(new_index) {
            this.index = new_index;
            this.current_project = this.projects[this.index];
        }
    }
}

</script>

<template>
    <div id="projects" class="flex w-full grid grid-cols-1 divide-y h-screen
     bg-tan">
        <div class="ml-20 mt-10 border-none">
            <h1 class="text-light-orange text-3xl">P R O J E C T S</h1>
            <div class="bg-light-orange w-28 h-1 mx-1 mt-10" />
            <p class="mt-10">These are the projects that I have completed...</p>
        </div>

        <div class="flex flex-wrap bg-light-brown border-none w-full h-96 my-auto -mt-12">
            <div class="flex flex-wrap bg-tan h-full md:w-72 w-60 ml-10 md:ml-32">
                <div class="flex h-4/6 border border-2 w-full mx-auto items-center">
                    <img :src="current_project.picture" class="h-full w-full object-scale-down" />
                </div>
                <div class="flex h-max w-full justify-center mb-auto">
                    <template v-for="(project, index) in projects">
                        <div v-if="project == current_project"
                            class="w-5 h-5 mx-4 rounded-xl border-light-brown bg-light-brown cursor-pointer"
                            @click="changeProject(index)" />
                        <div v-else class="w-5 h-5 mx-4 rounded-xl border border-light-brown bg-tan cursor-pointer"
                            @click="changeProject(index)" />
                    </template>
                </div>
            </div>

            <div class="flex flex-wrap w-1/2 h-full mx-auto ml-2">
                <div class="h-4/6 w-full">
                    <h1 class="font-bold">{{ current_project.name }}</h1>
                    <span v-for="(tech, index) in current_project.technologies">
                        <p class="inline italic">{{ tech }}</p>
                        <span v-if="index < current_project.technologies.length - 1">, </span>
                    </span>
                    <div class="bg-dark-blue w-10 h-1 my-4" />
                    <p class="text-sm">{{ current_project.description }}</p>
                </div>
                <div class="flex justify-start w-full">
                    <a :href="current_project.link">
                        <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path fill="gray"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>