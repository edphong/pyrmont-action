<template>
  <div class="projects-page">
    <ProjectsShowcase />
    <FilterBar />

    <ProjectsCardGrid
        heading="Open Projects"
        :projects="openProjects"
    />

    <ProjectsCardGrid
        heading="Planned Projects"
        :projects="plannedProjects"
    />

    <ProjectsCardGrid
        heading="Closed Projects"
        :projects="closedProjects"
    />

  </div>
</template>

<script setup>
import ProjectsShowcase from '@/components/Projects/ProjectsShowcase.vue'
import FilterBar from '@/components/Projects/ProjectsFilterBar.vue'
import ProjectsCardGrid from '@/components/Projects/ProjectsCardGrid.vue'

</script>


<script>
import projectImg1 from '@/assets/Projects/image_1.png'
import projectImg2 from '@/assets/Projects/image_2.png'
import projectImg3 from '@/assets/Projects/image_3.png'
import projectImg4 from '@/assets/Projects/image_4.png'
import projectImg5 from '@/assets/Projects/image_5.png'
import projectImg6 from '@/assets/Projects/image_6.jpg'

const openProjects = [
  {
    image: projectImg1,
    title: 'Open Project Title 1',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg2,
    title: 'Open Project Title 2',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg3,
    title: 'Open Project Title 3',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg4,
    title: 'Open Project Title 4',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg5,
    title: 'Open Project Title 5',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg6,
    title: 'Open Project Title 6',
    description: 'Lorem ipsum dolor sit amet...',
    extraText: 'Additional text...'
  },
  // ...
]

const plannedProjects = [
  {
    image: projectImg1,
    title: 'Planned Project Title 1',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg2,
    title: 'Planned Project Title 2',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg3,
    title: 'Planned Project Title 3',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg4,
    title: 'Planned Project Title 4',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg5,
    title: 'Planned Project Title 5',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg6,
    title: 'Planned Project Title 6',
    description: 'Vestibulum ante ipsum primis in faucibus...',
    extraText: 'Additional text...'
  },
  // ...
]

const closedProjects = [
  {
    image: projectImg1,
    title: 'Closed Project Title 1',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg2,
    title: 'Closed Project Title 2',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg3,
    title: 'Closed Project Title 3',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg4,
    title: 'Closed Project Title 4',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg5,
    title: 'Closed Project Title 5',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  {
    image: projectImg6,
    title: 'Closed Project Title 6',
    description: 'Morbi interdum mollis sapien...',
    extraText: 'Additional text...'
  },
  // ...
]

</script>