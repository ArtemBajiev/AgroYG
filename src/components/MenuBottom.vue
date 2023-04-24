<!-- eslint-disable max-len -->
<template>
    <nav class="menu-bottom">
        <ul class="menu-bottom__links">
            <li class="menu-bottom__link-item"><router-link to="/">О компании</router-link></li>
            <li class="menu-bottom__link-item"><router-link to="/corn">Кукуруза</router-link></li>
            <li class="menu-bottom__link-item"><router-link to="/wheat">Пшеница</router-link></li>
            <li class="menu-bottom__link-item"><router-link to="">Контакты</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
  methods: {

  },

};
</script>
<style>
.menu-bottom
{
    color: rgb(218, 218, 218);
    max-width: 100vw;
}
.menu-bottom__links
{
    display: flex;
    padding: 0;
}
.menu-bottom__link-item a
{
    margin: 10px 50px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-bottom: 20px;
    border-bottom: 2px solid transparent;
}
.menu-bottom__link-item a:nth-child(1)
{
    margin-left: 0px;
}
.menu-bottom__link-item a:hover
{
    border-bottom: 2px solid rgb(218, 218, 218);
}@media (max-width: 512px){
    .menu-bottom__link-item a
{
    margin: 10px 10px;
    font-weight: 500;
    letter-spacing: 0px;
    padding-bottom: 10px;
    font-size: 13px;
    overflow: auto;
}
}
</style>
