<!-- eslint-disable max-len -->
<template>
    <div class="text-bottom">
        <div class="animated-text"><h1><slot></slot></h1></div>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.text-bottom
{
    max-width: 700px;
}
@media (max-width: 512px){
    .text-bottom
{
    max-width: 300px;
}
.text-bottom h1
{
   font-size: 18px;
}
}
@media (max-height: 512px){
    .text-bottom
{
    max-width: 80vw;
}
.text-bottom h1
{
   font-size: 18px;
}
}
</style>
