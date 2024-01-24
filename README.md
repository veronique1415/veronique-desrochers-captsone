# Project Title

<details>

<summary>Overview</summary>
## Overview

What is your app? Brief description in a couple of sentences.

My app will be a brand website to help a local wine importer to shine. Hopefully having his own website that showcases the products that he imports and the producers he works with. I want to include a find Us page that gives the user a list of restaurant were the importer's products are available. Hopefully my app will help him make more sale and in the futur I would like to create an inventory app for importers too! (This is for another time)

</details>

<details>
<summary>Problem</summary>
### Problem

Why is your app needed? Background information around any pain points or other reasons.

I personnaly think that in the world we live in, in 2024 and in a really dynamic and fast-paced city like Montreal, if you have a brand or side business and you don't have a good branding like an instagram page, functional website, your logo, to name a few, to highlight your products, it's really hard to grow and not be outshined by other similar businesses.

I think their will always be a need for a e-commerce plateform, especially user friendly one that are afforfable and if I can recreate even 10-15% of that for my capstone I would be really pleased. My goal is to keep working on it way after the bootcamp to make it way more complex.

</details>

<details>
<summary>User Profile</summary>
### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Hopefully my app would be used by two types of person.

First one : my client, who will be able to use his "backend" to upload pictures of his products with descriptions and prices to facilitate his sales.

second one: In this scenario, the users would use this website to read about my friend's imported wines, learn about wine production and be able to discover the great humans behind the wine bottle they shop for.

</details>
<details>
<summary>Features</summary>
### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

-I would like to display about 10 new bottles on the home page, using a filter function to only keep the 10 first or the 10 last bottle of the array of bottles.

-The user will be able to read about wine producers carried by the importers.

-See what just came in on the main page, when the user hovers over the bottle it lets them see some details of the wine with a fun color transition (I want to see the bottle image still but with a overlay of gradient color with low opacity and text over it)

-See a live map where products can be wines can be found in Montreal and its surroundings.

-Read about the company's mission and who's the team behind.

</details>
<details>
<summary>Implementation</summary>
## Implementation

<details>
<summary>Tech Stack</summary>
### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

I will be using:

-React
-React-router-dom
-Axios
-MySQL
-Sass (obvi)
-express

</details>
<details>
<summary>APIs</summary>
### APIs

List any external sources of data that will be used in your app.

I would like to use google Maps embeded map to show users where they can find the importer's bottle of wine in Montreal. Each marker will show a restaurant or store's name and address.

I will use my own API that hopefully is connected to my own database.

</details>
<details>
<summary>Sitemap</summary>
### Sitemap

In terms of what pages this website will showcase :

- About section that gives you a description of their mission with this company + a brief presentation of the team behind it.

- Find us section that will show the user where their products can be found in Quebec

- Producers section that give a description of who's being the production of every single bottle of wine and where they are from and which wine does the importer carry from them at the moment.

- Products section ordered by wine type (color probably) with a description from each bottle.

-I'll add a search bar that let you search your product by name or producer

- A listing section that will show a uploaded PDF with up to date stock that restaurant or an individual that would like to order for their own cellar.

</details>
<details>
<summary>Mockups</summary>
### Mockups

I have make a mockup of my Home and About sections.

![](./src/assets/Mockups/Home.png)
![](./src/assets/Mockups/About.png)
![](./src/assets/Mockups/findUs.png)
![](./src/assets/Mockups/Producers.png)
![](./src/assets/Mockups/ProducerDetail.png)
![](./src/assets/Mockups/Wines.png)
![](./src/assets/Mockups/WineDetails.png)
![](./src/assets/Mockups/Listing.png)

About (About.png)

</details>
<details>
<summary>Data</summary>
### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

I want to store my data in a database. This is what I really wanna play with for this Capstone, I wanna get comfortable with it.
I'd have 1 database, 2 tables. My only concern is how to store images, espcially if I want to store uploaded picture in the futur. I wanna say it should be in my public folder but I'm not sure yet.

1. Producers {
   producer_id
   producer_name
   producer_region
   producer_village
   producer_description
   producer_image
   wine_id (foreign key)
   }

2. Wines {
   wine_id
   wine_name
   wine_region
   wine_appellation
   wine_description
   wine_image
   wine_varietal
   }

![](./src/assets/Mockups/drawSQL-grand-ordinaire.png)

</details>
<details>
<summary>Endpoints</summary>
### Endpoints

<!-- "use client";

import { useState } from "react";
import {
APIProvider,
Map,
AdvancedMarker,
Pin,
InfoWindow,
} from "@vis.gl/react-google-maps";
import "./Map.scss"

const MapComp = () => {
const position = { lat: 45.508888, lng: -73.561668 };
const vinMonLapin = { lat: 45.53300094604492, lng: -73.61061096191406};
const [open, setOpen] = useState(false); -->

  <!-- return (
    <article className="map__container">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <div className="map">
          <Map zoom={13} center={position} mapId={process.env.REACT_APP_GOOGLE_MAPS_STYLE}>
            <AdvancedMarker position={vinMonLapin} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={vinMonLapin} onCloseClick={() => setOpen(false)}>
                <p>Vin Mon Lapin</p>
             </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </article>  
  );
} -->

This is how I fetch GoogleMaps into my app. It takes a API key and a map style number. I already tested it and it works.

**GET /producers**

Get a list of all producers to display on the ProducerPage
Response:

![](./src/assets/Mockups/producers-data-database.png)

**GET /producers/:producerId**

Response:
![](./src/assets/Mockups/singleProducer.png)

**GET /products**

- Render every available bottle of wine on the /wines page

Response:
![](./src/assets/Mockups/producers-data-database.png)

**GET /products/:productId**

Response:

```

![](./src/assets/Mockups/singleproduct.png)


```

</details>
<details>
<summary>Auth</summary>
<!-- ### Auth

<!-- Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.  -->

</details>
<details>
<summary>Roadmap</summary>
## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

1. Create a mock up of every pages to let me identify every component and see if I can easily repeat them on mulitple pages. This
2. Do the styling of my website (I like starting with what I'm really comfortable with) I probablye can have this done in a week.
3. Do the routes of my app (couple hours for sure)
4. Add functionality - hovering effect, map markers. (couple hours I think, one or two evenings)
5. backend functionnality - this will probably be my biggest chunk.

</details>
<details>
<summary>Nice-to-haves</summary>
## Nice-to-haves

I wanna add authentification to add an upload page for the admin.

In the future I would like to implement an ordering function directly from the website. Ordering wine in Quebec, beside directly from our liquor monopole is really complicated and I would like to make my friend's life easier by having his users be able to order directly from the website and pay. He would then receive a order confirmation and only have to arrange the shipping from SAQ then. Obviously from their end, the user would also receive a order confirmation from the email they provided.

I say in the futur because I wanna try to be realistic with what I think I can produce with the amount of time we will have after approval until our presentation day. It does drive me to think about what will be implementable afterward to greatlyt update his website's feature and showcase even more what I'm capable of.

</details>
</details>
```
