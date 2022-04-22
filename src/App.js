import './App.css';
import { Component } from 'react';

class App extends Component{
    state = {
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'O titulo 1',
          body: 'O corpo 1',
        },
        {
          id: 2,
          title: 'O titulo 2',
          body: 'O corpo 2',
        },{
          id: 3,
          title: 'O titulo 3',
          body: 'O corpo 3',
        },
      ],

    }

    componentDidMount() {//executa algo quando o componente for renderizado tipo um useEffect
      const { posts, counter } = this.state
      posts[0].title = 'O titulo mudou'
      setTimeout(()=>{
        this.setState({ posts })
      },5000)
   
    }

  render(){
    const { posts, counter } = this.state
    return (
      <div className="App">
        {posts.map(post => (
          <div key={ post.id }>
            <h1>{ counter }</h1>
            <h1 key={ post.id }>{post.title}</h1>
            <p>{ post.body }</p>
          </div>
        ))}
     </div>
    )
  }
}

export default App;
 