import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {

  return (

    <ScrollView>

      <View style={estilos.body}>

        <View>

          <Image style={estilos.header} source={require("./assets/header.png")} />

          <View style={estilos.introducao}>
            <Text style={estilos.bemvindo}>Bem-vindo a Adega Etechaça!</Text>
            <Text style={estilos.bemvindo}>Sinta-se á vontade para tomar a melhor dose do dia!</Text>
          </View>

          <View style={estilos.cardapio}>
            <Text style={estilos.titulo}>Cardápio exclusivo</Text>

            <View>
              <Text style={estilos.bebidas}>Vinho Importado</Text>
              <Text style={estilos.bebidas}>Cella Lambrusco...........R$60,99</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/cellalambrusco.png")} />
              <Text style={estilos.descricao}>
              Tipo de vinho espumante doce produzido na região da Emilia Romagna, Itália. Pode ser tinto, branco ou rosé. É feito da uva tinta cultivada em toda a Itália, em especial na região da Emilia-Romana.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Vinho Nacional</Text>
              <Text style={estilos.bebidas}>Pérola....................R$24,99</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/perola.png")} />
              <Text style={estilos.descricao}>
              Uma das primeiras Lagers que nós fabricamos no Devaneio do Velhaco e ela foi construída com a intenção de ter uma base de maltes potente para equilibrar com a presenta do Lúpulo Saaz.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Combo</Text>
              <Text style={estilos.bebidas}>Red Bull..................R$13,92</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/redbull.png")} />
              <Text style={estilos.descricao}>
              Bebida energética vendida pela companhia austríaca Red Bull GmbH. A Red Bull foi introduzida no mercado em 1987 e, desde então, vende mais de 5 bilhões de latas anualmente em mais de 140 países. Isso tornou o fundador da empresa, Dietrich Mateschitz, um bilionário.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Rum</Text>
              <Text style={estilos.bebidas}>Martini...................R$44,90</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/martini.png")} />
              <Text style={estilos.descricao}>
              Coquetel feito com gim e vermute seco, mexidos com gelo e coado em uma taça cocktail sem gelo. A sua finalização e decoração tradicional é um "twist" de casca de limão-siciliano, ou com azeitonas verdes. O coquetel gibson é uma "leve" variação do martíni guarnecido com cebolinha em conserva.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Tequila</Text>
              <Text style={estilos.bebidas}>José Cuervo........... ...R$196,90</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/josecuervo.png")} />
              <Text style={estilos.descricao}>
              Produzida pela produtora mexicana Tequila Cuervo La Rojeña, S.A. de C.V., sediada em Tequila, Jalisco. A marca pertence ao grupo Proximo Spirits. São produzidas várias variações da bebida, dentre elas uma versão de margarita.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Whisky</Text>
              <Text style={estilos.bebidas}>Logan.....................R$149,80</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/logan.png")} />
              <Text style={estilos.descricao}>
              No século XIX, o absinto suíço Logan era tão popular quanto Pernod ou Lemercier. Naqueles dias, como agora, Logan era amado por seu aroma agradável de cítricos-absinto e sabor incomum, no qual quase nenhuma nota de anis é sentida.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Vodka</Text>
              <Text style={estilos.bebidas}>Smirnoff..................R$26,90</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/smirnorff.png")} />
              <Text style={estilos.descricao}>
              Marca de vodca criada por Piotr Arsenieyevich Smirnov em Moscovo, Rússia. Pertence atualmente ao conglomerado britânico Diageo. Smirnoff, tem o nome de "Смирновская Водка" (transliterado Smirnovskaya Vodka). Pertence à Diageo desde 2006
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Refrigerante</Text>
              <Text style={estilos.bebidas}>Guaraná....................R$9,29</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/guarana.png")} />
              <Text style={estilos.descricao}>O processo de processamento do xarope da fruta iniciou-se no Brasil em 1905 por Luiz Pereira Barreto no Rio de Janeiro. Em 1906 foi lançado pela F. Diefenthaller, uma fábrica de refrigerantes de Santa Maria no Rio Grande do Sul, o Guaraná Cyrilla. A bebida inicialmente era adstringente e acentuadamente amarga e por isso não se disseminou muito.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Água</Text>
              <Text style={estilos.bebidas}>Água s/gás.................R$49,40</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("./assets/aguasgas.png")} />
              <Text style={estilos.descricao}>
              Retirada de fontes hidrominerais de áreas protegidas de poluição, podem possuir maior ou menor quantidade de minerais, depende do local. Possuem minerais naturais, por isso possuem propriedades terapêuticas. Essa água é naturalmente potável e própria para o consumo humano.
              </Text>
            </View>
            
            <View style={estilos.footer}>
              <Text style={estilos.pedido}>Escolha o que lhe deseja para hoje e esperamos que se divirta :)</Text>
              <Image style={estilos.pix} resizeMode="center" source={require("./assets/pix.png")} />
              <Image style={estilos.pix} resizeMode="center" source={require("./assets/qrcode.png")} />
            </View>

          </View>

        </View>

      </View>

    </ScrollView>

  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#101010" },

  header: { width: 400, height: 200 },
  
  introducao: { backgroundColor: "#6f0000", borderRadius: 20, width: 300, marginLeft: 45, margin: 30 },

  bemvindo: { textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 18 },

  cardapio: { backgroundColor: "#e71f10", borderRadius: 60, width: 300, marginLeft: 45, alignItems: "center", padding: 30 },

  titulo: { fontSize: 30, padding: 50, fontWeight: "bold" },

  bebidas: { padding: 5, fontSize: 18 },

  foto: { width: 200, height: 150 },

  descricao: { marginBottom: 15, fontSize: 15 },
  
  footer: { backgroundColor: "#ff8634", borderRadius: 20, width: 250, marginLeft: 25, margin: 30 },

  pedido: { textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 18 },
  
  pix: { width: 200, height: 150, margin: 25 }

})