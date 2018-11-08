import React from 'react';
import {
    Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem,
} from 'reactstrap';
import products from "../products.json";


const cartStyle ={
    buttonStyle: {
        backgroundColor: "#fa6400",
        width: '50%',
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: '25%',
        marginRight: '25%',
        objectPosityion: '50% 50%'
    },
    ModalHeader: {
        backgroundColor: "#fa6400",
        color: 'white',
        textAlign: "center",

    }

}
class CartModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button style={cartStyle.buttonStyle} onClick={this.toggle}>
                    Complete Order 
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader style={cartStyle.ModalHeader} toggle={this.toggle}>
                         My Order
                    </ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {products.map(product => (
                                <ListGroupItem>
                                    {product.productName}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={cartStyle.buttonStyle} onClick={this.toggle}>
                            Checkout
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default CartModal;