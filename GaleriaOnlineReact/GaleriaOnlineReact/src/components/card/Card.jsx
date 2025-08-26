import './Card.css'
import imgTrash from './../../assets/img/trash.svg'
import imgPen from './../../assets/img/pen.svg'

export const Card = ({ tituloCard , imgCard, funcaoEditar, funcaoExcluir}) => {  
    return (
        <div className='cardDaImagem'>
            <p >{tituloCard}</p>
            <img src={imgCard} alt="Imagem relacionada ao titulo" className='imgDoCard' />
            <div className='icons'>
                <img src={imgPen} onClick={funcaoEditar}  alt="imagem de uma caneta para edição da imagem" />
                <img src={imgTrash} onClick={funcaoExcluir} alt="imagem de um lixo para deletar a imagem" />
            </div>


        </div>
    )
}