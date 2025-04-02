<template>
    <div class="explore-projects">
        <div class="explore-projects-contents">
            <div class="explore-projects-text">
                <h1 class="explore-projects-title">Explore Our Projects</h1>
                <p class="explore-projects-desc">Embark on a journey of a lifetime with Wanderlust Adventures! We are your trusted travel companions, dedicated to curating extraordinary experiences that will leave you breathless. From mesmerizing landscapes to vibrant cultures, our expertly crafted itineraries will take you to the most captivating destinations across the globe.</p>
                <ul class="button">
                    <li><router-link class="link" :to="{ name: ''}">VIEW MORE PROJECTS</router-link></li>
                </ul>
            </div>
            <img src="../../assets/explore-projects.png" alt="image"/>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.explore-projects {
    padding: 90px 130px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.explore-projects-contents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.explore-projects-text {
    width: 50%;
}

.explore-projects-title{
    font-size: 40px;
    color: #3498DB;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    text-transform: uppercase;
}

.explore-projects-desc {
    font-weight: extra-light;
    font-family: 'Inter', sans-serif;
    margin-top: 20px;
}

.explore-projects .button {
    list-style: none;
    padding: 0;
}

.explore-projects .button li {
    margin-top: 20px;
}

.explore-projects .link {
    display: inline-block;
    padding: 12px 30px;
    background-color: #3498DB;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s;
}

.explore-projects .link:hover {
    background-color: #2980B9;
}

.explore-projects img {
    object-fit: cover;
    width: 40%;
}
</style>