import React from "react";
import './Tours.scss'
import Tour from "../Tour/Tour";
import {ToursData} from '../../ToursData'

class Tours extends React.Component  {
    state = {
        tours:ToursData
    };
    deleteTour = id =>  {
        const {tours} = this.state
        const sortedTours = tours.filter(tour => tour.id !==id)
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        const {tours} = this.state
        return (
            <div className='tours'>
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour = {tour} deleteTour = {this.deleteTour}/>
                    )
                })}
            </div>
        )
    }


}

export default Tours