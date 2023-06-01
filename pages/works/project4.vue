<template>
    <BaseWork :props="props" :next-project-props="NextProject">
        <template #Project_Name>
            Project Four
        </template>
        <template #Project_Description_First_Section>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dolorem hic repudiandae impedit
                totam assumenda, perferendis exercitationem optio facilis odit maxime tenetur a voluptatum
                voluptates!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint cupiditate iste eos, atque
                dolores neque, praesentium ad consequatur molestiae alias ipsa, facilis temporibus magnam dolorum
                delectus ratione! Facere, doloribus sit deserunt excepturi minima dicta?</p>
        </template>
        <template #Project_Headline_Second_Section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus.
        </template>
        <template #Project_Description_Second_Section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint cupiditate
                iste eos, atque
                dolores neque, praesentium ad consequatur molestiae alias ipsa, facilis temporibus magnam dolorum
                delectus ratione! Facere, doloribus sit deserunt excepturi minima dicta?</p>
        </template>
        <template #Project_Headline_Third_Section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, veritatis.
        </template>
        <template #Project_Description_Third_Section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint cupiditate
                iste eos, atque
                dolores neque, praesentium ad consequatur molestiae alias ipsa, facilis temporibus magnam dolorum
                delectus ratione! Facere, doloribus sit deserunt excepturi minima dicta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint cupiditate
                iste eos, atque
                dolores neque, praesentium ad consequatur molestiae alias ipsa, facilis temporibus magnam dolorum
                delectus ratione! Facere, doloribus sit deserunt excepturi minima dicta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint cupiditate
                iste eos, atque
                dolores neque, praesentium ad consequatur molestiae alias ipsa, facilis temporibus magnam dolorum
                delectus ratione! Facere, doloribus sit deserunt excepturi minima dicta?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quasi sed iure
                neque.</p>
        </template>
    </BaseWork>
</template>

<script setup>


useSeoMeta({
    title: 'Project Four',
    ogTitle: 'Project Four',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae incidunt nobis asperiores necessitatibus laboriosam totam voluptatum, rem repellendus enim vitae labore, adipisci blanditiis doloremque quisquam, in nostrum laudantium nemo! Totam optio alias perferendis illum praesentium?',
    ogDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae incidunt nobis asperiores necessitatibus laboriosam totam voluptatum, rem repellendus enim vitae labore, adipisci blanditiis doloremque quisquam, in nostrum laudantium nemo! Totam optio alias perferendis illum praesentium?',
})


defineOgImageStatic({
    component: 'MyOgImage',
    title: 'Project Four | ENES YÜKSEK',
    content: 'Project Four | ENES YÜKSEK',
    backgroundColor: 'bg-[#0D0D0D]',
})

definePageMeta({
    name: 'Project Four',
})


const props = {
    Hero_Image: {
        src: '/images/Works/Four.jpg',
        alt: 'Image',
    },
    Project_Core_Bullet_Points: {
        First: {
            Upper: 'Client',
            Lower: 'Project',
        },
        Second: {
            Upper: 'Service',
            Lower: 'Website',
        },
        Third: {
            Upper: 'Sector',
            Lower: 'Web Design',
        },
        Fourth: {
            Upper: 'Year',
            Lower: '2019',
        },
    },
    Section_Two_Images: {
        One: {
            src: '/images/Blogs/Blog1.jpg',
            alt: 'Image',
        },
        Two: {
            src: '/images/Blogs/Blog3.jpg',
            alt: 'Image',
        },
    },
    Section_Three_Big_Image: {
        src: '/images/Works/Four.jpg',
        alt: 'Image',
    },
    Double_Section: {
        Image: {
            src: '/images/Works/Two.jpg',
            alt: 'Image',
        },
        Credits: {
            One: {
                Upper: 'Supervisor',
                Lower: 'Serena Jones',
            },
            Two: {
                Upper: 'Art Director',
                Lower: 'Michael Smith',
            },
            Three: {
                Upper: 'Developer',
                Lower: 'John Doe',
            },
            Four: {
                Upper: 'Photographer',
                Lower: 'Wayne Smith',
            }
        }
    }
}

const NextProject = {
    link: '/works/project1',
    Imgsrc: '/images/Works/One.jpg',
    name: 'Project One',
    category: 'Website',
    type: 'Art Direction',
}


</script>