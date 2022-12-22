import { ITarefa } from '../../types/ITarefa';
import Item from './Item';
import style from './lista.module.scss';

function Lista({tarefas}:{tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index}
                    {...item}/>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;