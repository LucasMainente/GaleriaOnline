import './Card.css'
import imagemCard from './../../assets/img/Rambelereiro.jpg'
import imgCard from './../../assets/img/upload.svg'
import imgTrash from './../../assets/img/trash.svg'
import imgPen from './../../assets/img/pen.svg'

export const Card = ({ tituloCard }) => {
    return (
        <div className='cardDaImagem'>
            <p >{tituloCard}</p>
            <img src={imagemCard} alt="" className='imgDoCard' />
            <div className='icons'>
                <img src={imgPen} alt="imagem de uma caneta para edição da imagem" />
                <img src={imgTrash} alt="imagem de um lixo para deletar a imagem" />
            </div>


        </div>
    )
}