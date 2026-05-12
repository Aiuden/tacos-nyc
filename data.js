const TACOS = [
  {
    name: "Taqueria Ramirez",
    neighborhood: "Greenpoint",
    address: "94 Franklin St, Brooklyn, NY 11222",
    mapsUrl: "https://www.google.com/maps/place/Taqueria+Ramirez/@40.7278729,-73.9569589,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2598a60020f0f:0xad4c6da40d90f29b!8m2!3d40.7278729!4d-73.9569589!16s%2Fg%2F11rt7mr1s4",
    taco: 5.0,
    toppings: 4.6,
    store: 4.8,
    notes: "Get one of everything and abuse that topping bar. These taste like they were airlifted out of Mexico City. Store is cute and compact, a little small, but you get a front-row seat to the magic going on in that kitchen. Honestly so much clout that they don't do takeout."
  },
  {
    name: "Carnitas Ramirez",
    neighborhood: "East Village",
    address: "210 E 3rd St, New York, NY 10009",
    mapsUrl: "https://www.google.com/maps/place/Carnitas+Ramirez/@40.7225162,-73.9828428,17z/",
    taco: 4.7,
    toppings: 4.9,
    store: 4.3,
    notes: "Try a new type every time. But always get the Surtida. And say it with me class, abuse that topping bar. Especially that salsa verde. Gorgeous bit of work there."
  },
  {
    name: "El Lado Taco",
    neighborhood: "Astoria",
    address: "34-14 30th Ave, Astoria, NY 11103",
    mapsUrl: "https://www.google.com/maps/place/El+Lado+Taco/@40.7713,-73.9299,17z/",
    taco: 4.2,
    toppings: 3.5,
    store: 3.8,
    notes: "Top of the line breakfast tacos with flour tortillas that haunt my dreams. The BEC taco has the most delightfully chunky bacon bits imaginable."
  },
  {
    name: "Yellow Rose",
    neighborhood: "East Village",
    address: "102 3rd Ave, New York, NY 10003",
    mapsUrl: "https://www.google.com/maps/place/Yellow+Rose/@40.7325244,-73.9880132,17z/",
    taco: 4.9,
    toppings: 2.3,
    store: 4.8,
    notes: "They may have made a blood sacrifice to achieve this exact tortilla texture. Bean and cheese would singlehandedly cure my marital strife."
  },
  {
    name: "LOS TACOS No. 1",
    neighborhood: "Manhattan",
    address: "200 Park Ave S, New York, NY 10003",
    mapsUrl: "https://www.google.com/maps/place/LOS+TACOS+No.1/@40.736905,-73.9940433,16z/data=!3m1!5s0x89c25989383e5979:0x126a57bca28638c0!4m10!1m2!2m1!1sLOS+TACOS+No.1!3m6!1s0x89c259003c749815:0xb6983e4abb093a57!8m2!3d40.7369032!4d-73.9889814!15sCg5MT1MgVEFDT1MgTm8uMSIDiAEBWhAiDmxvcyB0YWNvcyBubyAxkgEPdGFjb19yZXN0YXVyYW504AEA!16s%2Fg%2F11xg6tdvyk?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    taco: 4.0,
    toppings: 4.8,
    store: 4.5,
    notes: "Supremely reliable. Quesadilla is a banger. Breakfast burritos also a banger."
  },
  {
    name: "Esse Taco",
    neighborhood: "Williamsburg",
    address: "219 Bedford Ave, Brooklyn, NY 11211",
    mapsUrl: "https://www.google.com/maps/place/Esse+Taco/@40.7175,-73.9577,17z/",
    taco: 3.8,
    toppings: 4.2,
    store: 4.0,
    notes: "I've come around on these guys. Ribeye just makes sense and the carnitas pack a punch. I'm increasingly getting a larger and larger share of my order Gringa style."
  },
  {
    name: "Birria-Landia",
    neighborhood: "Jackson Heights",
    address: "77-99 Roosevelt Ave, Jackson Heights, NY 11372",
    mapsUrl: "https://www.google.com/maps/place/Birria-Landia/@40.7474073,-73.8884264,17z/",
    taco: 3.8,
    toppings: 2.5,
    store: 3.5,
    notes: "Don't overthink it, get the quesabirria with a side of consome. What are you, stupid? Eating these stupid drunk yields major bonus points."
  },
  {
    name: "Rey de Reyes",
    neighborhood: "Greenpoint",
    address: "898 Lorimer St, Brooklyn, NY 11222",
    mapsUrl: "https://www.google.com/maps/place/Rey+de+Reyes+Food+Truck/@40.7244,-73.9508,17z/",
    taco: 3.6,
    toppings: 2.5,
    store: 3.3,
    notes: "The platonic ideal of a street taco. Thinking about the steak taco makes my mouth water. Very tactically positioned between the L stop and my house, and open very late."
  },
  {
    name: "Santo Taco",
    neighborhood: "Nolita",
    address: "114 Kenmare St, New York, NY 10012",
    mapsUrl: "https://www.google.com/maps/place/Santo+Taco/@40.7204,-73.9970,17z/",
    taco: 3.1,
    toppings: 4.0,
    store: 3.8,
    notes: "They're def cooking something here. The steak taco is really unique and crispy and the right amount of juicy. Brand new so we'll see what else they get up to."
  },
  {
    name: "Blue Light Speak Cheesy",
    neighborhood: "Greenpoint",
    address: "158 Green St, Brooklyn, NY 11222",
    mapsUrl: "https://www.google.com/maps/place/The+Blue+Light+Speak+Cheesy/@40.7308,-73.9567,17z/",
    taco: 3.7,
    toppings: 2.5,
    store: 1.8,
    notes: "Crunchy + soft tortillas and a buncha flavors that all work beautifully together. Sad it's only available on Wednesdays, makes it a bit too much of a hassle. But the breakfast taco boom continues."
  },
  {
    name: "Los Mariscos",
    neighborhood: "Chelsea",
    address: "409 W 15th St, New York, NY 10011",
    mapsUrl: "https://www.google.com/maps/place/Los+Mariscos/@40.7426,-74.0043,17z/",
    taco: 3.0,
    toppings: 2.0,
    store: 2.3,
    notes: "A little small, but if you're in the mood for seafood you can count on them to deliver."
  },
  {
    name: "Mariscos el Submarino",
    neighborhood: "Greenpoint",
    address: "409 W 15th St, New York, NY 10011",
    mapsUrl: "https://www.google.com/maps/place/Los+Mariscos/@40.7426,-74.0043,17z/",
    taco: 3.9,
    toppings: 3.8,
    store: 4.3,
    notes: "In the wake of Ensenada's closing, this is an admirable stand-in. The shrimp and kraken tacos are both delightful, but you can't help but feel they're overshadowed a bit by the aguachiles. Toppings offered are literally just tostadas and approximately two dozen hot sauce variants, but it works."
  },
  {
    name: "El Chato",
    neighborhood: "Greenpoint",
    address: "620 Manhattan Ave, Brooklyn, NY 11222",
    mapsUrl: "https://www.google.com/maps/place/Taqueria+El+Chato/@40.7246,-73.9516,17z/",
    taco: 3.2,
    toppings: 4.3,
    store: 2.2,
    notes: "The trompo is hilariously juicy. By far the most logistically challenging bite on this list, but it's an admirable symphony of meaty goodness when you pay the price."
  },
  {
    name: "Taqueria Gramercy",
    neighborhood: "Gramercy",
    address: "218 3rd Ave, New York, NY 10003",
    mapsUrl: "https://www.google.com/maps/place/Taqueria+Gramercy/@40.7379,-73.9840,17z/",
    taco: 3.2,
    toppings: 3.0,
    store: 3.7,
    notes: "Juicy, greasy, reliable. They take good care of you here."
  },
  {
    name: "Tacombi",
    neighborhood: "Nolita",
    address: "267 Elizabeth St, New York, NY 10012",
    mapsUrl: "https://www.google.com/maps/place/Tacombi/@40.7222,-73.9944,17z/",
    taco: 2.0,
    toppings: 2.0,
    store: 2.0,
    notes: "If you REALLY need a taco this will do. Old heads who scoff at NYC's Mexican offerings may find this suitable. But you can do a lot better in today's taco renaissance."
  },
];
