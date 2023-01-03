import React from 'react'
import { connect } from 'react-redux'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
  
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
  }
  return ComponentWithRouterProp;
}


class QuestionPage extends React.Component {
  render() {
    const { questions, users } = this.props
    const { questionId } = this.props.router.params

    return (
      <div className='question-card'>
        <div className='question-header'>Asked by {questions[questionId]['author']}</div>
        <div className='question-body'>
          <div className='question-body-left'>
            <img src={users[questions[questionId]['author']]['avatarURL']} alt={questions[questionId]['author']}></img>
          </div>
        </div>
        <div className='question-body-right'>
          
        </div>
      </div>
    )
  }
}

export default withRouter(connect((state) => ({
  questions: state.questions,
  users: state.users
}))(QuestionPage))