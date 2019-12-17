import React, { Component } from "react";
import axios from "axios";

import HotelList from "./hotelsList";
import Search from "./search";
import Dropdown from "./dropdown";

class viewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      hotelSearch: []
    };

    this.searchResults = this.searchResults.bind(this);
  }

  componentDidMount() {
    axios
      .get("/hotels")
      .then(response => {
        console.log(response.data, "Hotels Data");
        this.setState({
          hotels: response.data.list,
          hotelSearch: response.data.list
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  searchResults(searchText, type) {
    const regex = new RegExp(searchText, "gi");
    const hotels = this.state.hotels;
    const searchHotel = hotels.filter(hotel => {
      if (type === "filter") {
        return hotel.name.match(regex);
      } else {
        return hotel.neighbourhood.match(regex);
      }
    });
    this.setState({
      hotelSearch: searchHotel
    });
  }

  render() {
    const { hotelSearch, hotels } = this.state;
    console.log(this.state.hotelSearch);

    return (
      <div className="col-md-12 mt-4  main-container">
        <div className="filters">
          <Search searchResults={this.searchResults} />
          <Dropdown hotels={hotels} searchResults={this.searchResults} />
        </div>
        <div className="row mt-2 offset-md-2">
          {this.state.hotelSearch.map(hotel => (
            <HotelList
              key={hotel._id}
              hotels={hotelSearch}
              name={hotel.name}
              host_name={hotel.host_name}
              price={hotel.price}
              room_type={hotel.room_type}
              neighbourhood_group={hotel.neighbourhood_group}
              neighbourhood={hotel.neighbourhood}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default viewContainer;
