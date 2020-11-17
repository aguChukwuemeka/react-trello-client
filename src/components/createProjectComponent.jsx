import React, { Component } from "react";
import Modal from "react-awesome-modal";
import axios from "axios";
// import BGcard0 from '../assets/crud1.jpg';
// import BGcard1 from '../assets/crud2.jpg';
// import BGcard2 from '../assets/crud3.jpg';
// import BGcard3 from '../assets/crud4.jpg';
// import BGcard4 from '../assets/crud5.jpg';
// import BGcard5 from '../assets/crud6.jpg';
// import BGcard6 from '../assets/crud7.png';
// import BGcard7 from '../assets/crud8.jpeg';


// const colorArray = ['mauve', 'rose', 'spruce', 'teal', 'sage', 'crocodile', 'fern', 'tortilla', 'iris'];
const colorArray = ['green', 'gray', 'blue', 'brown', 'teal', 'pink', 'olive', 'lime', 'gold'];
// const pictureArray = [BGcard0, BGcard1, BGcard2, BGcard2, BGcard1, BGcard2, BGcard1, BGcard3, BGcard1];
// const randomIndex = Math.floor(Math.random() * pictureArray.length);
// const selectedPicture = pictureArray[randomIndex];


export default class createProjectComponent extends Component {

  state = {
    color: '',
    visible: false,
    showBG: false,
    title: "",
  };

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  addColor() {
    this.setState({ color: this.state.color });
  }

    handleChange = e => {
        e.preventDefault();
        e.currentTarget.name = e.currentTarget.value
        this.setState({
            title: e.currentTarget.name,
        });
    };

    // changeImage = () => {
    //     const randomIndex = Math.floor(Math.random() * pictureArray.length);
    //     const selectedPicture = pictureArray[randomIndex];
    //     this.setState({
    //       currentImageIndex: selectedPicture,
    //     });
    // }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     this.changeImage();
    //     if (this.state.title && this.state.currentImageIndex) {
    //       const title = this.state.title;
    //       const selectedPicture = this.state.currentImageIndex;
    //       await axios
    //         .post("/api/new_project", { title, selectedPicture })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err));
    //       this.setState({
    //         title: "",
    //       });
    //       console.log(title, selectedPicture);
    //     //   console.log(selectedPicture);
    //     }
    //     if (this.state.title === '') {
    //         setTimeout(() => this.closeModal(), 2000);
    //         // alert("Project Created Successfully");
    //     }
    //     // console.log(this.state.title);
    // }


  
  handleSubmit = async (e) => {
    e.preventDefault();
    this.addColor();
    // console.log(this.state.color, this.state.title);
    if (this.state.title && this.state.color) {
      const { title, color } = this.state;
      const user_id = this.props.user_id;
      this.closeModal()
      await axios
        .post("/api/new_project", { title, color, user_id })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.setState({
        title: "",
      });
    }
    // if (this.state.title === '') {
    //   setTimeout(() => this.closeModal(), 2000)
    //   // alert("Project Created Successfully");
    // }
    // console.log(this.state.title);
  }

  bgCColor = (color) => {
    // e.preventDefault();
    this.setState({ color: color });
    // console.log(this.state.color)
  }
  
  
  render() {
    // console.log(this.props.user_id)
    return (
      <>
        <div className="col-3">
          <div className="card card_radius cursor_pointer align-items-center"
            onClick={() => this.openModal()} style={{ height: "09rem", background: "lightgrey" }} >
            <h3 className="card-text m-3 text-center my-auto" style={{ fontSize: ".9em" }} >
              Create new board
            </h3>
          </div>
        </div>
        {/* <div className="d-block">
        </div> */}
        <div className="row">
          <Modal visible={this.state.visible} width="240" height="180" effect="fadeInDown" onClickAway={() => this.closeModal()} >
            <div className="card">
              <form className="container" autoComplete='off'>
                <div className="form-group my-4">
                  <label htmlFor="title">Add board title</label>
                  <input type="text" id="title" className="form-control" name="title" onChange={this.handleChange} value={this.state.title} />
                </div>
                <div className="form-group">
                  <div className="">
                    <div className="row p-2">
                      <div className="col-sm-12">
                        <div className="row no-gutters">
                          {
                            colorArray.map((color, index) => {
                              return (
                                <div key={index} className="col-sm-4 p-1" style={{ cursor: 'pointer' }}>
                                  <div className="img-thumbnail cursor_pointer"
                                    style={{ backgroundColor: `${color}`, with: '200px', height: '55px' }}
                                    onClick={() => this.bgCColor(color)}
                                  />
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <button className="btn btn-success" disabled={this.state.title ? false : true} onClick={this.handleSubmit}>Create Board</button>
                  <button className="btn btn-outline-danger" onClick={() => this.closeModal}>Close</button>
                </div>
                {!this.state.title && <div className='alert alert-info mt-3 text-center text-warning'>...project name needed</div>}
              </form>
              
            </div>
          </Modal>

          
          {/* <Modal visible={this.state.visible} className="" effect="fadeInRight" onClickAway={() => this.closeModal()}  width="300" height="200">
            <div className="row p-2">
              <div className="col-sm-12">
                <div className="row no-gutters">
                  {
                    pictureArray.map((pic,index) => {
                      return (
                        <div key={index} className="col-sm-4 p-1" style={{ cursor: 'pointer' }}>
                          <img className="img-thumbnail cursor_pointer"
                            alt=""
                            src={pic}
                            onClick={() => this.bgImage(pic)}
                          />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </Modal> */}
        </div>
      </>
    );
  }
}