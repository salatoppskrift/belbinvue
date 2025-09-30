<script setup>
        // legg til ref
        import { ref } from 'vue';

        function getTotals(spørsm) {
            let tPs = 0;
            spørsm.forEach(element => {
                tPs += element.poeng;
            });
                //tPs.push(thing.poeng);
            //for(thing in spørsm){
                //tPs += thing.poeng;
            //}
            return tPs;
            //return tPs.map(point => point).reduce((acc, curr) => acc + curr, 0);
        }
        const seksjoner = ref([
            {
                TotalPoeng: 10,
                Tittel: "What I believe I can contribute to a team:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I think I can quickly see and take advantage of new opportunities",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "I can work well with a very wide range of people",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "Producing ideas is one of my natural assets",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "My ability rests in being able to draw people out whenever I detect they have something of value to contribute to group objectives",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "My capacity to follow through has much to do with my personal effectiveness",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I am ready to face temporary unpopularity if it leads to worthwhile results in the end",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I can usually sense what is realistic and likely to work",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "I can offer a reasoned case for alternative courses of action without introducing bias or prejudice",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "I If I have a possible shortcoming in teamwork, it could be that:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I am not at ease unless meetings are well structured and controlled and generally well conducted",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "I am inclined to be too generous towards others who have a valid viewpoint that has not been given a proper airing",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "I have a tendency to talk too much once the group gets on to new ideas",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "My objectives outlook makes it difficult for me to join in readily and enthusiastically with colleagues",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I am sometimes seen as forceful and authoritarian if there is a need to get something done",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I find it difficult to lead from the front, perhaps because I am over-responsive to group atmosphere",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I am apt to get too caught up in ideas that occur to me and so lose track of what is happening",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "When involved in a project with other people:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I have an aptitude for influencing people without pressuring them",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "My general vigilance prevents careless mistakes and omissions being made",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "I am ready to press for action to make sure that the meeting does not waste time or lose sight of the main objective",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "I can be counted on to contribute something original",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I am always ready to back a good suggestion in the common interest",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I am keen to look for the latest in new ideas and developments",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I believe my capacity for judgment can help to bring about the right decisions",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "I can be called upon to see that all essential work is organised",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "My characteristic approach to group work is that:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I have a quiet interest in getting to know colleagues better",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "I am not reluctant to challenge the views of others or to hold a minority view myself",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "I can usually find a line of argument to refute unsound propositions",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "I think I have a talent for making things work once a plan has to be put into operation",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I have a tendency to avoid the obvious and to come out with the unexpected",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I bring a touch of perfectionism to any job I undertake",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I am ready to make use of contacts outside the group itself",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "While I am interested in all views I have no hesitation in making up my mind once a decision has to be made",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "I gain satisfaction in a job because:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I enjoy analysing situations and weighing up all the possible choices",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "I am interested in finding practical solutions to problems",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "I like to feel I am fostering good working relationships",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "I can have a strong influence on decisions",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I can meet people who may have something new to offer",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I can get people to agree on a necessary course of action",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I feel in my element where I can give a task my full attention",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "I like to find a field that stretches my imagination",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "If I’m suddenly given a difficult task with limited time and unfamiliar people:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I would feel like retiring to a corner to devise a way out of the impasse before developing a line",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "I would be ready to work with the person who showed the most positive approach",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "I would find some way of reducing the size of the task by establishing what different individuals might best contribute",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "My natural sense of urgency would help to ensure that we did not fall behind schedule",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I believe I would keep cool and maintain my capacity to think straight",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I would retain a steadiness of purpose in spite of the pressures",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I would be prepared to take a positive lead if I felt the group was making no progress",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "I would open up discussions with a view to stimulating new thoughts and getting something moving",
                        poeng: 0
                    }
                ]
            },
            {
                TotalPoeng: 10,
                Tittel: "With reference to the problems to which I am subject in working in groups:",
                Spørsmål: [
                    {
                        letter: "a",
                        q: "I am apt to show my impatience with those who are obstructing progress",
                        poeng: 0
                    },
                    {
                        letter: "b",
                        q: "Others may criticise me for being too analytical & insufficiently intuitive",
                        poeng: 0
                    },
                    {
                        letter: "c",
                        q: "My desire to ensure that work is properly done can hold up proceedings",
                        poeng: 0
                    },
                    {
                        letter: "d",
                        q: "I tend to get bored rather easily and rely on one or two stimulating members to spark me off",
                        poeng: 0
                    },
                    {
                        letter: "e",
                        q: "I find it difficult to get started unless the goals are clear",
                        poeng: 0
                    },
                    {
                        letter: "f",
                        q: "I am sometimes poor at explaining and clarifying complex points that occur to me",
                        poeng: 0
                    },
                    {
                        letter: "g",
                        q: "I am conscious of demanding from others the things I cannot do myself",
                        poeng: 0
                    },
                    {
                        letter: "h",
                        q: "I hesitate to get my points across when I run up against real opposition",
                        poeng: 0
                    }
                ]
            }
        ]);
</script>

<template>
    <div class="tabell_1" v-for="tabell in seksjoner">
        <div>{{tabell.Tittel}}</div>
        <div class="tabell_1_spørsmålOppsett">
            <div v-for="spørsmål in tabell.Spørsmål">
                <div>{{ spørsmål.letter }}</div>
                <div @click="endrePoeng()" class="høver">{{ spørsmål.poeng }}</div>
                <div>{{ spørsmål.q }}</div>
            </div>
            <div>
                <div>Total</div>
                <div>{{ getTotals(tabell.Spørsmål) }}</div>
                <div class="tommy"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * { margin: 0; padding: 0; }
    body { padding: 20px; }
    .tabell_1 { border: 2px solid darkorchid; margin: 0 0 20px 0; border-width: 2px 2px 0 2px;}
    .tabell_1_spørsmålOppsett { border: darkcyan solid; border-width: 1px 0; }
    .tabell_1_spørsmålOppsett > div {
        display: grid;
        grid-template-columns: repeat(2, 70px) 1fr;
        gap: 2px;
        background-color: darkcyan;
        padding: 1px 0;
    }
    .tabell_1_spørsmålOppsett > div > div, .tabell_1 > div:first-child {
        background-color: white;
        padding: 10px 20px;
    }
    .tabell_1_spørsmålOppsett > div > div:last-child {
        text-align: left;
    }
    .tabell_1_spørsmålOppsett > div:last-child > div:last-child {
        color: cadetblue;
    }
    .høver:hover { background-color: bisque; cursor: pointer; }
    /*.tabell_1{
        display: grid;
        grid-template-columns: repeat(2, 70px) 1fr;
        gap: 2px;
        margin-bottom: 15px;
        background-color: darkcyan;
        border: 2px solid darkcyan;
    }
    .tabell_1 > div {
        background-color: white;
        padding: 20px 6px;
        font-size: 1.2rem;
    }
    .tabell_1 > div:first-child {
        grid-column: 1 / 4;
        padding: 6px 20px;
    }
    .høver { color: #85cfe7; text-align: center; }
    .høver:hover { background-color: seashell; cursor: pointer; }
    .tommy { color: #41adb1; }
    */
</style>