import React, { Component } from "react";
import data from "../Data/dataGlasses.json";
import './RenderGlasses.css';

export default class RenderGlasses extends Component {
  state={
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    display: 'none'
  };
  handleClick = (item) => {
    this.setState({...item, display: 'block'})
  };
  renderGlasses = () => {
    return data.map((item) => (
      <div
        onClick={()=> this.handleClick(item)}
        key={item.id}
        style={{ width: "15%", cursor: "pointer" }}
        className="mr-5"
      >
        <img src={item.url} alt={item.name} className="img-fluid" />
      </div>
    ));
  };
  render() {
    const keyframe =`
    @keyframes animationGlass${Date.now()} {
      from {
        width: 0;
        transform: rotate(45deg)
      }
      to {
        width: 130px;
        transform: rotate(0deg)
      }
    }
    `;
   
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(./glassesImage/background.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <style>
          {keyframe}
        </style>
        <div
          className="row"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "600px" }}
        >
          <div className="col-12 p-0">
            <nav
              className="navbar navbar-expand-sm navbar-dark justify-content-center"
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <a
                className="navbar-brand"
                href="https://www.w3schools.com/colors/colors_rgb.asp"
              >
                TRY CLASSES ONLINE APP
              </a>
            </nav>
            <div className=" d-flex justify-content-center my-5">
              <div style={{ width: "20%", marginRight: "15%" }}>
                <img
                  alt="postrait"
                  src=" ./glassesImage/model.jpg"
                  className="img-fluid"
                />
              </div>
              <div style={{ width: "20%", position: "relative" }}>
                <img
                  alt="postrait"
                  src=" ./glassesImage/model.jpg"
                  className="img-fluid"
                />
                <div style={{display: this.state.display}} >
                  <img
                    alt="gl"
                    src={this.state.url}
                    className="img-fluid glassesStyle"
                    style={{
                      position: "absolute",
                      top: "82px",
                      right: "60px",
                      width: "52%",
                      opacity: 0.8,
                      display: this.state.display,
                      animation: `animationGlass${Date.now()} 1s`
                    }}
                  />
                  <div style={{position:'absolute', backgroundColor:'rgba(100,100,100,0.3)', width:'100%', height:'30%', bottom:0, padding: '20px', color: '#CC00FF'}}>
                    <h5>{this.state.name}</h5>
                    <p>Price: {this.state.price} $</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-auto" style={{ width: "76%" }}>
              <div className="d-flex  flex-wrap">{this.renderGlasses()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
