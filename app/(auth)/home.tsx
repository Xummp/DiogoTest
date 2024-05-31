import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { StyleSheet } from "react-native";

const Dashboard = () => {
  const [fontLoader] = useFonts({
    Poppins_700Bold,
  });

  if (!fontLoader) {
    return null;
  }

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <ScrollView>
        <ImageBackground
          style={[styles.fundo, { opacity: 0.9 }]} // Definindo a opacidade dentro do estilo
          source={require("../../assets/images/fundo.jpg")}
        >
          <View style={styles.principal}>
            <Text style={styles.tituloPrincipal}>QUAL É O NOSSO OBJETIVO?</Text>
            <Text style={styles.paragrafo1}>
              O objetivo da pesquisa é analisar os impactos e benefícios da Via
              Parque em Caruaru, investigando seu efeito no trânsito,
              mobilidade, desenvolvimento econômico e qualidade de vida. Também
              avaliaremos as políticas públicas e investimentos associados a
              ela, identificando desafios e oportunidades para melhorias na
              gestão urbana e no desenvolvimento sustentável da cidade.
            </Text>
          </View>
          <View style={styles.opiniao}>
            <LinearGradient
              colors={["rgba(143, 193, 0, 1)", "rgba(143, 193, 0, 1)"]}
              style={styles.gradiente}
            />
            <Text style={styles.textoOpiniao}>
              COMPARTILHE SUA OPINIÃO COM UM CLIQUE!
            </Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                openLink("https://jtbas35strp.typeform.com/to/xhCmH0N6")
              }
            >
              <Text style={styles.textobotao}>AVALIAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quemSomos}>
            <View style={styles.titulocomfoto}>
              <Text style={styles.titlequemsomos}>
                O QUE NÓS {"\n"} QUEREMOS?
              </Text>
              <Image
                style={styles.ecologia}
                source={require("../../assets/images/ecologia.png")}
              />
            </View>
            <Text style={styles.paragrafo2}>
              Bem-vindo à pesquisa da Via Parque Caruaru! Somos estudantes do 3°
              período de Análise e Desenvolvimento de Sistemas da Uninassau
              dedicados a entender os desafios não resolvidos da Via Parque.
              Nossa missão é contribuir para uma Caruaru mais conectada e
              sustentável, explorando a interseção entre infraestrutura viária e
              tecnologia moderna. Ajude-nos nessa jornada de descoberta e
              inovação, e juntos faremos a diferença em nossa comunidade.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>NOTÍCIAS</Text>
            <Text style={styles.subtitle}>Não perca nada!</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/pensamento-image.png")}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.inputsite}>
          <View style={styles.circle} />
          <Text style={styles.text}>www.sitealeatorio.com</Text>
        </View>
        <View style={styles.inputsite}>
          <View style={styles.circle} />
          <Text style={styles.text}>www.sitealeatorio.com</Text>
        </View>
        <View style={styles.inputsite}>
          <View style={styles.circle} />
          <Text style={styles.text}>www.sitealeatorio.com</Text>
        </View>
        <View style={styles.galeriaContainer}>
          <View style={styles.textGaleria}>
            <Text style={styles.titleGaleria}>GALERIA</Text>
            <Text style={styles.subtitleGaleria}>Destaques</Text>
            <View style={styles.quadradoContainer}>
              <View style={styles.colunaQuadrados}>
                <View style={styles.quadradoBranco}>
                  <Ionicons
                    name="camera"
                    size={15}
                    color="black"
                    style={styles.iconInsideSquare}
                  />
                </View>
                <View style={styles.quadradoBranco}>
                  <Ionicons
                    name="camera"
                    size={15}
                    color="black"
                    style={styles.iconInsideSquare}
                  />
                </View>
              </View>
              <View style={styles.BigQuadradoBranco}>
                <Ionicons
                  name="videocam"
                  size={20}
                  color="black"
                  style={styles.iconInsideSquare}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.botaoEnviar}>
              <View style={styles.botaoContent}>
                <Text style={styles.textoBotao}>ENVIAR</Text>
                <Ionicons name="download" size={25} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/arvore.png")}
            style={styles.imageGaleria}
          />
        </View>
        <View style={styles.faqContainer}>
          <Text style={styles.titleFaq}>FAQ</Text>
          <Text style={styles.subtitleFaq}>PERGUNTAS FREQUENTES!</Text>
          <View style={styles.faqItem}>
            <Text style={styles.question}>
              <Text style={styles.bold}>
                Quais são os benefícios e potenciais da pesquisa para a
                comunidade de Caruaru?
              </Text>
            </Text>
            <Text style={styles.answer}>
              A pesquisa busca identificar soluções para melhorar a
              infraestrutura, a mobilidade e a qualidade de vida de Caruaru, com
              um foco na Via Parque. Esperamos que os resultados da pesquisa
              possam influenciar políticas públicas e projetos futuros para
              tornar a cidade mais conectada e sustentável.
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.faqItem}>
            <Text style={styles.question}>
              <Text style={styles.bold}>
                Onde posso encontrar as atualizações e resultados da pesquisa?
              </Text>
            </Text>
            <Text style={styles.answer}>
              As atualizações e resultados da pesquisa serão publicados neste
              site. Você pode visitar a seção de "Notícias" para acompanhar
              nosso progresso e descobertas.
            </Text>
            <View style={styles.separator} />
          </View>
          <View style={styles.faqItem}>
            <Text style={styles.question}>
              <Text style={styles.bold}>Quanto tempo durará a pesquisa?</Text>
            </Text>
            <Text style={styles.answer}>
              O período de pesquisa pode variar, mas planejamos conduzir a
              pesquisa ao longo do ano de 2023/24 para garantir que abordemos
              todas as áreas relevantes da Via Parque Caruaru.
            </Text>
          </View>
        </View>
        <View style={styles.Faleconosco}>
          <Text style={styles.entreEmContato}>
            ENTRE EM CONTATO {"\n"} CONOSCO!
          </Text>
          <Text style={styles.paragrafo3}>
            DISPONIBILIZAMOS UM EMAIL PARA VOCÊ FAZER ALGUMA RECLAMAÇÃO OU TIRAR
            DÚVIDAS SOBRE O NOSSO PROJETO.
          </Text>
          <Image
            style={styles.megafone}
            source={require("../../assets/images/megafone.png")}
          />
          <TouchableOpacity style={styles.botaoSocial}>
            <View style={styles.botaoContent}>
              <Text style={styles.textoBotao}></Text>
              <Ionicons
                name="logo-instagram"
                size={25}
                color="#fff"
                style={styles.icon}
              />
              <Ionicons
                name="mail-outline"
                size={25}
                color="#fff"
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoFaleConosco}>
            <Text
              style={styles.textoBotaoFaleConosco}
              onPress={() =>
                openLink("https://jtbas35strp.typeform.com/to/xhCmH0N6")
              }
            >
              AVALIAR
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 9,
    fontFamily: "Poppins_700Bold",
  },
  paragrafo1: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 25,
    marginHorizontal: 6,
    lineHeight: 20,
    fontFamily: "Poppins_700Bold",
  },
  fundo: {
    flex: 1,
    width: "100%",
  },
  opiniao: {
    marginTop: 40,
    marginLeft: 40,
    fontSize: 20,
    width: "80%",
    padding: 20,
    borderRadius: 38,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden", // Para garantir que o gradiente não vaze
    fontFamily: "Poppins_700Bold",
  },
  gradiente: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 38,
  },
  textoOpiniao: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    zIndex: 1,
    fontFamily: "Poppins_700Bold",
  },
  textobotao: {
    marginBottom: 5,
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    color: "#8FC100",
    fontFamily: "Poppins_700Bold",
  },
  botao: {
    backgroundColor: "white",
    padding: 4,
    width: "70%",
    borderRadius: 25,
    textAlign: "center",
    elevation: 5,
    zIndex: 1, // Garante que o botão esteja acima do gradiente
  },
  quemSomos: {
    marginTop: 100,
    height: 440,
    width: "100%",
    backgroundColor: "#8FC100",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  titulocomfoto: {
    flexDirection: "row", // Alinha os itens horizontalmente
    alignItems: "center", // Alinha os itens verticalmente ao centro
    marginLeft: 25,
    margin: 10,
  },
  ecologia: {
    marginTop: 10,
    height: 120,
    width: 120,
    marginLeft: 40, // Adiciona espaço entre a imagem e o texto
  },
  titlequemsomos: {
    marginTop: 15,
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  paragrafo2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
    marginHorizontal: 6,
    lineHeight: 20,
    fontFamily: "Poppins_700Bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 50,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
  },
  inputsite: {
    marginTop: 20,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 35,
    alignSelf: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFF",
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
  },
  galeriaContainer: {
    height: 510,
    marginTop: 100,
    flexDirection: "row",
    backgroundColor: "#8FC100",
    padding: 20,
    borderRadius: 55,
  },
  textGaleria: {
    flex: 1,
  },
  titleGaleria: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    marginTop: 20,
    fontFamily: "Poppins_700Bold",
  },
  subtitleGaleria: {
    fontSize: 15,
    color: "#fff",
    marginLeft: 15,
    fontFamily: "Poppins_700Bold",
  },
  imageGaleria: {
    width: 100,
    height: 100,
    marginRight: 20,
    marginTop: 20,
  },
  quadradoContainer: {
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 15,
  },
  colunaQuadrados: {
    flexDirection: "column",
  },
  quadradoBranco: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  BigQuadradoBranco: {
    width: 220,
    height: 220,
    backgroundColor: "#fff",
    marginLeft: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconInsideSquare: {
    position: "absolute",
  },
  botaoEnviar: {
    marginTop: 20,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    paddingVertical: 4,
    paddingHorizontal: 19,
    borderRadius: 20,
    marginLeft: 130,
    alignSelf: "center",
  },
  botaoContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
  faqContainer: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  titleFaq: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitleFaq: {
    fontSize: 18,
    color: "#333333",
  },
  faqItem: {
    alignItems: "center",
    width: "100%",
  },
  question: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    fontFamily: "Poppins_700Bold",
  },
  bold: {
    fontWeight: "bold",
  },
  answer: {
    fontSize: 12,
    color: "#333333",
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 1)",
    width: "60%",
    marginTop: 10,
  },
  Faleconosco: {
    marginTop: 35,
    height: 650,
    width: "100%",
    backgroundColor: "#8FC100",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  entreEmContato: {
    marginTop: 25,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  paragrafo3: {
    color: "#fff",
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  megafone: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 30,
  },
  botaoSocial: {
    marginTop: 20,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    paddingVertical: 9,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignSelf: "center",
  },
  icon: {
    marginHorizontal: 5,
  },
  botaoFaleConosco: {
    backgroundColor: "white",
    padding: 4,
    width: "60%",
    borderRadius: 25,
    textAlign: "center",
    elevation: 5,
    marginTop: 40,
    alignSelf: "center",
  },
  textoBotaoFaleConosco: {
    marginBottom: 5,
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    color: "#8FC100",
    fontFamily: "Poppins_700Bold",
  },
});

export default Dashboard;
