<script>
    export default{
        data(){
            return{
                loginInput: {
                    email: '',
                    password: ''
                }
            }

        },

        methods: {
            handleSubmit() {
                
            }
        }
    }

</script>

<template>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'>
    </head>
    <body>
        <div class="login-form">
         
            <div class="login-form-left-side">
                <img id="logo" src="../../assets/Logo.png" v-on:click="redirectToHomePage()">

                <div class="headings">

                    <span id="welcome-heading">Welcome back</span>
                    <span id="enter-details-description">Please enter your details</span>
                </div>
                <form class="login-entries" @submit.prevent="handleSubmit">
                    <div class="email-section">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="loginInput.email" required />
                    </div>
                    <div class="password-section">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="loginInput.password" required />
                    </div>
                    <a href="link" id="forgot-password-link"> Forgot Password </a>
                    <button id="submitBtn" type="submit">Sign In</button>

                    <div class="signup-container">
                        <span id="signup-text"> Don't have an account &nbsp</span>
                        <a id="signup-link" href="/joinus"> Sign Up</a>
                    </div>
                </form>
  
            </div>
            <div class="login-right-side">

            </div>
        </div>
    </body>

</template>


<style scoped>
    .login-form{
        display:inline-block;
        column-count: 2;
        width: 100vw;
        height: 100vh;
        column-gap: 0px;
        font-family: 'Inter', sans-serif;
        
    }

    .login-entries{
        position: relative;
        margin:0rem 5rem 0rem 5rem;
        top: 20vh;
    }

    .login-right-side{
        background-image: url("../../assets/boat.jpeg");
        height: 100vh;
        margin: 0px;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;


    }

    .login-form-left-side{
        height:100%;
        margin: 0px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .email-section, .password-section{
        display: flex;
        flex-direction: column;
        font-size: small;
        font-weight: 300;

    
    }

    #logo{
        display: block;
        position:relative;
        top: 40px;
        left: 30px;
        width: auto;
        height: auto;
        max-width: 230px;
        max-height:80px;
    }

    #signup-text{
        font-weight: 500;
        color: #828282;
    }
  
    .signup-container{
        display: flex;
        position: relative;
        font-size:small;
        justify-content: center;

    }

    .headings{
        position: relative;
        top: 15vh;
        display: flex;
        flex-direction: column;
        padding: 2rem 5rem 0rem 5rem;
    
    }

    #forgot-password-link, #signup-link{
        display: flex;
        justify-self: right;
        font-size: small;
        font-family: 'Manrope', sans-serif;
        color: #41A6F5;
        font-weight: 550;
        
    }

    #password, #email{
        border: 1px solid #cbc8c8;
        border-radius: 5px;
        height:35px;
        margin-bottom:20px;
       
    }
    
    #welcome-heading{
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 2px;

    }
    #enter-details-description{
        color: #828282;
        font-size: small;
        font-weight: medium;
        padding-left: 5px;
    }

    #submitBtn{
        position: relative;
        background-color: #3498DB;
        border: 0px;
        color: #FFFF;
        border-radius: 3px;
        margin: 50px 0px 25px 0px;
        height: 35px;
        width: 100%;
        font-size: small;
        font-family: 'Manrope', sans-serif;
        font-weight: bold;
    }



 
</style>