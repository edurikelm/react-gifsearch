import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball'])

    // const handleAgregar = () => {
    //     const item = 'Naruto';
    //     setCategorias(cats => [...cats, item])
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>

            <AddCategory setCategorias= { setCategorias }/>

            <hr/>
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid 
                            key= { categoria }
                            categoria={ categoria }
                        />
                    ))
                }
            </ol>

        </Fragment>
    )
}
