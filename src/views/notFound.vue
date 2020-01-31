<template>
<div>

    <b-img class="imgNot" src="../assets/noun_Waiter_notFound.png"> </b-img> 
    <b-button id="btnNtFn" :to="{path: './' }"> Voltar</b-button>
    <h1 class="notfoundText">Página não encontrada</h1>

</div>
</template>

<script>

</script>

<style>
.imgNot{
  width: 400px;
}
#btnNtFn {
  position: relative;
  width: 100px;
  height: 35px;
  font-size: 100%;
  color: white;
  left: -160px;
  top:-15px;
  background-color: #000;
  font-family: GeosansLight;
}
#btnNtFn:hover {
  color: white;
  border: 2px solid;
  border-color: #DAAA29;
  background-color: #000;
}
.notfoundText{
  font-family: GeosansLight;
  padding-top: -25px

}
</style>