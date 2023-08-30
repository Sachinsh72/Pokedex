# Pokedex-React-and-Tailwind-CSS
Design a react and tailwind based pokemon gallery which handle a API of pokemon collection with the detailed, allowing users to see the collection and it also get the title and description. 

<img width="946" alt="Screenshot 2023-08-30 150558" src="https://github.com/Sachinsh72/Pokedex/assets/91846348/c336ed0b-1ef3-4696-bd6e-25c30018b12e">
<img width="950" alt="Screenshot 2023-08-30 150631" src="https://github.com/Sachinsh72/Pokedex/assets/91846348/269d1448-9402-484f-a582-ecb6356ce046">

### Below the image of single pokemon details

<img width="956" alt="Screenshot 2023-08-30 205333" src="https://github.com/Sachinsh72/Pokedex/assets/91846348/0de0b99c-2c98-441f-b9e5-0aef13c26371">

## Features
- List of pokemons
- Detail: Name, Image, Height, Weight and Types
- Used tailwind css

## Using React Feature
- React Router 
- useEffect() 
- Axios
- Advance useState
- Custom Hook
- Debounce

## API 
Pokemon (endpoint) are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. 

- For the list of first 20 pokemon 
 <br>  GET request:  `https://pokeapi.co/api/v2/pokemon/` <br>

- To get the details of single pokemon 
<br>  GET request:  `https://pokeapi.co/api/v2/pokemon/{id or name}` <br>
- To get the list based on thier types 
<br> GET request: `https://pokeapi.co/api/v2/type/`

The response is in JSON format.

### Data Structure
Each photo record comes with the fields below and many more used are:

- id: The id of the pokemon
- name: name of pokemon
- image: image of pokemon
- url: The URL of the pokemon
- types: The type of the pokemon
- weight: The weight of the pokemon
- height: The height of the pokemon

## Usage

### Install
- `npm create vite@latest`
- Select React framework and Javascript


### Run
- `cd pokedex`
- `npm install`
- `npm run dev`

### Install Tailwind
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Configure your template paths <br>
Add the paths to all of your template files in your tailwind.config.js file.

``````
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
``````
- Add the Tailwind directives to your CSS <br>
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

``````
@tailwind base;
@tailwind components;
@tailwind utilities;
``````
- Start your build process <br>
Run your build process with npm run dev.

``````
npm run dev
``````

## Development
Want to contribute? Great! Make the changes and reach out to me over sachinsharma.7thfeb@gmail.com
