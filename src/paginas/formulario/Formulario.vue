<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
            <h3>Formulário de cadastro</h3>
        </div>
      </div>
      <form id="form-cadastro">

        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="nome">Nome:</label>
              <input v-model="dados.nome" id="nome" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="email">E-mail:</label>
              <input v-model="dados.email" id="email" type="email" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="email">Data de nascimento:</label>
              <input v-model="dados.data_nascimento" id="data_nascimento" type="date" class="form-control">
          </div>
           <div class="col-sm-3 form-group">
              <label for="email">Estado civil:</label>
              <input v-model="dados.estado_civil" id="estado_civil" type="text" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="endereco">Endereço:</label>
              <input v-model="dados.endereco" id="endereco" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="bairro">Bairro:</label>
              <input v-model="dados.bairro" id="bairro" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cidade">Cidade:</label>
              <input v-model="dados.cidade" id="cidade" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cep">CEP:</label>
              <input v-model="dados.cep" id="cep" type="text" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 form-group">
              <label for="nome_mae">Nome da mãe:</label>
              <input v-model="dados.nome_mae" id="nome_mae" type="text" class="form-control">
          </div>
          <div class="col-sm-6 form-group">
              <label for="nome_pai">Nome do pai:</label>
              <input v-model="dados.nome_pai" id="nome_pai" type="text" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3 form-group">
              <label for="telefone">Telefone:</label>
              <input v-model="dados.telefone" id="telefone" type="tel" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="cpf">CPF:</label>
              <input v-model="dados.cpf" id="cpf" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="rg">Rg:</label>
              <input v-model="dados.rg" id="rg" type="text" class="form-control">
          </div>
          <div class="col-sm-3 form-group">
              <label for="titulo">Título de eleitor:</label>
              <input v-model="dados.titulo" id="titulo" type="text" class="form-control">
          </div>
      </div>

      <div class="row">
        <div class="col-sm-12 text-center">
          <button type="button" @click="enviar()" id="btn-enviar" class="btn btn-success">Enviar dados</button>
        </div>
      </div>
      
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Formulario",
  data() {
    return {
      dados: {
        nome: "",
        email: "",
        endereco: "",
        date_nascimento: "",
        estado_civil: "",
        bairro: "",
        cidade: "",
        cep: "",
        nome_mae: "",
        nome_pai: "",
        telefone: "",
        cpf: "",
        rg: "",
        titulo: ""
      }
    };
  },
  methods: {
    enviar() {
      axios
        .post(`http://localhost:8000/api/cadastro/create`, this.dados)
        .then(response => {
          if (response.data) {
            alert("Dados cadastrados com sucesso!");
            this.dados = {};
          }
          console.log(response);
        })
        .catch(e => {
          console.log(e.response.data);
          var erros = e.response.data.message + " ";
          for (var erro of Object.values(e.response.data.errors)) {
            erros += erro + " ";
          }
          alert(erros);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form-cadastro,
#btn-enviar {
  margin-top: 50px;
}
</style>
