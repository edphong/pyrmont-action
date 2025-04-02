<template>
    <header>
        <nav>
            <div class="logo">
                <router-link :to="{ name: 'Home'}"><img src="../assets/logo.png" alt="image"></router-link>
            </div>
            <ul class="navigation">
                <li><router-link class="link" :to="{ name: ''}">Projects</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">About Us</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">News</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Gallery</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Contact</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Join Us</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Login</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
}
</script>

<style lang="css" scoped>
header {
    background-color: #ffff;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    height: 85px;
}

nav {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    transition: .5s ease all;
    width: 95%;
    margin: 0 auto;
}

nav ul,
nav .link {
    font-weight: 500;
    color: #000000;
    list-style: none;
    text-decoration: none;
    transform: translateY(15%);
}

nav li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

nav .link {
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

nav .link:hover {
    color: #3498DB;
    border-color: #3498DB;
}

nav .logo {
    display: flex;
    align-items: center;
}

nav .logo img {
    width: 300px;
    transition: .5s ease all;
}

nav .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}
</style>