(() => {
  "use strict";
  var e, t;
  !(function (e) {
    (e.ADMIN = "ADMIN"), (e.READ_ONLY = "READ_ONLY");
  })(e || (e = {})),
    (function (e) {
      (e.GOLD_USER = "GOLD_USER"),
        (e.SILVER_USER = "SILVER_USER"),
        (e.BRONZE_USER = "BRONZE_USER");
    })(t || (t = {}));
  var o = document.querySelector("#reviews"),
    n = document.querySelector("#returning-user"),
    a = document.querySelector("#user");
  function r(e, t) {
    "number" == typeof e &&
      "string" == typeof t &&
      console.log("cannot perform this addition"),
      "string" == typeof e &&
        "number" == typeof t &&
        console.log("cannot perform this addition");
  }
  r(5, 1), r("Ania", "Kubow");
  var i,
    c,
    l,
    s = document.querySelector(".properties"),
    d = document.querySelector(".footer"),
    m = [
      { name: "Sheia", stars: 5, loyaltyUser: t.GOLD_USER, date: "01-04-2021" },
      {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: t.BRONZE_USER,
        date: "28-03-2021",
      },
      {
        name: "Omar",
        stars: 4,
        loyaltyUser: t.SILVER_USER,
        date: "27-03-2021",
      },
    ],
    y = (e.ADMIN, !0),
    u = [
      {
        image: "./images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
          firstLine: "shack 37",
          city: "Bogota",
          code: 45632,
          country: "Colombia",
        },
        contact: [1123495082908, "marywinkle@gmail.com"],
        isAvailable: !0,
      },
      {
        image: "./images/poland-property.jpg",
        title: "Polish Cottage",
        price: 34,
        location: {
          firstLine: "no 23",
          city: "Gdansk",
          code: 343903,
          country: "Poland",
        },
        contact: [1123495082908, "garydavis@hotmail.com"],
        isAvailable: !1,
      },
      {
        image: "./images/london-property.jpg",
        title: "London Flat",
        price: 23,
        location: {
          firstLine: "flat 15",
          city: "London",
          code: 35433,
          country: "United Kingdom",
        },
        contact: [1123495082908, "andyluger@aol.com"],
        isAvailable: !0,
      },
    ];
  (i = m.length),
    (c = m[0].name),
    m[0].loyaltyUser,
    (l = t.GOLD_USER ? "⭐" : ""),
    (o.innerHTML =
      "review total " + i.toString() + "| last reviewed by " + c + " " + l),
    y && (n.innerHTML = "back"),
    (a.innerHTML = "Bobby");
  for (var g = 0; g < u.length; g++) {
    var p = document.createElement("div");
    p.classList.add("card"), (p.innerHTML = u[g].title);
    var S = document.createElement("img");
    S.setAttribute("src", u[g].image), p.appendChild(S), s.appendChild(p);
  }
  var E = ["Rustenburg", "14:17", 16];
  d.innerHTML = E[0] + " " + E[1] + " " + E[2] + "°";
})();
