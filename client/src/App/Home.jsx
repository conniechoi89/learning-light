import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.getAllCourses()
    .then((courses) => {
      this.setState({
        loading: undefined,
        courses: courses
      });
    })
  }

  getSum(total, reviewObj) {
    return total + reviewObj.rating
  }

  render() {
    const { rating } = this.state;

    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="container">
        <div className="banner home-banner justify-content-center">
          <h1>Learn web and iOS development with us!</h1>
        </div>

          <div className="card-deck">

          {/* Generate card for each course */}

            {this.state.courses.map ((course) => {
              return (
                <div key={ course.id } className="card">
                  <div className="card-img-container">
                    <img src={`/card-${course.coursename}.png`} alt="" className="card-img-top" />
                  </div>
    	            <div className="card-body">
    		            <div className="row">
    			            <div className="col-md-12">
    				            <div className="card-instructor">
    					            <small className="text-muted">{course.instructor.name}</small>
    				            </div>
                      <div>
    				            <h4 className="card-title">{course.name}</h4>
  				              <p className="card-text">{course.blurb}</p>
                      </div>
    			          </div>
    		          </div>
                  </div>
                  <div className="card-block">
                    <div>
                      <p className="text-center text-muted">
                        Average rating<br/>
                        <StarRatingComponent
                          name="rate2"
                          editing={false}
                          starCount={5}
                          value={course.reviews.reduce(this.getSum, 0)/course.reviews.length}
                        />
                      </p>
                    </div>
                </div>
                <div className="card-footer">
                  <Link to={`/${course.coursename}`}>
                  <button className="btn btn-primary btn-block view-course">
                    View free course
                  </button>
                </Link>
              </div>
              </div>
              )
            })}

            {/* End card generator */}

    </div>
  </div>
  )};
}

export default Home;
