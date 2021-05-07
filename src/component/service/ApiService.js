import axios from 'axios';

const ITEM_API_BASE_URL = 'http://localhost:8080/Items';

class ApiService {

    fetchItems() {
        return axios.get(ITEM_API_BASE_URL);
    }

    fetchItemById(ItemId) {
        return axios.get(ITEM_API_BASE_URL + '/' + ItemId);
    }

    deleteItem(ItemId) {
        return axios.delete(ITEM_API_BASE_URL + '/' + ItemId);
    }

    addItem(Item) {
        return axios.post(""+ITEM_API_BASE_URL, Item);
    }

    editItem(Item) {
        return axios.put(ITEM_API_BASE_URL + '/' + Item.id, Item);
    }

}

export default new ApiService();