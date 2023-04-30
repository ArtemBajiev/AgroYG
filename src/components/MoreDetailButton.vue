<template>
    <div class="more-detailed-button">
        <div class="more-detailed-button_plus"></div>
        <span class="button-text"><slot></slot></span>
    </div>
</template>
<script>
export default {

};
</script>
<style>
.more-detailed-button_plus
{
  background-image: url("@/assets/img/plus.svg");
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-color: rgb(9, 109, 9);
  border-radius: 50%;
  border: 2px solid rgb(9, 109, 9);
  transition: transform .5s ease-in;
}
.more-detailed-button
{
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
    cursor: pointer;
}
.button-text
{
    color: rgb(201, 201, 201);
    font-size: 18px;
    padding-left: 20px;
    font-size: 20px;
    transition: all .5s ease-in;
}
.more-detailed-button:hover .more-detailed-button_plus
{
    transform: rotate(90deg);
}
.more-detailed-button:hover .button-text
{
    color: rgb(255, 255, 255);
    transform: translateX(7px);
}

</style>
