var slideshow_message_max = 87;
var slideshow_messages = new Array(slideshow_message_max);
slideshow_messages[0] = "OMG did Locher really do this!?";
slideshow_messages[1] = "ASHAMED you weren't born as cool as me, huh?";
slideshow_messages[2] = "Who needs any countries besides Vietnam?!";
slideshow_messages[3] = "What admirable killing!";
slideshow_messages[4] = "What is this asian bullshit?";
slideshow_messages[5] = "Wednesday and Sunday are perfect days to get rid of your scruff.";
slideshow_messages[6] = "Way to go... EXTINCT, Martians!";
slideshow_messages[7] = "Ku ku ku ku!";
slideshow_messages[8] = "OR SO YOU THINK! Humanity is ever controlled by demons!";
slideshow_messages[9] = "Friggin' Earth! Think you're so cool and blue! You make me SICK!";
slideshow_messages[10] = "Bupporugyarupirugyappoppaaa!!";
slideshow_messages[11] = "I hope you don't message me at 3am because that's when I am SLEEPING.";
slideshow_messages[12] = "Damnit! Why am I so miserable?";
slideshow_messages[13] = "Operation Love and PEEEEEACE?!";
slideshow_messages[14] = "This is a typical fantasy RPG world of swords and magic.";
slideshow_messages[15] = "Mommy. Did you know there was a nuclear bomb in the garden?";
slideshow_messages[16] = "Wellity well! Let's go have us a WAR!";
slideshow_messages[17] = "These are... um... hm... ah, y-yes! They're DEATH PREDATORS! Maybe.";
slideshow_messages[18] = "EAT MEEE!";
slideshow_messages[19] = "You should've bought life insurance, too.";
slideshow_messages[20] = "Submachine guns are for girly girls. Men wield the SHOTGUN!";
slideshow_messages[21] = "DON'T friggin' pray!";
slideshow_messages[22] = "Once I sell you, I'll be filthy rich!";
slideshow_messages[23] = "HUMAN MEAT! I want MEAT MEAT MEAT MEAT MEAT!!!!!!!!!";
slideshow_messages[24] = "I'm a demon! And I ATE YOUR BROTHER!";
slideshow_messages[25] = "Man, I ain't possessed by no DEMON!";
slideshow_messages[26] = "Nobody remembers my birthday anyways...";
slideshow_messages[27] = "Bury me with my MONEY!";
slideshow_messages[28] = 'Skin successfully "undressed!"';
slideshow_messages[29] = "Hope you like the SEA OF BLOOD IN HELL!";
slideshow_messages[30] = "Good arfternoon.";
slideshow_messages[31] = "Hi, I'm God!";
slideshow_messages[32] = "It seems we must now DECIDEEEEE!";
slideshow_messages[33] = "To the FINAL BATTLEFIELD!";
slideshow_messages[34] = "Just what I WANTEEEEED!";
slideshow_messages[35] = "Hahhh...! Hahhh...! Hahhh...!";
slideshow_messages[36] = "Yes, I am smiling wryly...";
slideshow_messages[37] = "How 'bout THAT?!";
slideshow_messages[38] = "You can't run, FOOOOOOOOOOL!";
slideshow_messages[39] = "Never go out of the house without tissues!";
slideshow_messages[40] = "Whatever I am doing, I just can't outrun my sadness.";
slideshow_messages[41] = "ULTRA VULCANO SHOT!";
slideshow_messages[42] = "...IS THAT WHAT YOU THOUGHT I'D SAY?!";
slideshow_messages[43] = "Good day!";
slideshow_messages[44] = "So YOU'RE the demon?!";
slideshow_messages[45] = "I'm just an ordinary... like you'd find anywhere!";
slideshow_messages[46] = "Just bring it on!";
slideshow_messages[47] = "As long as you understand, it's fine!";
slideshow_messages[48] = "You're under arrest for charges of assault!";
slideshow_messages[49] = "I see... So THAT'S it!";
slideshow_messages[50] = "It's me... ME!";
slideshow_messages[51] = "Sell your liver! Sell your liver! Sell your FREAKIN' LIVEEEEER!";
slideshow_messages[52] = "Happy End...";
slideshow_messages[53] = "Bad End...";
slideshow_messages[54] = "Oh! It's Beautiful!";
slideshow_messages[55] = "However, please, take care. This place is a minefield.";
slideshow_messages[56] = "ISN'T it though?!";
slideshow_messages[57] = "BREAKING NEWS?!";
slideshow_messages[58] = "SMALL ASTEROID?!";
slideshow_messages[59] = "NOT happening!";
slideshow_messages[60] = "What the hell.";
slideshow_messages[61] = "30 years old virgins are regarded as wizards!";
slideshow_messages[62] = "'Blast it away with piss!";
slideshow_messages[63] = "PERISH, YOU SQUARES!!";
slideshow_messages[64] = "That... WAS A LIE!";
slideshow_messages[65] = "Don't run yourself HOARSE!";
slideshow_messages[66] = "Oh! What A Pretty Puppy!";
slideshow_messages[67] = "Ooogh... Why was there a car on the sidewalk...?";
slideshow_messages[68] = "You are... A TRUE HERO!";
slideshow_messages[69] = "Let's Roll!";
slideshow_messages[70] = "GO AHEAD! MAKE MY DAY!";
slideshow_messages[71] = "TAKE THAT YOU FIEND!";
slideshow_messages[72] = "I still have a left! And a right foot! And a left one of those!";
slideshow_messages[73] = "Meanwhile, elsewhere...";
slideshow_messages[74] = "The fate of the Earth... No, of AMERICA depends on you!";
slideshow_messages[75] = "Don't you know anything? The President has NEVER told a lie!";
slideshow_messages[76] = "SPACE WHITE HOUSE IS... GO!";
slideshow_messages[77] = "BEGOOOOOOOOOONE!";
slideshow_messages[78] = "Home Security took FE98CBD0A6324C2DA59 damage!";
slideshow_messages[79] = "Dude, light novels are the SHIEEEEET.";
slideshow_messages[80] = "I developed a tea that makes humans giant. Just for fun.";
slideshow_messages[81] = "I just want to hug pretty girls...";
slideshow_messages[82] = "That wasn't decolorant... That was NITRIC ACIIIIID!!!!!!!!!!";
slideshow_messages[83] = "You damn fool! Why in the world would you pick that option?!";
slideshow_messages[84] = "That's just from a random-ass post I made on the internet!";
slideshow_messages[85] = "Cloud computing means... Putting servers up in the clouds!";
slideshow_messages[86] = "My controls are as follows!";

var marqueeX, marquee, testArea, stringWidth, lastTime;

function marqueeInit() {
  marquee = $("#slideshow_child");
  marqueeX = marquee.width();
  testArea = $("#slideshow_proto");
  newslideshow_messages();
  lastTime = Date.now();
  setInterval("marqueeUpdate()", 15);
}

function newslideshow_messages() {
  var newString = slideshow_messages[Math.floor(Math.random() * slideshow_message_max)];
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
    newslideshow_messages();
  }

  marquee.css({ left: marqueeX });
}
