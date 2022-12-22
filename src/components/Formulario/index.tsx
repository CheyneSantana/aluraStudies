import React from 'react';
import { ITarefa } from '../../types/ITarefa';
import Botao from '../Botao';
import style from './formulario.module.scss';
 
class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state }])
    }

    render() { 
        return ( 
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input type='text' 
                            id='tarefa' 
                            placeholder='O que você quer estudar'
                            value={this.state.tarefa}
                            onChange={evento => {
                                this.setState({...this.state, tarefa: evento.target.value })
                            }}
                            required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input 
                        type='time'
                        step='1'
                        id='tempo'
                        value={this.state.tempo}
                        onChange={evento => {
                            this.setState({...this.state, tempo: evento.target.value })
                        }}
                        min='00:00:00'
                        max='01:30:00'
                        required/>
                </div>
                <Botao texto='Adicionar' type='submit'/>
            </form>
         );
    }
}
 
export default Formulario;