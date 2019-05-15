<template>
    <div class="error-container d-flex flex-column justify-content-center align-items-center">
        <div class="col-11 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="display-4 text-danger">Requested page was not found</h2>
            <h1 class="display-1">404</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage",
}
</script>

<style scoped>
.error-container {
    height: 100%;
    position: relative;
}
</style>
