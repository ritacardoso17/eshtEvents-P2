<template>
<div>

    <!-- <h1 style="margin-top:5px">Página nao encontrada</h1> -->
    <b-img src="../assets/noun_Waiter_notFound.png"> </b-img> 
    <b-button id="btnNtFn" :to="{path: './' }"> Voltar</b-button>
</div>
</template>

<script>

</script>

<style>
#btnNtFn {
  position: relative;
  width: 150px;
  height: 40px;
  font-size: 100%;
  color: white;
  left: -260px;
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
</style>