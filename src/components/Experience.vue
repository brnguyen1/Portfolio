<script lang="ts">
import JobBlock from './Experience/JobBlock.vue'
import JobTimeline from './Experience/JobTimeline.vue'
import SchoolBlock from './Experience/SchoolBlock.vue'
import SchoolTimeline from './Experience/SchoolTimeline.vue'

export default {
    data() {
        // JOBS
        let innov_apprentice: Job = {
            title: "Innovation Apprentice",
            picture: null,
            employer: "Samsung Austin Semiconductor",
            contributions: ["Deployed web application to have a direct communication with customers from all unit parts", "Generated weekly metrics using Python libraries: matplotlib and pandas to illustrate costing savings", "Repaired and validated over 100 electronic parts"],
            start_date: "Jun 2019",
            end_date: "Aug 2021"
        }

        let student_tech: Job = {
            title: "Student Technician",
            picture: null,
            employer: "Texas A&M University",
            contributions: ["Troubleshoot computer systems and accessory devices", "Track and manage IT inventory to deliver equipment to customers just in time", "Verify quotes and receive incoming ordered items"],
            start_date: "Jun 2022",
            end_date: "Current"
        }

        let fidelity_intern: Job = {
            title: "Data Engineering Intern",
            picture: null,
            employer: "Fidelity Investments",
            contributions: ["Upcoming"],
            start_date: "Jun 2023",
            end_date: "Aug 2023"
        }

        // EDUCATION
        let tamu: Education = {
            school: "Texas A&M University",
            picture: null,
            degree: "Bachelor of Science - Computer Engineering",
            gpa: "3.62",
            start_date: "Aug 2019",
            end_date: "Dec 2023",
            courses: ["Programming Studio", "Machine Learning", "Robotics & Spatial Intelligence", "Data Structures & Algorithms", "Microcomputer Systems"],
            description: "I'm a senior at Texas A&M University currently pursuing a B.S. in Computer Engineering with an emphasis on data applications and information systems. I have had the opportunity to lead an Agile project (Rev's American Grill Web Application) as the project manager and SCRUM master. I have been blessed with the opportunity develop my technical skills as well as leadership skills during my time at Texas A&M University.",
            graduated: false
        }

        let acc: Education = {
            school: "Austin Community College",
            picture: null,
            degree: "Associate of Science - General Engineering",
            gpa: "3.71",
            start_date: "Aug 2019",
            end_date: "May 2021",
            courses: null,
            description: "During my tenure at Austin Community College, I had the great opportunity to work in the semiconductor industry as an Innovation apprentice at Samsung Austin Semiconductor while pursuing an engineering degree. I was enrolled in the Engineering Academy affiliated with Texas A&M University where I was an official Aggie and was offered the same courses students in College Station. Thanks to this program I was able to receive a Associate's degree and will soon complete my Bachelor's degree.",
            graduated: true
        }

        return {

            jobs: [student_tech, fidelity_intern, innov_apprentice],
            schools: [tamu, acc],
            current_job: student_tech,
            current_school: tamu,
            view_type: "experience"
        }
    },
    methods: {
        changeView() {
            if (this.view_type == "experience") {
                this.view_type = "education";
            }
            else {
                this.view_type = "experience";
            }
        }
    },
    components: {
        JobBlock,
        JobTimeline,
        SchoolBlock,
        SchoolTimeline,
    }
}
</script>

<template>
    <div id="experience" class="mt-landing flex h-screen bg-tan">
        <div class="flex flex-wrap w-1/2 md:w-2/6">
            <!-------------------- Section Title -------------------->
            <div class="text-light-orange text-4xl text-bold m-1 h-max w-full">
                <h1 v-if="view_type === 'experience'">E X P E R I E N C E</h1>
                <h1 v-else>E D U C A T I O N</h1>
                <div class="bg-light-orange w-28 h-1 mx-1 mt-10" />
            </div>

            <!-------------------- Timelines -------------------->
            <!-- Experience -->
            <div class="h-5/6 ml-10 md:mx-auto">
                <JobTimeline v-if="view_type === 'experience'" :current_job="current_job" :jobs="jobs"
                    @changejob="current_job = $event" />

                <!-- Education -->
                <SchoolTimeline v-if="view_type === 'education'" :current_school="current_school" :schools="schools"
                    @changeschool="current_school = $event" />
            </div>
        </div>

        <!-------------------- Info div -------------------->

        <div class="flex flex-wrap w-1/2 mr-2 md:mx-auto">
            <!-- Experience -->
            <JobBlock v-if="view_type === 'experience'" :job="current_job" />

            <!-- Education -->
            <SchoolBlock v-if="view_type === 'education'" :education="current_school" />

            <!-- Switch view button -->
            <button class="mx-auto h-fit w-fit" @click="changeView()">
                <div :class="[view_type === 'experience' ? 'bg-tan text-brown' : 'bg-brown text-white']"
                    class="px-1 flex border border-2 border-brown place-items-center w-max h-12 rounded-lg">
                    <p v-if="view_type === 'experience'"> Show education timeline</p>
                    <p v-else>Show experience timeline</p>

                </div>
            </button>
        </div>
    </div>
</template>