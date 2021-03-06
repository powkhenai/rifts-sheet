function openCharacterFile(callback){
  //For now we will only support a single characterSheet
  characterSheet = JSON.parse(localStorage.getItem("characters"));
  if (typeof(characterSheet) === null) {
    characterSheet = new Character();
  } else {
    characterSheet = charList.characters[0];
  }
  sessionStorage.setItem("characterIndex", 0);
  sessionStorage.setItem("openedSheet", true);
}

function syncCharacterSheet(callback){
  //TODO (Will sync CharacterSheet to web)
  //TODO 
}

function saveCharacterFile(callback){
  //Web Doesn't support files yet
  saveCharacterList();
  callback();
}

function oldSaveFile () {
  var characterIndex = 0;
  var characterSet = JSON.parse(localStorage.getItem("characters"));
  if (!characterSet){
    characterSet = {
      "characters" : [new Character()]
    };
  } else {
    var saveChar = window.confim("Overwrite old save data?");
    if (!saveChar) {
      return callback();
    }
  }
    if (!sessionStorage.getItem("characterIndex")) {
      characterIndex = sessionStorage.getItem("characterIndex");
    }
  characterSet.characters[characterIndex] = angular.toJson(characterSheet, false);
  localStorage.setItem("characters", JSON.stringify(characterSet));
  window.openedSheet = true;
  callback();
}

function saveCharacterSheetAs(callback){
}

function closeWindow(){
  //Chrome App doesn't allow window.close so this is a wrapper function.
  window.close();
}

function chooseStorageType(){
  
}

function initControllerComponents(){
  if (typeof(window.sessionStorage) === undefined){
    alert("Doesn't support sessionStorage, unable to continue.");
  }
  if (typeof(window.localStorage) === undefined){
    alert("Doesn't support localStorage, save and load will not work.");
  }
  rifts.characterList = getCharacterList();
  document.querySelector('select').addEventListener('onchange', ng_redirect_mobile);
}

function saveCharacterList(){
  localStorage.setItem("characters", angular.toJson(rifts.characterList));
}

function getCharacterList(){
  var data = localStorage.getItem("characters")
  if(data === null){
    data = [new Character()];
  } else {
    data = JSON.parse(data);
    for(v in data){
      for(p in data.notes){
        data[v].notes[p].date = new Date(data[v].notes[p].date);
      }
      for(h in data.history){
        data[v].history[h].date = new Date(data[v].notes[p].date);
      }
      data[v].metadata.last_modified = new Date(data[v].metadata.last_modified);
    }
  }
  return data
}

function ng_redirect_mobile() {
  var ele = document.querySelector('select');
  if (ele.value==="reload") {
    window.reload();
    return;
  } else {
    ng_redirect(ele.value)
  }
}
