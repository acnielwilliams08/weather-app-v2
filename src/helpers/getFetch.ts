export const getFetch = async (region: string = "Cuba") => {
  const url = `https://api.weatherapi.com/v1/current.json?key=5e02d2dd91b14bd28f4235037250710&q=${region}&aqi=yes&lang=es`;

  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error("Error al cargar la info");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
