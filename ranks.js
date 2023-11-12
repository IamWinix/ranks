$(document).ready(function() {
  $(".rank").click(function() {
    var rankName = $(this).find("p").text();
    var cashAppInfo = "";
    var cashAppLogo = "cashapp.PNG";

    if (rankName === "VIP Rank") {
      cashAppInfo = "CashApp: $2.00";
    } else if (rankName === "VIP+ Rank") {
      cashAppInfo = "CashApp: $3.50";
    } else if (rankName === "MVP Rank") {
      cashAppInfo = "CashApp: $5.00";
    } else if (rankName === "MVP+ Rank") {
      cashAppInfo = "CashApp: $7.00";
    } else if (rankName === "MVP++ Rank") {
      cashAppInfo = "CashApp: $10.00";
    }

    $(".popup").remove();

    var popupHtml = `
      <div class="popup">
        <h3>${rankName}</h3>
        <p>${cashAppInfo}</p>
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
