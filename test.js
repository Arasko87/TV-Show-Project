function setup() {
      allEpisodes = getAllEpisodes();
      makePageForEpisodes(allEpisodes);
      var displayNum = 0; /* for level 300 */
      
    
    
    }
    // Level 200 *************************
    seBar = document.querySelector("#myInput");
    seBar.addEventListener("keyup", getTheValue);
    
    function getTheValue() {
      let newEpisodes = allEpisodes.filter(epi => theFuncValue(epi, seBar.value));
      makePageForEpisodes(newEpisodes);
      displayNum = newEpisodes.length;
    
      let displayN = document.querySelector("#paraDisplaying");
      displayN.innerHTML = `There are ${displayNum} / 73 of your search`;
    }
    
    // need to be explained why we add two vars (epis, searchedWord).
    function theFuncValue(epis, searchedWord) {
      return epis.name.toLowerCase().includes(searchedWord.toLowerCase()) || epis.summary.toLowerCase().includes(searchedWord.toLowerCase());
    }
    
    //level 300 ****************************
    function selection(epiList) {
    
      var select = document.getElementById("select");
      for (var i = 0; i < epiList.length; i++) {
          var opt = epiList[i];
          var el = document.createElement("option");
          //  el.className = "optionList";
          el.textContent = `S${addZeroPrefix(opt.season)}E${addZeroPrefix(opt.number)} - `.concat(opt.name);
          el.href = opt.url;
    
    
    
          select.appendChild(el);
    
    
    
          // let section = document.getElementById("select");
          // console.log(el.href);
          
          //         section.onchange = function() {
          //           return epiList.find(episode => {
          //             if (episode.el == section.value) {
          //             window.open(el.href);
          
          //         }
          //     });
          // }
       }
    }
    
    function makePageForEpisodes(episodeList) {
    
      // level 100 *****************************
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
    
      /* for 300*/
      selection(allEpisodes);
    
    }
    
    function addZeroPrefix(num) {
    
      if (num < 10) {
          return "0" + num;
      } else {
          return num;
      }
    }
    
    
    
    
    window.onload = setup;