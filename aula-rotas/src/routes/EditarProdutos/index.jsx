import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"


export default function EditarProdutos(){

    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produtos = proc[0]

    const salvar = ()=>{
        alert(`Produto: ${produtos.nome} editado com sucesso!`)
        return navegacao('/produtos')
    }

    return(
        <main>
            <h1>Editando o produto</h1>
            <p>Editando os dados do produto: {produtos.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}