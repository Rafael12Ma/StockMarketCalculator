export default function PlantInput({
  handleAddPlant,
  refPlantNumber,
  refPlantVariety,
}) {
  return (
    <section>
      <label htmlFor="">Variety</label>
      <input ref={refPlantVariety} type="text" />
      <label htmlFor="">Plants</label>
      <input ref={refPlantNumber} type="number" />
      <button
        onClick={() =>
          handleAddPlant(
            refPlantVariety.current.value,
            refPlantNumber.current.value
          )
        }
      >
        Save
      </button>
    </section>
  );
}
