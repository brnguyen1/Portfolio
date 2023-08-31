<script lang="ts">
import { isMobile } from '../static/js/isMobile'
import JobBlock from './Experience/JobBlock.vue'
import JobTimeline from './Experience/JobTimeline.vue'
import SchoolBlock from './Experience/SchoolBlock.vue'
import SchoolTimeline from './Experience/SchoolTimeline.vue'

export default {
    data() {
        // JOBS
        let aa_intern: Job = {
            title: "Software Engineering Intern",
            picture: null,
            employer: "American Airlines",
            contributions: ["Worked in team to maintain application that processes and verifies integrity of 1,000,000+ bookings daily using Spring", "Followed agile methodology to meet business needs and create necessary user stories to support application health", "Identified and successfully aggregated decentralized production and stage logs with flow of over 100 GB/month using Mezmo and NiFi to enhance overall system monitoring capabilities across 7 servers"],
            start_date: "May 2023",
            end_date: "Aug 2023"
        }

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
            end_date: "May 2023"
        }

        // EDUCATION
        let tamu: Education = {
            school: "Texas A&M University",
            picture: null,
            degree: "Bachelor of Science - Computer Engineering",
            gpa: "3.48",
            start_date: "Aug 2019",
            end_date: "Dec 2023",
            courses: ["Machine Learning", "Robotics & Spatial Intelligence", "Distributed Systems", "Machine Learning", "Information Storage & Retrieval"],
            description: "I am a senior at Texas A&M University currently pursuing a B.S. in Computer Engineering with an interest in distributed systems infrastructure to support ML/AI models. Through my coursework, I have had the opportunity to lead an Agile project (Rev's American Grill Web Application) as the project manager and SCRUM master. I have also had the opportunity to develop technical skills in my interest of distributed systems, learning to support big data models and creating ML models.",
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

            jobs: [aa_intern, student_tech, innov_apprentice],
            schools: [tamu, acc],
            current_job: null as Nullable<Job>,
            current_school: null as Nullable<Education>,
            show_job_timeline: true,
            show_school_timeline: false,
            view_type: "experience"
        }
    },
    methods: {
        isMobile,
        changeView() {
            if (this.view_type == "experience") {
                this.view_type = "education";

            }
            else {
                this.view_type = "experience";
            }
            this.jobTimelineCheck();
            this.schoolTimelineCheck();
        },
        jobTimelineCheck() {
            if ((this.view_type === 'experience' && !isMobile()) || (this.view_type == 'experience' && !this.current_job)) {
                this.show_job_timeline = true
            }
            else {
                this.show_job_timeline = false
            }

        },
        schoolTimelineCheck() {
            if ((this.view_type === 'education' && !isMobile()) || (this.view_type === 'education' && !this.current_school)) {
                this.show_school_timeline = true
            }
            else {
                this.show_school_timeline = false
            }
        },
        changeJob(new_job) {
            this.current_job = new_job;
            this.jobTimelineCheck();
        },
        changeSchool(new_school) {
            this.current_school = new_school;
            this.schoolTimelineCheck();
        }
    },
    components: {
        JobBlock,
        JobTimeline,
        SchoolBlock,
        SchoolTimeline,
    },
    created() {
        if (!isMobile()) {
            this.current_job = this.jobs[0];
            this.current_school = this.schools[0];
        }

        window.addEventListener("resize", () => {
            this.jobTimelineCheck();
            this.schoolTimelineCheck();
            if (!isMobile()) {
                if(!this.current_job)
                    this.current_job = this.jobs[0];
                if(!this.current_school)
                    this.current_school = this.schools[0];
            }
        });
    }
}
</script>

<template>
    <div id="experience" class="mt-landing flex flex-wrap md:flex-nowrap h-max pb-10 md:h-screen bg-tan">
        <div class="flex flex-wrap w-full md:w-2/6">
            <!-------------------- Section Title -------------------->
            <div class="text-light-orange text-3xl text-bold m-1 h-max w-full">
                <h1 v-if="view_type === 'experience'">E X P E R I E N C E</h1>
                <h1 v-else>E D U C A T I O N</h1>
                <div class="bg-light-orange w-28 h-1 mx-1 mt-10" />
            </div>

            <!-------------------- Timelines -------------------->
            <!-- Experience -->
            <div v-if="show_job_timeline || show_school_timeline" class="h-screen ml-40 md:mx-auto  md:h-5/6 md:block">
                <JobTimeline v-if="show_job_timeline" :current_job="current_job" :jobs="jobs"
                    @changejob="changeJob($event)" />

                <!-- Education -->
                <SchoolTimeline v-if="show_school_timeline" :current_school="current_school" :schools="schools"
                    @changeschool="changeSchool($event)" />
            </div>
        </div>

        <!-------------------- Info div -------------------->

        <div class="flex flex-wrap w-full h-screen mt-10 md:h-full md:my-auto md:w-1/2 md:mx-auto">
            <!-- Experience -->
            <JobBlock v-if="view_type === 'experience' && current_job" :job="current_job"
                @removejob="changeJob($event)" />

            <!-- Education -->
            <SchoolBlock v-if="view_type === 'education' && current_school" :education="current_school" @removeschool="changeSchool($event)"/>

            <!-- Switch view button -->
            <button class="mx-auto mb-auto h-fit w-fit" @click="changeView()">
                <div :class="[view_type === 'experience' ? 'bg-tan text-brown' : 'bg-brown text-white']"
                    class=" flex border text-sm md:text-base border-2 border-brown rounded-lg place-items-center w-max h-12 px-1">
                    <p v-if="view_type === 'experience'"> Show education timeline</p>
                    <p v-else>Show experience timeline</p>

                </div>
            </button>
        </div>
    </div>
</template>