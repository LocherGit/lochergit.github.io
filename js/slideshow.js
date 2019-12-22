var kunikomax = 87;
var kuniko = new Array(kunikomax);
kuniko[0] = "Pfft, that's what they ALL say!";
kuniko[1] = "ASHAMED you weren't born American, huh?";
kuniko[2] = "Who needs any countries besides America?!";
kuniko[3] = "What admirable killing!";
kuniko[4] = "H is for Ecchi, but it's also for HELL!!";
kuniko[5] = "We rule, Martians drool! (laffo)";
kuniko[6] = "Way to go... EXTINCT, Martians!";
kuniko[7] = "Ku ku ku ku!";
kuniko[8] = "OR SO YOU THINK! Humanity is ever controlled by demons!";
kuniko[9] = "Friggin' Earth! Think you're so cool and blue! You make me SICK!";
kuniko[10] = "Bupporugyarupirugyappoppaaa!!";
kuniko[11] = "110-tuplets.";
kuniko[12] = "I... LOVE... ECCHI!";
kuniko[13] = "Operation Love and PEEEEEACE?!";
kuniko[14] = "This is a typical fantasy RPG world of swords and magic.";
kuniko[15] = "Mommy. Did you know there was a nuclear bomb in the garden?";
kuniko[16] = "Wellity well! Let's go have us a WAR!";
kuniko[17] = "These are... um... hm... ah, y-yes! They're DEATH PREDATORS! Maybe.";
kuniko[18] = "EAT MEEE!";
kuniko[19] = "You should've bought life insurance, too.";
kuniko[20] = "Submachine guns are for girly girls. Men wield the SHOTGUN!";
kuniko[21] = "DON'T friggin' pray!";
kuniko[22] = "Once I sell you, I'll be filthy rich!";
kuniko[23] = "HUMAN MEAT! I want MEAT MEAT MEAT MEAT MEAT!!!!!!!!!";
kuniko[24] = "I'm a demon! And I ATE YOUR BROTHER!";
kuniko[25] = "Man, I ain't possessed by no DEMON!";
kuniko[26] = "This is just how people sleep in Kawagoe!";
kuniko[27] = "HATE you!";
kuniko[28] = 'Skin successfully "undressed!"';
kuniko[29] = "Hope you like the SEA OF BLOOD IN HELL!";
kuniko[30] = "Good arfternoon.";
kuniko[31] = "Hi, I'm God!";
kuniko[32] = "It seems we must now DECIDEEEEE!";
kuniko[33] = "To the FINAL BATTLEFIELD!";
kuniko[34] = "Just what I WANTEEEEED!";
kuniko[35] = "Hahhh...! Hahhh...! Hahhh...!";
kuniko[36] = "Arise...! You meatbag!";
kuniko[37] = "How 'bout THAT?!";
kuniko[38] = "You can't run, FOOOOOOOOOOL!";
kuniko[39] = "And so Kawagoe was peaceful another day.";
kuniko[40] = "GIGA DEATH FLARE!";
kuniko[41] = "ULTRA VULCANO SHOT!";
kuniko[42] = "...IS THAT WHAT YOU THOUGHT I'D SAY?!";
kuniko[43] = "Good day!";
kuniko[44] = "So YOU'RE the demon?!";
kuniko[45] = "I'm just an ordinary... like you'd find anywhere!";
kuniko[46] = "Just bring it on!";
kuniko[47] = "As long as you understand, it's fine!";
kuniko[48] = "You're under arrest for charges of assault!";
kuniko[49] = "I see... So THAT'S it!";
kuniko[50] = "It's me... ME!";
kuniko[51] = "Sell your liver! Sell your liver! Sell your FREAKIN' LIVEEEEER!";
kuniko[52] = "Happy End...";
kuniko[53] = "Bad End...";
kuniko[54] = "Oh! It's Beautiful!";
kuniko[55] = "However, please, take care. This place is a minefield.";
kuniko[56] = "ISN'T it though?!";
kuniko[57] = "BREAKING NEWS?!";
kuniko[58] = "SMALL ASTEROID?!";
kuniko[59] = "NOT happening!";
kuniko[60] = "What the hell.";
kuniko[61] = "RUSSIAN BLUE FLASH!";
kuniko[62] = "'NGOEYYO SHOT!";
kuniko[63] = "PERISH, YOU SQUARES!!";
kuniko[64] = "That... WAS A LIE!";
kuniko[65] = "Don't run yourself HOARSE!";
kuniko[66] = "Oh! What A Pretty Puppy!";
kuniko[67] = "Ooogh... Why was there a car on the sidewalk...?";
kuniko[68] = "You are... A TRUE HERO!";
kuniko[69] = "Let's Roll!";
kuniko[70] = "GO AHEAD! MAKE MY DAY!";
kuniko[71] = "TAKE THAT YOU FIEND!";
kuniko[72] = "I still have a left! And a right foot! And a left one of those!";
kuniko[73] = "Meanwhile, elsewhere...";
kuniko[74] = "The fate of the Earth... No, of AMERICA depends on you!";
kuniko[75] = "Don't you know anything? The President has NEVER told a lie!";
kuniko[76] = "SPACE WHITE HOUSE IS... GO!";
kuniko[77] = "BEGOOOOOOOOOONE!";
kuniko[78] = "Home Security took FE98CBD0A6324C2DA59 damage!";
kuniko[79] = "NUCLEAR ROCKET PUNCH!";
kuniko[80] = "I developed a tea that makes humans giant. Just for fun.";
kuniko[81] = "Ultra... Giga Death... VULCANO SHOOOOOOOOOOT!";
kuniko[82] = "That wasn't decolorant... That was NITRIC ACIIIIID!!!!!!!!!!";
kuniko[83] = "You damn fool! Why in the world would you pick that option?!";
kuniko[84] = "That's just from a random-ass post I made on the internet!";
kuniko[85] = "Cloud computing means... Putting servers up in the clouds!";
kuniko[86] = "My controls are as follows!";

var marqueeX, marquee, testArea, stringWidth, lastTime;

function marqueeInit() {
  marquee = $("#slideshow_child");
  marqueeX = marquee.width();
  testArea = $("#slideshow_proto");
  newKuniko();
  lastTime = Date.now();
  setInterval("marqueeUpdate()", 15);
}

function newKuniko() {
  var newString = kuniko[Math.floor(Math.random() * kunikomax)];
  marquee.html(newString);
  testArea.html(newString);
  stringWidth = testArea.width();
}

function marqueeUpdate() {
  var delta = Date.now() - lastTime;
  lastTime = Date.now();
  marqueeX -= 0.12 * delta;

  if (marqueeX < -stringWidth - 10) {
    marqueeX = $("#slideshow_child").width();
    newKuniko();
  }

  marquee.css({ left: marqueeX });
}
