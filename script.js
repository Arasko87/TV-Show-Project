//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
//getAllEpisodes
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
        rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  let myElement = document.querySelector("#root");
  let nameDiv = document.createElement("div");
      myElement.appendChild(nameDiv);
      nameDiv.className = "nameDiv";

      episodeList.forEach(episode => {

  let div1Contents = document.querySelector(".nameDiv");    
  let divForBox = document.createElement("div");
      div1Contents.appendChild(divForBox);
      divForBox.className = "box";
      

  let h3 = document.createElement("h3");
      divForBox.appendChild(h3);
      h3.className = "h1Class";
      h3.innerText = episode.name.concat(innerText =` - S${addZeroPrefix (episode.season)}E${addZeroPrefix(episode.number)}`);
     
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
      
}


function addZeroPrefix (num){

  if (num < 10 ){
    return "0" + num ;
  }
  else{
    return num;
  }
}




window.onload = setup;

