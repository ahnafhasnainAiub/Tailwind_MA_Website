let submitData = {
  services: [],
  //  budgets: [],
  fileName: "",
};

const inputBox = document.getElementById("file");

inputBox.addEventListener("change", (e) => {
  const { name, value, files } = e.target;

  const inputFileTextContainer = document.getElementsByClassName("file-name");

  if (files?.length > 0) {
    console.log(inputFileTextContainer);
    inputFileTextContainer[0].innerText = files[0]?.name;
    submitData.fileName = URL.createObjectURL(files[0]);
  }

  console.log({ submitData });
});

document
  .getElementById("submissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const company = document.getElementById("company").value;
    const queries = document.getElementById("queries").value;    

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];


    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("FileName", file?.name)
    localStorage.setItem("Services", submitData?.services)
    localStorage.setItem("Company", company)
    localStorage.setItem("Phone Number", number)
    localStorage.setItem("Query", queries)
    localStorage.setItem("Budgets", submitData?.budget)


    submitData.name = name;
    submitData.email = email;
    submitData.number = number;
    submitData.company = company;
    submitData.queries = queries;
    // submitData.fileName = file ? file.name : "";

    console.log(submitData);

    showModal(submitData);

    document.getElementById("submissionForm").reset();

    const serviceButtons = document.querySelectorAll(
      'input[type="button"]'
    );
    serviceButtons.forEach((button) => {
      button.classList.remove("active");
      button.classList.add("not-active");
    });

    submitData = {
      services: [],
      fileName: '',
    };
  });

function addService(service, buttonElement) {
  const serviceIndex = submitData.services.indexOf(service);

  if (serviceIndex === -1) {
    submitData.services.push(service);
    buttonElement.classList.add("active");
    buttonElement.classList.remove("not-active");
  } else {
    submitData.services.splice(serviceIndex, 1);
    buttonElement.classList.remove("active");
    buttonElement.classList.add("not-active");
  }
}


function addBudget(budget, buttonElement) {
    const currentActive = document.querySelector('.budget-button.active');
  
    if (currentActive) {
      currentActive.classList.remove("active");
      currentActive.classList.add("not-active");
    }
  
    if (submitData.budget === budget) {
      submitData.budget = null;
    } else {
      submitData.budget = budget;
      buttonElement.classList.add("active");
      buttonElement.classList.remove("not-active");
    }
  }


function showModal(data) {
  document.getElementById("modalName").innerText = `Name: ${data.name}`;
 
  document.getElementById(
    "modalEmail"
  ).innerText = `Email: ${data.email}`;
 
  document.getElementById(
    "modalNumber"
  ).innerText = `Number: ${data.number}`;
 
  document.getElementById(
    "modalCompany"
  ).innerText = `Company: ${data.company}`;

  document.getElementById(
    "modalBudget"
  ).innerText = `Budget: ${data.budget}`;
 
  document.getElementById(
    "modalServices"
  ).innerText = `Services: ${data.services.join(", ")}`;
 
  document.getElementById("modalFileName").src = data.fileName;
 
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}
