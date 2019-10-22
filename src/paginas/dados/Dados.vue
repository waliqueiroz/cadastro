<template>
  <div>
      <section class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h3>Dados cadastrados no sistema</h3>
                </div>
            </div>
            <div class="table-responsive">
                <table id="table-dados" class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in dados" title="Clique para ver mais detalhes">
                            <td  class="clique"><router-link :to="'/detalhes/'+item.id">{{item.nome}}</router-link></td>
                            <td  class="clique"><router-link :to="'/detalhes/'+item.id">{{item.email}}</router-link></td>
                            <td  class="clique"><router-link :to="'/detalhes/'+item.id">{{item.cidade}}</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Dados',
  data () {
    return {
      dados: []
    }
  },
  created(){
    axios.get(`http://localhost:8000/api/cadastro/getAll`)
    .then(response => {
      this.dados = response.data
    })
    .catch(e => {
      console.log(e)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #table-dados{
        margin-top: 50px;
    }
</style>
