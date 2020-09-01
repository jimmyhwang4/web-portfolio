import React from 'react';

class HeaderHome extends React.Component {
    state = {className: ""};
    
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
    
    handleScroll=()=>{
      if (window.pageYOffset > 0) {
          if (!this.state.className) {
            this.setState({className: "scroll"});   
          }
      } else {
          if (this.state.className) {
            this.setState({className: ""});
          }
      }
     
    }
    
    render() {

        return (
            <header ref={(r)=>this.ref=r} className={this.state.className}>
                <div className="headerContainer">
                    <div className="headerLogo">
                        <h3>JIMMY HWANG</h3>
                    </div>
                    <div className="headerMenu">
                        <div className="headerContentSelected">
                            <a href="/">HOME</a>
                        </div>
                        <div className="headerContent">
                            <a href="/projects/web-dev">PROJECTS</a>
                        </div>
                        <div className="headerContent">
                            <a href="/experience">EXPERIENCE</a>
                        </div>
                        <div className="headerContent">
                            <a href="/">RESUME</a>
                        </div>
                    </div>
                    <div className="socialMenu">
                        <a href="https://github.com/jimmyhwang4" target="_blank"><img src="/socials/github.png"></img></a>
                        <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank"><img src="/socials/linkedin.png"></img></a>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderHome;

