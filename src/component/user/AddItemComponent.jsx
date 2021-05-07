import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddItemComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            ProductName: '',
            category: '',
            price: '',
            discount: '',
            description: '',
        }
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem = (e) => {
        e.preventDefault();
        let Item = {
			ProductName: this.state.ProductName, 
			category: this.state.category, 
			price: this.state.price, 
			discount: this.state.discount, 
			description: this.state.description};
        ApiService.addItem(Item)
            .then(res => {
                this.setState({message : 'Item added successfully.'});
                this.props.history.push('/Items');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Item</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="Product Name" fullWidth margin="normal" name="ProductName" value={this.state.ProductName} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Category" fullWidth margin="normal" name="category" value={this.state.category} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Discount" fullWidth margin="normal" name="discount" value={this.state.discount} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Product Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

                   <Button variant="contained" color="primary" onClick={this.saveItem}>Save</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddItemComponent;