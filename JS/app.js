const url = "../JSON/CV.json";

async function getCV() {
    let response = await fetch(url);

    
    if(response.ok)
    {
        const response = await fetch(url);

        if(response.ok)
        {
           
            const data = await response.json();
            console.log(data);
            let workList = document.querySelector(".workList");
            let eduList = document.querySelector(".educationList");
            let otherList = document.querySelector(".otherList");

            //Populate work experience list
            data.CV.Work.forEach((e) => {
                let employment = document.createElement("h5");
                employment.innerHTML = e.title;

                let workTime = document.createElement("h6");
                workTime.innerHTML = e.date

                let jobDesc = document.createElement("p");
                jobDesc.innerHTML = e.Description
                
                let workItem = document.createElement("li");

                workItem.append(employment, workTime, jobDesc);

                workList.append(workItem);

              });

              //Populate education list
              data.CV.Education.forEach((e) => {
                let educationItem = document.createElement("h5");
                educationItem.innerHTML = e.title;

                let eduTime = document.createElement("h6");
                eduTime.innerHTML = e.date

                let eduDesc = document.createElement("p");
                eduDesc.innerHTML = e.Description

                let eduItem = document.createElement("li");

                eduItem.append(educationItem, eduTime, eduDesc);

                eduList.append(eduItem);

              });

              //Populate other list
              data.CV.Other.forEach((e) => {
                let otherTitle = document.createElement("h5");
                otherTitle.innerHTML = e.title;

                let otherTime = document.createElement("h6");
                otherTime.innerHTML = e.date

                let otherDesc = document.createElement("p");
                otherDesc.innerHTML = e.Description

                let otherItem = document.createElement("li");

                otherItem.append(otherTitle, otherTime, otherDesc);

                otherList.append(otherItem);

              });
                
            }
        }
    }

    getCV();






