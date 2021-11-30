
class MyPosition extends React.Component {
  
  render() {

   let myLot = Math.round(this.props.lot*100)
   let myLat = Math.round(this.props.lat*100)
    const Position = {
      left:myLot+'%',
      top:myLat+'%',
    };

    return (
      <div style={Position} id="MyPosition"/>
    )
  }
}