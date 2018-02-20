import React,{Component} from 'react'

class EquipmentList extends Component {

    state = {
      equipment: [{ name: '' }],
    }


  _handleEquipmentNameChange = (idx) => (evt) => {
    const newEquipment = this.state.equipment.map((equipment, sidx) => {
      if (idx !== sidx) return equipment
      return { ...equipment, name: evt.target.value }
    });

    this.setState({ equipment: newEquipment })
  }

  handleSubmit = (evt) => {
    const { equipment } = this.state
    alert(`${equipment.length} items`)
  }

  _handleAddItem = () => {
    this.setState({ equipment: this.state.equipment.concat([{ name: '' }]) })
  }

  _handleRemoveItem = (idx) => () => {
    this.setState({ equipment: this.state.equipment.filter((s, sidx) => idx !== sidx) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <h4>Equipment and Fixtures</h4>

        {this.state.equipment.map((equipment, idx) => (
          <div key={idx} className="equipment">
            <input
              type="text"
              placeholder={`Item #${idx + 1}`}
              value={equipment.name}
              onChange={this._handleEquipmentNameChange(idx)}
            />
            <button type="button" onClick={this._handleRemoveItem(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this._handleAddItem} className="small">Add Item</button>
        <button>Submit</button>
      </form>
    )
  }
}

export default EquipmentList