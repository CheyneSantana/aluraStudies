import style from '../lista.module.scss';

export default function Item(props: { tarefa: string, tempo: string, selecionado: boolean, completado: boolean, id: string}) {

    return (
        <li className={style.item}>
            <h3>{props.tarefa}</h3>
            <span>{props.tempo}</span>
        </li>
    )
}