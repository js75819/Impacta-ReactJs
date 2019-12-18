import React, { Component } from 'react';
import { FormCurso } from './form'
import { CursoList } from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'


export class CadastroCurso extends Component {

    initialState = {
        _id: null,
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

        const { codigo, descricao, cargaHoraria, categoria, preco } = this.state
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

    remover(curso) {
        if (window.confirm('deseja realmente remover curso?')) {
            axios.delete(`${URL}/${curso._id}`)
                .then(_ => {
                    this.listar()
                    alert('Curso deletado com sucesso')
                })
                .catch(error => {
                    alert('Erro ao deletar Curso')
                })
        }

    }

    limpar() {
        this.setState(this.initialState)
    }

    consultar(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            categoria: curso.categoria,
            preco: curso.preco

        })
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
                        isAtualizar={this.state._id ? true : false}



                    />
                </div>
                <div className="col-md-6">
                    <CursoList
                        cursos={this.state.cursos}
                        removerCurso={this.remover.bind(this)}
                        consultarCurso={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}


