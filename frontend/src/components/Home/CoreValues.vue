<template>
    <div class="coreValues">
        <h1 class="coreValues-title">Core Values</h1>
        <div class="coreValue-contents">
            <div class="coreValue">
                <i class="fa-solid fa-globe"></i>
                <h2 class="subheading">Subheading</h2>
                <p class="coreValue-body">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
            <div class="coreValue">
                <i class="fa-regular fa-circle-user"></i>
                <h2 class="subheading">Subheading</h2>
                <p class="coreValue-body">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
            <div class="coreValue">
                <i class="fa-solid fa-lock"></i>
                <h2 class="subheading">Subheading</h2>
                <p class="coreValue-body">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
            <div class="coreValue">
                <i class="fa-solid fa-calendar-days"></i>
                <h2 class="subheading">Subheading</h2>
                <p class="coreValue-body">Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.coreValues {
    padding: 90px 130px;
}

.coreValues-title {
    font-size: 40px;
    color: #3498DB;
    margin: 0;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    margin-bottom: 30px;
}

.coreValues i {
    font-size: 30px;
    background-color: #fff;
    color: #000;
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.coreValue-contents {
    display: flex;
    flex-wrap: wrap;  /* Allows blocks to wrap if they don't fit */
    gap: 20px;  /* Adds space between blocks */
    justify-content: space-between;
}

.coreValue {
    background-color: #fff;
    width: 40%;  /* Adjusts width for 2 blocks per row */
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
}

.subheading {
    font-size: 24px;
    margin-bottom: 10px;
}

.coreValue-body {
    font-size: 20px;
    line-height: 1.5;
}

</style>