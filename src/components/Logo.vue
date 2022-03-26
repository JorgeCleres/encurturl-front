<template>
    <div class="imagem">
        <img alt="Vue logo" src="../assets/images/logo.png">
    </div>
</template>

<style lang="scss" scoped>
    .imagem {
        width: 50%;
    }
    .imagem img {
        position: relative;
        top: 50%;
        transform: translateY(-50%); 
        padding: 100px;
        width: 85%;
    }
    @media(max-width:600px) {
        .imagem {
            width: 100%;
        }
        .imagem img {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 30px;
            width: 100%;
        }
    }
</style>