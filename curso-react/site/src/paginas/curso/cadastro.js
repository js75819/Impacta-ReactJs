import React, { Component } from 'react';
import { FormCurso} from './form'
import { CursoList} from './list'

export class CadastroCurso extends Component {
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso />
                </div>
                <div className="col-md-6">
                    <CursoList />
                </div>
            </div>
        )
    }
}
