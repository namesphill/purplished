import React from 'react';
import Modal from 'global/UI/Modal/Modal'
import {Button} from 'global/UI'

class AccountView extends React.Component {
    state = {
        visible: false
    }
    showModal = () => {
        this.setState({visible: true})
        console.log(this.state.visible)
    }
    closeModal = () => {
        this.setState({visible: false})
    }

    render() {
        return(
            <div>
                <h1>Account</h1>
                <Modal 
                show={this.state.visible} 
                onClose={this.closeModal} 
                above={'Heading text'}
                below={<Button onClick={this.closeModal}  >OK</Button>}>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                    Content text <br/>
                </Modal>
                <Button onClick={this.showModal} is="Primary" >Show modal</Button>
            </div>
        )
    }
}

export default AccountView;