import React from 'react';
import Modal from 'react-modal';

const RegulationModal = (props) => (
  <Modal
    isOpen={!!props.show}
    onRequestClose={props.handleClose}
    contentLabel=""
    closeTimeoutMS={200}
  >
    <h1 className="regulation__main-title">XXIII COPA BOA VISTA/2019</h1>

    <h2 className="regulation__title">REGULAMENTO</h2>
    <h3 className="regulation__subtitle">CAPÍTULO I</h3>
    <h4 className="regulation__topic">DA FINALIDADE</h4>
  
    <p>Art. 1 – A XXIII COPA BOA VISTA/2019 tem por finalidade contribuir para a integração sócio-desportiva das
    agremiações do nosso município, através da prática salutar do Futebol Associação.</p>
    <p>Art. 2 – A elaboração do regulamento, tabelas, estatísticas, normas e diretrizes ficam a cargo da coordenação
    Geral do Certame, os quais foram debatidos e aprovados pelos representantes credenciados das equipes
    participantes nas reuniões que antecederam o início do presente evento esportivo.</p>
    <p>Art. 3 – Participam da XXIII COPA BOA VISTA/2019, representações esportivas do nosso município.</p>
    <p>Art. 4 – Cada equipe inscrita fica obrigada a participar com um quadro Titular e um Aspirante, com no mínimo
    22 (vinte e dois) jogadores inscritos por equipe, sendo 11 (onze) jogadores em cada quadro. Poderão ser inscritos
    no máximo 20 (vinte) atletas por quadro.</p>
    <p>Art. 5 – A XXIII COPA BOA VISTA/2019 é uma promoção da DIVISÃO DE DESPORTOS da PREFEITURA
    MUNICIPAL DE BOA VISTA.</p>
    <p>Art. 6 – A XXIII COPA BOA VISTA/2019 terá início no dia 14 de JULHO de 2019.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO II</h3>
    <h4 className="regulation__topic">DA ORGANIZAÇÃO</h4>
  
    <p>Art. 7 – A XXIII COPA BOA VISTA/2019 será disputada em turno único, com os times jogando todos contra todos,
    em sistema de pontos corridos, e com jogos só de ida. Ao final desta fase, classificarão as 8 (oito) equipes
    que obtiverem maior número de pontos. Em seguida a esta fase, teremos a fase de mata-mata.</p>
    <p>Art. 8 – A segunda fase será disputada da seguinte forma: 1º x 8º, 2º x 7º, 3º x 6º e 4º x 5º, onde 1º, 2º,
    3º e 4º colocados jogarão por dois resultados iguais, e o segundo jogo em seus campos. As semi-finais serão da
    seguinte forma: vencedor de 1º x 8º contra vencedor de 3º x 6º, e vencedor de 2º x 7º contra vencedor de 4º x 5º.
    Nas semifinais, todos os jogos serão na cidade de Boa Vista(zona urbana). Nenhuma das equipes levará vantagem
    nesta fase. Terminado empatados em número de pontos na semifinal, será observado o saldo de gols nesta fase. Caso
    ocorra empate neste segundo critério, a decisão de quem vai para final será através da cobrança de 05 penalidades
    máximas.</p>
    <p>Art. 9 – A finalíssima será em jogo único, na cidade de BOA VISTA, onde as equipes não terão vantagem no neste
    jogo final. Se o jogo terminar empatado no tempo normal, o campeão sairá do vencedor das cobranças de 05
    penalidades máximas da marca da cal. Os jogos serão realizados no período da manhã e na zona urbana.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO III</h3>
    <h4 className="regulation__topic">DA CONTAGEM DE PONTOS</h4>
    <p>
    Art. 10 – Na contagem de pontos serão observados os seguintes critérios:
    <ul>
      <li>a) Por vitórias – 03 pontos</li>
      <li>b) Por empate – 01 ponto</li>
      <li>c) No placar por W x O, será aplicado o item (a) deste artigo.</li>
    </ul>
    </p>
  
    <h3 className="regulation__subtitle">CAPÍTULO IV</h3>
    <h4 className="regulation__topic">DOS DESEMPATES</h4>
  
    <p>Art. 11 – Em caso de empate entre duas ou mais equipes, na fase de classificação, serão obedecidos os seguintes
    critérios para desempate:</p>
    <p>
      <ul>
        <li>A) Maior número de pontos na fase;</li>
        <li>B) Maior número de vitórias na fase;</li>
        <li>C) Houver assinalado maior número gols na fase;</li>
        <li>D) Houver sofrido menor número de gols na fase;</li>
        <li>E) Confronto direto;</li>
        <li>F) Sorteio.</li>
      </ul>
    </p>
  
    <h3 className="regulation__subtitle">CAPÍTULO V</h3>
    <h4 className="regulation__topic">DOS JOGOS</h4>
  
    <p>Art. 12 – Os jogos da XXIII COPA BOA VISTA/2019 serão realizados aos domingos, às 14:00h para os quadros
    aspirantes, e às 15:30h para os titulares, ou 9:00h para os aspirantes, e 10:40h para os titulares,
    excepcionalmente aos sábados e/ou feriados, de comum acordo entre as duas equipes, sem isto, não haverá
    antecipação ou adiamento.</p>
    <p>Parágrafo primeiro: Os jogos terão tolerância de 15 (quinze) minutos para seu início;</p>
    <p>Parágrafo segundo: Terminando o prazo de tolerância de 15 (quinze) minutos previstos no parágrafo anterior
    deste artigo, a equipe infratora perderá os pontos para a equipe adversária, desde que o ocorrido conste no
    relatório do árbitro da partida;</p>
    <p>Parágrafo terceiro: Os dirigentes das equipes deverão solicitar transportes para deslocamento de suas equipes
    para cumpriento do jogo, até 72 (setenta e duas) horas de antecedência, solicitando ao chefe de transportes da
    prefeitura.</p>
    <p>Art. 13 – O horário de uma partida será marcado através do relógio ou cronômetro do árbitro central.</p>
    <p>Art. 14 – Na primeira fase da XXIII COPA BOA VISTA/2019, cada jogo será arbitrado por um ÚNICO árbitro, tanto
    no quadro dos aspirantes quanto no dos titulares. Já nos jogos das semifinais e da final, haverá trio de 
    arbitragem.</p>
    <p>Art. 15 – Os jogos terão a duração de 80 (oitenta) minutos, divididos em dois tempos de 40 (quarenta) minutos
    cada um, com intervalo de 10 (dez) minutos para descanso.</p>
    <p>Art. 16 – Os jogos obedecerão à tabela previamente elaborada pela Coordenação Geral.</p>
    <p>Art. 17 – A equipe que detenha o mando de campo deverá comparecer a campo munida de duas bolas em
    condições de uso, um par de redes, e se apresentar com uniformes padronizados, com numerações legíveis às
    costas, e sem repetição de numeração. Caso haja necessidade de troca motivada pela semelhança de padronagem e
    cores, cabe a equipe que está na coluna esquerda da tabela a mudança do material de jogo. A mesma se negando
    a fazer a troca, perderá os pontos que tenha obtido em campo, desde que o ocorrido conste na súmula do jogo. O
    clube visitante está obrigado a colocar em campo sua bola oficial para participar do jogo. Os campos deverão
    estar demarcados, para a boa visibilidade da arbitragem; quem não o fizer, e o árbitro relatar em súmula, a
    equipe mandante perderá os pontos obtidos em campo, nesse jogo.</p>
    <p>Art. 18 – Somente serão permitidas a cada equipe 05 (cinco) substituições em seus quadros, por partida.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO VI</h3>
    <h4 className="regulation__topic">DA ANTECIPAÇÃO, ADIAMENTO OU ANULAÇÃO DA PARTIDA</h4>
  
    <p>Art. 19 – Poderá haver antecipação, adiamento ou anulação de uma partida devido a motivos de força maior ou
    de alta relevância devidamente comprovada, sendo as equipes cientificadas com antecedência de até 24 (vinte e
    quatro) horas.</p>
    <p>Art. 20 – O árbitro é a autoridade em campo que poderá suspender uma partida, em comum acordo com o
    coordenador da partida.</p>
  
    <p>Art. 21 – Caso um campo não tenha condições para realização de um jogo, o mesmo será realizado em outro
    campo, indicado pela coordenação, até às 09:00h do dia do jogo, se o jogo estiver marcado para o período da tarde.
    Cabe à coordenação geral, indicar onde deve jogar a equipe que perdeu o direito de jogar em seu campo.</p>
    <p>Art. 22 – As partidas suspensas, nulas ou antecipadas, terão um novo horário, local e data designados pela
    coordenação geral do certame.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO VII</h3>
    <h4 className="regulation__topic">DOS ATLETAS</h4>
  
    <p>Art. 23 – Somente poderão participar da XXIII COPA BOA VISTA/2019 atletas regularmente inscritos por suas
    respectivas equipes, junto à coordenação geral.</p>
    <p>Art. 24 – Todos os jogadores inscritos no quadro ASPIRANTE poderão jogar pelos dois quadros, exceto um
    jogador que não seja eleitor de Boa Vista, caso inscrito. Nenhum jogador inscrito no quadro TITULAR poderá
    participar do quadro ASPIRANTE. Cada equipe participante desta competição poderá inscrever 04 (quatro)
    jogadores que não tenham TÍTULO ELEITORAL da cidade de Boa Vista, no quadro TITULAR. Data-base para este direito
    é o título estar com data de emissão até 31/12/2016. Quem transferiu o título eleitoral após esta data, será
    considerado jogador não eleitor de Boa Vista. O jogador que transgredir esta norma, será automaticamente
    eliminado. Como não houve campeonato em 2018, este ano não há equipes ou jogadores punidos para esta competição
    de 2019.</p>
    <p>Art. 25 – Somente será permitida a inscrição de atletas até a QUINTA rodada do evento. O atleta que se
    inscrever em uma equipe, depois de regularizado, não poderá ser regularizado por outra equipe, mesmo que
    ainda não tenha jogado pela equipe anterior. A regularização de atletas será feita de segunda-feira até sábado,
    não sendo permitida a regularização de atletas aos domingos. Na QUINTA rodada, todas as carteiras de atletas
    terão de estar PLASTIFICADAS; não o fazendo, a equipe perderá automaticamente os pontos que tenha obtido em campo,
    naquele jogo, para a equipe adversária, desde que o corrido conste em súmula do jogo.</p>
    <p>Art. 26 – Os diretores ou responsáveis por suas equipes ficarão obrigados, antes do início de cada partida,
    por ocasião da assinatura da súmula do jogo, a apresentação ao árbitro do jogo, seus atletas munidos das carteiras
    de identificação de atletas. Para os analfabetos, o árbitro colocará o nome do mesmo em letra de imprensa. Poderá
    participar da partida o jogador que assinar a súmula até o intervalo do 1º para o 2º tempo.</p>
    <p>Art. 27 – As equipes inscritas no certame poderão ter em seus quadros, atletas de qualquer idade. Quanto aos
    atletas menores de 18 (dezoito) anos, os dirigentes das equipes serão os responsáveis por quaisquer atos
    praticados por eles, quando estiverem acompanhando a equipe.</p>
    <p>Art. 28 – A equipe que não se deslocar para cumprir um jogo previamente marcado, perderá os pontos para a
    equipe adversária, podendo também ser eliminada, caso não justifique o ocorrido através de oficio, dentro de 48
    (quarenta e oito) horas, à coordenação geral. A equipe será também eliminada, caso não tenha número legal de
    jogadores em seus quadros, por dois jogos durante toda a competição.</p>
    <p>Art. 29 – Perderá 06 (seis) pontos a equipe que vencer uma partida e for comprovada que atuou com atleta(s)
    irregular(es). Para tanto, a equipe adversária terá 48 (quarenta e oito) horas após o jogo para protestar. A
    equipe adversária ganhará 03 (três) pontos, caso tenha sido derrotada na partida.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO VIII</h3>
    <h4 className="regulation__topic">INFRAÇÕES DISCIPLINARES</h4>
  
    <p>Art. 30 – O atleta que for expulso de campo pelo árbitro da partida, cumprirá suspensão automática de uma
    partida. Em caso de reincidência, cumprirá suspensão automática de três jogos. Caso seja expulso pela
    terceira vez consecutiva ou alternada, será eliminado do certame. O atleta que for expulso no quadro aspirante,
    não poderá jogar pelo quadro titular naquele dia e também não poderá participar do jogo seguinte nos dois quadros.
    As expulsões serão cumulativas nos dois quadros. O atleta que for expulso 03 (três) vezes no somatório dos dois
    quadros, estará eliminado da competição.</p>
    <p>Art. 31 – O atleta inscrito em uma equipe e que esteja participando de um jogo, caso agrida fisicamente o
    árbitro da partida, seus auxiliares e/ou membros da coordenação geral e JJD, será julgado. Caso seja considerado
    culpado, será eliminado do certame por um período de dois anos. Quando um atleta agredir fisicamente qualquer
    pessoa que esta não esteja participando do jogo, será eliminado por período de um ano. A PUNIÇÃO SERÁ A PARTIR DO
    JULGAMENTO.</p>
    <p>Art. 32 – Nas partidas julgadas pela JJD, cujos pontos forem adjudicados a uma equipe que os tenha perdido em
    campo, o resultado será 1 x 0.</p>
    <p>Art. 33 – O atleta que se inscrever por mais de uma equipe e regularizado, antes ou durante o certame, será
    automaticamente eliminado.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO IX</h3>
    <h4 className="regulation__topic">DOS PROTESTOS</h4>
  
    <p>Art. 34 – Fica criada a Junta de Justiça Desportiva (JJD) da XXIII COPA BOA VISTA/2019, composta por 03 (três)
    membros efetivos e 02 (dois) suplentes, que terão a responsabilidade de julgar protestos e demais causas
    jurídicas do certame.</p>
    <p>Art. 35 – A equipe que se sentir prejudicada em seus direitos, terá 48 (quarenta e oito) horas de dia útil,
    após o final do jogo, para protestar o resultado de uma partida, protocolando o referido documento e anexos junto
    à coordenação geral, para a devida apreciação e julgamento.</p>
    
    <h3 className="regulation__subtitle">CAPÍTULO X</h3>
    <h4 className="regulation__topic">DOS ÁRBITROS</h4>
  
    <p>Art. 36 – Caberá aos árbitros obrigatoriamente relatar todas as ocorrências registradas na partida,
    encaminhando a súmula e seus anexos, até a terça-feira, à coordenação geral, para que haja condições de
    entregar na quarta-feira, cópia da súmula no SITE DA COPA.</p>
    <p>Art. 37 – O árbitro ou trio de arbitragem devidamente escalado deverá se encontrar presente ao local do jogo,
    15 (quinze) minutos antes do seu início.</p>
    <p>Art. 38 – As equipes que se sentirem prejudicadas pela arbitragem, terão direito, através de ofício, a vetar
    aquele árbitro que o prejudicou. Para isso, é necessário provas, que serão analisadas pela coordenação geral.</p>
  
    <h3 className="regulation__subtitle">CAPÍTULO XI</h3>
    <h4 className="regulation__topic">DOS TÍTULOS E PRÊMIOS</h4>
  
    <p>Art. 39 – Ao final da XXIII COPA BOA VISTA/2019, serão conferidos troféus e medalhas de honra ao mérito, de
    posse definitiva, na seguinte ordem:
      <ul>
        <li><strong>Equipe campeã:</strong> Troféu e medalhas;</li>
        <li><strong>Equipe vice-campeã:</strong> Troféu e medalhas;</li>
        <li><strong>Artilheiro:</strong> troféu;</li>
        <li><strong>Goleiro menos vazado (os dois envolvidos na final):</strong> troféu;</li>
        <li><strong>R$ 6.000,00 (seis mil reais) para o quadro titular, sendo:</strong>
          <ul>
            <li><strong>– Equipe campeã:</strong> R$ 3.000,00</li>
            <li><strong>– Equipe vice-campeã:</strong> R$ 1.500,00</li>
            <li><strong>– 3º colocado:</strong> R$ 1.000,00</li>
            <li><strong>– 4º Colocado:</strong> R$ 500,00</li>
          </ul>
        </li>
        <li><strong>R$ 4.000,00 (quatro mil reais) para o quadro aspirante, sendo:</strong>
          <ul>
            <li><strong>– Equipe campeã:</strong> R$ 2.000,00</li>
            <li><strong>– Equipe vice-campeã:</strong> R$ 1.000,00</li>
            <li><strong>– 3º colocado:</strong> R$ 500,00</li>
            <li><strong>– 4º Colocado:</strong> R$ 500,00</li>
          </ul>
        </li>
      </ul>
    </p>
  
    <h3 className="regulation__subtitle">CAPÍTULO XII</h3>
    <h4 className="regulation__topic">DAS DISPOSIÇÕES GERAIS</h4>
  
    <p>Art. 40 – Toda partida registrada com o placar de W x O, será convencionada por 1 x 0, para efeito de saldo de
    gols.</p>
    <p>Art. 41 – A coordenação geral não se responsabiliza por quaisquer acidentes que ocorram com os atletas,
    dirigentes, arbitragem e torcida, antes, durante e depois de cada jogo.</p>
    <p>Art. 42 – Se for registrada agressão generalizada numa partida, devidamente relatada na súmula do jogo pelo
    árbitro, a equipe que provocou tais incidentes será eliminada da competição, e os envolvidos, se enquadrarão no
    artigo 31 deste regulamento.</p>
    <p>Art. 43 – A PREFEITURA MUNICIPAL DE BOA VISTA custeará: três bolas, um padrão completo, arbitragem e
    transporte, quando necessário, para todas as equipes participantes do certame.</p>
    <p>Art. 44 – A equipe que abandonar a competição ou for eliminada, não poderá participar da competição de
    futebol, promovida pela Prefeitura Municipal de Boa Vista, no ano de 2020, desde que não sejam motivos do
    artigo 42 deste regulamento.</p>
    <p>Art. 45 – Este regulamento deverá ser cumprido a risca, pelas agremiações participantes, coordenação geral e
    arbitragem, que o aprovaram em reuniões preliminares. Qualquer artigo que aprovado nas reuniões e que por
    lapso, não foi colocado neste regulamento, deverá ser incluído até o dia 13 de julho de 2019, desde que
    comunicado.</p>
    <p>Art. 46 – Os casos omissos neste regulamento serão resolvidos pela coordenação geral, fundamentados nos
    critérios estabelecidos no Código Brasileiro de Justiça Desportiva (CBJD), e demais resoluções e leis que regem o
    futebol associação.</p>
  
    <h4 className="regulation__credits">BOA VISTA – PB, 13 de julho de 2019.</h4>
    <p className="regulation__credits">JOSÉ MARTINS FILHO – (TITA)<br />Coordenador geral.</p>

    <div className="close-button">
      <button className="btn btn-secondary" onClick={props.handleClose}>Fechar</button>
    </div>
  </Modal>
);

export default RegulationModal;