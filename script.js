function setup() {

  
 allEpisodes = getAllEpisodes();
 
  makePageForEpisodes(allEpisodes);
  var displayNum = 0; /* for level 300 */
   // level 350 *****************************




}
//Level 200 *************************
searchBox = document.querySelector("#myInput");
searchBox.addEventListener("keyup", getTheValue);
// need to be explained
function getTheValue() {
  let filteredEpisodes = allEpisodes.filter(epi => theFuncValue(epi, searchBox.value));
     makePageForEpisodes(filteredEpisodes);

      displayNum = filteredEpisodes.length;
  let displayBox = document.querySelector("#paraDisplaying");
      displayBox.innerHTML = `There are ${displayNum} / 73 of your search`;
}
// need to be explained why we add two vars (epis, searchedWord).
function theFuncValue(epis, searchedWord) {
return epis.name.toLowerCase().includes(searchedWord.toLowerCase()) || epis.summary.toLowerCase().includes(searchedWord.toLowerCase());
}
//Level 200 ************************* DONE


//level 300 ****************************
function selection(epiList) {

  var select = document.getElementById("select");
  for (var i = 0; i < epiList.length; i++) {
      var opt = epiList[i];
      var el = document.createElement("option");
      //  el.className = "optionList";
      el.textContent = `S${addZeroPrefix(opt.season)}E${addZeroPrefix(opt.number)} - `.concat(opt.name);
       el.value = opt.url;
      select.appendChild(el);
     
       }
   
       let section = document.getElementById("select");
       //console.log(section);
       section.onchange = function() {
           let userOption = section.options[section.selectedIndex];
           if(userOption !== ""){
           window.open(userOption.value,"selected  move", "");
         }
             }
       
            }

            //level 300 ****************************DONE






  // level 100 *****************************
function makePageForEpisodes(episodeList) {
  let myElement = document.querySelector("#root");
  const preExistingNamedDiv = document.querySelector('.nameDiv');
  if (preExistingNamedDiv) {
      myElement.removeChild(preExistingNamedDiv);
  }
  let nameDiv = document.createElement("div");
      myElement.appendChild(nameDiv);
      nameDiv.className = "nameDiv";

  episodeList.forEach(episode => {
      let div1Contents = document.querySelector(".nameDiv");
      let divForBox = document.createElement("div");
      divForBox.className = "box";

      let h3 = document.createElement("h3");
      divForBox.appendChild(h3);
      h3.className = "h1Class";
      h3.innerText = episode.name.concat(` - S${addZeroPrefix(episode.season)}E${addZeroPrefix(episode.number)}`);

      let img = document.createElement("img");
      divForBox.appendChild(img);
      img.src = episode.image.medium;

      let para = document.createElement("p");
      divForBox.appendChild(para);
      para.className = "paragraph";
      para.innerHTML = episode.summary;

      let a = document.createElement('a');
      let link = document.createTextNode("Watch on TVMaze.com");
      a.appendChild(link);
      a.className = "link"
      a.href = episode.url;
      divForBox.appendChild(a);

      div1Contents.appendChild(divForBox);
  });

  selection(allEpisodes);

}


fetch("https://api.tvmaze.com/shows/82/episodes")
.then(function(result){
  return result.json();
})
.then(function(allFetchedEpisodes){
 
  allEpisodes = allFetchedEpisodes;
});


function addZeroPrefix(num) {

  if (num < 10) {
      return "0" + num;
  } else {
      return num;
  }
}
  // level 100 *****************************DONE
window.onload = setup;