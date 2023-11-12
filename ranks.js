$(document).ready(function() {
  $(".rank").click(function() {
    var rankName = $(this).find("p").text();
    var payPalInfo = "";
    var payPalLogo = "Paypal.PNG";
    var perks = "";

    if (rankName === "VIP Rank") {
      cashAppInfo = "Pay $2.00 on Cash App: $IamWinix";
      perks = "VIP Perks: /depth, /kittycannon, /nick, /pweather, /ptime, /workbench, /anvil, /smithingtable, Sell bonus - 5%, Access to VIP only chat, In-game and discord rank, White text in game, Placed higher on tablist, Premium Daily Reward, VIP only pet, Vote crate luck bonus 2.5%";
    } else if (rankName === "VIP+ Rank") {
      cashAppInfo = "Pay $3.50 on Cash App: $IamWinix";
      perks = "VIP+ Perks: " + "Including VIP perks, /Sell bonus - 7.5%, More auction house slots, VIP+ only pet, Vote crate luck bonus 5%, /anvil, /trash, /feed, /grindstone";
    } else if (rankName === "MVP Rank") {
      cashAppInfo = "Pay $5.00 on Cash App: $IamWinix";
      perks = "MVP Perks: " + "Having VIP perks including more ALL VIP+'s perms, /Sell bonus - 10%, MVP only chat, Higher support time, Rank obtainable only items, /fw, /skulls, /head, /enderchest, Gets access to beta tests, MVP only pet, Vote crate luck bonus 7.5%";
    } else if (rankName === "MVP+ Rank") {
      cashAppInfo = "Pay $7.00 on Cash App: $IamWinix";
      perks = "MVP+ Perks: " + "ALL MVP's perms, /Sell bonus - 15%, Rank obtainable only items, MVP+ only pet, Vote crate luck bonus 10%, /msgtoggle, /paytoggle, /tpauto, /rest, /tptoggle";
    } else if (rankName === "MVP++ Rank") {
      cashAppInfo = "Pay $10.00 on Cash App: $IamWinix";
      perks = "MVP++ Perks: " + "All previous perks, /Sell bonus - 20%, Vote crate luck bonus 20%, MVP++ only pet, **COLOR AND FORMAT IN CHAT**, /smelt, /afk";
    }

    $(".popup").remove();

    var popupHtml = `
      <div class="popup">
        <h3>${rankName}</h3>
        <p>${payPalInfo}</p>
        <p>${perks}</p>
        <img src="${payPalLogo}" alt="PayPal Logo" style="width: 300px; height: 300px;">
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
