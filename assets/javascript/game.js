// ----- Global Variables ----- //

// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var oldbenkenobi = {
  name: "old Ben Kenobi",
  health: 220,
  baseAttack: 10,
  attack: 10
};

var kananjarrus = {
  name: "Kanan Jarrus",
  health: 140,
  baseAttack: 15,
  attack: 15
};

var ahsokatano = {
  name: "Ahsoka Tano",
  health: 75,
  baseAttack: 40,
  attack: 40
};

var Generalgreivous = {
  name: "General Greivous",
  health: 100,
  baseAttack: 30,
  attack: 30
};

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#old-ben-kenobi-character").children(".health").html(oldbenkenobi.health);
  $("#kanan-jarrus-character").children(".health").html(kannanjarrus.health);
  $("#ahsoka-tano-character").children(".health").html(ahsokatano.health);
  $("#general-grievous-character").children(".health").html(generalgrievous.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Determine which character the user has clicked
  $("#old-ben-kenobi-character").on("click", function () {
    console.log("old Ben Kenobi is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(oldbenkenobi);
      characterSelected = true;

      // Display the chosen character
      $("#old-ben-kenobi-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#old-ben-kenobi-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(oldbenkenobi);
        defenderSelected = true;

        // Add the character to the defender section
        $("#old-ben-kenobi").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#kanan-jarrus-character").on("click", function () {
    console.log("Kanan Jarrus is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(kananjarrus);
      characterSelected = true;

      // Display the chosen character
      $("#kanan-jarrus-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#kanan-jarrus-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(kananjarrus);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#kanan-jarrus-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#ahsoka-tano-character").on("click", function () {
    console.log("Ahsoka Tano is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(ahsokatano);
      characterSelected = true;

      // Display the chosen character
      $("#ahsoka-tano-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#ahsoka-tano-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(ahsokatano);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#ahsoka-tano-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#general-grievous-character").on("click", function () {
    console.log("The cowardly General Grievous is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(generalgrievous);
      characterSelected = true;

      // Display the chosen character
      $("#general-grievous-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#general-grievous-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(generalgrievous);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#general-grievous-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); // Main routine