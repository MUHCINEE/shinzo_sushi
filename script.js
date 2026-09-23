// MENU DATA
const MENU = [
  {
    
    "id": "aromaki",
    "name": "Aromaki",
    "tagline": "6 pièces",
    "items": [
      {"name": "Saumon", "desc": "Saumon, surimi, avocat, cheese, tobiko", "price": 51 },
      {"name": "Crevette", "desc": "Crevettes panées, surimi, avocat, cheese, tobiko", "price": 51},
      {"name": "Crabe", "desc": "Crabe, crevettes, avocat, surimi, cheese, tobiko", "price": 56},
      {"name": "Saumon Mangue", "desc": "Saumon, crevette cuite, mangue, cheese, tobiko", "price": 61},
      {"name": "Ibiza", "desc": "Saumon, crevette cuite, surimi, cheese", "price": 61},
      {"name": "Rio", "desc": "Saumon, surimi, avocat, cheese, mangue, tobiko", "price": 55},
      {"name": "Antalia", "desc": "Crevettes panées, surimi, avocat, cheese, mangue, tobiko", "price": 55},
      {"name": "Bora Bora", "desc": "Saumon, surimi, avocat, cheese, goma wakame, tobiko", "price": 61},
      {"name": "Shinzo", "desc": "Crabe, concombre ciselé, crevette panée, cheese, tobiko", "price": 55}
    ]
  },
  {
    "id": "gratine",
    "name": "Sushi Gratiné",
    "tagline": "Four & fondant",
    "items": [
      {"name": "Crunchy Fondant", "desc": "Riz croustillant, surimi, crevettes, fromage, tobiko, cheddar, mozzarella", "price": 71},
      {"name": "Saumon Fondant", "desc": "Saumon, avocat, crabe, tobiko, fromage, cheddar, mozzarella", "price": 75}
    ]
  },
  {
    "id": "assortiments",
    "name": "Assortiments",
    "tagline": "16 · 24 · 40 pièces",
    "groups": [
      {
        "label": " Assortiments 16 Pièces",
        "items": [
          {"name": "California", "desc": "California roll 4, California ebi fry 4, California cream cheese 4, California chaki yaki 4", "price": 99},
          {"name": "Mixte", "desc": "Norvégien 4, Océane 4, fry ebi fry 4, saumon bébé balls 4", "price": 109},
          {"name": "Crunchy", "desc": "Fry ebi fry 4, cheese & crispy 4, salmon bébé ball 4, pizza sushi 4", "price": 123}
        ]
      },
      {
        "label": " Assortiments 24 Pièces",
        "items": [
          {"name": "California", "desc": "California rolls 4, sésame rolls 4, cream cheese rolls 4, ebi fry rolls 4, shaké yaki rolls 4, ebi tobiko rolls 4", "price": 149},
          {"name": "Mixte", "desc": "Crème cheese 4, ebi fry rolls 4, shake yaki rolls 4, fry ebi fry 6, aromaki crevette 6", "price": 180},
          {"name": "Crunchy", "desc": "Sea food pizza 4, mozzarella pizza 4, cheese & crispy 4, fry ebi fry 4, salmon bébé balls 4, crunchy rolls 4", "price": 185}
        ]
      },
      {
        "label": " Assortiments 40 Pièces",
        "items": [
          {"name": "California", "desc": "California rolls 4, California sésame 4, cream cheese 4, ebi fry 4, ocean 4, shaké yaki 4, ebi tobiko 4, norvégien 4, alascan roll 4, miami roll 4", "price": 249},
          {"name": "Mixte", "desc": "Crème cheese 4, California rolls 4, pizza sushi 4, shake yaki rolls 4, ebi fry 4, tiger eye 6, aromakis crevette 6, saumon bébé ball 4, norvégien 4", "price": 285},
          {"name": "Crunchy", "desc": "Saumon pizza 4, mozzarella pizza 4, salmon bébé balls 4, fry salmon fry 4, fry ebi fry 4, cheesy & crispy 4, shrimp bébé balls 4, maki crispy saumon & thon 8, chicken crunchy 4", "price": 259}
        ]
      }
    ]
  },
  {
    "id": "bateau",
    "name": "Bateau",
    "tagline": "Plateaux à partager",
    "groups": [
      {
        "label": " bateau 50 Pièces",
        "items": [
          {"name": "Normal", "desc": "Sélection généreuse pour partager à plusieurs", "price": 349},
          {"name": "Luxe", "desc": "Sélection premium pour partager à plusieurs", "price": 449}
        ]
      },
      {
        "label": "bateau 100 Pièces",
        "items": [
          {"name": "Normal", "desc": "Sélection généreuse pour partager à plusieurs", "price": 650},
          {"name": "Luxe", "desc": "Sélection premium pour partager à plusieurs", "price": 750}
        ]
      },
      {
        "label": "bateau 150 Pièces",
        "items": [
          {"name": "Normal", "desc": "Sélection généreuse pour partager à plusieurs", "price": 999},
          {"name": "Luxe", "desc": "Sélection premium pour partager à plusieurs", "price": 1200}
        ]
      }
    ]
  },
  {
    "id": "california",
    "name": "California Rolls",
    "tagline": "4 pièces",
    "items": [
      {"name": "Ebi Fry", "desc": "Crevettes panées, avocat, cheese, ciboulette", "price": 32},
      {"name": "Sésame", "desc": "Saumon, avocat, sésame", "price": 32},
      {"name": "Cheezy Salamon", "desc": "Saumon, cheese", "price": 36},
      {"name": "Shake Yaki", "desc": "Crevettes panées, avocat, cheese, ciboulette", "price": 36},
      {"name": "Cream Cheese", "desc": "Saumon, surimi, avocat, tobiko, cheese", "price": 36},
      {"name": "Crunchy Crevette", "desc": "Crevettes panées, avocat, cheese, crunch", "price": 32},
      {"name": "Crunchy Saumon", "desc": "Saumon pané, avocat, cheese, crunch", "price": 32},
      {"name": "Ebi Tobiko", "desc": "Crevettes panées, avocat, cheese, tobiko", "price": 36},
      {"name": "New York", "desc": "Saumon, crevettes, avocat, cheese", "price": 36},
      {"name": "Boston", "desc": "Crevettes, avocat, crabe, top tobiko cheezy", "price": 36},
      {"name": "Mario", "desc": "Crevette, avocat, top saumon", "price": 36},
      {"name": "Diva", "desc": "Crevettes, avocat, cheese, tobiko, top saumon fumé", "price": 36}
    ]
  },
  {
    "id": "crunchy",
    "name": "Crunchy Rolls",
    "tagline": "Crunchy Rolls 5 pièces",
    "items": [
      {"name": "Fry Ebi Fry", "desc": "Crevette panée, surimi pané, tobiko, fromage", "price": 39},
      {"name": "Fry Salmon Fry", "desc": "Saumon pané, surimi pané, tobiko, cheese", "price": 39},
      {"name": "Spider", "desc": "Saumon fumé, crevette panée, concombre ciselé, cheese, tobiko", "price": 39},
      {"name": "Picasso", "desc": "Saumon cuit, cheese, tobiko", "price": 39},
      {"name": "Dragon Eye", "desc": "Saumon, carotte, poireau, tobiko", "price": 45},
      {"name": "Cheezy Fry Roll", "desc": "Crevettes, cheese, surimi, gouda fondu, tobiko", "price": 55},
      {"name": "Maki Cheese Flambé", "desc": "Saumon, avocat, surimi, cheese, tobiko, gouda fondu", "price": 59},
      {"name": "Aromaki Panée", "desc": "Saumon, avocat, surimi, cheese, tobiko", "price": 49},
      {"name": "Spicy Roll", "desc": "Crevette panée, surimi pané, tobiko, cheese, top saumon épicé", "price": 49},
      {"name": "Pacific", "desc": "Surimi, avocat, tobiko, crème de saumon", "price": 49},
      {"name": "King Crabe", "desc": "Crevettes panées, surimi pané, crabe épicé, tobiko, cheese", "price": 49},
      {"name": "Maki Crispy Fuji", "desc": "Gouda fondu, saumon épicé, tobiko", "price": 49}
    ]
  },
  {
    "id": "shinzorolls",
    "name": "Shinzo Rolls",
    "tagline": " Shinzo Rolls 5 pièces ",
    "items": [
      {"name": "Kani Shake", "desc": "Saumon, crevette panée, crevette cuite, crabe, avocat, surimi, cheese", "price": 61},
      {"name": "Tiger", "desc": "Crevettes cuites, crevettes panées, crabe, avocat, cheese", "price": 45},
      {"name": "Smoky Roll", "desc": "Saumon, crabe, surimi, concombre ciselé, cheese, garni de saumon fumé", "price": 61},
      {"name": "Hawaein Roll", "desc": "Crabe, crevettes panées, avocat, cheese, mangue", "price": 51},
      {"name": "Majestic Roll", "desc": "Crevettes, avocat, crevettes cuites, concombre, cheese", "price": 61},
      {"name": "Boston", "desc": "Crabe, tobiko, cheese, crevettes, saumon, avocat", "price": 55},
      {"name": "Rock & Roll", "desc": "Surimi pané, crevette panée, cheese, poireaux, garni de saumon et goma wakame", "price": 55},
      {"name": "Ebi Crabe", "desc": "Crabe, surimi, saumon, avocat, cheese, tobiko", "price": 61},
      {"name": "Aznavour Roll", "desc": "Crevette panée, cheese, poireaux, top crabe, tobiko", "price": 61},
      {"name": "Mango Tango Roll", "desc": "Crevette, avocat, saumon frais, top tobiko et cheezy mangue", "price": 65},
      {"name": "Shinzo Roll", "desc": "Crabe, crevette ebi, mangue, saumon, cheese, top anguille grillée", "price": 65},
      {"name": "Spicy Smoked Roll", "desc": "Crevette panée, avocat, cheese, poireaux, top saumon fumé et mangue", "price": 65}
    ]
  },
  {
    "id": "okifuto",
    "name": "Okinawa · Futomaki · Maki",
    "tagline": "Traditions roulées",
    "groups": [
      {
        "label": "Okinawa — 4 pièces",
        "items": [
          {"name": "Saumon", "desc": "Saumon, cheese, sauce épicée", "price": 55},
          {"name": "Crabe", "desc": "Crabe, saumon, cheese", "price": 55},
          {"name": "Anguille", "desc": "Anguille, saumon, cheese", "price": 55}
        ]
      },
      {
        "label": "Futomaki — 5 pièces",
        "items": [
          {"name": "Saumon", "desc": "Saumon, avocat, surimi, laitue", "price": 50},
          {"name": "Crevette Mangue", "desc": "Ebi fry, mangue, surimi, laitue, chou", "price": 50},
          {"name": "Poisson Cuit", "desc": "Saumon pané, avocat, laitue, cheese, surimi", "price": 50}
        ]
      },
      {
        "label": "Maki",
        "items": [
          {"name": "Avocat", "desc": "Maki avocat", "price": 20},
          {"name": "Surimi", "desc": "Maki surimi", "price": 20},
          {"name": "Ebi Fry", "desc": "Maki ebi fry", "price": 23},
          {"name": "Saumon", "desc": "Maki saumon", "price": 30},
          {"name": "Saumon Cheese", "desc": "Maki saumon, cheese", "price": 33},
          {"name": "Saumon Avocat", "desc": "Maki saumon, avocat", "price": 35},
          {"name": "Concombre", "desc": "Maki concombre", "price": 17}
        ]
      }
    ]
  },
  {
    "id": "topptemaki",
    "name": "Toppings Roll · Temaki",
    "tagline": "4 pièces / cône",
    "groups": [
      {
        "label": "Toppings Roll — 4 pièces",
        "items": [
          {"name": "Fry Delice", "desc": "Ebi fry, surimi, tobiko, crème de saumon", "price": 49},
          {"name": "Fry Saumon Épicé", "desc": "Saumon épicé, avocat, ebi", "price": 45},
          {"name": "Saumon Épicé", "desc": "Saumon, avocat, cream cheese, crevette", "price": 59}
        ]
      },
      {
        "label": "Temaki",
        "items": [
          {"name": "Saumon", "desc": "Saumon épicé, avocat, surimi", "price": 55},
          {"name": "Ebi Fry", "desc": "Ebi fry, avocat, cheese, tobiko", "price": 55},
          {"name": "Mixte", "desc": "Saumon, ebi fry, avocat, cheese, tobiko", "price": 59}
        ]
      }
    ]
  },
  {
    "id": "burritopizza",
    "name": "Sushi Burrito · Crunchy Shinzo · Pizza",
    "tagline": "Formats généreux",
    "groups": [
      {
        "label": "Sushi Burrito",
        "items": [
          {"name": "Nagasaki", "desc": "Riz vinaigré, saumon cheezy, avocat, tobiko, surimi, concombre", "price": 67},
          {"name": "Kioto", "desc": "Riz vinaigré, crevette cheezy, avocat, tobiko, surimi, concombre, goma wakame", "price": 60}
        ]
      },
      {
        "label": "Crunchy Shinzo",
        "items": [
          {"name": "Golden Burrito", "desc": "Riz vinaigré, saumon épicé, avocat, fromage, surimi épicé, goma wakame, tobiko", "price": 75},
          {"name": "Silver Burrito", "desc": "Riz vinaigré, crevette épicée, fromage, surimi épicé, avocat, goma wakame, tobiko", "price": 79}
        ]
      },
      {
        "label": "Sushi Pizza — 8 pièces",
        "items": [
          {"name": "Kioto", "desc": "Riz croustillant, saumon, tobiko, surimi, cheese, mozzarella", "price": 55},
          {"name": "Saumon", "desc": "Riz croustillant, saumon, surimi, avocat, cheese, tobiko", "price": 50},
          {"name": "Crabe", "desc": "Riz croustillant, crabe mariné, crabe, avocat, cheese, tobiko, mangue", "price": 60}
        ]
      }
    ]
  },
  {
    "id": "sashimitacos",
    "name": "Sashimi · Tacos Sushi · Nigiri",
    "tagline": "Cru & signature",
    "groups": [
      {
        "label": "Sashimi — 4 pièces",
        "items": [
          {"name": "Sashimi Saumon", "desc": "Tranches de saumon cru", "price": 55},
          {"name": "Tataki Saumon", "desc": "Saumon mi-cuit, sésame", "price": 59}
        ]
      },
      {
        "label": "Tacos Sushi — 2 pièces",
        "items": [
          {"name": "Saumon", "desc": "Taco croustillant au saumon", "price": 59},
          {"name": "Thon", "desc": "Taco croustillant au thon", "price": 49},
          {"name": "Ebi", "desc": "Taco croustillant aux crevettes", "price": 49},
          {"name": "Poulet", "desc": "Taco croustillant au poulet", "price": 45}
        ]
      },
      {
        "label": "Nigiri — 2 pièces",
        "items": [
          {"name": "Saumon", "desc": "Nigiri saumon", "price": 35},
          {"name": "Ebi", "desc": "Nigiri crevette", "price": 30}
        ]
      }
    ]
  },
  {
    "id": "pokebowltartares",
    "name": "Poke Bowl · Tartares",
    "tagline": "Frais & vinaigré",
    "groups": [
      {
        "label": "Poke Bowl",
        "items": [
          {"name": "Classic", "desc": "Saumon, concombre, goma wakame, avocat, edamame, riz vinaigré", "price": 60},
          {"name": "Hawaïen", "desc": "Crevette, concombre, goma wakame, avocat, riz vinaigré, sésame, mangue, ananas", "price": 65}
        ]
      },
      {
        "label": "Tartares",
        "items": [
          {"name": "Saumon", "desc": "Saumon, avocat, ciboulette, tobiko", "price": 55},
          {"name": "Crevette Mangue", "desc": "Crevettes, mangue, ciboulette, tobiko", "price": 50},
          {"name": "Mixte", "desc": "Saumon, crevettes, surimi, avocat, ciboulette, tobiko", "price": 60}
        ]
      }
    ]
  },
  {
    "id": "salades",
    "name": "Salades",
    "tagline": "Fraîcheur asiatique",
    "items": [
      {"name": "Salade Bo Bun", "desc": "Émincé de boeuf, nems, viande hachée, carotte, laitue, vermicelle, menthe, cacahuète", "price": 59},
      {"name": "Salade Vietnamienne", "desc": "Crevettes grises, poulet, carotte, chou, salade verte, menthe, cacahuète", "price": 54},
      {"name": "Shinzo", "desc": "Saumon, poisson blanc, crevettes, surimi, calamar, mangue, avocat, salade verte, chou, carotte", "price": 74},
      {"name": "Rouleaux de Printemps Vietnamiens", "desc": "Rouleaux frais garnis", "price": 50}
    ]
  },
  {
    "id": "soupes",
    "name": "Soupes",
    "tagline": "Bouillons faits maison",
    "items": [
      {"name": "Tom Kha Gi", "desc": "Poulet, lait de coco, champignons frais, cheese, poireaux", "price": 60},
      {"name": "Fruits de Mer", "desc": "Calamars, poisson blanc, crevettes, germes de soja, champignons frais et noirs, poireaux", "price": 65},
      {"name": "Viet", "desc": "Crevettes, boulette de poulet, champignons noirs, vermicelle", "price": 55}
    ]
  },
  {
    "id": "nemsbrochettes",
    "name": "Nems · Tempura · Brochettes",
    "tagline": "Panés & grillés",
    "groups": [
      {
        "label": "Nems",
        "items": [
          {"name": "Poulet — 3 pièces", "desc": "Nems croustillants au poulet", "price": 45},
          {"name": "Mixte — 3 pièces", "desc": "Poulet avec crevettes", "price": 54}
        ]
      },
      {
        "label": "Tempura — 5 pièces",
        "items": [
          {"name": "Crevettes Panées", "desc": "Tempura de crevettes", "price": 49}
        ]
      },
      {
        "label": "Brochettes",
        "items": [
          {"name": "Boulettes de Poulet", "desc": "Servi avec du riz", "price": 49},
          {"name": "Boeuf Fromage", "desc": "Servi avec du riz", "price": 59},
          {"name": "Gambas", "desc": "Servi avec du riz", "price": 50},
          {"name": "Boeuf Fromage Pané", "desc": "Servi avec du riz", "price": 63},
          {"name": "Saumon", "desc": "Servi avec du riz", "price": 65},
          {"name": "Mixte", "desc": "Servi avec du riz", "price": 85}
        ]
      }
    ]
  },
  {
    "id": "nouilleswok",
    "name": "Nouilles · Riz Cantonais · Wok",
    "tagline": "Choix du wok",
    "groups": [
      {
        "label": "Les Nouilles",
        "items": [
          {"name": "Végétarien", "desc": "Nouilles sautées aux légumes", "price": 43},
          {"name": "Poulet", "desc": "Nouilles sautées au poulet", "price": 64},
          {"name": "Boeuf", "desc": "Nouilles sautées au boeuf", "price": 70},
          {"name": "Fruits de Mer", "desc": "Nouilles sautées aux fruits de mer", "price": 79},
          {"name": "Crevettes", "desc": "Nouilles sautées aux crevettes", "price": 75}
        ]
      },
      {
        "label": "Riz Cantonais",
        "items": [
          {"name": "Végétarien", "desc": "Riz sauté aux légumes", "price": 39},
          {"name": "Poulet", "desc": "Riz sauté au poulet", "price": 50},
          {"name": "Boeuf", "desc": "Riz sauté au boeuf", "price": 55},
          {"name": "Fruits de Mer", "desc": "Riz sauté aux fruits de mer", "price": 69},
          {"name": "Crevettes", "desc": "Riz sauté aux crevettes", "price": 65}
        ]
      },
      {
        "label": "Basilic Thaï — Wok, avec riz",
        "items": [
          {"name": "Poulet", "desc": "Poivrons, champignons frais et noirs, épis de maïs, sauce huîtres, brocolis, pousses de bambou", "price": 64},
          {"name": "Boeuf", "desc": "Poivrons, champignons frais et noirs, épis de maïs, sauce huîtres, brocolis, pousses de bambou", "price": 70},
          {"name": "Crevettes", "desc": "Poivrons, champignons frais et noirs, épis de maïs, sauce huîtres, brocolis, pousses de bambou", "price": 75},
          {"name": "Fruits de Mer", "desc": "Poivrons, champignons frais et noirs, épis de maïs, sauce huîtres, brocolis, pousses de bambou", "price": 79}
        ]
      },
      {
        "label": "Spécial du Chef",
        "items": [
          {"name": "Saumon", "desc": "La recommandation du chef", "price": 99}
        ]
      }
    ]
  },
  {
    "id": "boissons",
    "name": "Jus & Boissons",
    "tagline": "Pour accompagner",
    "groups": [
      {
        "label": "Jus ",
        "items": [
          {"name": "Jus d'Orange", "desc": "Orange pressée", "price": 17},
          {"name": "Jus de Mangue et Orange", "desc": "Mangue, orange", "price": 20},
          {"name": "Jus d'Avocat", "desc": "Avocat ", "price": 20},
          {"name": "Jus de Citron Gingembre", "desc": "Citron, gingembre", "price": 20}
        ]
      },
      {
        "label": "Boissons",
        "items": [
          {"name": "Soda", "desc": "Au choix", "price": 15}, {"name": "Eau Minérale 50cl", "desc": "Plate", "price": 15},
          {"name": "Oulmés", "desc": "Eau gazeuse", "price": 13}
        ]
      }
    ]
  }
];

// GALLERY IMAGES (Clean file paths)
const GALLERY_IMAGES = [
  "images/image1_optimized_.jpg",
  "images/image2_optimized_.jpg",
  "images/image3_optimized_.jpeg",
  "images/image4_optimized_.jpeg",
  "images/image5_optimized_.jpeg",
  "images/image6_optimized_.jpeg",
  "images/image7_optimized_.jpg",
  "images/image8_optimized_.jpg",
  "images/image9_optimized_.jpg",
  "images/image10_optimized_.jpg"
];

// =====================================================================
// THÈME (Clair / Sombre) — persistant via localStorage
// =====================================================================
const THEME_KEY = 'shinzo_theme';
const htmlEl = document.documentElement;

function getStoredTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
}
function storeTheme(v) {
  try { localStorage.setItem(THEME_KEY, v); } catch (e) { /* stockage indisponible, on ignore */ }
}
function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  storeTheme(theme);
  document.querySelectorAll('#mmThemeLabel').forEach(el => {
    el.setAttribute('data-i18n', theme === 'light' ? 'theme_toggle_dark' : 'theme_toggle_light');
  });
  translatePage(); // rafraîchit le libellé du bouton thème dans le menu mobile
}
function toggleTheme() {
  const current = htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
}
// Application immédiate du thème sauvegardé (sans traduction, I18N n'est pas encore défini plus bas)
// pour éviter tout flash visuel au chargement de la page.
htmlEl.setAttribute('data-theme', getStoredTheme() === 'light' ? 'light' : 'dark');

// =====================================================================
// LANGUES (Arabe / Français / Anglais) — persistant via localStorage
// =====================================================================
const LANG_KEY = 'shinzo_lang';

const I18N = {
  nav_menu:            { fr:"Menu",                 en:"Menu",                 ar:"القائمة" },
  nav_philosophy:       { fr:"Philosophie",          en:"Philosophy",           ar:"فلسفتنا" },
  nav_gallery:          { fr:"Galerie",              en:"Gallery",              ar:"معرض الصور" },
  nav_reviews:          { fr:"Avis",                 en:"Reviews",              ar:"التقييمات" },
  nav_contact:          { fr:"Contact",              en:"Contact",              ar:"تواصل معنا" },
  nav_order:            { fr:"Commander",            en:"Order now",            ar:"اطلب الآن" },
  mm_lang_label:        { fr:"Langue",               en:"Language",             ar:"اللغة" },
  theme_toggle_light:   { fr:"Mode clair",           en:"Light mode",           ar:"الوضع الفاتح" },
  theme_toggle_dark:    { fr:"Mode sombre",          en:"Dark mode",            ar:"الوضع الداكن" },

  hero_title_pre:       { fr:"Le goût du",           en:"The taste of",         ar:"طعم" },
  hero_title_em:        { fr:"Japon",                en:"Japan",                ar:"اليابان" },
  hero_title_post:      { fr:"servi avec cœur.",     en:"served with heart.",   ar:"يُقدَّم بشغف." },
  hero_sub:             { fr:"Sushis roulés minute, poissons ultra-frais et créations signature — préparés chaque soir de 14h à 3h du matin, livrés chez vous en un message.",
                           en:"Sushi rolled to order, ultra-fresh fish and signature creations — prepared every evening from 2pm to 3am, delivered to your door with a single message.",
                           ar:"سوشي يُلف عند الطلب، أسماك طازجة جدًا وإبداعات خاصة — يُحضَّر كل مساء من الساعة 14:00 حتى 3 صباحًا، ويصلك بمجرد رسالة واحدة." },
  hero_cta_menu:        { fr:"Découvrir le menu",    en:"Explore the menu",     ar:"اكتشف القائمة" },
  hero_cta_reviews:     { fr:"Voir les avis",        en:"See reviews",          ar:"شاهد التقييمات" },
  hero_cta_download:    { fr:"Télecharger menu",     en:"Download menu",        ar:"تحميل القائمة" },
  scroll_cue:           { fr:"DÉFILER",              en:"SCROLL",               ar:"مرر للأسفل" },
  hero_meta_1:           { fr:"Ouvert tous les jours",en:"Open every day",       ar:"مفتوح كل يوم" },
  hero_meta_2:           { fr:"14h00 — 03h00",        en:"2:00 PM — 3:00 AM",    ar:"14:00 — 03:00" },

  menu_kicker:          { fr:"CARTE COMPLÈTE",       en:"FULL MENU",            ar:"القائمة الكاملة" },
  menu_title:           { fr:"Chaque pièce, roulée à la commande.",
                           en:"Every piece, rolled to order.",
                           ar:"كل قطعة تُلف عند الطلب." },
  menu_desc:            { fr:"Parcourez nos catégories et composez votre plateau. Les prix sont en dirhams (DH).",
                           en:"Browse our categories and build your platter. Prices are in Moroccan dirhams (DH).",
                           ar:"تصفح فئاتنا وكوّن طبقك. الأسعار بالدرهم المغربي (DH)." },

  philo_kicker:         { fr:"NOTRE PHILOSOPHIE",    en:"OUR PHILOSOPHY",       ar:"فلسفتنا" },
  philo_title:          { fr:"La fraîcheur n'est pas une option.",
                           en:"Freshness is not optional.",
                           ar:"الطزاجة ليست خيارًا." },
  philo1_title:         { fr:"Propreté irréprochable", en:"Impeccable cleanliness", ar:"نظافة لا تشوبها شائبة" },
  philo1_desc:          { fr:"Cuisine et poste sushi nettoyés et contrôlés en continu, selon les standards les plus stricts.",
                           en:"Kitchen and sushi station cleaned and checked continuously, to the strictest standards.",
                           ar:"يتم تنظيف المطبخ ومحطة السوشي ومراقبتهما باستمرار وفق أعلى المعايير." },
  philo2_title:         { fr:"Ingrédients ultra-frais", en:"Ultra-fresh ingredients", ar:"مكونات طازجة جدًا" },
  philo2_desc:          { fr:"Poissons et produits sélectionnés chaque jour, sans compromis sur la qualité.",
                           en:"Fish and products selected every day, with no compromise on quality.",
                           ar:"يتم اختيار الأسماك والمنتجات يوميًا دون أي تنازل عن الجودة." },
  philo3_title:         { fr:"Livraison rapide",      en:"Fast delivery",        ar:"توصيل سريع" },
  philo3_desc:          { fr:"Votre commande roulée, emballée et en route vers vous dans les meilleurs délais.",
                           en:"Your order rolled, packed and on its way to you as quickly as possible.",
                           ar:"يتم لف طلبك وتغليفه وإرساله إليك في أسرع وقت ممكن." },
  philo4_title:         { fr:"Service attentionné",  en:"Attentive service",    ar:"خدمة مميزة" },
  philo4_desc:          { fr:"Une équipe chaleureuse, à l'écoute, pour une expérience fluide du premier au dernier bouchée.",
                           en:"A warm, attentive team, for a smooth experience from the first to the last bite.",
                           ar:"فريق ودود ومستمع لضمان تجربة سلسة من أول لقمة إلى آخرها." },
  hours_pre:            { fr:"Ouvert chaque jour",   en:"Open every day",       ar:"مفتوح كل يوم" },
  hours_val:            { fr:"de 14h00 à 3h00",      en:"from 2:00 PM to 3:00 AM", ar:"من 14:00 إلى 3:00 صباحًا" },
  btn_call:             { fr:"Appeler le restaurant", en:"Call the restaurant", ar:"اتصل بالمطعم" },

  gallery_kicker:       { fr:"EN CUISINE",           en:"IN THE KITCHEN",       ar:"في المطبخ" },
  gallery_title:        { fr:"Un aperçu de nos assiettes.", en:"A glimpse of our dishes.", ar:"لمحة عن أطباقنا." },
  gallery_hint:         { fr:"GLISSEZ POUR EXPLORER", en:"SWIPE TO EXPLORE",    ar:"اسحب للاستكشاف" },

  reviews_kicker:       { fr:"ILS ONT AIMÉ",         en:"THEY LOVED IT",        ar:"أعجبهم كثيرًا" },
  reviews_title:        { fr:"Ce qu'en disent nos clients.", en:"What our customers say.", ar:"ماذا يقول عملاؤنا." },

  cta_title_pre:        { fr:"Une envie de sushi",   en:"Craving sushi",        ar:"هل تشتهي السوشي" },
  cta_title_em:         { fr:"maintenant",           en:"right now",            ar:"الآن" },
  cta_whatsapp:         { fr:"Commander via WhatsApp", en:"Order via WhatsApp", ar:"اطلب عبر واتساب" },
  cta_call:             { fr:"Appeler pour commander", en:"Call to order",      ar:"اتصل للطلب" },

  footer_desc_1:        { fr:"Sushi japonais authentique préparé minute, à Tanger.",
                           en:"Authentic Japanese sushi made to order, in Tangier.",
                           ar:"سوشي ياباني أصيل يُحضَّر عند الطلب، في طنجة." },
  footer_desc_2:        { fr:"Ouvert tous les jours de 14h00 à 3h00.",
                           en:"Open every day from 2:00 PM to 3:00 AM.",
                           ar:"مفتوح يوميًا من 14:00 إلى 3:00 صباحًا." },
  footer_address:       { fr:"Imam mouslim, Tanger, Maroc", en:"Imam Mouslim, Tangier, Morocco", ar:"إمام مسلم، طنجة، المغرب" },
  footer_follow:        { fr:"SUIVEZ-NOUS",          en:"FOLLOW US",            ar:"تابعونا" },
  footer_hours_title:   { fr:"HORAIRES",             en:"HOURS",                ar:"ساعات العمل" },
  footer_hours_1:       { fr:"Tous les jours",       en:"Every day",            ar:"كل يوم" },
  footer_hours_2:       { fr:"14h00 — 03h00",        en:"2:00 PM — 3:00 AM",    ar:"14:00 — 03:00" },
  footer_rights:        { fr:"Tous droits réservés.", en:"All rights reserved.", ar:"جميع الحقوق محفوظة." },
  footer_location:      { fr:"Tanger, Maroc",        en:"Tangier, Morocco",     ar:"طنجة، المغرب" },

  cart_title:           { fr:"Votre panier",         en:"Your cart",            ar:"سلتك" },
  cart_empty:           { fr:"Votre panier est vide pour l'instant.", en:"Your cart is empty for now.", ar:"سلتك فارغة حاليًا." },
  cart_total_label:     { fr:"TOTAL",                en:"TOTAL",                ar:"المجموع" },
  placeholder_name:     { fr:"Nom complet",          en:"Full name",            ar:"الاسم الكامل" },
  placeholder_phone:    { fr:"Numéro de téléphone",  en:"Phone number",         ar:"رقم الهاتف" },
  btn_share_location:   { fr:"📍 Partager ma position", en:"📍 Share my location", ar:"📍 شارك موقعي" },
  loc_status_default:   { fr:"Position non partagée", en:"Location not shared", ar:"لم تتم مشاركة الموقع" },
  loc_status_unavailable:{ fr:"Géolocalisation non disponible", en:"Geolocation unavailable", ar:"تحديد الموقع غير متاح" },
  loc_status_loading:   { fr:"Localisation en cours…", en:"Locating…",          ar:"جارٍ تحديد الموقع…" },
  loc_status_ok:        { fr:"Position partagée ✓",  en:"Location shared ✓",   ar:"تمت مشاركة الموقع ✓" },
  loc_status_denied:    { fr:"Position refusée — vous pouvez continuer sans.", en:"Location denied — you can continue without it.", ar:"تم رفض الموقع — يمكنك المتابعة بدونه." },
  btn_send_order:       { fr:"Envoyer la commande via WhatsApp", en:"Send order via WhatsApp", ar:"إرسال الطلب عبر واتساب" },
  ci_remove:            { fr:"RETIRER",              en:"REMOVE",               ar:"إزالة" }
};

// Traductions du nom/de l'étiquette de chaque catégorie du menu (les noms de plats
// eux-mêmes restent en français, comme c'est l'usage pour les cartes de restaurants).
const CAT_I18N = {
  aromaki:            { fr:{name:"Aromaki", tagline:"6 pièces"},                           en:{name:"Aromaki", tagline:"6 pieces"},                        ar:{name:"أروماكي", tagline:"6 قطع"} },
  gratine:            { fr:{name:"Sushi Gratiné", tagline:"Four & fondant"},               en:{name:"Baked Sushi", tagline:"Oven-baked & melty"},          ar:{name:"سوشي مشوي", tagline:"من الفرن وذائب"} },
  assortiments:       { fr:{name:"Assortiments", tagline:"16 · 24 · 40 pièces"},           en:{name:"Assortments", tagline:"16 · 24 · 40 pieces"},         ar:{name:"تشكيلات", tagline:"16 · 24 · 40 قطعة"} },
  bateau:             { fr:{name:"Bateau", tagline:"Plateaux à partager"},                 en:{name:"Boat Platter", tagline:"Platters to share"},          ar:{name:"طبق القارب", tagline:"أطباق للمشاركة"} },
  california:         { fr:{name:"California Rolls", tagline:"4 pièces"},                  en:{name:"California Rolls", tagline:"4 pieces"},               ar:{name:"كاليفورنيا رول", tagline:"4 قطع"} },
  crunchy:            { fr:{name:"Crunchy Rolls", tagline:"Crunchy Rolls 5 pièces"},        en:{name:"Crunchy Rolls", tagline:"Crunchy Rolls, 5 pieces"},   ar:{name:"كرانشي رول", tagline:"5 قطع مقرمشة"} },
  shinzorolls:        { fr:{name:"Shinzo Rolls", tagline:"Shinzo Rolls 5 pièces"},          en:{name:"Shinzo Rolls", tagline:"Shinzo Rolls, 5 pieces"},     ar:{name:"شينزو رول", tagline:"5 قطع من توقيعنا"} },
  okifuto:            { fr:{name:"Okinawa · Futomaki · Maki", tagline:"Traditions roulées"},en:{name:"Okinawa · Futomaki · Maki", tagline:"Rolled traditions"}, ar:{name:"أوكيناوا · فوتوماكي · ماكي", tagline:"تقاليد ملفوفة"} },
  topptemaki:         { fr:{name:"Toppings Roll · Temaki", tagline:"4 pièces / cône"},      en:{name:"Toppings Roll · Temaki", tagline:"4 pieces / cone"},  ar:{name:"تمياكي · لفائف مغطاة", tagline:"4 قطع / مخروط"} },
  burritopizza:       { fr:{name:"Sushi Burrito · Crunchy Shinzo · Pizza", tagline:"Formats généreux"}, en:{name:"Sushi Burrito · Crunchy Shinzo · Pizza", tagline:"Generous formats"}, ar:{name:"بوريتو سوشي · كرانشي شينزو · بيتزا", tagline:"أحجام سخية"} },
  sashimitacos:       { fr:{name:"Sashimi · Tacos Sushi · Nigiri", tagline:"Cru & signature"}, en:{name:"Sashimi · Sushi Tacos · Nigiri", tagline:"Raw & signature"}, ar:{name:"ساشيمي · تاكو سوشي · نيغيري", tagline:"نيء ومميز"} },
  pokebowltartares:   { fr:{name:"Poke Bowl · Tartares", tagline:"Frais & vinaigré"},       en:{name:"Poke Bowl · Tartare", tagline:"Fresh & tangy"},       ar:{name:"بوكي بول · تارتار", tagline:"طازج ومنعش"} },
  salades:            { fr:{name:"Salades", tagline:"Fraîcheur asiatique"},                 en:{name:"Salads", tagline:"Asian freshness"},                  ar:{name:"سلطات", tagline:"نكهة آسيوية منعشة"} },
  soupes:             { fr:{name:"Soupes", tagline:"Bouillons faits maison"},               en:{name:"Soups", tagline:"Homemade broths"},                   ar:{name:"حساء", tagline:"مرق منزلي"} },
  nemsbrochettes:     { fr:{name:"Nems · Tempura · Brochettes", tagline:"Panés & grillés"},  en:{name:"Spring Rolls · Tempura · Skewers", tagline:"Breaded & grilled"}, ar:{name:"نيمز · تيمبورا · أسياخ", tagline:"مقلي ومشوي"} },
  nouilleswok:        { fr:{name:"Nouilles · Riz Cantonais · Wok", tagline:"Choix du wok"},  en:{name:"Noodles · Cantonese Rice · Wok", tagline:"Wok choices"}, ar:{name:"نودلز · أرز كانتوني · ووك", tagline:"أطباق الووك"} },
  boissons:           { fr:{name:"Jus & Boissons", tagline:"Pour accompagner"},             en:{name:"Juices & Drinks", tagline:"To go with your meal"},    ar:{name:"عصائر ومشروبات", tagline:"لتكملة وجبتك"} }
};

function getCurrentLang() {
  return document.documentElement.getAttribute('lang') || 'fr';
}

// Traducteur central : renvoie la chaîne dans la langue active (repli sur le français)
function t(key) {
  const lang = getCurrentLang();
  const entry = I18N[key];
  if (!entry) return '';
  return entry[lang] || entry.fr || '';
}

function translatePage() {
  const lang = getCurrentLang();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = I18N[key];
    if (entry) el.textContent = entry[lang] || entry.fr;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = I18N[key];
    if (entry) el.setAttribute('placeholder', entry[lang] || entry.fr);
  });

  // Active state des pastilles / options de langue
  const shortLabel = { fr:'FR', en:'EN', ar:'AR' }[lang] || 'FR';
  const langLabelEl = document.getElementById('langCurrentLabel');
  if (langLabelEl) langLabelEl.textContent = shortLabel;
  document.querySelectorAll('.lang-option').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelectorAll('.mm-lang-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

  // Ré-affiche le panier et le menu (catégories) avec les nouveaux libellés
  if (typeof renderAllMenu === 'function') renderAllMenu();
  if (typeof renderCart === 'function') renderCart();

  // Statut de localisation : ne retraduire que s'il est encore à sa valeur par défaut
  const locEl = document.getElementById('locStatus');
  if (locEl && locEl.dataset.i18nCurrentState) {
    locEl.textContent = t(locEl.dataset.i18nCurrentState);
  }
}

function setLanguage(lang) {
  if (!['fr', 'en', 'ar'].includes(lang)) lang = 'fr';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  translatePage();
}

function getStoredLang() {
  try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}

// ---------- State ----------
// Global Cart State
let cart = {};
let userLoc = null;

// ---------- Mobile menu ----------
const mm = document.getElementById('mobileMenu');
if (document.getElementById('burgerBtn')) {
  document.getElementById('burgerBtn').addEventListener('click', () => mm.classList.add('open'));
}
if (document.getElementById('closeMM')) {
  document.getElementById('closeMM').addEventListener('click', () => mm.classList.remove('open'));
}
if (mm) {
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));
}

// ---------- Render Category Tabs + All Content ----------
const tabsEl = document.getElementById('catTabs');
const contentEl = document.getElementById('catContent');

function itemKey(catId, groupLabel, name) {
  return (catId + '|' + (groupLabel || '') + '|' + name).replace(/\s+/g, '_');
}

// Turns "Crème Cheese" -> "creme-cheese" so each dish gets a predictable image filename.
function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}


// Clean slug function - spaces matrum dashes-ai '_' aaga maathum
function customSlug(str) {
  if (!str) return '';
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\-_]+/g, '_') // Space, dash, underscore ellaame '_' aagum
    .replace(/[^\w\_]+/g, ''); // Unwanted characters-ai remove pannum
}


function dishCard(catId, catName, groupLabel, item) {
  const key = itemKey(catId, groupLabel, item.name);
  
  if (item.ipAddress) {
    var imgPath = `products/${item.ipAddress}.png`;
  } else {
    const cleanCat = slugify(catId);
    const cleanGroup = groupLabel ? slugify(groupLabel) : '';
    const cleanName = slugify(item.name);

    var imgSlug = [cleanCat, cleanGroup, cleanName].filter(Boolean).join('_');
    var imgPath = `products/${imgSlug}.png`;
  }

  return `<div class="dish-card" data-key="${key}">
    <div class="dish-img-wrap">
      <img src="${imgPath}" 
           alt="${item.name.replace(/"/g, '&quot;')}" 
           loading="lazy"
           onerror="handleImgFallback(this)">
    </div>
    <div class="dcontent">
      <p class="dname display">${item.name}</p>
      <p class="ddesc">${item.desc}</p>
      <div class="drow">
        <span class="dprice">${item.price}<sup>DH</sup></span>
        <button class="addbtn" 
          data-key="${key}" 
          data-cat="${catId}" 
          data-catname="${catName.replace(/"/g, '&quot;')}" 
          data-groupname="${(groupLabel || '').replace(/"/g, '&quot;')}"
          data-group="${groupLabel || ''}" 
          data-name="${item.name.replace(/"/g, '&quot;')}" 
          data-desc="${item.desc.replace(/"/g, '&quot;')}" 
          data-price="${item.price}" 
          aria-label="Ajouter ${item.name}">+</button>
      </div>
    </div>
  </div>`;
}

function handleImgFallback(img) {
  if (!img.dataset.triedFallback) {
    img.dataset.triedFallback = "true";
    
    if (img.src.includes('_')) {
      img.src = img.src.replace(/_/g, '-');
      return;
    }
  }
  // if the img makaynx 
  img.classList.add('img-broken');
  img.onerror = null;
}
/*uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu*/
function handleImgError(imgElement, cat, name) {
  const secondaryPath = `products/${cat}_${name}.png`;
  
  if (!imgElement.dataset.retried) {
    imgElement.dataset.retried = "true";
    imgElement.src = secondaryPath;
  } else {
    imgElement.classList.add('img-broken');
    imgElement.onerror = null;
  }
}
/*****************************************************************************************/ 


function renderAllMenu() {
  if (!tabsEl || !contentEl) return;

  tabsEl.innerHTML = '';
  contentEl.innerHTML = '';

  MENU.forEach((cat, index) => {
    const tabLang = getCurrentLang();
    const tabI18n = CAT_I18N[cat.id];
    const tab = document.createElement('button');
    tab.className = 'cat-tab' + (index === 0 ? ' active' : '');
    tab.textContent = tabI18n ? (tabI18n[tabLang] || tabI18n.fr).name : cat.name;
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetSec = document.getElementById(`cat-${cat.id}`);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
    tabsEl.appendChild(tab);

    const sec = document.createElement('div');
    sec.id = `cat-${cat.id}`;
    sec.className = 'menu-category-section';

    // Nom / tagline de catégorie traduits si disponibles, sinon repli sur les données FR d'origine
    const lang = getCurrentLang();
    const catI18n = CAT_I18N[cat.id];
    const catDisplayName = catI18n ? (catI18n[lang] || catI18n.fr).name : cat.name;
    const catDisplayTagline = catI18n ? (catI18n[lang] || catI18n.fr).tagline : (cat.tagline || '');

    let html = `<div class="cat-tag"><h3 class="display">${catDisplayName}</h3><span class="tagline">${catDisplayTagline || ''}</span></div>`;

    const renderRow = (items, groupLabel) => {
      const rowId = 'row_' + Math.random().toString(36).slice(2, 9);
      let out = '';
      if (groupLabel) out += `<div class="group-label">${groupLabel}</div>`;
      out += `<div class="carousel-row">
        <div class="carousel-track" id="${rowId}">
          ${items.map(it => dishCard(cat.id, cat.name, groupLabel, it)).join('')}
        </div>
      </div>`;
      return out;
    };

    if (cat.groups) {
      cat.groups.forEach(g => { html += renderRow(g.items, g.label); });
    } else {
      html += renderRow(cat.items, null);
    }

    sec.innerHTML = html;
    contentEl.appendChild(sec);
  });

  // Center-scaling + PC mouse drag-to-scroll on every product row
  document.querySelectorAll('.carousel-track').forEach(track => {
    setupCarousel(track);
    enableDragScroll(track);
  });
  attachAddButtons();
}

function setupCarousel(track) {
  function update() {
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closest = null, closestDist = Infinity;
    track.querySelectorAll('.dish-card').forEach(card => {
      const cr = card.getBoundingClientRect();
      const ccenter = cr.left + cr.width / 2;
      const dist = Math.abs(center - ccenter);
      if (dist < closestDist) { closestDist = dist; closest = card; }
    });
    track.querySelectorAll('.dish-card').forEach(c => c.classList.toggle('is-center', c === closest));
  }
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
  setTimeout(update, 60);
  window.addEventListener('resize', update);
}

function attachAddButtons() {
  document.querySelectorAll('.addbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      const groupName = btn.dataset.groupname;
      const catName = btn.dataset.catname;
      const specificCategory = (groupName && groupName.trim() !== '') ? groupName : catName;

      if (!cart[key]) {
        cart[key] = { 
          name: btn.dataset.name, 
          catName: specificCategory, // tad9i9 d cmmnd 
          desc: btn.dataset.desc, 
          price: parseFloat(btn.dataset.price), 
          qty: 0 
        };
      }
      cart[key].qty += 1;
      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 350);
      renderCart();
      saveCartFlash();
    });
  });
}

function saveCartFlash() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = 'scale(1)', 180);
  }
}

// ---------- Drag / Scroll functionality for PC Mouse (Category Tabs + Product Rows) ----------
// Reusable: works on .cat-tabs and on every .carousel-track (dish rows).
function enableDragScroll(el, speed = 1.4) {
  if (!el || el.dataset.dragBound === '1') return;
  el.dataset.dragBound = '1';
  el.classList.add('drag-scroll');

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let moved = false;

  el.addEventListener('mousedown', (e) => {
    isDown = true;
    moved = false;
    el.classList.add('dragging');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  const stopDrag = () => {
    isDown = false;
    el.classList.remove('dragging');
  };
  el.addEventListener('mouseleave', stopDrag);
  el.addEventListener('mouseup', stopDrag);

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * speed;
    if (Math.abs(walk) > 3) moved = true;
    el.scrollLeft = scrollLeft - walk;
  });

  // Prevent a drag from also firing a click on inner buttons/cards.
  el.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
}

renderAllMenu();
enableDragScroll(tabsEl);

// ---------- Cart rendering ----------
const cartBody = document.getElementById('cartBody');
const cartFoot = document.getElementById('cartFoot');
const cartBadge = document.getElementById('cartBadge');
const cartTotalEl = document.getElementById('cartTotal');

function renderCart() {
  const keys = Object.keys(cart).filter(k => cart[k].qty > 0);
  const totalQty = keys.reduce((s, k) => s + cart[k].qty, 0);
  if (cartBadge) {
    cartBadge.style.display = totalQty > 0 ? 'flex' : 'none';
    cartBadge.textContent = totalQty;
  }

  if (keys.length === 0) {
    if (cartBody) cartBody.innerHTML = `<div class="cart-empty">${t('cart_empty')}</div>`;
    if (cartFoot) cartFoot.style.display = 'none';
    return;
  }
  if (cartFoot) cartFoot.style.display = 'block';
  let total = 0;
  if (cartBody) {
    cartBody.innerHTML = keys.map(k => {
      const it = cart[k];
      total += it.price * it.qty;
      return `<div class="cart-item">
        <div class="ci-info">
          <div class="ci-name">${it.name} <small style="color:#E85A2A; font-size:11px;">(${it.catName})</small></div>
          <div class="ci-desc">${it.desc}</div>
          <div class="ci-price">${it.price} DH</div>
          <button class="ci-remove" data-key="${k}">${t('ci_remove')}</button>
        </div>
        <div class="ci-qty">
          <button data-act="dec" data-key="${k}">−</button>
          <span>${it.qty}</span>
          <button data-act="inc" data-key="${k}">+</button>
        </div>
      </div>`;
    }).join('');
  }
  if (cartTotalEl) cartTotalEl.textContent = total + ' DH';

  if (cartBody) {
    cartBody.querySelectorAll('[data-act]').forEach(b => {
      b.addEventListener('click', () => {
        const k = b.dataset.key;
        if (b.dataset.act === 'inc') cart[k].qty++;
        else { cart[k].qty--; if (cart[k].qty <= 0) delete cart[k]; }
        renderCart();
      });
    });
    cartBody.querySelectorAll('.ci-remove').forEach(b => {
      b.addEventListener('click', () => { delete cart[b.dataset.key]; renderCart(); });
    });
  }
}

// ---------- Cart open/close ----------
const cartOverlay = document.getElementById('cartOverlay');
if (document.getElementById('cartToggle')) {
  document.getElementById('cartToggle').addEventListener('click', () => cartOverlay.classList.add('open'));
}
if (document.getElementById('cartCloseBtn')) {
  document.getElementById('cartCloseBtn').addEventListener('click', () => cartOverlay.classList.remove('open'));
}
if (cartOverlay) {
  cartOverlay.addEventListener('click', (e) => { if (e.target === cartOverlay) cartOverlay.classList.remove('open'); });
}

// ---------- Geolocation ----------
const locStatus = document.getElementById('locStatus');
function setLocStatus(stateKey) {
  if (!locStatus) return;
  locStatus.dataset.i18nCurrentState = stateKey;
  locStatus.textContent = t(stateKey);
}
if (document.getElementById('shareLocBtn')) {
  document.getElementById('shareLocBtn').addEventListener('click', () => {
    if (!navigator.geolocation) { setLocStatus('loc_status_unavailable'); return; }
    setLocStatus('loc_status_loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLoc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setLocStatus('loc_status_ok');
        locStatus.classList.add('ok');
      },
      () => { setLocStatus('loc_status_denied'); }
    );
  });
}

// ---------- WhatsApp Order with Category Included ----------
if (document.getElementById('sendWaBtn')) {
  document.getElementById('sendWaBtn').addEventListener('click', () => {
    const keys = Object.keys(cart).filter(k => cart[k].qty > 0);
    if (keys.length === 0) { return; }
    const name = document.getElementById('custName').value.trim() || 'Non renseigné';
    const phone = document.getElementById('custPhone').value.trim() || 'Non renseigné';
    let total = 0;

    // zedna ism categorie f msg d cmmnd et forma d msg
    let lines = keys.map(k => {
      const it = cart[k];
      total += it.price * it.qty;
      return `- *x${it.qty}*  - [${it.catName}] ${it.name}  (${it.price * it.qty} DH)`;
    });

    let msg = `*Nouvelle commande Shinzō Sushi*%0A%0A`;
    msg += `Client: ${name}%0A`;
    msg += `Téléphone: ${phone}%0A`;
    if (userLoc) {
      msg += `Position: https://maps.google.com/?q=${userLoc.lat},${userLoc.lng}%0A`;
    }
    msg += `%0ACommande:%0A${lines.join('%0A')}%0A`;
    msg += `%0ATotal: ${total} DH`;
    window.open(`https://wa.me/212693959085?text=${msg}`, '_blank');
  });
}

// ---------- 3D Gallery ----------
const stage = document.getElementById('galleryStage');
const dotsWrap = document.getElementById('galleryDots');
let gIndex = 0;

if (stage && dotsWrap && typeof GALLERY_IMAGES !== 'undefined') {
  GALLERY_IMAGES.forEach((src, i) => {
    const el = document.createElement('div');
    el.className = 'gslide';
    el.innerHTML = `<img src="${src}" alt="Plat Shinzō Sushi ${i + 1}" draggable="false">`;
    stage.appendChild(el);
    const dot = document.createElement('button');
    dot.className = 'gdot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { gIndex = i; updateGallery(); resetAuto(); });
    dotsWrap.appendChild(dot);
  });
  
  const gslides = Array.from(stage.querySelectorAll('.gslide'));

  function updateGallery() {
    const n = gslides.length;
    gslides.forEach((el, i) => {
      let diff = i - gIndex;
      if (diff > n / 2) diff -= n;
      if (diff < -n / 2) diff += n;
      const abs = Math.abs(diff);
      if (abs > 2) { el.style.opacity = 0; el.style.pointerEvents = 'none'; return; }
      el.style.pointerEvents = 'auto';
      const x = diff * 185;
      const scale = diff === 0 ? 1 : 0.72;
      const rotY = diff === 0 ? 0 : (diff > 0 ? -28 : 28);
      const z = diff === 0 ? 0 : -160;
      el.style.opacity = abs === 0 ? 1 : (abs === 1 ? .7 : .35);
      el.style.zIndex = 10 - abs;
      el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`;
      el.style.filter = diff === 0 ? 'none' : 'brightness(.6)';
    });
    Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === gIndex));
  }
  updateGallery();

  let autoTimer = setInterval(() => { gIndex = (gIndex + 1) % gslides.length; updateGallery(); }, 3800);
  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => { gIndex = (gIndex + 1) % gslides.length; updateGallery(); }, 3800); }

  // Drag / Swipe 3D Gallery
  let dragStartX = null;
  stage.addEventListener('pointerdown', (e) => { dragStartX = e.clientX; stage.classList.add('grabbing'); });
  window.addEventListener('pointerup', (e) => {
    if (dragStartX === null) return;
    const dx = e.clientX - dragStartX;
    if (dx > 50) { gIndex = (gIndex - 1 + gslides.length) % gslides.length; updateGallery(); resetAuto(); }
    else if (dx < -50) { gIndex = (gIndex + 1) % gslides.length; updateGallery(); resetAuto(); }
    dragStartX = null; stage.classList.remove('grabbing');
  });
}

// =====================================================================
// Sélecteur de langue — menu déroulant (desktop) + pastilles (mobile)
// =====================================================================
const langSwitch = document.getElementById('langSwitch');
const langToggleBtn = document.getElementById('langToggleBtn');
if (langSwitch && langToggleBtn) {
  langToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langSwitch.classList.toggle('open');
    langToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', (e) => {
    if (!langSwitch.contains(e.target)) langSwitch.classList.remove('open');
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      langSwitch.classList.remove('open');
    });
  });
}
document.querySelectorAll('.mm-lang-pill').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Langue initiale : préférence sauvegardée, sinon français par défaut (langue d'origine du site)
setLanguage(getStoredLang() || 'fr');

// Écouteurs de la bascule de thème (déclarés ici, une fois translatePage() disponible)
[document.getElementById('themeToggleBtn'), document.getElementById('mmThemeToggleBtn')].forEach(btn => {
  if (btn) btn.addEventListener('click', toggleTheme);
});

// =====================================================================
// Correctifs : effet de scroll sur le header + année dynamique du footer
// =====================================================================
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  const onScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
const yearEl = document.getElementById('yr');
if (yearEl) yearEl.textContent = new Date().getFullYear();