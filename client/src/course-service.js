import axios from 'axios';

function delay(by = 2000){
  return new Promise((resolve) => {
    setTimeout(resolve, by);
  });
}

function getCourse(coursename){
  return delay().then(() => {
    return {
      title: 'Intro to being Awesome',
      coursename,
      instructor: {
        name: 'Joel Shinness Who Is Awesome'
      },
      chapters: []
    }
  })
}

function getCourseContent(coursename, section){
  return axios.get(`/courses/${coursename}/sections/${section}`
    .then( (response) => {
      console.log(response.data.content);
      this.setState({
        content: response.data.content
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  )
}
export {getCourse, getCourseContent};