import React from "react";
import './Tour.scss'


class Tour extends React.Component {
    state = {
        showInfo:false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const{id,country,img,name,info} = this.props.tour
        const{deleteTour}=this.props
        return (
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} alt="image"/>
                    <span className='close-btn' onClick={() => {deleteTour(id)}}>
                <i className='fas fa-window-close'/>

               </span>
                </div>
                <div className="tour-info">
                    <h3>{country}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "}
                        <span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down"/>
                    </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p> }

                </div>


            </article>
        )
    }
}


export default Tour