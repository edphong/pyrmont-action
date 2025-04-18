<!-- src/features/admin/pages/UsersView.vue -->
<script setup>
import { ref, onMounted } from "vue";
import { listUsers, createUser, deleteUser } from "@/api.js";

const users = ref([]);
const newName = ref("");

async function refresh() {
  const { data } = await listUsers();
  users.value = data;
}

async function add() {
  if (!newName.value.trim()) return;
  await createUser(newName.value.trim());
  newName.value = "";
  refresh();
}

async function remove(id) {
  await deleteUser(id);
  users.value = users.value.filter(u => u.id !== id);
}

onMounted(refresh);
</script>

<template>
  <h1 class="text-xl font-semibold mb-4">Users</h1>

  <div class="mb-4">
    <input v-model="newName" placeholder="Username" class="border p-1 mr-2" />
    <button @click="add" class="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
  </div>

  <ul>
    <li v-for="u in users" :key="u.id" class="flex justify-between max-w-xs mb-2">
      <span>{{ u.username }}</span>
      <button @click="remove(u.id)" class="text-red-600">delete</button>
    </li>
  </ul>
</template>
