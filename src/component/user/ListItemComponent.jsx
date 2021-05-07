import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListItemComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Items: [],
            message: null
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.reloadItemList = this.reloadItemList.bind(this);
    }

    componentDidMount() {
        this.reloadItemList();
    }

    reloadItemList() {
        ApiService.fetchItems()
            .then((res) => {
                this.setState({Items: res.data.result})
            });
    }

    deleteItem(ItemId) {
        ApiService.deleteItem(ItemId)
           .then(res => {
               this.setState({message : 'Item deleted successfully.'});
               this.setState({Items: this.state.Items.filter(Item => Item.id !== ItemId)});
           })
    }

    editItem(id) {
        window.localStorage.setItem("ItemId", id);
        this.props.history.push('/edit-Item');
    }

    addItem() {
        window.localStorage.removeItem("ItemId");
        this.props.history.push('/add-Item');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Item Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addItem()}>
                    Add Item
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell>Product Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.Items.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.ProductName}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.discount}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editItem(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteItem(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListItemComponent;