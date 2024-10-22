import Button from "../Button/Button"
import "./Main.css"

function Main(props){
        return(
            <>
            <main>
                <h2>{props.titulo}</h2>
                <p>{props.texto1}</p>
                {/* <Button titulo="Padrão" />
                <Button titulo="Cadastrar" class="sucesso" />
                <Button titulo="Alerta" class="alerta" />
                <Button titulo="Erro" class="erro" /> */}
            </main>

        </>
    )
}

export default Main