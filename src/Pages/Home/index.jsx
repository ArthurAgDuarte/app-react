import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
function Home() {
    return(
        <>
        <Nav/>
        <Header logo ="ImobiTech"/>
        {/* <Main titulo = "Bem-vindo(a) ImobiTech" texto1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ab voluptas, culpa magnam illum soluta eos maxime, dolorem voluptates reprehenderit dolorum consequuntur rerum cum enim accusamus distinctio commodi nihil dolore nulla inventore id velit exercitationem necessitatibus? Tempore et iste possimus deleniti dignissimos magnam eum optio repellat quibusdam? Facere, laborum eaque."/> */}
        <Main/>
        <Footer contato = "contato@imobitech.com.br"/>
        </>
    );
}


export default Home