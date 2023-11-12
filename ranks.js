$(document).ready(function() {
  $(".rank").click(function() {
    var rankName = $(this).find("p").text();
    var cashAppInfo = "";
    var cashAppLogo = "cashapp.png";
    var perks = "";

    if (rankName === "VIP Rank") {
      cashAppInfo = "Pay $2.00 on Cash App: $IamWinix";
      perks = "VIP Perks: /repair all, /depth, /kittycannon";
    } else if (rankName === "VIP+ Rank") {
      cashAppInfo = "Pay $3.50 on Cash App: $IamWinix";
      perks = "VIP+ Perks: /Sell bonus - 7.5%, more auction house slots";
    } else if (rankName === "MVP Rank") {
      cashAppInfo = "Pay $5.00 on Cash App: $IamWinix";
      perks = "MVP Perks: /Sell bonus - 10%, MVP only chat";
    } else if (rankName === "MVP+ Rank") {
      cashAppInfo = "Pay $7.00 on Cash App: $IamWinix";
      perks = "MVP+ Perks: /Sell bonus - 15%, rank obtainable only items";
    } else if (rankName === "MVP++ Rank") {
      cashAppInfo = "Pay $10.00 on Cash App: $IamWinix";
      perks = "MVP++ Perks: /Sell bonus - 20%, vote crate luck bonus 20%";
    }

    $(".popup").remove();

    var popupHtml = `
      <div class="popup">
        <h3>${rankName}</h3>
        <p>${cashAppInfo}</p>
        <p>${perks}</p>
        <img src="${cashAppLogo}" alt="Cash App Logo">
      </div>
    `;

    $("body").append(popupHtml);
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest(".rank, .popup").length) {
      $(".popup").remove();
    }
  });
});