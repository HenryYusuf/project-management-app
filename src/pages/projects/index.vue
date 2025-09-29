<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/">Go to Home</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database.types'

const projects = ref<Tables<'projects'>[] | null>(null)

// START: Common approach
/*
const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log(projects.value);
}

await getProjects()
*/
// END: Common approach

// START: Anonymous approach (Immediately Invoke Function Expression)
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log(projects.value)
})()
// END: Anonymous approach
</script>
