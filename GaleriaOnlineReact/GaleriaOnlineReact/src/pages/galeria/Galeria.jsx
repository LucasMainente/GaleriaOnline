import './Galeria.css';
import icon from "../../assets/img/upload.svg";
import { Botao } from '../../components/botao/Botao';
import { Card } from '../../components/card/Card';
import { useEffect, useState } from 'react';
import api from '../../Services/services';

export const Galeria = () => {
    const [cards, setCards] = useState([]);
    const [imagem, setImagem] = useState(null);
    const [nomeImagem, setNomeImagem] = useState("");

    async function listarCards() {
        try {
            const resposta = await api.get("/Imagen");
            setCards(resposta.data);
        } catch (error) {
            console.error(error);
            alert("Erro ao listar.");
        }
    }

    async function cadastrarCard() {

        event.preventDefault();
        if (imagem && nomeImagem) {
            try {
                const formData = new FormData();
                formData.append("Nome", nomeImagem);
                formData.append("Arquivo", imagem);

                await api.post("/Imagen/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                    
                },listarCards());

            } catch (error) {
                alert("Erro ao cadastrar.");
            }

        } else {
            alert("Preencha todos os campos.");
        }

    }

    async function editarCard(id) {
        alert("Editou");
    }

    async function excluirCard(id) {
        alert("Excluiu")


        }

    useEffect(() => {
        listarCards();
    }, []);

    return (
        <>
            <h1 className='tituloGaleria'>Galeria Online</h1>

            <form className='formulario' onSubmit={cadastrarCard}>
                <div className='campoNome'>
                    <label>Nome</label>
                    <input type="text" className='inputNome' onChange={(e) => setNomeImagem(e.target.value)} value={nomeImagem} />
                </div>
                <div className='campoImagem'>
                    <label className='arquivoLabel'>
                        <i>
                            <img src={icon} alt="Ícone de upload de imagem" />
                        </i>
                        <input type="file" className="arquivoInput" onChange={(e) => setImagem(e.target.files[0])} />
                    </label>
                </div>
                <Botao nomeBotao="Cadastrar" />
            </form>

            <div className='campoCards'>
                {cards.length > 0 ? (
                    cards.map((e) => (
                        <Card

                            key={e.id}
                            tituloCard={e.nome}
                            imgCard={`https://localhost:7023/${e.caminho.replace("wwwroot/", "")}`}
                            funcaoEditar={() => editarCard(e.id)}
                            funcaoExcluir={() => excluirCard(e.id)}
                        />
                    ))
                ) : (
                    <p>Nenhum Card cadastrado</p>
                )}
            </div>
        </>
    );
};
