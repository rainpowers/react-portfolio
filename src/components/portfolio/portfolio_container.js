import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: "ecommerce" },
        { title: "Eventbrite", category: "schedule" },
        { title: "Ministry Safe", category: "enterprise" },
        { title: "SwingAway", category: "ecommerce"}
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter (filter){
    this.setState({
        data: this.state.data.filter( item => {
            return  item.category === filter;
        })
    })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }



  render() {
    if (this.state.isLoading){
        return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}

        <button onClick = {() => this.handleFilter('ecommerce')}> ecommerce </button>
        <button onClick = {() => this.handleFilter('schedule')}> schedule </button>
        <button onClick = {() => this.handleFilter('enterprise')}> enterprise </button>

      </div>
    );
  }
}