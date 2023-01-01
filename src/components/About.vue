<script>
export default {
    data() {
        return {
            current_title: "",
            titles: ["Computer Engineer", "Student", "Developer", "Creator"],
            index: 0,
            title_interval: null
        }
    },
    methods: {
        changeTitle() {
            this.title_interval = setInterval(() => {
                if (this.index == this.titles.length - 1) {
                    this.index = 0;
                }
                else {
                    this.index++;
                }
                this.current_title = this.titles[this.index];
            }, 4000);
        }
    },
    mounted() {
        this.current_title = this.titles[0];
        this.changeTitle();
    },
    beforeDestroy() {
        clearInterval(this.title_interval);
    }

}
</script>

<template>
    <div id="about" class="flex fixed -z-10 h-screen w-full mt-auto">
        <div class=" absolute h-max top-10 right-10">

            <Transition name="title" appear>

                <div class="font-bold text-7xl">
                    <h1>
                        Hi!
                        <br />
                        I'm Brandon Nguyen
                    </h1>
                </div>
            </Transition>


            <div class="py-10 text-3xl">
                <Transition name="subtitle" appear>
                    <div>
                        I'm a
                        <Transition name="recur">
                            <p v-bind:key="current_title" class="inner inline typing underline underline-offset-4">
                                {{ current_title }}
                            </p>
                        </Transition>
                    </div>

                </Transition>
            </div>
        </div>

    </div>
</template>

<style>
/* Landing transition */
.title-enter-active {
    transition: all 3s;
}

.title-leave-active {
    transition: all 0.8s;
}

.title-enter-from,
.title-leave-to {
    opacity: 0;
}

/* Subtitle transition */
.subtitle-enter-active {
    transition-delay: 5s;
    transition: all 5s;
}

.subtitle-enter-from,
.subtitle-leave-to {
    opacity: 0;
}

/* Recurring Transition  */
.recur-enter-active {
    transition-delay: 0s;
    transition: all 2s;
}

.recur-enter-from,
.recur-leave-to {
    opacity: 0;
}
</style>
