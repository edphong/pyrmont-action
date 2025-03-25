<template>
  <div>
    <h1>User List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.created_at }}</td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Add a New User</h2>
    <form @submit.prevent="addUser">
      <input v-model="newUsername" placeholder="Username" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserTable",
  data() {
    return {
      users: [],
      newUsername: "",
    };
  },
  async mounted() {
    // Fetch users when component mounts
    try {
      const response = await fetch("http://localhost:5000/api/users");
      this.users = await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  methods: {
    async addUser() {
      try {
        const response = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.newUsername,
          }),
        });
        const newUser = await response.json();
        // Push the new user into the local array so it shows up in the table
        this.users.push(newUser);
        // Reset form field
        this.newUsername = "";
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
    async deleteUser(userId) {
      try {
        await fetch(`http://localhost:5000/api/users/${userId}`, {
          method: "DELETE"
        });
        this.users = this.users.filter(user => user.id !== userId);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  },
};
</script>
