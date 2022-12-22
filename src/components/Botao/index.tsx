import React from "react";
import style from './botao.module.scss';

class Botao extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined }> {
    render() {
        return (
            <button className={style.botao} type={this.props.type}>
                {this.props.texto}
            </button>
        );
    }
}

export default Botao;