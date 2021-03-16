import React from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

class HousesPage extends React.Component {
  state = {
    selectedHouse: 3,
    error: false,
  };

  gotService = new GotService();

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        getData={this.gotService.getAllHouses}
        onItemSelected={this.onItemSelected}
        renderItem={({ name, region }) => `${name} (${region})`}
      />
    );

    const houseDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field="name" label="Name" />
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="overlord" label="Overlord" />
        <Field field="ancestralWeapons" label="Ancestral weapons" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={houseDetails} />;
  }
}

export default HousesPage;
