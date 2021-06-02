(() => {
  // src/contact-list/contact-list.html
  var contact_list_default = '<h2 class="name">name</h2>\n\n<p class="phone">phone</p>\n';

  // src/contact-list/data.json
  var data_default = [
    {
      name: "Christopher L Sanders",
      phone: "769-232-1807"
    },
    {
      name: "Frances J Nolte",
      phone: "901-287-0419"
    }
  ];

  // src/contact-list/contact-list.js
  var contactList = document.createElement("div");
  contactList.className = "contact-list";
  data_default.forEach((entry) => {
    const element = document.createElement("div");
    element.className = "contact";
    element.innerHTML = contact_list_default;
    element.querySelector(".name").innerHTML = entry.name;
    element.querySelector(".phone").innerHTML = entry.phone;
    contactList.appendChild(element);
  });
  document.body.appendChild(contactList);
})();
