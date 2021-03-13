import React from 'react';
import { BrowserRouter  as Router, Redirect, Route} from "react-router-dom";
import './App.css';
import { useState, Component } from 'react';
import EShopService from "../../repository/eshopRepository";

import Manufacturers from '../Manufacturers/manufacturers';
import Products from "../Products/ProductList/products";
import Categories from "../Categories/categories";
import Header from '../Header/header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: []
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <Header />
                    <div className="container">
                        <Route path={"/manufacturers"} exact render={() => <Manufacturers manufacturers={this.state.manufacturers}/>}/>
                        <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}/>
                        <Route path={"/products"} exact render={() => <Products products={this.state.products}/>}/>
                        <Redirect to={"/products"}/>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {

        this.loadManufacturers();
        this.loadCategories()
        this.loadProducts();

    }

    loadManufacturers = () => {
        EShopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                });
            });
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                });
            });
    }


    loadProducts = () => {
        EShopService.fetchProducts()
            .then((data) => {
               this.setState({
                   products: data.data
               });
            });
    }

}

export default App;

