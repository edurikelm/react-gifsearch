import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {

    const { data: images, loading } = useFetchGifs(categoria);

    return (

        <Fragment>
            <h3 className="card animate__animated animate__fadeIn">{ categoria }</h3>

            { loading ? <p className="card animate__animated flash">loading...</p> : null }
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={ img.id }
                            {...img} 
                        />
                    ))
                }
            </div>
        </Fragment>    
    )
}
