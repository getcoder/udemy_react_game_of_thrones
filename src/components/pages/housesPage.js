import React, { useState } from "react";
import ItemList from "../itemList/itemList";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

export default function HousesPage() {
  const [selectedHouse, setSelectedHouse] = useState(1);

  const gotService = new GotService();

  const onItemSelected = (id) => {
    setSelectedHouse(id);
  };

  const itemList = (
    <ItemList
      getData={gotService.getAllHouses}
      onItemSelected={onItemSelected}
      renderItem={({ name, region }) => `${name} (${region})`}
    />
  );

  const houseDetails = (
    <ItemDetails itemId={selectedHouse} getData={gotService.getHouse}>
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
