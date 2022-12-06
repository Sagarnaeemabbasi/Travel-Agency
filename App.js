const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const Phone = document.getElementById("Phone");

Name.addEventListener("blur", () => {
  let regex = /^([a-zA-Z])([0-9a-zA-Z]){2,10}$/;
  let str = Name.value;

  if (regex.test(str)) {
    Name.style.border = "1px solid black";
  } else {
    Name.style.border = "1px solid red";
    document.getElementById("Namevalidate").innerText =
      "  Your username must be 2-10 characters long and should not start with a number ";
  }
  Name.addEventListener("input", () => {
    Name.style.border = "1px solid black";
  });
});
Email.addEventListener("blur", () => {
  let regex = /^([0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){0,5}$/;
  let str = Email.value;

  if (regex.test(str)) {
  } else {
    Email.style.border = "1px solid red";
    document.getElementById("Emailvalidate").innerText =
      "Please Enter a Valid Email ";
    // document.getElementById("validate").classList.remove="none"
  }
  Email.addEventListener("input", () => {
    Email.style.border = "1px solid black";
  });
});
Phone.addEventListener("blur", () => {
  let regex = /^([0-9]){11}$/;
  let str = Phone.value;

  if (regex.test(str)) {
  } else {
    Phone.style.border = "1px solid red";
    document.getElementById("Phonevalidate").innerText =
      "Your Number must be 11 Digits long";
  }
  Phone.addEventListener("input", () => {
    Phone.style.border = "1px solid black";
  });
});
