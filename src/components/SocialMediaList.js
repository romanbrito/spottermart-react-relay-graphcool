import React, {Component} from 'react'

class SocialMediaList extends Component {

  render() {

    return (
      <div>
        <h4>Social Media</h4>
        {this.props.socialMedia.map((social, idx)=> (
          <div key={idx} className="socialMedia">
            <input
              type="text"
              placeholder={`Item #${idx + 1}`}
              value={social.name}
              onChange={this.props.handleSocialNameChange(idx)}
            />
            <button type="button" onClick={this.props.handleRemoveSocialItem(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.props.handleAddSocialItem} className="small">Add Item</button>
      </div>
    )
  }
}

export default SocialMediaList