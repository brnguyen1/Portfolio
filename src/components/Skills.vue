<script lang="ts">
import Card from "./Skills/Card.vue"
// Languages icons
import python from '../assets/languages/python.svg'
import c from '../assets/languages/c.svg'
import javascript from '../assets/languages/javascript.svg'
import java from '../assets/languages/java.svg'
import psql from '../assets/languages/postgresql.svg'
import mdb from '../assets/languages/mongodb.svg'

// Framework icons
import react from '../assets/frameworks/react.svg'
import vue_icon from '../assets/frameworks/vue.svg'
import tcss from '../assets/frameworks/tailwindcss.svg'
import njs from '../assets/frameworks/nodejs.svg'
import django from '../assets/frameworks/django.svg'

// technical icons
import full_dev from '../assets/technical/server.svg'
import robot from '../assets/technical/robot.svg'
import ml from '../assets/technical/ml.svg'
import scrum from '../assets/technical/clipboard.svg'
import leader from '../assets/technical/leader.svg'
import tshoot from '../assets/technical/mag-glass.svg'

let languages: Array<Skill> = [
    { name: "Python", picture: python },
    { name: "C++", picture: c },
    { name: "JavaScript", picture: javascript },
    { name: "Java", picture: java },
    { name: "PostgreSQL", picture: psql },
    { name: "MongoDB", picture: mdb }
]

let frameworks: Array<Skill> = [
    { name: "React.js", picture: react },
    { name: "Vue.js", picture: vue_icon },
    { name: "Tailwind CSS", picture: tcss },
    { name: "Node.js", picture: njs },
    { name: "Django", picture: django }
]

let technical: Array<Skill> = [
    { name: "Full-stack Development", picture: full_dev },
    { name: "Robotics", picture: robot },
    { name: "Machine Learning", picture: ml },
    { name: "SCRUM", picture: scrum },
    { name: "Leadership", picture: leader },
    { name: "Troubleshooting", picture: tshoot }
]

export default {
    data() {
        return {
            languages: languages,
            frameworks: frameworks,
            technical: technical,
        }
    },
    components: {
        Card
    }
}
</script>

<template>
    <div id="skills" class="block my-auto bg-tan w-full h-max md:py-60 lg:py-20">
        <div class="w-full text-center">
            <h1 class="my-auto text-dark-blue text-3xl">S K I L L S</h1>
        </div>
        <div class="grid md:grid-cols-3 gap-8 grid-cols-1 w-full h-max">
            <Card header="Languages" :skills="languages" />
            <Card header="Web Development" :skills="frameworks" />
            <Card header="Technical" :skills="technical" />
        </div>
    </div>
</template>