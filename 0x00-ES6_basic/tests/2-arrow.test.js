import getNeighborhoodsList from "../2-arrow";

  test("addNeighborhood adds new neighborhood correctly", () => {
    const neighborhood = new getNeighborhoodsList();
    const updatedNeighborhood = neighborhood.addNeighborhood("Noe Valley")

    expect(updatedNeighborhood).toEqual(['SOMA', 'Union Square', 'Noe Valley'])
  })