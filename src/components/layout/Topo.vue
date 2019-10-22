<template>
    <div>
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-exemplo-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Navegação</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Introdução ao Laravel com Vue JS</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-exemplo-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                            <li><router-link to="/">Início</router-link></li>
                            <li><router-link to="/dados">Dados cadastros</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
  name: "Topo",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
