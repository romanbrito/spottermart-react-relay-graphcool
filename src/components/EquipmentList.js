import React, {Component} from 'react'

class EquipmentList extends Component {

  render() {
    return (
      <div>
        <h4>Equipment and Fixtures</h4>

        {this.props.equipment.map((equipment, idx) => (
          <div key={idx} className="equipment">
            <input
              type="text"
              placeholder={`Item #${idx + 1}`}
              value={equipment.name}
              onChange={this.props.handleEquipmentNameChange(idx)}
            />
            <button type="button" onClick={this.props.handleRemoveItem(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.props.handleAddItem} className="small">Add Item</button>
      </div>
    )
  }
}

export default EquipmentList