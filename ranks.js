// VIP Perks
function vipPerks() {
  // Add code for VIP perks here
  // e.g. /repair all, /depth, /kittycannon, etc.
}

// VIP+ Perks
function vipPlusPerks() {
  // Add code for VIP+ perks here
  // e.g. /Sell bonus - 7.5%, more auction house slots, etc.
}

// MVP Perks
function mvpPerks() {
  // Add code for MVP perks here
  // e.g. /Sell bonus - 10%, MVP only chat, etc.
}

// MVP+ Perks
function mvpPlusPerks() {
  // Add code for MVP+ perks here
  // e.g. /Sell bonus - 15%, rank obtainable only items, etc.
}

// MVP++ Perks
function mvpPlusPlusPerks() {
  // Add code for MVP++ perks here
  // e.g. /Sell bonus - 20%, vote crate luck bonus 20%, etc.
}

// Call the relevant functions based on the user's rank
if (userRank === 'VIP') {
  vipPerks();
} else if (userRank === 'VIP+') {
  vipPlusPerks();
} else if (userRank === 'MVP') {
  mvpPerks();
} else if (userRank === 'MVP+') {
  mvpPlusPerks();
} else if (userRank === 'MVP++') {
  mvpPlusPlusPerks();
}

$(document).ready(function() {
  $(".rank").click(function() {
    var rankName = $(this).find("p").text();
    var cashAppInfo = "";
    var cashAppLogo = "cashapp.PNG";
    var perks = "";

    if (rankName === "VIP Rank") {
      cashAppInfo = "CashApp: $2.00";
      perks = "VIP Perks: /repair all, /depth, /kittycannon";
    } else if (rankName === "VIP+ Rank") {
      cashAppInfo = "CashApp: $3.50";
      perks = "VIP+ Perks: /Sell bonus - 7.5%, more auction house slots";
    } else if (rankName === "MVP Rank") {
      cashAppInfo = "CashApp: $5.00";
      perks = "MVP Perks: /Sell bonus - 10%, MVP only chat";
    } else if (rankName === "MVP+ Rank") {
      cashAppInfo = "CashApp: $7.00";
      perks = "MVP+ Perks: /Sell bonus - 15%, rank obtainable only items";
    } else if (rankName === "MVP++ Rank") {
      cashAppInfo = "CashApp: $10.00";
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