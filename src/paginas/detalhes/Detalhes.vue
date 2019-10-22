<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
            <h3>Detalhes do cadastro</h3>
        </div>
      </div>
      <form id="form-cadastro">
        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="nome">Nome:</label>
              <input disabled id="nome" type="text" class="form-control" :value="dados.nome">
          </div>
          <div class="col-sm-3 form-group">
              <label for="email">E-mail:</label>
              <input disabled id="email" type="email" class="form-control" :value="dados.email">
          </div>
           <div class="col-sm-3 form-group">
              <label for="email">Data de nascimento:</label>
              <input disabled id="data_nascimento" type="date" class="form-control" :value="dados.data_nascimento">
          </div>
          <div class="col-sm-3 form-group">
              <label for="email">Estado civil:</label>
              <input disabled id="estado_civil" type="text" class="form-control" :value="dados.estado_civil" >
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="endereco">Endereço:</label>
              <input disabled id="endereco" type="text" class="form-control" :value="dados.endereco">
          </div>
          <div class="col-sm-3 form-group">
              <label for="bairro">Bairro:</label>
              <input disabled id="bairro" type="text" class="form-control" :value="dados.bairro">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cidade">Cidade:</label>
              <input disabled id="cidade" type="text" class="form-control" :value="dados.cidade">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cep">CEP:</label>
              <input disabled id="cep" type="text" class="form-control" :value="dados.cep">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 form-group">
              <label for="nome_mae">Nome da mãe:</label>
              <input disabled id="nome_mae" type="text" class="form-control" :value="dados.nome_mae">
          </div>
          <div class="col-sm-6 form-group">
              <label for="nome_pai">Nome do pai:</label>
              <input disabled id="nome_pai" type="text" class="form-control" :value="dados.nome_pai">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="telefone">Telefone:</label>
              <input disabled id="telefone" type="tel" class="form-control" :value="dados.telefone">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cpf">CPF:</label>
              <input disabled id="cpf" type="text" class="form-control" :value="dados.cpf">
          </div>
          <div class="col-sm-3 form-group">
              <label for="titulo">Rg:</label>
              <input disabled id="rg" type="text" class="form-control" :value="dados.rg">
          </div>
          <div class="col-sm-3 form-group">
              <label for="titulo">Título de eleitor:</label>
              <input disabled id="titulo" type="text" class="form-control" :value="dados.titulo">
          </div>
      </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detalhes",
  data() {
    return {
        dados: false
    };
  },
  created() {
    if (this.$route.params.cadastroId) {
      axios
        .get(`http://localhost:8000/api/cadastro/getById/`+this.$route.params.cadastroId)
        .then(response => {
          this.dados = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form-cadastro {
  margin-top: 50px;
}
</style>
