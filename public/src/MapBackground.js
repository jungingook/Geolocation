
class MapBackground extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          lat : null,
          lot : null,
        };
      }
      
    render() {
        return (
        <div id="MapBackground">
            <div id="tempBack" className={this.props.style=='painting'?'map2':'map1'}/>
        </div>
        )
    }
  }