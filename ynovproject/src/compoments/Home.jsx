import React from 'react';
import { Grid,Button,Thumbnail,Col,Row } from 'react-bootstrap';
import Header from './Header';



class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Released: '',
            Runtime:'',
            Genre:'',
            Director:'',
            Poster:''
        }

        this.ShowMoovies = this.ShowMoovies.bind(this);
    }

  componentDidMount() {
        this.ShowMoovies()
  }


  ShowMoovies(){
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=600d321c')
            .then(response => response.json())
            .then(data => {
                this.setState({Title: data.Title,
                Released: data.Released,
                Runtime: data.Runtime,
                Genre: data.Genre,
                Director: data.Director,
                Poster: data.Poster
                
                
                 })
                                        console.log(data.object)
       
        })
            .catch(err => console.error(this.props.url, err.toString()))
        }
         

    render(){
// css div Moovies
        const MoovieCSS = {
            width: '310px',
            display: 'inline-block',
            border: '1px solid #eee',
            margin:'5px',
            float: 'left'
    
    };



        return(
           
            <div className="grid-template-rows">
                    <Header/>
                        <Grid style={MoovieCSS} 
                                className = ''>
                                <Row>
                                <Col>
                                <p className="pull-right top">{this.state.Title}</p><br/>
                                <img src={this.state.Poster}/>
                                <p className="pull-left top">{this.state.Released}</p><br/>
                                <p className="pull-right top">{this.state.Runtime}</p>
                                </Col>
                                </Row>
                            </Grid>
            </div>



        );


    }





}

export default Home;