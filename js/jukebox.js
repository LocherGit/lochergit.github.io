/* Music Library */
let jukebox_entries_max = 12;
let jukebox_entries = new Array(jukebox_entries_max);
jukebox_entries[0] = {
  id: 0,
  name: "Downtown Psychedelic (by Fearofdark)",
  path: "/audio/[0]_locher_dp.mp3"
};
jukebox_entries[1] = {
  id: 1,
  name: "Godot (by TQ-Jam)",
  path: "/audio/[1]_locher_g.mp3"
};
jukebox_entries[2] = {
  id: 2,
  name: "Dancing 0n the m%n (by Fearofdark) - Part 1/2",
  path: "/audio/[2]_locher_d0tm_p1.mp3"
};
jukebox_entries[3] = {
  id: 3,
  name: "Dancing 0n the m%n (by Fearofdark) - Part 2/2",
  path: "/audio/[3]_locher_d0tm_p2.mp3"
};
jukebox_entries[4] = {
  id: 4,
  name: "My Spectrum's On Fire! (by Fearofdark)",
  path: "/audio/[4]_locher_msof.mp3"
};
jukebox_entries[5] = {
  id: 5,
  name: "Snow Burn (by Fearofdark)",
  path: "/audio/[5]_locher_sb.mp3"
};
jukebox_entries[6] = {
  id: 6,
  name: "Crisis (by Ryu Umemoto)",
  path: "/audio/[6]_locher_c.mp3"
};
jukebox_entries[7] = {
  id: 7,
  name: "Fate (Law of Causality) (by Ryu Umemoto)",
  path: "/audio/[7]_locher_f.mp3"
};
jukebox_entries[8] = {
  id: 8,
  name: "The Last Battle (by Minako Adachi)",
  path: "/audio/[8]_locher_tlb.mp3"
};
jukebox_entries[9] = {
  id: 9,
  name: "FANKY TANG (by Ryu Umemoto)",
  path: "/audio/[9]_locher_ft.mp3"
};
jukebox_entries[10] = {
  id: 10,
  name: "Forest Theme (by ???)",
  path: "/audio/[10]_locher_ftheme.mp3"
};
jukebox_entries[11] = {
  id: 11,
  name: "Title Screen (by Toshinori Orikura)",
  path: "/audio/[11]_locher_tt.mp3"
};

let sorted_entries = jukebox_entries.slice(0);
sorted_entries.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});

/* Music Functions */
$(document).ready(function() {
  document.getElementById("track_title").style.display = "none";
  document.getElementById("jukebox_player").style.display = "none";
});

function getRandomTrack() {
  let random_track = jukebox_entries[randomize($("#jukebox_source").attr("track-ID"))];
  setTrack(random_track);
}

function randomize(id = -1) {
  let num = Math.floor(Math.random() * jukebox_entries_max);
  return num == id ? randomize(id) : num;
}

function getSpecificTrack(id) {
  let specific_track = jukebox_entries[id];
  setTrack(specific_track);
}

function setTrack(track) {
  $("#track_title").text(track.name);
  $("#jukebox_source").attr("src", track.path);
  $("#jukebox_source").attr("track-ID", track.id);
  $("#jukebox_player")[0].load();
  document.getElementById("track_title").style.display = "block";
  document.getElementById("jukebox_player").style.display = "inline";
}

function getCatalogue(lang) {
  let catalogue = document.getElementById("jukebox_catalogue");
  let jukebox_list = document.getElementsByClassName("jukebox_list")[0];
  let html_list = "";
  if (jukebox_list.classList.contains("list_open")) {
    jukebox_list.classList.remove("list_open");
    jukebox_list.innerHTML = lang == "en" ? "Show Music Catalogue" : "Musik Katalog anzeigen";
  } else {
    jukebox_list.classList.add("list_open");
    jukebox_list.innerHTML = lang == "en" ? "Hide Music Catalogue" : "Musik Katalog verbergen";
    html_list = "<ul>";
    sorted_entries.forEach(function(track) {
      html_list += '<li><a href="#loadTrack_' + track.id + '" onclick="getSpecificTrack(' + track.id + ')">' + track.name + "</a></li>";
    });
    html_list += "</ul>";
    html_list += lang == "en" ? "<p>Total: " + jukebox_entries_max + " Tracks</p>" : "<p>Insgesamt: " + jukebox_entries_max + " Musiktitel</p>";
  }

  catalogue.innerHTML = html_list;
}
