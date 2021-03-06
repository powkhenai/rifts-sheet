function Note(){
  this.note = {
    text: null,
    richtext: null
  }
  this.title = null;
  this.date = new Date(Date.now());
}

function Skill(){
  this.name = null;
  this.rate = 0;
  this.lvl  = 0;
}

function Spell(){
  this.name = null;
  this.effect = null;
  this.duration = null;
  this.use = null;
}

function MDCByLocation(){
  this.name = null;
  this.value = {
    cur: 0,
    max: 0
  }
}

function InventoryItem(){
  this.name = null;
  this.qty = 0;

}

function Sibling(){
  this.relationship = null;
  this.name = null;
}

function History(){
  this.name = null;
  this.date = new Date();
  this.gm = null;
}

function AncientProf(){
  this.name = null;
  this.strike = {
    value: 0,
    levels: null
  }
  this.parry = {
    value: 0,
    levels: null
  }
  this.throw = {
    value: 0,
    levels: null
  }
}

function ModernProf(){
  this.name = null;
  this.level = 0;
  this.aim = 0;
  this.burst = 0;
}

function AncientWeapon(){
  this.name = null;
  this.damage = null;
  this.weight = 0;
  this.strike = 0;
  this.parry = 0;
  this.throw = 0;
  this.proficiency = null;
}

function ModernWeapon(){
  this.name = null;
  this.damage = null;
  this.range = 0;
  this.payload = {
    cur: 0,
    max: 0
  }
  this.aim = 0;
  this.burst = 0;
  this.rate = null;
}

function ExplosiveWeapon(){
  this.name = null;
  this.damage = null;
  this.radius = 0;
  this.weight = 0;
  this.payload = 0;
  this.timer = null;
}

function Ability(){
  this.name = null;
  this.effect = null;
}

function Vehicle(){
  this.name = null;
  this.vehicle = null;
  this.type = null;
  this.class = null;
  this.crew = null;
  this.passengers = null;
  this.height = 0;
  this.weight = 0;
  this.length = 0;
  this.width = 0;
  this.strength = 0;
  this.range = null;
  this.depth_tol = 0;
  this.cargo = null;
  this.power = null;
  this.price = 0;
  this.speed = {
    driving: 0,
    flying: {
      air: 0,
      space: 0
    }
  }
  this.leap = {
    up: 0,
    across: 0
  }
  this.thrust_leap = {
    up: 0,
    across: 0
  }
  this.weapons = [new WeaponSystem()]; //use WeaponSystem()
  this.atks = [new VehicleH2H()]; //use VehicleH2H()
  this.rpa = [new RPASkill()]; //use RPASkill()
  this.mdc = [new MDCByLocation()];
}

function RPASkill(){
  this.name = null;
  this.atks = {
    cur: 0,
    max: 0
  }
  this.strike = 0;
  this.parry = 0;
  this.dodge = {
    normal: 0,
    flying: 0
  }
  this.initiative = 0;
  this.fall = 0;
}

function VehicleH2H(){
  this.name = null;
  this.value = null;
}

function WeaponSystem(){
  this.name = null;
  this.damage = null;
  this.range = 0;
  this.radius = 0;
  this.payload = {
    cur: 0,
    max: 0
  }
  this.aim = 0;
  this.burst = 0;
  this.rate = null;
}

function Character(){
  this.metadata = {
    player_name: null,
    last_modified: new Date()
  };
  this.name = "Some Character";
  this.age  = 0;
  this.gender = null;
  this.alignment = null;
  this.mdc = {
    cur: 0,
    max: 0
  };
  this.sdc = {
    cur: 0,
    max: 0
  };
  this.hp = {
    cur: 0,
    max: 0
  };
  this.awe = 0;
  this.level = 0;
  this.exp = 0;
  this.occ = "Needs a job";
  this.rcc = null;
  this.iq  = {
    value: 0,
    bonus: 0
  };
  this.me = {
    value: 0,
    bonus: 0
  };
  this.ma = {
    value: 0,
    bonus: 0
  };
  this.ps = {
    value: 0,
    bonus: 0
  };
  this.pp = {
    value: 0,
    bonus: 0
  };
  this.pe = {
    value: 0,
    bonus: {
      coma: 0,
      pain: 0
    }
  };
  this.pb = {
    value: 0,
    bonus: 0
  };
  this.spd = {
    run: 0,
    dig: 0,
    swim: 0,
    fly: 0
  };
  this.ppe = {
    cur: 0,
    max: 0
  }
  this.isp = {
    cur: 0,
    max: 0
  }
  this.chi = {
    cur: 0,
    max: 0
  }
  this.height = 0;
  this.weight = 0;
  this.h2hskill = {
    level:  null,
    atksPerMelee: {
      cur: 0,
      max: 0
    },
    ko_on: 0,
    crit_on: 0,
    deathblow_on: 0,
    pin_on: 0,
    bonus: {
      damage: 0,
      strike: 0,
      parry: 0,
      dodge: 0,
      pull_punch: 0,
      initiative: 0,
      entangle: 0,
      disarm: 0,
      fall: 0
    },
    atks: {
      restrained: null,
      normal: null,
      power: null,
      kick: null,
      leap: null,
      tackle: null,
      flip: null,
      bite: null,
      stomp: null,
      extra: [new ExtraH2HAtk()]
    }
  }
  this.saves = {
    toxin: {
      lethal: 0,
      non_lethal: 0
    },
    drugs: 0,
    disease: 0,
    electro: 0,
    temp: 0,
    pain: 0,
    coma: 0,
    spells: 0,
    ritual: 0,
    ward: 0,
    circle: 0,
    faerie: 0,
    fumes: 0,
    prot_cir: 0,
    possession: 0,
    insanity: 0,
    psionics: 0,
    mind: 0,
    horror: 0
  }
  this.skills = { //use Skill()
    occ: [], 
    related: [],
    secondary: []
  }
  this.bodyArmor = {
    type : null,
    ar: null,
    mdc: [], //use MDCByLocation();
    prowl: 0,
    climb: 0,
    swim: 0,
    notes: null
  },
  this.native_language = new Skill();
  this.weapons = {
    prof: {
      ancient: [], //[new AncientProf()],
      modern: [], //[new ModernProf()]
    },
    ancient: [], //[new AncientWeapon()],
    modern: [], //[new ModernWeapon()],
    ordinance: [], //[new ExplosiveWeapon()]
  }
  this.abilities = [], //[new Ability()];
  this.appearance = null;
  this.disposition = null;
  this.marks = null;
  this.family = {
    father: null,
    mother: null,
    siblings: []
  } //[{ relationship: null, name: null }]
  birthdate =  null,
  hometown = null,
  hero =  null,
  favourites = {
    colour: null,
    food: null,
    drink: null,
    hobby: null,
    place: null,
    music: null
  }
  this.sentiments = {
    cs: null,
    dbees: null,
    magic: null,
    mms: null
  }
  this.history = [], //new Array(new History());
  this.inventory = {
    backpack: [new InventoryItem()], //new Array(new InventoryItem()),
    ammo: [new InventoryItem()], //new Array(new InventoryItem()),
    personal: [new InventoryItem()], //new Array(new InventoryItem()),
    cargo: [new InventoryItem()], //new Array(new InventoryItem())
  }
  this.savings = null;
  this.spells = []; //new Array(new Spell());
  this.vehicles = []; //new Array(new Vehicle());
  this.notes = [new Note()]; //new Array(new Note());
}

function ExtraH2HAtk() {
  this.name = null;
  this.value = null;
}

function Settings(){
  this.openedFile = false;
}

var openedFile = false;
var accepts = [
  {
    mimeTypes: ['application/json', 'text/plain'],
    extensions: ['json']
  }];

function getEle(DOMstring){
  return document.querySelector(DOMstring);
}

function ng_redirect(str) {
  //window.location = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "#/" + str;
  window.location.hash = "#/" + str;
}

var rifts = {} //Game Object
rifts.index = 0;
rifts.characterList = [new Character()];
rifts.settings = new Settings();
