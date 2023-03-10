import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/ITarefa';
import style from './app.module.scss';

function App() {
  
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
    
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
