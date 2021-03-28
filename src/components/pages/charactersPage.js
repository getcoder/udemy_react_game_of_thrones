import React, { useState } from "react";
import ItemList from "../itemList/itemList";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

export default function CharactersPage() {
  const [selectedChar, setSelectedChar] = useState("130");

  const gotService = new GotService();

  const onItemSelected = (id) => {
    setSelectedChar(id);
  };

  const itemList = (
    <ItemList
      getData={gotService.getAllCharacters}
      onItemSelected={onItemSelected}
      renderItem={({ name, gender }) => `${name} (${gender})`}
    />
  );

  const charDetails = (
    <ItemDetails itemId={selectedChar} getData={gotService.getCharacter}>
      <Field field="gender" label="Gender" />
      <Field field="born" label="Born" />
      <Field field="died" label="Died" />
      <Field field="culture" label="Culture" />
    </ItemDetails>
  );

  return <RowBlock left={itemList} right={charDetails} />;
}
