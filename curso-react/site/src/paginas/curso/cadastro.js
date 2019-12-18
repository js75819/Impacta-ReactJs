import React, { Component } from 'react';
import { FormCurso } from './form'
import { CursoList } from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'


export class CadastroCurso extends Component {

    initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',
        cursos: []

    }



    codigoChange(html) {

        this.setState({ codigo: html.target.value })

    }
    descricaoChange(html) {

        this.setState({ descricao: html.target.value })

    }

    cargaHorariaChange(html) {

        this.setState({ cargaHoraria: html.target.value })

    }

    precoChange(html) {

        this.setState({ preco: html.target.value })

    }

    categoriaChange(html) {

        this.setState({ categoria: html.target.value })

    }
    adicionar(evento) {

        const { codigo, descricao, cargaHoraria, categoria, preco }=this.state 
        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }
        evento.preventDefault()


        axios.post(URL, body)
            .then(_ => {
                this.limpar()
                this.listar()

                alert('Curso Adicionado')
            })
            .catch(error => {
                console.log(error)
                alert('Erro ao Adicionar Curso')
            })

    }

    removerCurso(curso){

    }

    limpar() {
        this.setState(this.initialState)
    }


    state = { ...this.initialState, cursos: [] }

    constructor(props) {
        super(props);
        this.listar();
    }
    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}

                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}

                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}

                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}

                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}

                        adicionar={this.adicionar.bind(this)}



                    />
                </div>
                <div className="col-md-6">
                    <CursoList cursos={this.state.cursos} />
                </div>
            </div>
        )
    }
}


