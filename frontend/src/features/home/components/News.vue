<template>
    <div class="news-section">
        <div class="background">
            <img class="background-img" src="../../assets/gadigal_art.jpg" alt="image" />
        </div>

        <div class="news">
            <h1 class="news-title">News</h1>
            <div class="news-contents">
                <div class="news-block">
                    <p class="review">"A terrific piece of praise"</p>
                    <div class="source-account">
                        <img src="../../assets/avatar1.png" alt="image" />
                        <div class="account-info">
                            <p class="account-name">Name</p>
                            <p class="account-desc">Description</p>
                        </div>
                    </div>
                </div>
                <div class="news-block">
                    <p class="review">"A fantastic bit of feedback"</p>
                    <div class="source-account">
                        <img src="../../assets/avatar2.png" alt="image" />
                        <div class="account-info">
                            <p class="account-name">Name</p>
                            <p class="account-desc">Description</p>
                        </div>
                    </div>
                </div>
                <div class="news-block">
                    <p class="review">"A genuinely glowing review"</p>
                    <div class="source-account">
                        <img src="../../assets/avatar3.png" alt="image" />
                        <div class="account-info">
                            <p class="account-name">Name</p>
                            <p class="account-desc">Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="css">
.news-section {
    position: relative;
    width: 100%;
    padding: 100px 0;
    overflow: hidden;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
}

.news {
    position: relative;
    z-index: 1;
    padding: 0 8%;
}

.news-title {
    font-size: 48px;
    color: #fff;
    font-weight: 200;
    font-family: 'Inter', sans-serif;
    margin-bottom: 30px;
}

.news-contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
}

.news-block {
    background-color: #ffff;
    border-radius: 25px;
    width: 30%;
    padding: 30px;
    grid-auto-flow: row;
    border-color: #d2d0d0;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.review {
    font-size: 20px;
}

.source-account {
    display: flex;
    align-items: center;
    gap: 10px;
}

.source-account img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.account-info {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.account-name {
    font-weight: bold;
    display: block;
    margin: 0;
    margin-top: 5px;
}

.account-desc {
    display: block;
    color: gray;
    font-size: 14px;
    margin-top: 2px;
}
</style>