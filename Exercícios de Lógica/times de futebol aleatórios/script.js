const teams = [
    {
      name: "Barcelona (2009)",
      players: [
        "Victor Valdés",
        "Dani Alves",
        "Gerard Piqué",
        "Carles Puyol",
        "Éric Abidal",
        "Xavi",
        "Andrés Iniesta",
        "Sergio Busquets",
        "Lionel Messi",
        "Thierry Henry",
        "Samuel Eto'o",
      ],
    },
    {
      name: "Real Madrid (2017)",
      players: [
        "Keylor Navas",
        "Dani Carvajal",
        "Sergio Ramos",
        "Raphaël Varane",
        "Marcelo",
        "Toni Kroos",
        "Luka Modrić",
        "Casemiro",
        "Gareth Bale",
        "Karim Benzema",
        "Cristiano Ronaldo",
      ],
    },
    {
      name: "Liverpool (2019)",
      players: [
        "Alisson Becker",
        "Trent Alexander-Arnold",
        "Virgil van Dijk",
        "Joël Matip",
        "Andrew Robertson",
        "Jordan Henderson",
        "Fabinho",
        "Georginio Wijnaldum",
        "Mohamed Salah",
        "Roberto Firmino",
        "Sadio Mané",
      ],
    },
    {
      name: "Bayern Munich (2013)",
      players: [
        "Manuel Neuer",
        "Philipp Lahm",
        "Jérôme Boateng",
        "Dante",
        "David Alaba",
        "Bastian Schweinsteiger",
        "Javi Martínez",
        "Arjen Robben",
        "Thomas Müller",
        "Franck Ribéry",
        "Mario Mandžukić",
      ],
    },
    {
      name: "AC Milan (2007)",
      players: [
        "Dida",
        "Cafu",
        "Alessandro Nesta",
        "Paolo Maldini",
        "Gennaro Gattuso",
        "Andrea Pirlo",
        "Clarence Seedorf",
        "Kaká",
        "Alberto Gilardino",
        "Andriy Shevchenko",
        "Filippo Inzaghi",
      ],
    },
    {
      name: "Chelsea (2012)",
      players: [
        "Petr Čech",
        "Branislav Ivanović",
        "John Terry",
        "Gary Cahill",
        "Ashley Cole",
        "Frank Lampard",
        "John Obi Mikel",
        "Juan Mata",
        "Oscar",
        "Eden Hazard",
        "Didier Drogba",
      ],
    },
    {
      name: "Manchester United (2008)",
      players: [
        "Edwin van der Sar",
        "Gary Neville",
        "Rio Ferdinand",
        "Nemanja Vidić",
        "Patrice Evra",
        "Cristiano Ronaldo",
        "Michael Carrick",
        "Paul Scholes",
        "Ryan Giggs",
        "Wayne Rooney",
        "Carlos Tevez",
      ],
    },
    {
      name: "Inter Milan (2010)",
      players: [
        "Júlio César",
        "Maicon",
        "Lúcio",
        "Walter Samuel",
        "Cristian Chivu",
        "Esteban Cambiasso",
        "Wesley Sneijder",
        "Javier Zanetti",
        "Samuel Eto'o",
        "Diego Milito",
        "Goran Pandev",
      ],
    },
    {
      name: "Manchester City (2019)",
      players: [
        "Ederson",
        "Kyle Walker",
        "Fernandinho",
        "Aymeric Laporte",
        "Benjamin Mendy",
        "Kevin De Bruyne",
        "Rodri",
        "Bernardo Silva",
        "Raheem Sterling",
        "Sergio Agüero",
        "Riyad Mahrez",
      ],
    },
    {
      name: "Juventus (2015)",
      players: [
        "Gianluigi Buffon",
        "Leonardo Bonucci",
        "Giorgio Chiellini",
        "Andrea Barzagli",
        "Patrice Evra",
        "Paul Pogba",
        "Claudio Marchisio",
        "Andrea Pirlo",
        "Arturo Vidal",
        "Carlos Tevez",
        "Álvaro Morata",
      ],
    },
  ];

  
  const botao= document.querySelector("#quoteBtn");
  const elenco= document.querySelector(".text");
  const time= document.querySelector(".author");
  

  function gerador(){

    const index= Math.floor(Math.random() * teams.length);

    elenco.textContent= teams[index].players;
    time.textContent= teams[index].name;
  }

  botao.addEventListener("click", gerador);