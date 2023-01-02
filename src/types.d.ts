type Job = {
    title: String,
    picture: String | null,
    employer: String,
    contributions: Array<String>,
    start_date: String,
    end_date: String,
}

type Education = {
    school: String,
    picture: String | null, 
    degree: String,
    gpa: String,
    start_date: String,
    end_date: String,
    courses: Array<String> | null,
    description: String,
    graduated: Boolean,
}

type Project = {
    name: String,
    picture: String | null,
    technologies: Array<String>,
    description: String,
    link: String,
}

type Skill = {
    picture: String | null,
    name: String,
}

type Nullable<T> = T | null