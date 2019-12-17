import React, { Component } from 'react';
import { FormCurso} from './form'
import { CursoList} from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'


export class CadastroCurso extends Component {

    initialState= {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',
        cursos: []

    }
       

    state = this.initialState

    constructor(props) {
        super(props);
        this.listar();
    }
    listar(){
        axios.get(URL).then(response =>{
            this.setState({cursos: response.data})
        })
        }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso />
                </div>
                <div className="col-md-6">
                    <CursoList cursos={this.state.cursos} />
                </div>
            </div>
        )
    }
}
