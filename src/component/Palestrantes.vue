<template>
  <section>
    <v-layout
      column
      wrap
      class="my-5"
      justify-space-around
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-2 font-weight-thin">PALESTRANTES</h2>         
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex 
                v-for="(palestrante, i) in palestrantes"
                :key="i"
                xs12 md6 lg3 xl3
            >                
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-avatar size="200" color="grey lighten-4">
                    <img :src="palestrante.imagem" alt="avatar">
                  </v-avatar>
                </v-card-text>
                <v-card-title class="layout justify-center">
                  <div>
                    <h2 class="headline text-xs-center font-weight-light">{{palestrante.nome}}</h2>
                    <div class="d-flex">
                      <p class="text-xs-center">
                          <Biografia :palestrante="palestrante" />             
                      </p>
                    </div>
                  </div>                    
                </v-card-title>
                <v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>      
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>

</template>

<script>
import Biografia from './Biografia'
export default {
  components: { 
    Biografia,
  },
  data () {
    return {
      palestrantes: [
        {
          nome: 'Ana G. Soares',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fsoares.jpeg?alt=media&token=e091b545-9122-4cd1-ac60-7ff087355d6c',
          biografia: 'Ana G. Soares é Consultora Agile Coach. Kanban Coach Professional (KCP) reconhecido pela Lean Kanban University, graduada em Ciência da Computação com MBA em Gestão de Projetos. Possui mais de 10 anos de experiência em projetos de software, atuou em diversos clientes como SEARA, AMBEV, Multilog, Ministério da Pesca, Prefeituras, Tribunais e Ministérios Públicos.​ Especialista em Método Kanban, Métricas, Ágil Escalado, Lean e Design Thinking. ​Criadora da Roda Ágil, ferramenta para o desenvolvimento de times de alta performance e fundadora da UNIAGIL e do site metodokanban.com.br. Atualmente é Mestranda em Administração'
        },
        {
          nome: 'Ana Spieker',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fspieker.jpeg?alt=media&token=9e1f91e6-5def-4db3-bde4-4d49ee966870',
          biografia: 'Agile Coach, atuando hoje com a transformação ágil em mais de 50 Squads na TOTVS. Atua há mais de 20 anos com projetos de TI, sendo os últimos 4 anos diretamente com agilidade. Formada em Administração de Empresas pela UNIVILLE com MBA em Gestão de Projetos pela FGV. Certificada PMP – Project Management Professional pelo PMI – Project Management Institute, CSM – Certified Scrum Master pela Scrum Alliance, CSPO – Certified Scrum Product Owner pela Scrum Alliance e CAC – Certified Agile Coach pela Massimus. Possui ainda formação em Management 3.0 e em PSC – Professional & Self Coaching pelo IBC – Instituto Brasileiro de Coaching.'
        },
        {
          nome: 'Bruna Von Runkel',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fbruna.jpeg?alt=media&token=01e1097a-f68b-47a4-8a7b-54b73721cd80',
          biografia: 'Psicóloga, CRP - 12/16539, Especialista em Gestão estratégica de Pessoas pela PUC PR. Certificada em Personal & Professional Coaching pela Sociedade Brasileira de Coaching. Formação complementar em Orientação Profissional & Planejamento de Carreira. Coordenadora e Business Partner de RH na TOTVS, atua há mais de 10 anos neste segmento com desenvolvimento de lideranças e times ágeis. Instrutora de treinamentos organizacionais de lideranças, relações interpessoais e gestão de pessoas. Atua também como Consultora de Carreira e Orientadora Profissional em consultório particular'
        },
        {
          nome: 'Caco (Cleiton Mafra)',
          imagem: 'https://firebasestorage.googleapis.com/v0/b/agile-joinville.appspot.com/o/speakers%2Fcaco.jpeg?alt=media&token=74a323d7-3ae1-4da6-b987-08d3f0631ac8',
          biografia: 'Enterprise Agile Coach na Resultados Digitais, Atua junto aos times de Engenharia e Produto e conectando coma estratégia da empresa, que lida com alta tecnologia e um crescimento acelerado. A Resultados Digitais (RDStation) está entre as maiores empresas de marketing Digital do Mundo e está presente em mais de 20 países. Caco é especialista no método Kanban, já treinou mais de 400 pessoas no Método Kanban e ajudou mais de 60 times a adotar o método. Ajuda empresas de tecnologia a terem sucesso, resultados de longo prazo e equipes de alta performance. Já realizou várias palestras em eventos pelos Brasil como Agile Brazil, Lean Kanban Brazil, Scrum Gathering Rio, Agile Trends, TDC Floripa, TDC SP, TDC Porto Alegre, Agile Floripa e outros eventos/meetups da comunidade.'
        }
      ],      
    }
  }  
}
</script>

